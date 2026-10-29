"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HorizontalScroll, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { companyPageCopy } from "@/data/company-pages";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

export function BusinessOverviewPage() {
  const { locale } = useLocale();
  const copy = companyPageCopy[locale].businesses;
  const heroImage = copy.items[0].image;

  return (
    <main>
      <PageHero
        action={{ label: copy.learnMore, href: "/bisnis-kami/pertambangan-mineral" }}
        description={copy.description}
        eyebrow={copy.eyebrow}
        image={heroImage}
        title={copy.title}
      />

      <section aria-labelledby="business-portfolio-heading" className={styles.portfolio}>
        <div className={styles.portfolioHeading}>
          <div>
            <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
            <h2 id="business-portfolio-heading">{copy.description}</h2>
          </div>
          <span>{String(copy.items.length).padStart(2, "0")} {locale === "id" ? "lini bisnis" : "business lines"}</span>
        </div>
        <HorizontalScroll
          className={styles.portfolioScroll}
          trackClassName={styles.portfolioTrack}
        >
          {copy.items.map((business, index) => (
            <article className={styles.portfolioCard} key={business.slug}>
              <Link
                aria-label={`${copy.learnMore}: ${business.title}`}
                className={styles.portfolioImage}
                href={`/bisnis-kami/${business.slug}`}
              >
                <Image
                  alt={business.image.alt}
                  fill
                  sizes="(max-width: 700px) 82vw, 35vw"
                  src={business.image.src}
                />
                <span>0{index + 1} / 0{copy.items.length}</span>
              </Link>
              <div className={styles.portfolioCardBody}>
                <h3>{business.title}</h3>
                <p>{business.description}</p>
                <Link href={`/bisnis-kami/${business.slug}`}>
                  {copy.learnMore}
                  <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </HorizontalScroll>
      </section>

      <section className={styles.portfolioClosing}>
        <Reveal>
          <p className={styles.eyebrow}>{copy.detail.eyebrow}</p>
          <h2>{copy.detail.ctaTitle}</h2>
          <Link href="/tentang-kami">
            {locale === "id" ? "Tentang perusahaan" : "About the company"}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
