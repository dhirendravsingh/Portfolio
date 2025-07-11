import React from 'react'
import { Metadata } from 'next';
import Container from '@/components/container';
import { getAllBlogs } from '@/utils/mdx';
import {Link} from 'next-view-transitions';

export const metadata: Metadata = {
  title: "All blogs - Dhirendra Vikram Singh",
  description: "All my general wisdom and thoughts",
};


export default async function Blogspage() {
  const allBlogs = await getAllBlogs();
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + '...' : str
  }
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">All blogs</h1>
      <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
        I'm a full-stack developer with experience in DevOps tools, currently learning Web3 to build more connected and resilient applications.
      </p>
      <div className='flex flex-col gap-4 py-10'>
        {allBlogs.map((blog, idx)=> <Link href={`/blog/${blog.slug}`} key={blog.title}>
        <div className='flex items-center justify-between'>
          <h2 className='text-primary text-base font-bold tracking-tight '>
            {blog.title}
          </h2>
          <p className='text-secondary text-sm md:text-sm'>{new Date(blog.date || "").toLocaleDateString('en-us', {weekday : "long", year : "numeric", month : "short", day : "numeric"})}</p>
          </div>
          <p className='text-secondary max-w-lg pt-2 text-sm md:text-sm'>{truncate(blog.description || "", 150)}</p>
        </Link>)}
      </div>
      </Container>
    </div>
  );
}




