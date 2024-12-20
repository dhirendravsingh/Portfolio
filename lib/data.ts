import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import scriptlyImg from "@/public/scriptly.png"
import checkmateImg from "@/public/checkmate.png"

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
    title: "Scriptly",
    Link : "https://scriptly-blond.vercel.app/",
    description:
      "Scriptly is a full-stack blogging platform inspired by Medium, offering seamless content creation and management.",
    tags: ["React", "Hono", "PostgreSQL", "Prisma", "Typescript", "Tailwind"],
    imageUrl: scriptlyImg,
  },
  {
    title: "PayDart",
    Link : "https://github.com/dhirendravsingh",
    description:
      "PayDart is a Payment Wallet, offering secure transactions and seamless user experience with a modern tech stack.",
    tags: ["Next", "Express", "Postgresql", "Turborepo", "NextAuth", "AWS" ],
    imageUrl: rmtdevImg,
  },
  {
    title: "CheckMate",
    Link : "https://scriptly-blond.vercel.app/",

    description:
      "Connect and play chess in real-time with friends or new opponents on a seamless, interactive platform.",
    tags: ["React.js", "WebSocket", "Chess.js", "Typescript", "Tailwind"],
    imageUrl: checkmateImg,
  },
  {
    title: "TradeWave",
    Link : "https://scriptly-blond.vercel.app/",

    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Next.js", "Express.js", "Turborepo", "Postgresql", "NextAuth", "Typescript", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "ConnectEase",
    Link : "https://scriptly-blond.vercel.app/",

    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Next.js", "Express.js", "Turborepo", "Postgresql", "NextAuth", "Typescript", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux toolkit",
  "React-router-DOM",
  "Next.js",
  "Node.js",
  "Express.js",
  "Socket.io",
  "Docker",
  "Kubernetes",
  "Kafka",
  "AWS",
  "SQL",
  "MongoDB",
 "PostgreSQL",
 "Prisma",
 "RESTFUL Api",
 "Turborepo",
 "HTML",
 "CSS",
  "Git",
  "Tailwind",
] as const;
