export function getWeeksFromCourse (courseDays:CourseDay[]) {
    let arrayLength = courseDays.length;
    let amountOfWeeks = courseDays[arrayLength - 1].week;
    return amountOfWeeks;
};

interface CourseDay {
    meta: any; // TODO: Tipear a este
    path: string;
    week: number;
}