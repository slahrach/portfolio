export default function Hero() {
	const baseText = "text-[26px] md:text-[32px] font-semibold tracking-[-0.02em]";

	return (
		<section className="flex flex-col items-center justify-center w-full px-5 md:px-6 py-10 md:py-14 relative z-10">
			<div className="relative w-full max-w-[460px] flex justify-center">
				<div
					className="absolute inset-0 rounded-[40px] blur-[44px] pointer-events-none"
					style={{
						opacity: 0.42,
						background: `
							radial-gradient(64% 54% at 22% 70%, rgba(126, 72, 52, 0.30), transparent 60%),
							radial-gradient(54% 60% at 78% 32%, rgba(30, 120, 90, 0.22), transparent 65%)
						`
					}}
					aria-hidden
				/>

				<div
					className="relative inline-block leading-tight"
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
						].join(", ")
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
