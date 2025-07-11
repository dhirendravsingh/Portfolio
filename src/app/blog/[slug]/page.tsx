import React from 'react'
import { Metadata } from 'next';
import Container from '@/components/container';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {promises as fs} from 'fs'
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export const metadata: Metadata = {
  title: "All blogs - Dhirendra Vikram Singh",
  description: "All my general wisdom and thoughts",
};

export default async function SingleBlogPage() {

    const singleBlog = await fs.readFile(path.join(process.cwd(), 'src/data', 'tail.mdx'), 'utf-8');
    const {content, frontmatter} = await compileMDX<{title: string}>({
        source : singleBlog,
        options : {parseFrontmatter: true}
    })
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <div className='prose'>
        {content}
        </div>
      </Container>
    </div>
  );
}




