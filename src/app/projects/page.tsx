"use client";
import Projects from "@/components/projects/projects";
import BottomNav from "@/components/bottom-nav/bottom-nav";
import Footer from "@/components/footer/footer";

export default function ProjectsPage() {
	return (
		<div className="mesh-gradient-bg flex flex-col w-full relative z-10">
			<span className="noise-overlay" />
			<main className="flex flex-col items-center w-full pb-32 pt-12 md:pt-16">
				<Projects />
			</main>
			<Footer />
			<BottomNav />
		</div>
	);
}

