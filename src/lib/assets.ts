export function getAssetPath(path: string): string {
	if (typeof window === "undefined") {
		const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
		const cleanPath = path.startsWith("/") ? path : `/${path}`;
		return `${basePath}${cleanPath}`;
	}
	const basePath = window.location.pathname.startsWith("/portfolio")
		? "/portfolio"
		: "";
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${basePath}${cleanPath}`;
}
