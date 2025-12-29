// Helper function to get asset paths with basePath for GitHub Pages
// In production (GitHub Pages), assets are served from /portfolio/
export function getAssetPath(path: string): string {
	// Remove leading slash if present, we'll add basePath
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	// Only add basePath in production builds (when basePath is set in next.config)
	const basePath =
		process.env.NODE_ENV === "production" ? "/portfolio" : "";
	return `${basePath}${cleanPath}`;
}
