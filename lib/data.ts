import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/instock.png";
import allouteImg from "@/public/alloute.png";
import cusImg from "@/public/CUS.png"

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
		title: "Frontend Developer",
		location: "Softemy",
		description: "Developed a completely new page for fitness application using React, Next.js, and GraphQL, resulting in a 25% faster load time compared to the previous version.",
		icon: React.createElement(LuGraduationCap),
		date: "2018-2021",
	},
	{
		title: "Software Developer",
		location: "Toronto, ON",
		description:
			"Built a new payments page using React, Next.js, and GraphQL, reducing load times by 30%. Developed responsive, accessible web applications using Figma, HTML, CSS, JavaScript, and frameworks like Vue, increasing conversion rates by 26%.",
			
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2023",
	},
	{
		title: "Software Developer",
		location: "Vancouver, BC",
		description:
			"Designed and developed a security system for a hospital locker containing dangerous medications, requiring employee fingerprint authentication. I built the system to handle card insertion, fingerprint scanning, and synchronization with the fingerprint scanning equipment. and conducting thorough testing to ensure stability. Utilized Material UI to enhance the interface, improving operational efficiency by 20% and user experience.",
		icon: React.createElement(CgWorkAlt),
		date: "2022-2023",
	},
	{
		title: "BrainStation Full-Stack Web Development Bootcamp",
		location: "Vancouver, BC",
		description:
			"I completed BrainStation's Web Development Bootcamp, an immersive program designed to equip participants with the latest skills in web design and development. This intensive training honed my abilities in front-end and back-end technologies, enabling me to build responsive, user-centered websites and applications. The curriculum's hands-on approach, focused on real-world projects, has prepared me to tackle diverse web development challenges effectively.",
		icon: React.createElement(FaReact),
		date: "2023",
	},

	{
		title: "Software Engineer, contractor/consultant",
		location: "Vancouver, BC",
		description:"Developed new features with React and Next.js that boosted SEO and increased sales by 7%. Enhanced the mobile version, improving load speed by 23%, and built and deployed the application using a CI/CD pipeline",
		icon: React.createElement(FaReact),
		date: "2024",
	},
	
] as const;

export const projectsData = [
	{
		title: "inStock",
		description:
			"An Inventory Management System made to be scalable for larger businesses. ",
		tags: [
			"React",
			"Node",
			"Express",
			"MySQL",
			"SCSS/SASS",
			"Postman",
			"Figma",
			"Jira",
		],
		imageUrl: corpcommentImg,
	},
	{   title: "CUS ",
		description:
			"Developed a secure hospital locker system with fingerprint and card authentication, integrating real-time synchronization with fingerprint hardware.",
		tags: [
			"Flutter",
			"Node",
			"Python",
			"MySQL",
			"Postman",
		
		],
		imageUrl: cusImg,
	},
	{   title: "Alloute ",
		description:
			"Designed an inventory management system with Material UI, collaborating with backend developers and boosting efficiency by 20%.",
		tags: [
			"JavaScript",
			"React",
			"Backend Collaboration",
			"API Integration",
			"Testing and Debugging",
	
		
		],
		imageUrl: allouteImg,
	},
	

] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"MySQL",
	"GraphQL",
	"Express",
	"PostgreSQL",
	"Python",
	"Framer Motion",
	"NextAuth",
	"OAuth",
	"MongoDB",
	"Pusher",
	"Cloudinary",
	"Docker",
] as const;
