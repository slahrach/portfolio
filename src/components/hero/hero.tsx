"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
	const router = useRouter();
	const [isHovered, setIsHovered] = useState(false);
	const baseText = "text-[28px] md:text-[34px] font-semibold tracking-[-0.02em]";

	// Using the 5 project PNG images
	const projects = [
		{ src: "/project.1.png", position: "top-left", slug: "project-1" },
		{ src: "/project.2.png", position: "top-right", slug: "project-2" },
		{ src: "/project.3.png", position: "bottom-left", slug: "project-3" },
		{ src: "/project.4.png", position: "bottom-center", slug: "project-4" },
		{ src: "/project.5..png", position: "bottom-right", slug: "project-5" }
	];

	// Final spread positions when hovered - cards positioned around main card, mostly visible with small part behind
	const getSpreadPosition = (position: string) => {
		switch (position) {
			case "top-left":
				return { x: -180, y: -160, rotate: -4 };
			case "top-right":
				return { x: 180, y: -160, rotate: 4 };
			case "bottom-left":
				return { x: -280, y: 110, rotate: 4 };
			case "bottom-center":
				return { x: 0, y: 183, rotate: -4 };
			case "bottom-right":
				return { x: 280, y: 110, rotate: 4 };
			default:
				return { x: 0, y: 0, rotate: 0 };
		}
	};

	// No stagger - all cards fan out at the same time
	const getDelay = () => {
		return 0;
	};

	return (
		<section className="flex flex-col items-center justify-center w-full px-5 md:px-6 py-10 md:py-14 relative z-10 overflow-visible">
			<div 
				className="relative flex justify-center items-center"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				style={{ width: "fit-content" }}
			>
				{/* Project mockups - stacked in center, fan out on hover */}
				{projects.map((project, index) => {
					const spread = getSpreadPosition(project.position);
					const delay = getDelay();
					
					return (
						<div
							key={index}
							className="absolute"
							style={{
								zIndex: isHovered ? index : 5 - index,
								transform: isHovered 
									? `translate(${spread.x}px, ${spread.y}px) rotate(${spread.rotate}deg) scale(1)`
									: `translate(0px, 0px) rotate(0deg) scale(0.9)`,
								opacity: isHovered ? 1 : 0,
								transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
								pointerEvents: isHovered ? "auto" : "none",
								cursor: isHovered ? "pointer" : "default",
							}}
							onClick={() => {
								if (isHovered) {
									router.push(`/projects/${project.slug}`);
								}
							}}
						>
							<div 
								className="rounded-[16px] overflow-hidden transition-all duration-200 hover:scale-105"
								style={{
									width: "200px",
									height: "150px",
									boxShadow: isHovered 
										? "0 25px 50px rgba(0, 0, 0, 0.35)"
										: "0 10px 30px rgba(0, 0, 0, 0.2)"
								}}
							>
								<Image
									src={project.src}
									alt={`Project ${index + 1}`}
									width={200}
									height={150}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					);
				})}

				<div
					className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none"
					style={{
						opacity: 0.42,
						background: `
							radial-gradient(64% 54% at 22% 70%, rgba(126, 72, 52, 0.30), transparent 60%),
							radial-gradient(54% 60% at 78% 32%, rgba(30, 120, 90, 0.22), transparent 65%)
						`,
						zIndex: 5
					}}
					aria-hidden
				/>

				<div
					className="relative inline-block leading-tight transition-transform duration-300"
					style={{
						background: "rgba(33, 33, 33, 0.74)",
						backdropFilter: "blur(12px)",
						WebkitBackdropFilter: "blur(12px)",
						padding: "20px 28px",
						borderRadius: "20px",
						border: "1px solid rgba(255, 255, 255, 0.06)",
						boxShadow: [
							"0 0 0 1px rgba(255, 255, 255, 0.03)",
							"0 2px 4px rgba(0, 0, 0, 0.12)",
							"0 8px 16px rgba(0, 0, 0, 0.16)",
							"0 24px 48px rgba(0, 0, 0, 0.24)"
						].join(", "),
						transform: isHovered ? "scale(1.02)" : "scale(1)",
						zIndex: 10
					}}
				>
					<div
						className="flex flex-col items-center space-y-2.5 text-center text-white"
						style={{ textShadow: "0 8px 26px rgba(0, 0, 0, 0.55)" }}
					>
						<div className="flex items-center gap-[10px] flex-wrap justify-center">
							<span className={baseText}>Hey, I&apos;m</span>
							<span
								className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] ${baseText}`}
								style={{
									background: "#F9A8D4"
								}}
							>
								<span className="text-white">Sara</span>
								<span className="text-[22px] md:text-[26px]">👩🏻‍💻</span>
							</span>
						</div>

						<div className="flex items-center gap-[10px] flex-wrap justify-center">
							<span className={baseText}>I build</span>
							<span
								className={`px-3 py-1.5 rounded-[10px] ${baseText}`}
								style={{
									background: "#6EE7B7"
								}}
							>
								<span className="text-white">reliable solutions,</span>
							</span>
						</div>

						<div className="flex items-center gap-[10px] justify-center whitespace-nowrap">
							<span className={baseText}>Concept to </span>
							<span
								className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] ${baseText}`}
								style={{
									background: "#FFF389"
								}}
							>
								<span className="text-gray-800">launch</span>
								<svg className="w-7 h-7 md:w-8 md:h-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
									<path d="M7 17L17 7M17 7H10M17 7V14" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
