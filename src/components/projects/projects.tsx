"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAssetPath } from "@/lib/assets";

export default function Projects() {
	const router = useRouter();
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);
	const [mousePosition, setMousePosition] = useState<{
		x: number;
		y: number;
	} | null>(null);

	const projects = [
		{
			slug: "project-1",
			title: "TNTX.ai",
			description: "Web3 Social Trading & Token Interaction Platform",
			tags: ["BACKEND", "DEVOPS", "WEB3"],
			image: getAssetPath("/project.1.png"),
			gradient:
				"linear-gradient(135deg, rgba(255, 181, 141, 0.3) 0%, rgba(249, 168, 212, 0.3) 100%)"
		},
		{
			slug: "project-2",
			title: "Mi Lalla's Touch",
			description: "Luxury E-commerce Platform for Moroccan Fashion",
			tags: ["FULL-STACK", "E-COMMERCE"],
			image: getAssetPath("/project.2.png"),
			gradient:
				"linear-gradient(135deg, rgba(125, 211, 252, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)"
		},
		{
			slug: "project-3",
			title: "Franchise Operations Manual Generator",
			description: "AI-Powered Document Automation Platform",
			tags: ["FULL-STACK", "AI"],
			image: getAssetPath("/project.3.png"),
			gradient:
				"linear-gradient(135deg, rgba(110, 231, 183, 0.3) 0%, rgba(94, 234, 212, 0.3) 100%)"
		},
		{
			slug: "project-4",
			title: "Medan Orthodontics – AI Chatbot Solution",
			description: "AI-Powered Patient Support (Web Widget & WhatsApp)",
			tags: ["FULL-STACK", "AI"],
			image: getAssetPath("/project.4.png"),
			gradient:
				"linear-gradient(135deg, rgba(255, 243, 137, 0.3) 0%, rgba(255, 181, 141, 0.3) 100%)"
		},
		{
			slug: "project-5",
			title: "Meta Monetization Manager",
			description: "Facebook Monetization Tracking & Automation Platform",
			tags: ["FULL-STACK", "AUTOMATION", "AI"],
			image: getAssetPath("/project.5.png"),
			gradient:
				"linear-gradient(135deg, rgba(249, 168, 212, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)"
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
		].join(", ")
	};

	return (
		<section className="flex flex-col items-center w-full px-5 md:px-6 py-20 md:py-28 relative z-10">
			<div className="w-full max-w-[1200px]">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, index) => {
						const isHovered = hoveredProject === index;
						const tiltX =
							mousePosition && isHovered ? (mousePosition.y - 0.5) * 15 : 0;
						const tiltY =
							mousePosition && isHovered ? (mousePosition.x - 0.5) * -15 : 0;

						return (
							<div
								key={index}
								onMouseEnter={() => setHoveredProject(index)}
								onMouseLeave={() => {
									setHoveredProject(null);
									setMousePosition(null);
								}}
								onMouseMove={(e) => {
									if (isHovered) {
										const rect = e.currentTarget.getBoundingClientRect();
										const x = (e.clientX - rect.left) / rect.width;
										const y = (e.clientY - rect.top) / rect.height;
										setMousePosition({ x, y });
									}
								}}
								onClick={() => router.push(`/projects/${project.slug}`)}
								className="relative cursor-pointer"
								style={{
									perspective: "1000px",
									transformStyle: "preserve-3d"
								}}
							>
								<div
									className="relative transition-all duration-300 ease-out"
									style={{
										...cardStyle,
										transform: isHovered
											? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-12px) translateZ(20px) scale(1.03)`
											: "rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px) scale(1)",
										transformStyle: "preserve-3d",
										boxShadow: isHovered
											? [
													"0 0 0 1px rgba(255, 255, 255, 0.03)",
													"0 4px 8px rgba(0, 0, 0, 0.15)",
													"0 12px 24px rgba(0, 0, 0, 0.2)",
													"0 32px 64px rgba(0, 0, 0, 0.3)"
												].join(", ")
											: cardStyle.boxShadow
									}}
								>
									<div
										className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none -z-10"
										style={{
											opacity: 0.3,
											background: project.gradient
										}}
									/>

									{/* Image container with gradient background */}
									<div
										className="relative w-full h-[300px] md:h-[350px] rounded-t-[20px] overflow-hidden mb-6"
										style={{
											background: project.gradient
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
						);
					})}
				</div>
			</div>
		</section>
	);
}
