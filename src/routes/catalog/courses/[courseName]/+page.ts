

export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/courses/daysMetadata`)
    const courses = await response.json()
   
    
     const thisCourse = courses.filter(course => course.path.includes(params.courseName))
    console.log(thisCourse);
  
    return {
        thisCourse
    }
  }