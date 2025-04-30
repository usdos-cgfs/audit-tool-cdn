import { pipeline } from "@huggingface/transformers";

/**
 * Accept a sentence and an array of options, find the closest matching option using transformers.js
 * and the 'nomic-ai/nomic-embed-text-v1.5' model.
 *
 * @param {*} sentence
 * @param {*} options
 */
export async function SentenceSimilarity(sentence, options) {
  const embedder = await pipeline("feature-extraction");
  // const embedder = await pipeline("feature-extraction", "nomic-ai/nomic-embed-text-v1.5");

  const sentenceEmbedding = await embedder(sentence);
  const optionEmbeddings = await Promise.all(
    options.map((option) => embedder(option))
  );

  let maxSimilarity = -Infinity;
  let bestOption = null;

  for (let i = 0; i < optionEmbeddings.length; i++) {
    const similarity = cosineSimilarity(
      sentenceEmbedding[0],
      optionEmbeddings[i][0]
    );
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      bestOption = options[i];
    }
  }

  return bestOption;
}
