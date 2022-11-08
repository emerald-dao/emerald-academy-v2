import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    const response = await fetch(`/api/courses`)
    const courses = await response.json()
  
    return {
      courses
    }
  }

 
