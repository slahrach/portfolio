"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const HomeIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
		<path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const ProjectsIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
		<rect x="3" y="3" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<rect x="14" y="3" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<rect x="3" y="14" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<rect x="14" y="14" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const AboutIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
		<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
		<circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const LinkedInIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
		<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" strokeLinecap="round" strokeLinejoin="round"/>
		<rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round"/>
		<circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const GitHubIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
		<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const MailIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
		<rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M22 7l-10 6L2 7" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

export default function BottomNav() {
	const pathname = usePathname();
	const router = useRouter();
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	// Determine active index based on current pathname
	const getActiveIndex = () => {
		if (pathname === "/about") return 2; // About me
		if (pathname === "/" || pathname.startsWith("/#")) return 0; // Home
		return 0; // Default to home
	};

	const [activeIndex, setActiveIndex] = useState(getActiveIndex());

	// Update active index when pathname changes
	useEffect(() => {
		setActiveIndex(getActiveIndex());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	// Pages group with girly/pastel colors
	const pageItems = [
		{ Icon: HomeIcon, label: "Home", tooltip: null, href: "/", external: false, color: "#F9A8D4", shadow: "rgba(249, 168, 212, 0.4)", darkIcon: false }, // Soft pink
		{ Icon: ProjectsIcon, label: "Projects", tooltip: null, href: "#projects", external: false, color: "#A78BFA", shadow: "rgba(167, 139, 250, 0.4)", darkIcon: false }, // Lavender
		{ Icon: AboutIcon, label: "About me", tooltip: null, href: "/about", external: false, color: "#FFB58D", shadow: "rgba(255, 181, 141, 0.4)", darkIcon: false }, // Soft peach/coral orange
	];

	// Socials group with girly/pastel colors
	const socialItems = [
		{ Icon: LinkedInIcon, label: "LinkedIn", tooltip: "sara-lahrach", href: "https://www.linkedin.com/in/sara-lahrach/", external: true, color: "#7DD3FC", shadow: "rgba(125, 211, 252, 0.4)", darkIcon: false }, // Sky blue
		{ Icon: GitHubIcon, label: "GitHub", tooltip: "@slahrach", href: "https://github.com/slahrach", external: true, color: "#FFF389", shadow: "rgba(255, 246, 165, 0.4)", darkIcon: true }, // Cold pastel yellow
		{ Icon: MailIcon, label: "Email", tooltip: "slahrach.me", href: "mailto:slahrach.me@gmail.com", external: true, color: "#5EEAD4", shadow: "rgba(94, 234, 212, 0.4)", darkIcon: false }, // Teal/mint
	];

	const handleClick = (index: number, href: string, external?: boolean) => {
		setActiveIndex(index);
		if (external) {
			window.open(href, "_blank", "noopener,noreferrer");
		} else if (href.startsWith("mailto:")) {
			window.location.href = href;
		} else if (href.startsWith("#")) {
			// Smooth scroll to section
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		} else if (href.startsWith("/")) {
			// Navigate to page using Next.js router
			router.push(href);
		}
	};

	type NavItem = { 
		Icon: () => JSX.Element; 
		label: string;
		tooltip: string | null;
		href: string; 
		external: boolean;
		color: string;
		shadow: string;
		darkIcon: boolean;
	};

	const NavButton = ({ item, globalIndex }: { item: NavItem, globalIndex: number }) => {
		const isActive = globalIndex === activeIndex;
		const isHovered = globalIndex === hoveredIndex;
		
		return (
			<div className="relative">
				{/* Tooltip */}
				<div 
					className="absolute left-1/2 -translate-x-1/2 -top-10 px-3 py-1.5 rounded-lg text-white text-sm font-medium whitespace-nowrap transition-all duration-200 pointer-events-none flex items-center gap-1.5"
					style={{
						background: 'rgba(33, 33, 33, 0.9)',
						opacity: isHovered ? 1 : 0,
						transform: isHovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(8px)',
					}}
				>
					{item.tooltip ? (
						<>
							<span>{item.tooltip}</span>
							<svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M7 17L17 7M17 7H10M17 7V14" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</>
					) : (
						item.label
					)}
				</div>
				
				<button
					onClick={() => handleClick(globalIndex, item.href, item.external)}
					onMouseEnter={() => setHoveredIndex(globalIndex)}
					onMouseLeave={() => setHoveredIndex(null)}
					className="relative transition-all duration-200 hover:scale-105 active:scale-95"
					style={{
						width: '50px',
						height: '50px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '15px',
						background: (isActive || isHovered)
							? item.color
							: 'transparent',
						border: (isActive || isHovered)
							? 'none'
							: '1px solid rgba(255, 255, 255, 0.14)',
						boxShadow: 'none',
						color: (isActive || isHovered) && item.darkIcon ? '#333' : '#fff',
					}}
					aria-label={item.label}
				>
					<item.Icon />
					
					{/* Active indicator line */}
					<div 
						className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300"
						style={{
							width: isActive ? '12px' : '0px',
							background: isActive ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
							opacity: isActive ? 1 : 0,
						}}
					/>
				</button>
			</div>
		);
	};

	return (
		<nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
			<div 
				className="rounded-[24px] px-4 py-3.5"
				style={{
					background: 'rgba(33, 33, 33, 0.78)',
					backdropFilter: 'blur(18px)',
					WebkitBackdropFilter: 'blur(18px)',
					border: '1px solid rgba(255, 255, 255, 0.05)',
					boxShadow: [
						'0 0 4px rgba(0, 0, 0, 0.08)',
						'0 0 0 1px rgba(0, 0, 0, 0.08)',
						'0 28px 40px rgba(0, 0, 0, 0.38)'
					].join(', ')
				}}
			>
				<div className="flex gap-2.5 items-center">
					{/* Pages group */}
					{pageItems.map((item, index) => (
						<NavButton key={index} item={item} globalIndex={index} />
					))}
					
					{/* Divider */}
					<div 
						className="h-5 w-[1px] mx-1"
						style={{ background: 'rgba(255, 255, 255, 0.1)' }}
					/>
					
					{/* Socials group */}
					{socialItems.map((item, index) => (
						<NavButton key={index + pageItems.length} item={item} globalIndex={index + pageItems.length} />
					))}
				</div>
			</div>
		</nav>
	);
}
