import { notFound } from "next/navigation";
import { MediaDetailPage } from "@/components/company/media-detail-page";
import { getMediaSlugs, isMediaSlug } from "@/data/media-pages";

export function generateStaticParams() {
  return getMediaSlugs().map((slug) => ({ slug }));
}

export default async function MediaDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isMediaSlug(slug)) notFound();

  return <MediaDetailPage slug={slug} />;
}