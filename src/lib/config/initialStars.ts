const initialStars: { [key: string]: number } = {
  'beginner-cadence': 137,
  'beginner-dapp': 27,
  'intermediate-cadence': 15
}

export function getInitialStars(courseId: string): number {
  return initialStars[courseId] || 0;
}