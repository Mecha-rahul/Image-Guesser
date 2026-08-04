
export function calculateScore(distanceKm) {
  const maxScore = 5000;
  const scaleFactor = 2000; // controls how fast score decays — tweak to taste

  const score = maxScore * Math.exp(-distanceKm / scaleFactor);
  return Math.round(score);
}