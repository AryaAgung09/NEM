"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Factory, Leaf, Shield, Zap, Globe, Users } from "lucide-react";
import { HorizontalScroll, Reveal, Marquee } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { companyPageCopy } from "@/data/company-pages";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

export function BusinessOverviewPage() {
  const { locale } = useLocale();
  const copy = companyPageCopy[locale].businesses;
  const heroImage = copy.items[0].image;

  const valueProps = [
    { icon: <Factory size={24} />, title: locale === "id" ? "Operasi Terintegrasi" : "Integrated Operations", desc: locale === "id" ? "Menghubungkan tambang, pengolahan, hingga logistik dalam satu rantai nilai." : "Connecting mining, processing, to logistics in one value chain." },
    { icon: <Leaf size={24} />, title: locale === "id" ? "Berkelanjutan" : "Sustainable", desc: locale === "id" ? "Komitmen pada standar lingkungan tinggi dan reklamasi progresif." : "Commitment to high environmental standards and progressive reclamation." },
    { icon: <Zap size={24} />, title: locale === "id" ? "Energi Bersih" : "Clean Energy", desc: locale === "id" ? "Investasi pada PLTS, BESS, dan infrastruktur transmisi hijau." : "Investing in solar, BESS, and green transmission infrastructure." },
    { icon: <Globe size={24} />, title: locale === "id" ? "Jangkauan Nasional" : "National Reach", desc: locale === "id" ? "Operasi tersebar di Kalimantan, Sulawesi, Maluku, Sumatera, dan Papua." : "Operations across Kalimantan, Sulawesi, Maluku, Sumatera, and Papua." },
    { icon: <Shield size={24} />, title: locale === "id" ? "Keselamatan Prioritas" : "Safety First", desc: locale === "id" ? "Standar ISO 45001, target zero LTI di seluruh situs operasi." : "ISO 45001 standards, zero LTI target across all operational sites." },
    { icon: <Users size={24} />, title: locale === "id" ? "Pemberdayaan Masyarakat" : "Community Empowerment", desc: locale === "id" ? "Program CSR, kemitraan UKM lokal, dan pembukaan akses wilayah." : "CSR programs, local SME partnerships, and regional access development." },
  ];

  const stats = [
    { value: "5", label: locale === "id" ? "Lini Bisnis" : "Business Lines" },
    { value: "12.500+", label: locale === "id" ? "Ha Area Tambang" : "Ha Mining Area" },
    { value: "150 MWp", label: locale === "id" ? "Kapasitas PLTS" : "Solar Capacity" },
    { value: "85 km", label: locale === "id" ? "Jalan Akses" : "Access Roads" },
    { value: "2.500+", label: locale === "id" ? "Tenaga Kerja" : "Workforce" },
    { value: "200+", label: locale === "id" ? "Spesies Tanaman Reklamasi" : "Reclamation Plant Species" },
  ];

  return (
    <main>
      <PageHero
        action={{ label: copy.learnMore, href: "/bisnis-kami/pertambangan-mineral" }}
        description={copy.description}
        eyebrow={copy.eyebrow}
        image={heroImage}
        title={copy.title}
      />

      {/* Stats Bar */}
      <section aria-labelledby="business-stats-heading" className={styles.stats}>
        <h2 id="business-stats-heading" className="visually-hidden">{locale === "id" ? "Statistik Bisnis" : "Business Statistics"}</h2>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Propositions */}
      <section aria-labelledby="business-values-heading" className={styles.values}>
        <div className={styles.valuesHeader}>
          <Reveal>
            <p className={styles.eyebrow}>{copy.detail.eyebrow}</p>
            <h2 id="business-values-heading">{locale === "id" ? "Mengapa NME" : "Why NME"}</h2>
          </Reveal>
        </div>
        <div className={styles.valuesGrid}>
          {valueProps.map((item, index) => (
            <article key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
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

      {/* Marquee / Highlight Strip */}
      <section aria-hidden="true" className={styles.marquee}>
        <Marquee className={styles.marqueeTrack} duration={40}>
          {[0, 1].map((_, i) => (
            <span key={i} className={styles.marqueeItem}>
              {locale === "id" 
                ? "Pertambangan Mineral  •  Jasa Pertambangan  •  Pengolahan & Industri  •  Energi & Infrastruktur  •  Teknologi & Inovasi"
                : "Mineral Mining  •  Mining Services  •  Processing & Industry  •  Energy & Infrastructure  •  Technology & Innovation"
              }
              <span aria-hidden="true">  ✦  </span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Reveal>
          <div className={styles.ctaContent}>
            <p className={styles.eyebrow}>{copy.detail.eyebrow}</p>
            <h2>{copy.detail.ctaTitle}</h2>
            <div className={styles.ctaActions}>
              <Link href="/tentang-kami" className={styles.ctaSecondary}>
                {locale === "id" ? "Tentang Perusahaan" : "About Company"}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <Link href="/kontak" className={styles.ctaPrimary}>
                {copy.contact}
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
