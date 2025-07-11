import React from 'react'
import { Metadata } from 'next';
import Container from '@/components/container';

export const metadata: Metadata = {
  title: "All blogs - Dhirendra Vikram Singh",
  description: "All my general wisdom and thoughts",
};

export default function Blogspage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">All blogs</h1>
      <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
        I'm a full-stack developer with experience in DevOps tools, currently learning Web3 to build more connected and resilient applications.
      </p>
     
      </Container>
    </div>
  );
}




