"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav/bottom-nav";
import Footer from "@/components/footer/footer";

const projects = {
	nexus: {
		title: "Nexus",
		description: "Designing the Nexus app",
		tags: ["UX DESIGN", "RESEARCH"],
		image: "/projet1.avif",
		gradient: "linear-gradient(135deg, rgba(255, 181, 141, 0.3) 0%, rgba(249, 168, 212, 0.3) 100%)",
		overview: "For this project, I designed an app that allows users to explore AI-generated art. My goal was to create an intuitive interface that makes discovering and interacting with AI art seamless and enjoyable. The design focuses on visual discovery, with a clean grid layout that showcases the artwork while maintaining easy navigation."
	},
	genie: {
		title: "Genie",
		description: "Evolving the Genie app design language",
		tags: ["UX DESIGN", "BRANDING"],
		image: "/project2.avif",
		gradient: "linear-gradient(135deg, rgba(125, 211, 252, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%)",
		overview: "I worked on evolving the Genie app's design language to create a more cohesive and modern user experience. This involved redesigning key components, establishing a new visual hierarchy, and ensuring consistency across all screens. The new design language emphasizes clarity, accessibility, and a fresh aesthetic that aligns with the brand's vision."
	},
	flow: {
		title: "Flow",
		description: "Building a seamless workflow platform",
		tags: ["FULL-STACK", "DEVOPS"],
		image: "/projects.avif",
		gradient: "linear-gradient(135deg, rgba(110, 231, 183, 0.3) 0%, rgba(94, 234, 212, 0.3) 100%)",
		overview: "Flow is a comprehensive workflow platform designed to streamline team collaboration and project management. I built the entire system from the ground up, focusing on backend architecture, API design, and scalable infrastructure. The platform handles real-time updates, file management, and complex workflow automation while maintaining high performance and reliability."
	},
	aurora: {
		title: "Aurora",
		description: "Creating an AI-powered analytics dashboard",
		tags: ["BACKEND", "AI"],
		image: "/projet1.avif",
		gradient: "linear-gradient(135deg, rgba(255, 243, 137, 0.3) 0%, rgba(255, 181, 141, 0.3) 100%)",
		overview: "Aurora is an AI-powered analytics dashboard that provides real-time insights and predictive analytics. I developed the backend infrastructure, integrated machine learning models, and built APIs that process large datasets efficiently. The system uses advanced algorithms to generate actionable insights while maintaining fast response times and data accuracy."
	}
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
	const router = useRouter();
	const project = projects[params.slug as keyof typeof projects];

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
		].join(", "),
	};

	return (
		<div className="mesh-gradient-bg flex flex-col min-h-screen w-full relative z-10">
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
						].join(", "),
					}}
					aria-label="Close"
				>
					<svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
						<line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
						<line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
					</svg>
				</button>
			</nav>

			<main className="flex-1 flex flex-col items-center w-full pb-32 pt-20 md:pt-24">
				<div className="w-full max-w-[900px] px-5 md:px-6">

					{/* Project images */}
					<div className="relative mb-8" style={cardStyle}>
						<div
							className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none -z-10"
							style={{
								opacity: 0.3,
								background: project.gradient,
							}}
						/>

						<div
							className="relative w-full h-[400px] md:h-[500px] rounded-t-[20px] overflow-hidden"
							style={{
								background: project.gradient,
							}}
						>
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover"
								sizes="100vw"
							/>
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
								`,
							}}
						/>

						<div className="p-8 md:p-10">
							<h1 className="text-white text-3xl md:text-4xl font-semibold mb-4 tracking-[-0.02em]">
								{project.title}
							</h1>
							
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
								<p className="text-white/75 text-base md:text-lg leading-[1.7]">
									{project.overview}
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
			<BottomNav />
		</div>
	);
}

