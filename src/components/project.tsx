"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Projects = () => {
    const projects = [
        {
        title : "Project One",
        src: "/autogram.png",
        href : "#",
        description: "A social media automation tool that helps users manage their accounts efficiently."
    },
       {
        title : "Project two",
        src: "/preptalkai.png",
        href : "#",
        description: "An AI-driven platform that provides personalized learning experiences."
    },
       {
        title : "Project three",
        src: "/wanderlust.png",
        href : "#",
        description: "A travel planning app that helps users discover and book their next adventure."
    },
    {
        title : "Project four",
        src: "/scriptly.png",
        href : "#",
        description: "A content creation tool that simplifies the writing process for bloggers and marketers."
    },
]
  return (
    <div className='py-10'>
        <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
        I build functional, scalable solutions that are ready for the future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 ">
      {projects.map((project, idx) =>( 
        <motion.div
        initial={{opacity: 0, filter: "blur(10px)", y:10}}
        whileInView={{opacity: 1, filter: "blur(0px)", y:0}}
        transition={{
            duration: 0.3,
            delay : idx * 0.1,
            ease: "easeInOut"
        }}
        key={project.title}
        className='group relative mb-4'>
        <Link href={project.href}>
        <Image src={project.src} alt={project.title} width={300} height={300} className="h-72 w-full rounded-xl object-cover group-hover:scale-[1.02] group-hover:blur-[1px] transition duration-200"/>  
        <h2 className='z-20 mt-2 text-neutral-500 font-medium tracking-tight dark:text-neutral-400'>{project.title}</h2>
        <p className='text-sm max-w-xs mt-2 text-neutral-500 dark:text-neutral-400'>{project.description}</p>
        </Link>
      </motion.div>))}
      </div>
    </div>
  )
}

export default Projects