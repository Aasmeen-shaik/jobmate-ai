export function calculateMockMatchScore(
  resumeText: string,
  jobDescription: string
): number {
  const resumeWords = resumeText.toLowerCase().split(/\W+/);
  const jdWords = jobDescription.toLowerCase().split(/\W+/);

  const importantWords = jdWords.filter((word) => word.length > 3);
  const matchedWords = importantWords.filter((word) =>
    resumeWords.includes(word)
  );

  if (importantWords.length === 0) {
    return 0;
  }

  const score = Math.round(
    (matchedWords.length / importantWords.length) * 100
  );

  return Math.min(score, 100);
}