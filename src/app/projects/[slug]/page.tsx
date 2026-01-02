"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav/bottom-nav";
import Footer from "@/components/footer/footer";
import { getAssetPath } from "@/lib/assets";

const projects = {
	"project-1": {
		title: "TNTX.ai",
		description: "Web3 Social Trading & Token Interaction Platform",
		tags: ["BACKEND", "DEVOPS", "WEB3"],
		image: getAssetPath("/project.1.png"),
		video: getAssetPath("/tntx.mp4"),
		gradient:
			"linear-gradient(135deg, rgba(255, 181, 141, 0.3) 0%, rgba(249, 168, 212, 0.3) 100%)",
		role: "Backend and DevOps Engineer",
		technologies: [
			"NestJS",
			"TypeScript",
			"PostgreSQL",
			"TypeORM",
			"Redis",
			"Socket.IO",
			"Bull",
			"Docker",
			"Docker Compose",
			"GitHub Actions",
			"DigitalOcean",
			"AWS (EKS, ALB)",
			"Ethers.js",
			"Solana Web3.js",
			"SIWE",
			"1inch",
			"Jupiter"
		],
		overview:
			"The founder initially had a prototype MVP to validate the concept of a social crypto-trading platform. I joined to rebuild and evolve the product step by step, turning the prototype into a scalable, production-ready system capable of supporting real users and real-time interactions.\n\nI was responsible for the entire backend, from architecture and API design to infrastructure and deployments. This included building real-time chat and notifications, multi-chain blockchain integrations (EVM & Solana), staking and trading integrations, background job processing, caching, and a scalable WebSocket infrastructure. I also designed and maintained the CI/CD pipelines, Dockerized environments, and production deployments, ensuring stability as usage increased.\n\nAs the platform matured technically and functionally, the improved performance, reliability, and feature depth played a key role in helping the founder raise significant funding. TNTX.ai is now live in beta, with users actively testing the platform and ongoing development continuing as the product scales."
	},
	"project-2": {
		title: "Mi Lalla's Touch",
		description: "Luxury E-commerce Platform for Moroccan Fashion",
		tags: ["FULL-STACK", "E-COMMERCE"],
		image: getAssetPath("/project.2.1.png"),
		images: [
			getAssetPath("/project.2.1.png"),
			getAssetPath("/project.2.2.png"),
			getAssetPath("/project.2.3.png"),
			getAssetPath("/project.2.4.png")
		],
		gradient:
			"linear-gradient(135deg, rgba(125, 211, 252, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)",
		role: "Full-Stack Developer",
		technologies: [
			"Next.js 15 (App Router)",
			"React 19",
			"TypeScript",
			"Tailwind CSS",
			"Supabase (Auth, Edge Functions)",
			"Framer Motion",
			"Radix UI",
			"Vercel",
			"Server-Side Rendering",
			"Responsive & Accessible Design"
		],
		overview:
			"Mi Lalla's Touch is a modern e-commerce platform built for a luxury Moroccan fashion brand, focused on handcrafted pieces and premium brand presentation. I worked on the full stack, delivering a complete shopping experience with strong performance, SEO, and a polished, minimalist design.\n\nI implemented the frontend using Next.js (App Router) and TypeScript, building a mobile-first, responsive UI with smooth animations and accessible components. On the backend, I used Supabase for authentication, data management, and serverless logic, enabling secure user accounts, order handling, and scalable APIs.\n\nThe platform supports the full e-commerce flow—from product discovery to checkout—while maintaining fast load times and a clean user experience. Special care was taken to optimize server-side rendering, handle client/server state correctly, and ensure the site performs well on mobile devices."
	},
	"project-3": {
		title: "Franchise Operations Manual Generator",
		description: "AI-Powered Document Automation Platform",
		tags: ["FULL-STACK", "AI"],
		images: [
			getAssetPath("/project.3.1.png"),
			getAssetPath("/project.3.2.png"),
			getAssetPath("/project.3.3.png"),
			getAssetPath("/project.3.4.png")
		],
		gradient:
			"linear-gradient(135deg, rgba(110, 231, 183, 0.3) 0%, rgba(94, 234, 212, 0.3) 100%)",
		role: "Full-Stack Developer",
		technologies: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"shadcn/ui",
			"NestJS",
			"Prisma",
			"PostgreSQL",
			"OpenAI API",
			"Authentication & role-based access"
		],
		overview:
			"I built a full-stack web application for The Art of Franchising that automates the creation of franchise operations manuals. The platform replaces a manual, time-consuming process with a guided, AI-powered system that generates professional documents in minutes.\n\nThe application guides clients through a multi-step wizard covering 16 structured sections, with real-time auto-save, save-and-resume functionality, and optional voice input for accessibility. An admin dashboard allows reviewers to manage submissions and generate branded DOCX/PDF manuals with a single click.\n\nI worked across the entire stack, building the frontend with Next.js, developing the backend API with NestJS, and designing the database layer using Prisma. I integrated OpenAI to power intelligent document generation, mapping structured user input into well-formatted operational manuals. I also handled authentication, data persistence, and production deployment.\n\nThe solution is live and significantly reduced manual work, improved document consistency, and enabled the client to scale their operations more efficiently."
	},
	"project-4": {
		title: "Medan Orthodontics – AI Chatbot Solution",
		description: "AI-Powered Patient Support (Web Widget & WhatsApp)",
		tags: ["FULL-STACK", "AI"],
		images: [
			getAssetPath("/project.4.1.png"),
			getAssetPath("/project.4.2.png")
		],
		gradient:
			"linear-gradient(135deg, rgba(255, 243, 137, 0.3) 0%, rgba(255, 181, 141, 0.3) 100%)",
		role: "Full-Stack Developer",
		technologies: [
			"NestJS",
			"Next.js",
			"React",
			"TypeScript",
			"PostgreSQL",
			"OpenAI (GPT-4)",
			"Meta WhatsApp Cloud API",
			"Nodemailer",
			"Docker",
			"REST APIs",
			"Webhooks",
			"Tailwind CSS"
		],
		overview:
			"Built a production-ready conversational AI solution for a French orthodontics clinic, providing 24/7 patient support through two channels: an embeddable web chatbot widget and WhatsApp Business integration.\n\nThe chatbot handles patient inquiries using intelligent intent detection, routing conversations into dedicated flows for new patients, appointments, emergencies, and FAQs. It supports automatic French/English language detection, collects structured patient information, and sends summaries directly to the clinic via email to reduce administrative workload.\n\nI implemented the system end to end, building the backend with NestJS and PostgreSQL, integrating OpenAI for natural language understanding, and connecting Meta WhatsApp Cloud API for real-time messaging. The frontend includes a lightweight, embeddable chat widget that can be added to any website using a single script tag."
	},
	"project-5": {
		title: "Meta Monetization Manager",
		description: "Facebook Monetization Tracking & Automation Platform",
		tags: ["FULL-STACK", "AUTOMATION"],
		image: getAssetPath("/project.5.png"),
		video: getAssetPath("/project.5.mp4"),
		gradient:
			"linear-gradient(135deg, rgba(249, 168, 212, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)",
		role: "Full-Stack Developer",
		technologies: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
			"Prisma",
			"Socket.IO",
			"NextAuth (Facebook OAuth)",
			"Playwright (browser automation)",
			"Cheerio",
			"Meta Graph API",
			"OpenAI (Data Extraction)",
			"Encrypted Credential Storage (AES-256-GCM)"
		],
		overview:
			"Built a full-stack web application that allows Facebook Page creators, managers, and agencies to monitor monetization tools across multiple Pages from a single dashboard.\n\nThe platform addresses a key limitation of the Facebook ecosystem: many monetization details (Stars, Subscriptions, In-Stream Ads, Brand Collabs, payout status, eligibility states) are not fully accessible via public APIs. To solve this, I combined a modern web dashboard with a secure browser automation system that synchronizes monetization data in real time.\n\nI developed the web application using Next.js (App Router), TypeScript, and PostgreSQL with Prisma. Authentication is handled through Facebook OAuth. For data not available through the Graph API, I built a Playwright-based automation bot that logs into Facebook, navigates monetization dashboards, and extracts structured data.\n\nA key challenge was handling Facebook security checks. I implemented an interactive verification system where the bot pauses when 2FA or security checkpoints appear, sends a screenshot to the dashboard, and waits for the user to enter verification codes (SMS, authenticator app, WhatsApp, etc.) in real time via WebSockets before continuing the flow.\n\nThe system provides live sync progress, per-page monetization status, payout visibility, and verification handling, significantly reducing manual effort when managing multiple Pages."
	},
	"project-6": {
		title: "AI Companion Platform",
		description: "Multi-Modal Conversational AI System",
		tags: ["BACKEND", "AI"],
		images: [
			getAssetPath("/project.6.1.webp"),
			getAssetPath("/project.6.2.webp"),
			getAssetPath("/project.6.3.webp")
		],
		gradient:
			"linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)",
		role: "AI/Backend Developer",
		technologies: [
			"NestJS 9",
			"TypeScript",
			"Prisma 5",
			"PostgreSQL",
			"Python",
			"FastAPI",
			"PyTorch",
			"Hugging Face Diffusers",
			"Ollama",
			"Mistral 7B",
			"FastText",
			"Stable Diffusion XL (SDXL)",
			"Bland.ai",
			"Docker",
			"REST APIs",
			"WebSocket",
			"Swagger/OpenAPI",
			"JWT Authentication",
			"OAuth (Google, Discord)",
			"Open Source AI Models"
		],
		overview:
			"Worked as the AI/Backend Developer on a scalable AI companion platform that enables users to create and interact with customizable AI personas through multiple modalities—text, images, and voice. I architected and implemented the entire backend infrastructure and AI inference pipeline.\n\nI built the multi-modal AI system by integrating and optimizing open-source models for production use. This included deploying Ollama with Mistral 7B for conversational AI, implementing Stable Diffusion XL (SDXL) with custom fine-tuning and pipeline optimizations, and configuring FastText for intent classification to route requests between chat and image generation modes. The AI inference service runs on GPU-optimized infrastructure with memory management strategies to handle production workloads efficiently.\n\nI developed the NestJS REST API backend handling business logic, authentication, and user management, while building a separate Python FastAPI service to orchestrate all AI model inference operations. I implemented a type-safe database layer with Prisma ORM and PostgreSQL, ensuring data integrity and efficient querying. Authentication includes JWT with refresh tokens and OAuth integration for Google and Discord.\n\nI integrated real-time voice capabilities using Bland.ai, including webhook handling for transcript processing. The backend supports a token-based economy with subscription tiers and usage tracking, automatic conversation history pagination with message threading, and comprehensive API documentation with Swagger/OpenAPI.\n\nTechnical optimizations I implemented include an enhanced SDXL pipeline with attention slicing, VAE tiling, and xFormers for improved performance, advanced prompt engineering using Compel for better image quality, and memory-efficient GPU operations with CUDA optimization. The intent-based routing system uses confidence thresholds to ensure accurate mode switching between chat and image generation."
	}
};

