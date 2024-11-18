import React from "react";

type SectionHeadingProps = {
	children: React.ReactNode;
	size?: "small" | "medium" | "large";
	align?: "left" | "center" | "right";
	color?: string; // Add the color parameter
};

export default function SectionHeading({
	children,
	size = "large",
	align = "center",
	color = "text-black", 
}: SectionHeadingProps) {
	const fontSize =
		size === "large" ? "text-4xl" : size === "medium" ? "text-3xl" : "text-2xl";

	return (
		<h2
			className={`${fontSize} font-extrabold mb-8 text-${align} ${color} tracking-tight`}
			style={{ fontFamily: "'Poppins', sans-serif" }}
		>
			{children}
		</h2>
	);
}
