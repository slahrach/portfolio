"use client";
import Hero from "@/components/hero/hero";
import BottomNav from "@/components/bottom-nav/bottom-nav";
import Footer from "@/components/footer/footer";

export default function Home() {
	return (
		<div className="mesh-gradient-bg flex flex-col min-h-screen w-full relative z-10">
			<span className="noise-overlay" />
			<main className="flex-1 flex flex-col items-center justify-center w-full pb-24 pt-6 md:pt-8">
				<Hero />
			</main>
			<Footer />
			<BottomNav />
		</div>
	);
}
