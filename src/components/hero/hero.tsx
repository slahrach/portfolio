"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
	const [isHovered, setIsHovered] = useState(false);
	const baseText = "text-[26px] md:text-[32px] font-semibold tracking-[-0.02em]";

	// Using the two available images alternating
	const projects = [
		{ src: "/projet1.avif", position: "top-left" },
		{ src: "/project2.avif", position: "top-right" },
		{ src: "/projet1.avif", position: "bottom-left" },
		{ src: "/project2.avif", position: "bottom-center" },
		{ src: "/projet1.avif", position: "bottom-right" }
	];

	const getPositionStyles = (position: string): React.CSSProperties => {
		switch (position) {
			case "top-left":
				return { 
					top: "-160px", 
					left: "-120px", 
					transform: "rotate(-8deg)",
					zIndex: 0
				};
			case "top-right":
				return { 
					top: "-140px", 
					right: "-120px", 
					transform: "rotate(8deg)",
					zIndex: 0
				};
			case "bottom-left":
				return { 
					bottom: "-120px", 
					left: "-140px", 
					transform: "rotate(-8deg)",
					zIndex: 0
				};
			case "bottom-center":
				return { 
					bottom: "-160px", 
					left: "50%", 
					transform: "translateX(-50%) rotate(0deg)",
					zIndex: 0
				};
			case "bottom-right":
				return { 
					bottom: "-100px", 
					right: "-120px", 
					transform: "rotate(8deg)",
					zIndex: 0
				};
			default:
				return {};
		}
	};

	const getHoverTransform = (position: string) => {
		switch (position) {
			case "top-left":
				return "rotate(-8deg) scale(1)";
			case "top-right":
				return "rotate(8deg) scale(1)";
			case "bottom-left":
				return "rotate(-8deg) scale(1)";
			case "bottom-center":
				return "translateX(-50%) rotate(0deg) scale(1)";
			case "bottom-right":
				return "rotate(8deg) scale(1)";
			default:
				return "scale(1)";
		}
	};

	const getInitialTransform = (position: string) => {
		switch (position) {
			case "top-left":
				return "rotate(-8deg) scale(0.85) translateY(20px)";
			case "top-right":
				return "rotate(8deg) scale(0.85) translateY(20px)";
			case "bottom-left":
				return "rotate(-8deg) scale(0.85) translateY(-20px)";
			case "bottom-center":
				return "translateX(-50%) rotate(0deg) scale(0.85) translateY(-20px)";
			case "bottom-right":
				return "rotate(8deg) scale(0.85) translateY(-20px)";
			default:
				return "scale(0.85)";
		}
	};

	return (
		<section className="flex flex-col items-center justify-center w-full px-5 md:px-6 py-10 md:py-14 relative z-10 overflow-visible">
			<div 
				className="relative flex justify-center"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				style={{ width: "fit-content" }}
			>
				{/* Project mockups that appear on hover */}
				{projects.map((project, index) => {
					const posStyles = getPositionStyles(project.position);
					return (
						<div
							key={index}
							className="absolute transition-all duration-500 ease-out pointer-events-none"
							style={{
								...posStyles,
								opacity: isHovered ? 1 : 0,
								transform: isHovered 
									? getHoverTransform(project.position)
									: getInitialTransform(project.position),
							}}
						>
							<div 
								className="rounded-[16px] overflow-hidden"
								style={{
									width: "160px",
									height: "200px",
									boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
								}}
							>
								<Image
									src={project.src}
									alt={`Project ${index + 1}`}
									width={160}
									height={200}
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
									background: "#8A5BE7",
									boxShadow: "0 12px 26px rgba(138, 91, 231, 0.32)"
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
									background: "#F69851",
									boxShadow: "0 14px 30px rgba(246, 152, 81, 0.38)"
								}}
							>
								<span className="text-white">reliable software,</span>
							</span>
						</div>

						<div className="flex items-center gap-[10px] justify-center whitespace-nowrap">
							<span className={baseText}>concept to </span>
							<span
								className={`px-3 py-1.5 rounded-[10px] ${baseText}`}
								style={{
									background: "#68CC7A",
									boxShadow: "0 12px 28px rgba(104, 204, 122, 0.28)"
								}}
							>
								<span className="text-white">launch.</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
