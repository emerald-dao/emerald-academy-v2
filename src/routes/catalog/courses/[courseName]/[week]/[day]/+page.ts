export async function load({ params }){
    try{
    const courses = await import(`../../../../../../lib/content/courses/${params.courseName}/${params.chapter}/${params.day}.md`)
    const { title, day} = courses.metadata
    const content = courses.default
  
    return {
      content,
      title,
      day,
      
    }
    }catch(e){
        throw error(404, `You missed it`);
    }
    
  }

  