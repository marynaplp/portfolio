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
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about">
<SectionHeading color="text-blue-500" align="left">
About Me
</SectionHeading>			<p className="mb-3">
				{" "}
				Experienced Software Engineer{" "}
				<span className="font-medium"></span>, with a strong background in front-end and full-stack development 
				across diverse industries. I specialize in modern <span className="font-medium">web technologies and Agile methodologies,
				 with expertise in TypeScript, JavaScript, and Python </span>.{" "}. My technical proficiency spans <span className="font-medium">front-end and back-end frameworks,
				 including React, Vue, NEXT.js, and GraphQL.</span> {" "}
			</p>
			<p>
  <span className="italic">When I'm not coding</span>, I'm passionate about embroidery. I also enjoy{" "}
  <span className="font-medium">cooking and experimenting with flavors</span>, and I love{" "}
  <span className="font-medium">hiking adventures</span>.
</p>

		</motion.section>
	);
}
