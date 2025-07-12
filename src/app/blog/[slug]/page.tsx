import React from 'react'
import { Metadata } from 'next';
import Container from '@/components/container';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {promises as fs} from 'fs'
import path from 'path';
import { getBlogFrontMatterBySlug , getSingleBlog} from '@/utils/mdx';
import { redirect } from 'next/navigation';


export async function generateMetadata({params} : {params : {slug : string}}) {
  const frontmatter = await getBlogFrontMatterBySlug(params.slug);
  if (!frontmatter) { 
    return {
      title: "Blog not found",
      description: "The blog you are looking for does not exist."
    };
  }
  return {
    title: frontmatter?.title + " " + "-" + " " + "Dhirendra Vikram Singh",
    description: frontmatter?.description || "A blog post by Dhirendra Vikram Singh"
   
  }
}

export default async function SingleBlogPage({params} : {
  params : {
    slug : string
  }
}) {
    const slug = params.slug;
    const blog= await getSingleBlog(slug);

    if(!blog) {
      redirect("/blog")
    }

    
  const {content, frontmatter} = blog;
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <img src={frontmatter?.image} alt={frontmatter?.title} className='max-h-96 w-full border border-neutral-200 object-cover shadow-xl rounded-2xl max-w-2xl mx-auto mb-20' />
        <div className='prose mx-auto'>
        {content}
        </div>
      </Container>
    </div>
  );
}




