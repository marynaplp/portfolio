"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

const techSkills = [
  "JavaScript", "TypeScript", "Python", "HTML", "CSS",
  "Vue", "Angular", "React", "Flutter", "Redux", "Next.js",
  "Backbone", "Lodash", "GraphQL", "MongoDB", "PostgreSQL",
  "MySQL", "RESTful APIs", "Docker", "AWS", "CI/CD", "Git",
  "Jira", "Figma", "OpenShift"
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="font-poppins mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://imgur.com/F8GPoNs.png"
              alt="Maryna Pylypchenko image"
              width={192}
              height={192}
              quality={80}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Maryna.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">5 years</span> of experience. I enjoy building{" "}
        <span className="font-bold">sites & apps</span>.
      </motion.h1>

      <div className="text-center my-8">
        <div className="text-center my-6 mb-8">
          <span className="font-medium text-lg">My focus is:</span>
        </div>				
        <ul className="flex flex-wrap justify-center gap-3">
          {techSkills.map((skill, index) => (
            <motion.li
              className="bg-gray-200 text-gray-800 rounded-xl px-5 py-3 text-sm font-semibold shadow-md hover:bg-blue-100 hover:scale-105 transform transition-transform dark:bg-white/10 dark:text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black dark:bg-white/10"
          href="/Maryna Pylypchenko_resume.pdf"
          download={true}
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
        </a>
        <a
          className="bg-white text-gray-700 hover:text-gray-950 px-7 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] active:scale-[1.15] transition cursor-pointer border border-black dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/maryna-pylypchenko-dev/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 px-7 text-[1.35rem] p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black dark:bg-white/10 dark:text-white/60"
          href="https://github.com/marynaplp"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
