"use client";

import { useState } from "react";

const HomeIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
		<path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const PenIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
		<path d="M12 19l7-7 3 3-7 7-3-3z" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M2 2l7.586 7.586" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const GridIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
		<rect x="3" y="3" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<rect x="14" y="3" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<rect x="3" y="14" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<rect x="14" y="14" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const AtIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
		<circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-4 8" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const MailIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
		<rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M22 7l-10 6L2 7" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const TwitterIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
		<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const CartIcon = () => (
	<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
		<circle cx="9" cy="21" r="1" strokeLinecap="round" strokeLinejoin="round"/>
		<circle cx="20" cy="21" r="1" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

export default function BottomNav() {
	const [activeIndex, setActiveIndex] = useState(0);

	const navItems = [
		{ Icon: HomeIcon, label: "Home" },
		{ Icon: PenIcon, label: "Design" },
		{ Icon: GridIcon, label: "Projects" },
		{ Icon: AtIcon, label: "About" },
		{ Icon: MailIcon, label: "Contact" },
		{ Icon: TwitterIcon, label: "Twitter" },
		{ Icon: CartIcon, label: "Shop" }
	];

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
					{navItems.map((item, index) => {
						const isActive = index === activeIndex;
						return (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className="transition-all duration-200 hover:scale-105 active:scale-95"
								style={{
									width: '50px',
									height: '50px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									borderRadius: '15px',
									background: isActive 
										? '#F69851'
										: 'transparent',
									border: isActive 
										? 'none'
										: '1px solid rgba(255, 255, 255, 0.14)',
									boxShadow: isActive 
										? '0 10px 22px rgba(246, 152, 81, 0.4)'
										: 'none',
								}}
								aria-label={item.label}
							>
								<item.Icon />
							</button>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
