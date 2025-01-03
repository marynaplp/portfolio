"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: { opacity: 0, y: 100 },
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.05 * index },
	}),
};
export default function Skills() {
	const { ref } = useSectionInView("Skills", 0.5);
	return (
		<section
			id="skills"
			ref={ref}
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-20">
			<SectionHeading color="text-blue-500 dark:text-blue-300" align="center">
My skills</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						custom={index}
						key={index}>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
