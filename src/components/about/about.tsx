"use client";

import { useState } from "react";

export default function About() {
	const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

	const experiences = [
		{
			company: "Better Call Tech",
			role: "Software Engineer",
			period: "Current",
			description:
				"Delivering end-to-end software solutions, from gathering client requirements and defining system architecture to implementing scalable infrastructures and guiding projects through development, deployment, and long-term maintenance."
		},
		{
			company: "Fiverr",
			role: "Freelance Engineer",
			period: "Previous",
			description:
				"Built a strong independent track record creating web applications, Discord bots, automation tools, hosting setups, and AI-powered solutions for clients worldwide. Handled both technical execution and client communication."
		},
		{
			company: "Lendstack",
			role: "Software Engineer & Junior Manager",
			period: "Previous",
			description:
				"Led backend architecture efforts, integrated 10+ third-party APIs, built large-scale logging and document-processing pipelines, and helped introduce agile practices. Became one of the company's youngest technical leaders."
		}
	];

	const skills = [
		{ name: "NestJS", color: "#6EE7B7" },
		{ name: "TypeScript", color: "#A78BFA" },
		{ name: "PostgreSQL", color: "#7DD3FC" },
		{ name: "TypeORM", color: "#5EEAD4" },
		{ name: "Prisma", color: "#FFF389" },
		{ name: "Redis", color: "#FFB58D" },
		{ name: "Socket.IO", color: "#F9A8D4" },
		{ name: "REST APIs", color: "#6EE7B7" },
		{ name: "WebSockets", color: "#A78BFA" },
		{ name: "Docker", color: "#7DD3FC" },
		{ name: "AWS", color: "#5EEAD4" },
		{ name: "GitHub Actions", color: "#FFF389" },
		{ name: "OpenAI API", color: "#F9A8D4" },
		{ name: "Bull", color: "#6EE7B7" },
		{ name: "Playwright", color: "#A78BFA" },
		{ name: "Web3", color: "#7DD3FC" },
		{ name: "Next.js", color: "#F9A8D4" },
		{ name: "React", color: "#6EE7B7" },
		{ name: "Tailwind CSS", color: "#A78BFA" },
		{ name: "shadcn/ui", color: "#7DD3FC" },
		{ name: "Framer Motion", color: "#5EEAD4" },
		{ name: "Radix UI", color: "#FFF389" }
	];

	const cardStyle = {
		background: "rgba(33, 33, 33, 0.74)",
		backdropFilter: "blur(12px)",
		WebkitBackdropFilter: "blur(12px)",
		padding: "48px 40px",
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
			<div className="w-full max-w-[700px] space-y-16">
				{/* A little bit about me */}
				<div className="relative" style={cardStyle}>
					<div
						className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none -z-10"
						style={{
							opacity: 0.3,
							background: `
								radial-gradient(circle at 50% 50%, rgba(249, 168, 212, 0.3), transparent 60%),
								radial-gradient(circle at 80% 20%, rgba(110, 231, 183, 0.25), transparent 60%)
							`
						}}
					/>

					<h2 className="text-white text-2xl md:text-3xl font-medium mb-8 tracking-[-0.02em]">
						A little bit about me
					</h2>

					<div className="space-y-5 text-white/75 text-base md:text-lg leading-[1.7]">
						<p>
							I&apos;m{" "}
							<span className="text-[#F9A8D4] font-medium">Sara Lahrach</span>,
							a software engineer with a strong focus on{" "}
							<span className="text-[#6EE7B7] font-medium">
								backend architecture
							</span>{" "}
							and infrastructure. Based in{" "}
							<span className="text-[#FFF389] font-medium">Morocco</span>, I
							take projects from early concept to production, building systems
							that are designed to scale, perform, and hold up under real-world
							pressure. What drives me is turning complexity into clarity,
							creating solutions that don&apos;t just work, but work reliably
							and intentionally.
						</p>
						<p>
							Outside of work, I care deeply about balance and self-connection.
							Practices like{" "}
							<span className="text-[#6EE7B7] font-medium">
								yoga and meditation
							</span>{" "}
							help me stay grounded and present, while{" "}
							<span className="text-[#F9A8D4] font-medium">reading</span> and
							learning continuously feed my curiosity and growth. I&apos;m drawn
							to understanding how things work, whether that&apos;s systems,
							ideas, or myself. When I unplug, I enjoy{" "}
							<span className="text-[#A78BFA] font-medium">dancing</span> and
							spending meaningful time with people I care about, staying
							connected to what feels real and grounding.
						</p>
					</div>
				</div>

				{/* Experience */}
				<div className="relative" style={cardStyle}>
					<div
						className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none -z-10"
						style={{
							opacity: 0.3,
							background: `
								radial-gradient(circle at 20% 30%, rgba(249, 168, 212, 0.3), transparent 50%),
								radial-gradient(circle at 80% 70%, rgba(110, 231, 183, 0.25), transparent 50%)
							`
						}}
					/>

					<h2 className="text-white text-2xl md:text-3xl font-medium mb-10 tracking-[-0.02em]">
						Experience
					</h2>

					<div className="space-y-10">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className={
									index !== experiences.length - 1
										? "pb-10 border-b border-white/5"
										: ""
								}
							>
								<div className="mb-3">
									<h3 className="text-white text-lg md:text-xl font-medium mb-1.5">
										{exp.company}
									</h3>
									<p className="text-white/55 text-sm md:text-base">
										{exp.role} • {exp.period}
									</p>
								</div>
								<p className="text-white/75 text-base leading-[1.7]">
									{exp.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Skills */}
				<div className="relative" style={cardStyle}>
					<div
						className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none -z-10"
						style={{
							opacity: 0.3,
							background: `
								radial-gradient(circle at 20% 30%, rgba(249, 168, 212, 0.3), transparent 50%),
								radial-gradient(circle at 80% 70%, rgba(110, 231, 183, 0.25), transparent 50%)
							`
						}}
					/>

					<h2 className="text-white text-2xl md:text-3xl font-medium mb-10 tracking-[-0.02em]">
						Skills
					</h2>

					<div className="flex flex-wrap gap-3">
						{skills.map((skill, index) => (
							<span
								key={index}
								onMouseEnter={() => setHoveredSkill(index)}
								onMouseLeave={() => setHoveredSkill(null)}
								className="px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
								style={{
									background:
										hoveredSkill === index
											? skill.color
											: "rgba(255, 255, 255, 0.06)",
									color:
										hoveredSkill === index
											? "#1a1a1a"
											: "rgba(255, 255, 255, 0.8)",
									border: `1px solid ${hoveredSkill === index ? skill.color : "rgba(255, 255, 255, 0.08)"}`,
									transform:
										hoveredSkill === index
											? "translateY(-2px) scale(1.05)"
											: "translateY(0) scale(1)"
								}}
							>
								{skill.name}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
