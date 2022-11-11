

export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/courses/daysMetadata`)
    const courses = await response.json()
     const thisCourse = courses.filter(course => course.path.includes(params.courseName))
    // console.log(thisCourse);
    // const response2 = await fetch(`/api/courses`)
    // const courses2 = await response2.json()
  
    return {
        thisCourse,
        // courses2
    }
  }