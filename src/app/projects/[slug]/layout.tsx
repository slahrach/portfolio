// This file is needed for static generation
// The projects data is duplicated here for generateStaticParams
const projectSlugs = [
	"project-1",
	"project-2",
	"project-3",
	"project-4",
	"project-5",
	"project-6"
];

export function generateStaticParams() {
	return projectSlugs.map((slug) => ({
		slug: slug
	}));
}

export default function ProjectLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
