import { CompanyStatement } from "@/components/home/company-statement";
import { Hero } from "@/components/home/hero";
import { Statistics } from "@/components/home/statistics";
import { Journey } from "@/components/home/journey";
import { Businesses } from "@/components/home/businesses";
import { OperationsMap } from "@/components/home/operations-map";
import { Subsidiaries } from "@/components/home/subsidiaries";
import { Sustainability } from "@/components/home/sustainability";
import { InvestorRelations } from "@/components/home/investor-relations";
import { NewsUpdates } from "@/components/home/news-updates";
import { CareerCta } from "@/components/home/career-cta";
import { VideoBanner } from "@/components/home/video-banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyStatement />
      <Statistics />
      <VideoBanner />
      <Journey />
      <Businesses />
      <OperationsMap />
      <Subsidiaries />
      <Sustainability />
      <InvestorRelations />
      <NewsUpdates />
      <CareerCta />
    </main>
  );
}
