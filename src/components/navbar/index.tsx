"use client"

import React, { useState } from 'react'
import Container from '../container'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
const Navbar = () => {
    const navItems = [
        {
            title : 'About',
            href : "/about"
        },
        {
            title : 'Projects',
            href : "/projects"
        },
        {
            title : 'Contact',
            href : "/contact"
        },
        {
            title : 'Blog',
            href : "/blog"
        },
    ]

    const [hovered, setHovered] = useState<number | null>(null)
    const {scrollY} = useScroll()

    const [scrolled, setScrolled] = useState<boolean>(false)

    useMotionValueEvent(scrollY, "change", (latest)=>{
        if(latest > 20){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })
  return (
    <Container>
    <motion.nav 
        animate={{
            boxShadow : scrolled ? "var(--shadow-aceternity)" : "none",
            width : scrolled ? "50%" : "100%",
            y : scrolled ? 10 : 0
        }}
        transition={{
            duration : 0.3,
            ease: "linear"
        }}
        style={{boxShadow : scrolled ? "var(--shadow-aceternity)" : "none"}} className='fixed inset-x-0 top-0 z-50 rounded-full left-0 max-w-4xl mx-auto flex items-center bg-white justify-between  dark:bg-neutral-900 py-2 px-3'>
            <Image src="/dhiru2.jpg" height="100" width="100" alt='Dhirendra Avatar' className='h-10 w-10 rounded-full'/>
            <div className='flex items-center'>
                {navItems.map((item, idx)=> (
                    <Link className='text-sm relative px-2 py-1 ' href={item.href} key={idx} onMouseEnter={()=> setHovered(idx)} onMouseLeave={()=> setHovered(null)}>
                        {hovered === idx && (
                            <motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800'/>
                        )}
                        <span className='relative z-10'>{item.title}</span>
                    </Link>
                ))}
            </div>
    </motion.nav>
    </Container>
  )
}

export default Navbar