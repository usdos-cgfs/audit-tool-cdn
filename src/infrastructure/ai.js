import { pipeline } from "@huggingface/transformers";
// Load the sentence embedding pipeline once
let embedder;
async function loadModel() {
  if (!embedder) {
    embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
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
  await loadModel();

  const sentences = [inputSentence, ...targets.map((t) => t.sentence)];

  // Encode all sentences at once for efficiency
  const embeddings = await embedder(sentences, {
    pooling: "mean",
    normalize: true,
  });

  const inputEmbedding = embeddings[0];
  const similarities = targets.map((target, index) => {
    const score = cosineSimilarity(
      inputEmbedding.data,
      embeddings[index + 1]?.data
    );
    return { score, item: target };
  });

  // Sort and return top `count`
  return similarities.sort((a, b) => b.score - a.score).slice(0, count);
}
