# Emerald Academy

Learn everything about the Flow blockchain.

## Add Your Own Course

Emerald Academy is an open source platform, meaning you can add your own content. More specifically, you can upload your own course.

**Short Description**

Add your own course folder to <a href="https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses">this folder</a> and follow the format of the other courses there to add your own. Make a Pull Request with the new folder. 

**Detailed Description**

1. Fork this repo.
2. Add a folder to <a href="https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses">this folder</a>. The name of the folder must be unique.
3. Inside the folder you create, you must add at least one language folder to contain your content. `en` represents English, `es` represents Spanish, etc. Check out <a href="https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses/beginner-cadence">this folder</a> for a good example.
4. Inside the language folder, add a bunch of chapter folders and an `overview.ts` file as seen <a href="https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses/beginner-cadence/en">here</a>.
5. To make your `overview.ts` file, follow the format as seen <a href="https://github.com/emerald-dao/emerald-academy-v2/blob/main/src/lib/content/courses/beginner-cadence/en/overview.ts">here</a>.
6. Inside each chapter folder, add a bunch of lesson `.md` files as seen <a href="https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/courses/beginner-cadence/en/chapter1">here</a>. Make sure to also include an `overview.ts` file for each chapter as seen <a href="https://github.com/emerald-dao/emerald-academy-v2/blob/main/src/lib/content/courses/beginner-cadence/en/chapter1/overview.ts">here</a>.
7. Make a PR to the main repo and we will merge it in.

## Add Your Own Blog

Add your blog to <a href="https://github.com/emerald-dao/emerald-academy-v2/blob/main/src/lib/content/blogs.ts">this array</a> and make a Pull Request.