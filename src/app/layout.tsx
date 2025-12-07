import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	preload: true
});

export const metadata: Metadata = {
	title: "Sara Lahrach | Software Engineer",
	description: "Software Engineer at Better Call Tech. Building end-to-end solutions, scalable infrastructures, and AI-powered systems. Previously at Lendstack and freelance on Fiverr."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={cn(inter.className, "dark min-h-screen mesh-gradient-bg antialiased")}>
				<div className="noise-overlay" />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
