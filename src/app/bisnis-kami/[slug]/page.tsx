import { notFound } from "next/navigation";
import { BusinessDetailPage } from "@/components/company/business-detail-page";
import { getBusinessSlugs, isBusinessSlug } from "@/data/company-pages";

export function generateStaticParams() {
  return getBusinessSlugs().map((slug) => ({ slug }));
}

export default async function BusinessDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isBusinessSlug(slug)) notFound();

  return <BusinessDetailPage slug={slug} />;
}
