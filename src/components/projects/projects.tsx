"use client";

import Image from "next/image";
import { useState } from "react";

export default function Projects() {
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);

	const projects = [
		{
			title: "Nexus",
			description: "Designing the Nexus app",
			tags: ["UX DESIGN", "RESEARCH"],
			image: "/projet1.avif",
			gradient: "linear-gradient(135deg, rgba(255, 181, 141, 0.3) 0%, rgba(249, 168, 212, 0.3) 100%)"
		},
		{
			title: "Genie",
			description: "Evolving the Genie app design language",
			tags: ["UX DESIGN", "BRANDING"],
			image: "/project2.avif",
			gradient: "linear-gradient(135deg, rgba(125, 211, 252, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)"
		},
		{
			title: "Flow",
			description: "Building a seamless workflow platform",
			tags: ["FULL-STACK", "DEVOPS"],
			image: "/projects.avif",
			gradient: "linear-gradient(135deg, rgba(110, 231, 183, 0.3) 0%, rgba(94, 234, 212, 0.3) 100%)"
		},
		{
			title: "Aurora",
			description: "Creating an AI-powered analytics dashboard",
			tags: ["BACKEND", "AI"],
			image: "/projet1.avif",
			gradient: "linear-gradient(135deg, rgba(255, 243, 137, 0.3) 0%, rgba(255, 181, 141, 0.3) 100%)"
		}
	];

	const cardStyle = {
		background: "rgba(33, 33, 33, 0.74)",
		backdropFilter: "blur(12px)",
		WebkitBackdropFilter: "blur(12px)",
		borderRadius: "20px",
		border: "1px solid rgba(255, 255, 255, 0.06)",
		boxShadow: [
			"0 0 0 1px rgba(255, 255, 255, 0.03)",
			"0 2px 4px rgba(0, 0, 0, 0.12)",
			"0 8px 16px rgba(0, 0, 0, 0.16)",
			"0 24px 48px rgba(0, 0, 0, 0.24)"
		].join(", "),
	};

	return (
		<section className="flex flex-col items-center w-full px-5 md:px-6 py-20 md:py-28 relative z-10">
			<div className="w-full max-w-[1200px]">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<div
							key={index}
							onMouseEnter={() => setHoveredProject(index)}
							onMouseLeave={() => setHoveredProject(null)}
							className="relative transition-all duration-300"
							style={{
								transform: hoveredProject === index ? "translateY(-4px)" : "translateY(0)",
							}}
						>
							<div className="relative" style={cardStyle}>
								<div
									className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none -z-10"
									style={{
										opacity: 0.3,
										background: project.gradient,
									}}
								/>

								{/* Image container with gradient background */}
								<div
									className="relative w-full h-[300px] md:h-[350px] rounded-t-[20px] overflow-hidden mb-6"
									style={{
										background: project.gradient,
									}}
								>
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>

								{/* Content */}
								<div className="px-6 pb-6">
									<h3 className="text-white text-xl md:text-2xl font-semibold mb-2 tracking-[-0.02em]">
										{project.title}
									</h3>
									<p className="text-white/70 text-sm md:text-base mb-4 leading-relaxed">
										{project.description}
									</p>
									
									{/* Tags */}
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="px-3 py-1.5 rounded-md text-xs font-medium uppercase tracking-wide"
												style={{
													background: "rgba(255, 255, 255, 0.08)",
													color: "rgba(255, 255, 255, 0.7)",
													border: "1px solid rgba(255, 255, 255, 0.1)"
												}}
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

