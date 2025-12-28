"use client";
import About from "@/components/about/about";
import BottomNav from "@/components/bottom-nav/bottom-nav";
import Footer from "@/components/footer/footer";

export default function AboutPage() {
	return (
		<div className="mesh-gradient-bg flex flex-col w-full relative z-10">
			<span className="noise-overlay" />
			<main className="flex flex-col items-center w-full pb-32 pt-12 md:pt-16">
				<About />
			</main>
			<Footer />
			<BottomNav />
		</div>
	);
}

