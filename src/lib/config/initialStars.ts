const initialStars: { [key: string]: number } = {
	'beginner-cadence': 137,
	'beginner-dapp': 27,
	'intermediate-cadence': 15,
	'learn-cadence-beginner-1.0': 137,
	'learn-cadence-beginner': 137
};

export function getInitialStars(courseId: string): number {
	return initialStars[courseId] || 0;
}
