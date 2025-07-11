import {promises as fs }from "fs"
import path from "path"
import { compileMDX } from 'next-mdx-remote/rsc';

type FrontMatter = {
    title : string,
    description? : string,
    date? : string,
    image? : string
}

export const getSingleBlog = async (slug : string) => {
    try {
        const singleBlog = await fs.readFile(
        path.join(process.cwd(), "src/data", `${slug}.mdx`), "utf-8"
    )
    if(!singleBlog) { 
        null
    }
      const {content, frontmatter} = await compileMDX<FrontMatter>({
        source : singleBlog,
        options : {parseFrontmatter: true}
    })
    return {content, frontmatter};
    } catch (error) {
        console.error(`Error reading blog from slug ${slug}`, error);
        return null
    }
}

export const getAllBlogs = async () => {
    try {
        const files = await fs.readdir(path.join(process.cwd(), "src/data"));
        const allblogs = await Promise.all(
            files.map(async (file) => {
                const slug = file.replace(/\.mdx$/, "");
                const frontmatter = await getBlogFrontMatterBySlug(slug);
                return {
                    slug,
                    ...frontmatter
                };
            })
        );
        return allblogs
    } catch (error) {
        console.error("Error reading blogs", error);
        return [];
    }
}

export const getBlogFrontMatterBySlug = async (slug : string)=> {
    const singleBlog = await fs.readFile(
        path.join(process.cwd(), "src/data" , `${slug}.mdx`), "utf-8"
     )
     if(!singleBlog){
        return null
     }
     const {frontmatter} = await compileMDX<FrontMatter>({ 
        source : singleBlog,
        options : {parseFrontmatter: true}
     })

     return frontmatter
}