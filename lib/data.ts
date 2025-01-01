import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import scriptlyImg from "@/public/scriptly.png"
import checkmateImg from "@/public/checkmate.png"
import autogram from "@/public/autogram.png"
import wanderlust from "@/public/wanderlust.png"
import paydart from "@/public/paydart.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Website Builder",
    location: "Remote Work",
    company : "Ekohum Foundation",
    description:
    "Revamped the Ekohum Foundation’s website using WordPress, implementing a new design that improved navigation and accessibility, leading to a 40% increase in user engagement.",
    icon: React.createElement(HiOutlineComputerDesktop),
    date: "2024 - Present",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Autogram",
    Link : "https://github.com/dhirendravsingh/SAAS-Instagram-DM-Automation",

    description:
      "A SaaS platform for automating Instagram DMs and comments to enhance engagement and streamline creator interactions.",
    tags: ["Next.JS", "PostgreSQL", "Prisma", "Tailwind", "Relume", "Clerk"],
    imageUrl: autogram,
  },
  {
    title: "Scriptly",
    Link : "https://scriptly-blond.vercel.app/",
    description:
      "A full-stack blogging platform, offering seamless content creation and management.",
    tags: ["React.JS", "Hono.JS", "PostgreSQL", "Prisma", "Typescript", "Tailwind"],
    imageUrl: scriptlyImg,
  },
  {
    title: "PayDart",
    Link : "https://github.com/dhirendravsingh/PayDart",
    description:
      "A Payment Wallet, offering secure transactions and seamless user experience.",
    tags: ["Next.JS", "Node.JS", "Postgresql", "Turborepo", "NextAuth", "AWS", "CI/CD" ],
    imageUrl: paydart,
  },
  {
    title: "CheckMate",
    Link : "https://github.com/dhirendravsingh/CheckMate",

    description:
      "Connect and play chess in real-time with opponents on a seamless, interactive platform.",
    tags: ["React.JS", "WebSocket", "Chess.JS", "Typescript", "Tailwind"],
    imageUrl: checkmateImg,
  },
 
  {
    title: "Wanderlust",
    Link : "https://wanderlust-hub.vercel.app/listings",

    description:
      "A global hostel booking platform with user authentication, listings, and robust data management.",
    tags: ["Node.JS", "EJS", "MongoDB",  "Tailwind"],
    imageUrl: wanderlust,
  },
] as const;

export const skillsData = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Redux toolkit",
  "React-router-DOM",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "Socket.io",
  "Docker",
  "Kubernetes",
  "Kafka",
  "AWS",
  "CI/CD",
  "SQL",
  "MongoDB",
 "PostgreSQL",
 "Prisma",
 "Turborepo",
 "HTML",
 "CSS",
  "Git",
  "Tailwind",
] as const;
