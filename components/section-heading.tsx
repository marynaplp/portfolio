import React from "react";

type SectionHeadingProps = {
	children: React.ReactNode;
	color?: string;
	align?: "left" | "center" | "right";
};

export default function SectionHeading({
	children,
	color = "text-black", // default color
	align = "center",      // default alignment
}: SectionHeadingProps) {
	return (
		<h2 className={`text-3xl font-medium capitalize mb-8 text-${align} ${color}`}>
			{children}
		</h2>
	);
}
