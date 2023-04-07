const initialStars: { [key: number]: number } = {
  0: 137,
  1: 27,
  2: 15
}

export function getInitialStars(courseId: number): number {
  return initialStars[courseId] || 0;
}