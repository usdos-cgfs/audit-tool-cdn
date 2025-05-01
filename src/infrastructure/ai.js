import { pipeline } from "@huggingface/transformers";
import { addTask, finishTask, TaskDef } from "../services/index.js";

const sentenceSimilarityTaskDef = new TaskDef("Singling the multi-modal", true);
const loadModelTaskDef = new TaskDef("Discerning the ultra", true);
const embeddingSentencesTaskDef = new TaskDef("Consulting the haruspex", true);
const cosineSearchTaskDef = new TaskDef("Making up numbers", true);

// Load the sentence embedding pipeline once
let embedder;
async function loadModel() {
  const task = addTask(loadModelTaskDef);
  if (!embedder) {
    embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
  finishTask(task);
}

// Compute cosine similarity between two vectors
function cosineSimilarity(vec1, vec2) {
  const dot = vec1.reduce((sum, v, i) => sum + v * vec2[i], 0);
  const mag1 = Math.sqrt(vec1.reduce((sum, v) => sum + v * v, 0));
  const mag2 = Math.sqrt(vec2.reduce((sum, v) => sum + v * v, 0));
  return dot / (mag1 * mag2);
}

// Main similarity function
export async function sentenceSimilarity(inputSentence, targets, count = 5) {
  const sentenceTask = addTask(sentenceSimilarityTaskDef);
  await loadModel();

  const sentences = [inputSentence, ...targets.map((t) => t.sentence)];

  const embeddingTask = addTask(embeddingSentencesTaskDef);
  // Encode all sentences at once for efficiency
  const embeddings = await embedder(sentences, {
    pooling: "mean",
    normalize: true,
  });
  finishTask(embeddingTask);

  const cosineTask = addTask(cosineSearchTaskDef);
  const inputEmbedding = embeddings[0];
  const similarities = targets.map((target, index) => {
    const score = cosineSimilarity(
      inputEmbedding.data,
      embeddings[index + 1]?.data
    );
    return { score, item: target };
  });
  finishTask(cosineTask);

  finishTask(sentenceTask);
  // Sort and return top `count`
  return similarities.sort((a, b) => b.score - a.score).slice(0, count);
}
