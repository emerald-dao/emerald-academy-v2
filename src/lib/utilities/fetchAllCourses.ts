
 //import one course, working correct.

// export const fetchOneCourseOverview = async () => {
//     const postFile = import('$lib/content/courses/basic-dapp/courseOverview.js')
    
//     return postFile
    
    
//   }

//import many courses.

 export const fetchCoursesOverviews = async () => {
     const coursesFiles = import.meta.glob('/src/lib/content/courses/**/*.js')
     console.log(coursesFiles);
     

      const iterableCourseFiles = Object.entries(coursesFiles)

      const allCoursesOverviews = await Promise.all(
                iterableCourseFiles.map(async ([path, resolver]) => {
                const  {courseOverview}  = await resolver()
                
          
                return {
                  body: courseOverview,
                  
                }
              })
            )  
     
     return allCoursesOverviews;
    
 }
// //     return postFile
    
    
// //   }


// export const fetchAllCoursesOverviews = async () => {
//     const allPostFiles = import.meta.glob('/src/lib/content/courses/*.ts')
//     const iterableCourseFiles = Object.entries(allPostFiles)
    
//     const allPosts = await Promise.all(
//         iterableCourseFiles.map(async ([path, resolver]) => {
//         const  {metadata}  = await resolver()
//          const postPath = path.slice(8, -3)
  
//         return {
//           meta: metadata,
//            path: postPath,
//         }
//       })
//     ) 
  
//     return allPosts
//   }

