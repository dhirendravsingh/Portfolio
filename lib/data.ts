import React from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import scriptlyImg from "@/public/scriptly.png"
import checkmateImg from "@/public/checkmate.png"
import autogram from "@/public/autogram.png"
import paydart from "@/public/paydart.png"
import smtp from "@/public/smtp-mail-server.png"
import googleDoc from "@/public/google-doc.png"
import task_management from "@/public/task-management.png"
import preptalkai from "@/public/preptalkai.png"
import { CgWorkAlt } from "react-icons/cg";

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
    title: "Full Stack Developer Intern",
    location: "Noida, India",
    company : "SkyFunnel AI Pvt. Ltd.",
    description:
      "Working as a Full-Stack Developer Intern at a startup, enhancing platform performance and stability through tRPC APIs, Prisma/PostgreSQL optimization, Redis caching, and critical bug fixes.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2025 - June 2025",
  },
   {
    title: "Website Developer Intern",
    location: "Remote Work",
    company : "Ekohum Foundation",
    description:
    "Revamped the Ekohum Foundation’s website using WordPress, implementing a new design that improved navigation and accessibility, leading to a 40% increase in user engagement.",
    icon: React.createElement(HiOutlineComputerDesktop),
    date: "April 2024 - October 2024",
  },
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
    Link : null,
    gitHub : "https://github.com/dhirendravsingh/SAAS-Instagram-DM-Automation",
    description:
      "A SaaS platform for automating Instagram DMs and comments to enhance engagement and streamline creator interactions.",
    tags: ["Next.JS", "PostgreSQL", "Prisma", "Tailwind", "Relume", "Clerk"],
    imageUrl: autogram,
  },
  {
    title: "Google Docs Clone",
    Link : "https://google-docs--clone.vercel.app/",
    gitHub : "https://github.com/dhirendravsingh/google-docs-clone",
    description:
      "A real-time collaborative google docs clone for simultaneous multi-user editing.",
    tags: ["TypeScript", "Next.js", "React.js", "ShadCN", "Liveblocks", "Clerk"],
    imageUrl: googleDoc,
  },
  {
    title: "PayDart",
    Link : null,
    gitHub : "https://github.com/dhirendravsingh/PayDart",
    description:
      "A Payment Wallet, offering secure transactions and seamless user experience.",
    tags: ["Next.JS", "Node.JS", "Postgresql", "Turborepo", "NextAuth", "AWS", "CI/CD" ],
    imageUrl: paydart,
  },
  {
    title: "PrepTalk AI",
    Link : "https://preptalk--ai.vercel.app/",
    gitHub : "https://github.com/dhirendravsingh/AI-voice-mock-Interview-Platform",
    description:
      "A real-time AI based voice mock interview platform that provides instant feedback and analysis.",
    tags: ["TypeScript", "Next.js", "Gemini", "React.js", "ShadCN", "Vapi"],
    imageUrl: preptalkai,
  },
  {
    title: "Scriptly",
    Link : "https://scriptly-blond.vercel.app/",
    gitHub : null,
    description:
      "A full-stack blogging platform, offering seamless content creation and management.",
    tags: ["React.JS", "Hono.JS", "PostgreSQL", "Prisma", "Typescript", "Tailwind"],
    imageUrl: scriptlyImg,
  },
  {
    title: "SMTP Mail Server",
    Link : null,
    gitHub : "https://github.com/dhirendravsingh/smtp-mail-server",

    description:
      "A lightweight SMTP mail server enabling seamless email communication with real-time validation and delivery tracking.",
    tags: ["Node.js"],
    imageUrl: smtp,
  },
  {
    title: "CheckMate",
    Link : null,
    gitHub : "https://github.com/dhirendravsingh/CheckMate",

    description:
      "Connect and play chess in real-time with opponents on a seamless, interactive platform.",
    tags: ["React.JS", "WebSocket", "Chess.JS", "Typescript", "Tailwind"],
    imageUrl: checkmateImg,
  },
 
  {
    title: "Task Management App",
    Link : "https://task-management-pied-iota.vercel.app/",
    gitHub : null,


    description:
      "A task management app that allows users to create, assign, and track tasks.",
    tags: ["Next.JS", "MongoDB", "Prisma", "Tailwind"],
    imageUrl: task_management,
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
