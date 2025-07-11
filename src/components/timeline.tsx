"use client"
import { motion ,  useInView} from 'framer-motion'
import React, { useRef } from 'react'
import { IconCircleCheckFilled } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

type Data = {
    title : string,
    content : {
        title : string 
        description? : string | React.ReactNode
    }[]
}
const Timeline = () => {
    const ref= useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {once : true, amount: 0.6})
    const data : Data[] = [
        {
            title : "2025",
            content : [
                {
                    title : "Lorem Ipsum",
                    description : "Lorem Ipsum"
                }
            ]
        },
        {
            title : "2024",
            content : [
                {
                    title : "Lorem Ipsum",
                    description : "Lorem Ipsum"
                }
            ]
        },
        {
            title : "2023",
            content : [
                {
                    title : "Lorem Ipsum",
                    description : "Lorem Ipsum"
                }
            ]
        },
        {
            title : "2022",
            content : [
                {
                    title : "Lorem Ipsum",
                    description : "Lorem Ipsum"
                }
            ]
        },
        {
            title : "2021",
            content : [
                {
                    title : "Lorem Ipsum",
                    description : "Lorem Ipsum"
                }
            ]
        },
        
    ]
  return (
    <div ref={ref} className='py-10'>
        {data.map((year, index)=> (
            <div key={year.title} className='mb-4'> 
                <motion.h2
                animate={{
                    filter : isInView ? 'blur(0px)' : 'blur(10px)',
                    opacity : isInView ? 1 : 0
                }} 
                transition={{
                    duration : 0.3,
                    ease : 'easeInOut',
                    delay : 0.1 * index
                }}
                className='font-bold text-black'>{year.title}</motion.h2>
                <div className="flex flex-col gap-4">
                {year.content.map((item, idx)=> (
                    <div key={item.title} className='pl-4 '> 
                    <Step isInView={isInView} idx={idx}>
                        <motion.h3 
                        animate={{
                            opacity : isInView ? 1 : 0,
                            y : isInView ? 0 : -10
                        }}
                        transition={{
                            duration : 0.3,
                            ease : 'easeInOut',
                            delay : 0.2 * idx
                        }}
                        className='text-neutral-600'
                        >{item.title}</motion.h3>
                        </Step>
                        {item.description && <motion.p animate = {{
       opacity :  isInView ? 1 : 0,
        y : isInView ? 0 : -10
    }}
    transition={{
        duration : 0.3,
        ease : "easeInOut",
        delay : 0.3 * idx
    }} className='text-neutral-400 text-sm pt-1 pl-4'>{item.description}</motion.p>}
                    </div>
                ))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Timeline

const Step = ({className, children, isInView, idx} : {className? : string, children : React.ReactNode, isInView : boolean, idx : number})=> {
    return <motion.div
    animate = {{
       opacity :  isInView ? 1 : 0,
        y : isInView ? 0 : -10
    }}
    transition={{
        duration : 0.3,
        ease : "easeInOut",
        delay : 0.2 * idx
    }}
     className={cn('flex items-start gap-2')}>
        <IconCircleCheckFilled className='h-4 w-4 mt-1 text-neutral-500 '/>
        {children}
    </motion.div>

}