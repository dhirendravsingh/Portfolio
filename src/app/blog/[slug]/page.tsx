import React from 'react'
import { Metadata } from 'next';
import Container from '@/components/container';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {promises as fs} from 'fs'
import path from 'path';
import { getSingleBlog } from '@/utils/mdx';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "All blogs - Dhirendra Vikram Singh",
  description: "All my general wisdom and thoughts",
};

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
        <div className='prose mx-auto'>
        {content}
        </div>
      </Container>
    </div>
  );
}




