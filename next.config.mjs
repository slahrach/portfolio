/** @type {import('next').NextConfig} */
const repo = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	output: isProd ? "export" : undefined,
	trailingSlash: true,
	images: {
		unoptimized: true
	},
	...(isProd && {
		basePath: `/${repo}`,
		assetPrefix: `/${repo}/`
	})
};

export default nextConfig;
