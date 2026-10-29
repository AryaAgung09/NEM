import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/company/project-detail-page";
import { getProjectSlugs, isProjectSlug } from "@/data/company-pages";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isProjectSlug(slug)) notFound();

  return <ProjectDetailPage slug={slug} />;
}