export default function ProjectDetailPage({
	params
}: {
	params: { slug: string };
}) {
	const router = useRouter();
	const project = projects[params.slug as keyof typeof projects];
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!project) {
		return (
			<div className="mesh-gradient-bg flex flex-col min-h-screen w-full relative z-10">
				<span className="noise-overlay" />
				<main className="flex-1 flex flex-col items-center justify-center w-full pb-24 pt-6 md:pt-8">
					<p className="text-white">Project not found</p>
				</main>
				<BottomNav />
			</div>
		);
	}

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
		<div className="black-bg flex flex-col min-h-screen w-full relative z-10">
			<span className="noise-overlay" />

			{/* Fixed top navigation bar with X button */}
			<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-5 md:px-6">
				<button
					onClick={() => router.push("/projects")}
					className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
					style={{
						background: "rgba(33, 33, 33, 0.85)",
						backdropFilter: "blur(12px)",
						WebkitBackdropFilter: "blur(12px)",
						border: "1px solid rgba(255, 255, 255, 0.1)",
						boxShadow: [
							"0 0 0 1px rgba(255, 255, 255, 0.05)",
							"0 4px 12px rgba(0, 0, 0, 0.3)",
							"0 8px 24px rgba(0, 0, 0, 0.4)"
						].join(", ")
					}}
					aria-label="Close"
				>
					<svg
						className="w-6 h-6 md:w-7 md:h-7 text-white"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
					>
						<line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
						<line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
					</svg>
				</button>
			</nav>

			<main className="flex-1 flex flex-col items-center w-full pb-32 pt-20 md:pt-24">
				<div className="w-full max-w-[900px] px-5 md:px-6">
					{/* Project video/image */}
					<div className="relative mb-8" style={cardStyle}>
						<div
							className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none -z-10"
							style={{
								opacity: 0.3,
								background: project.gradient
							}}
						/>

						<div
							className="relative w-full h-[400px] md:h-[500px] rounded-t-[20px] overflow-hidden"
							style={{
								background: project.gradient
							}}
						>
							{"video" in project && project.video ? (
								<video
									src={project.video}
									controls
									className="w-full h-full object-cover"
									playsInline
									preload="metadata"
								>
									Your browser does not support the video tag.
								</video>
							) : "images" in project &&
							  project.images &&
							  project.images.length > 0 ? (
								<>
									<Image
										src={project.images[currentImageIndex]}
										alt={`${project.title} - Image ${currentImageIndex + 1}`}
										fill
										className="object-cover transition-opacity duration-300"
										sizes="100vw"
									/>
									{project.images.length > 1 && (
										<>
											{/* Navigation arrows */}
											<button
												onClick={() =>
													setCurrentImageIndex((prev) =>
														prev === 0 ? project.images.length - 1 : prev - 1
													)
												}
												className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
												style={{
													background: "rgba(0, 0, 0, 0.5)",
													backdropFilter: "blur(8px)",
													WebkitBackdropFilter: "blur(8px)",
													border: "1px solid rgba(255, 255, 255, 0.2)"
												}}
												aria-label="Previous image"
											>
												<svg
													className="w-5 h-5 text-white"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2.5"
												>
													<path
														d="M15 18l-6-6 6-6"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</button>
											<button
												onClick={() =>
													setCurrentImageIndex((prev) =>
														prev === project.images.length - 1 ? 0 : prev + 1
													)
												}
												className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
												style={{
													background: "rgba(0, 0, 0, 0.5)",
													backdropFilter: "blur(8px)",
													WebkitBackdropFilter: "blur(8px)",
													border: "1px solid rgba(255, 255, 255, 0.2)"
												}}
												aria-label="Next image"
											>
												<svg
													className="w-5 h-5 text-white"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2.5"
												>
													<path
														d="M9 18l6-6-6-6"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</button>
											{/* Image indicators */}
											<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
												{project.images.map((_, index) => (
													<button
														key={index}
														onClick={() => setCurrentImageIndex(index)}
														className={`w-2 h-2 rounded-full transition-all duration-200 ${
															index === currentImageIndex ? "w-6" : ""
														}`}
														style={{
															background:
																index === currentImageIndex
																	? "rgba(255, 255, 255, 0.9)"
																	: "rgba(255, 255, 255, 0.4)"
														}}
														aria-label={`Go to image ${index + 1}`}
													/>
												))}
											</div>
										</>
									)}
								</>
							) : "image" in project && project.image ? (
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"
									sizes="100vw"
								/>
							) : null}
						</div>
					</div>

					{/* Project details */}
					<div className="relative mb-8" style={cardStyle}>
						<div
							className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none -z-10"
							style={{
								opacity: 0.25,
								background: `
									radial-gradient(circle at 50% 50%, rgba(249, 168, 212, 0.25), transparent 60%),
									radial-gradient(circle at 80% 20%, rgba(110, 231, 183, 0.2), transparent 60%)
								`
							}}
						/>

						<div className="p-8 md:p-10">
							<h1 className="text-white text-3xl md:text-4xl font-semibold mb-2 tracking-[-0.02em]">
								{project.title}
							</h1>

							{"role" in project && project.role && (
								<p className="text-white/60 text-base md:text-lg mb-6">
									Role: <span className="text-white/80">{project.role}</span>
								</p>
							)}

							<div className="flex flex-wrap gap-2 mb-6">
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

							<div className="mb-6">
								<h2 className="text-white text-xl md:text-2xl font-medium mb-4 tracking-[-0.02em]">
									Overview
								</h2>
								<div className="text-white/75 text-base md:text-lg leading-[1.7] whitespace-pre-line">
									{project.overview}
								</div>
							</div>

							{"technologies" in project &&
								project.technologies &&
								project.technologies.length > 0 && (
									<div className="mb-6">
										<h2 className="text-white text-xl md:text-2xl font-medium mb-4 tracking-[-0.02em]">
											Technologies
										</h2>
										<div className="flex flex-wrap gap-2.5">
											{project.technologies.map((tech, techIndex) => (
												<span
													key={techIndex}
													className="px-4 py-2 rounded-lg text-sm font-medium"
													style={{
														background: "rgba(255, 255, 255, 0.1)",
														color: "rgba(255, 255, 255, 0.9)",
														border: "1px solid rgba(255, 255, 255, 0.15)"
													}}
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								)}
						</div>
					</div>
				</div>
			</main>
			<Footer />
			<BottomNav />
		</div>
	);
}
