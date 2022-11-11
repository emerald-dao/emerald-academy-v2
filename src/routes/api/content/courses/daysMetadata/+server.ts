import { fetchAllDaysMetadata } from '$lib/utilities/fetchAllDaysMetadata'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allMetadata = await fetchAllDaysMetadata()
  //  console.log(json(allCourses));
  

  return json(allMetadata)
}  