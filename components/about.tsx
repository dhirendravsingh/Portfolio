"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hi, I'm Dhirendra Vikram Singh, a passionate{" "}
        <span className="font-bold">full-stack developer</span>,  with a solid grounding in both frontend and backend technologies. With expertise in frameworks like{" "}
        <span className="font-medium">React.js, Next.js, and Node.js</span>.{" "}
        <span className="italic"> I create dynamic, efficient, and scalable web applications. </span> 
         My journey is fueled by a deep interest in development, alongside a knack for{" "}
        <span className="font-bold">DevOps</span> where I leverage tools like <span className="font-medium">Docker</span> and <span className="font-medium">Kubernetes</span> to enhance deployment efficiency and system reliability.
      </p>

      <p >
        <span className="italic">When I'm not coding</span>, I immerse myself in photography, particularly{" "}
        <span className="font-medium">street photography</span>, capturing the raw and candid moments of everyday life. This creative outlet allows me to explore visual storytelling and express my perspective through the lens.
      </p>
    </motion.section>
  );
}
