// export const GET = () => {
//     return new Response('Welcome to my API')
//   }

import { fetchCoursesOverviews } from '$lib/utilities/fetchAllCourses'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allCourses = await fetchCoursesOverviews()
  

  return json(allCourses)
}  