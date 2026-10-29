"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { HorizontalScroll, Parallax, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { companyPageCopy, type BusinessSlug } from "@/data/company-pages";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

export function BusinessDetailPage({ slug }: { slug: BusinessSlug }) {
  const { locale } = useLocale();
  const copy = companyPageCopy[locale].businesses;
  const detail = copy.detailBySlug[slug];
  const otherBusinesses = copy.items.filter((item) => item.slug !== slug);

  return (
    <main>
      <PageHero
        action={{ label: copy.allBusinesses, href: "/bisnis-kami" }}
        description={detail.description}
        eyebrow={copy.eyebrow}
        image={detail.image}
        title={detail.title}
      />

      <section aria-labelledby="business-capabilities-heading" className={styles.capabilities}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.detail.eyebrow}</p>
          <h2 id="business-capabilities-heading">{copy.detail.capabilitiesTitle}</h2>
        </div>
        <HorizontalScroll
          className={styles.capabilitiesScroll}
          trackClassName={styles.capabilitiesTrack}
        >
          {detail.capabilities.map((capability, index) => (
            <article className={styles.capabilityCard} key={capability}>
              <span>0{index + 1}</span>
              <h3>{capability}</h3>
            </article>
          ))}
        </HorizontalScroll>
      </section>

      <section aria-labelledby="business-tools-heading" className={styles.tools}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
          <h2 id="business-tools-heading">{copy.detail.toolsTitle}</h2>
        </div>
        <div className={styles.toolsGrid}>
          {detail.tools.map((tool, index) => (
            <Reveal className={styles.toolCard} delay={index * 0.06} key={tool}>
              <span>0{index + 1}</span>
              <h3>{tool}</h3>
              <p>{locale === "id" ? "Mendukung koordinasi, keandalan, dan keputusan operasi." : "Supporting coordination, reliability, and operational decisions."}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="business-case-heading" className={styles.caseStudy}>
        <div className={styles.caseVisual}>
          <Parallax className={styles.caseImage} distance={22}>
            <Image
              alt={detail.caseImage.alt}
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
              src={detail.caseImage.src}
            />
          </Parallax>
          <span>{copy.detail.caseLabel}</span>
        </div>
        <Reveal className={styles.caseContent}>
          <p className={styles.eyebrowDark}>{copy.detail.caseLabel}</p>
          <h2 id="business-case-heading">{detail.caseTitle}</h2>
          <p>{detail.caseDescription}</p>
          <Link href="/bisnis-kami">
            {copy.back}
            <ArrowLeft aria-hidden="true" size={17} />
          </Link>
        </Reveal>
      </section>

      <section aria-labelledby="related-business-heading" className={styles.related}>
        <div className={styles.relatedHeading}>
          <p className={styles.eyebrowDark}>{copy.allBusinesses}</p>
          <h2 id="related-business-heading">
            {locale === "id" ? "Kapabilitas yang saling melengkapi." : "Complementary capabilities."}
          </h2>
        </div>
        <div className={styles.relatedGrid}>
          {otherBusinesses.slice(0, 3).map((business) => (
            <Link
              className={styles.relatedCard}
              href={`/bisnis-kami/${business.slug}`}
              key={business.slug}
            >
              <span>{business.title}</span>
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.detailCta}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2>{copy.detail.ctaTitle}</h2>
        <Link href="mailto:info@nusantaramineral.co.id">
          {copy.contact}
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </main>
  );
}
