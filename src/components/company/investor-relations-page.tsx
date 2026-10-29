"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Calendar, FileText, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { HorizontalScroll, Parallax, Reveal, Counter } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { investorSustainabilityData } from "@/data/investor-sustainability";
import { images } from "@/data/media";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";
import { useState } from "react";

export function InvestorRelationsPage() {
  const { locale } = useLocale();
  const copy = investorSustainabilityData[locale].investor;

  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question);
  };

  return (
    <main>
      <PageHero
        description={copy.description}
        eyebrow={copy.eyebrow}
        image={copy.image}
        title={copy.title}
      />

      <section aria-labelledby="investor-metrics-heading" className={styles.metrics}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.metricsEyebrow}</p>
          <h2 id="investor-metrics-heading">{copy.metricsTitle}</h2>
        </div>
        <div className={styles.metricsGrid}>
          {copy.metrics.map((metric, index) => (
            <Reveal className={styles.metricCard} delay={index * 0.05} key={metric.label}>
              <div className={styles.metricHeader}>
                <span className={styles.metricTrend}>
                  {metric.trend === "up" && <span className={styles.trendUp} aria-label="Increasing">↗</span>}
                  {metric.trend === "down" && <span className={styles.trendDown} aria-label="Decreasing">↘</span>}
                  {metric.trend === "stable" && <span className={styles.trendStable} aria-label="Stable">→</span>}
                </span>
              </div>
              <div className={styles.metricValue}>
                <Counter
                  end={parseFloat(metric.value.replace(/[^0-9.]/g, "")) || 0}
                  prefix={metric.value.replace(/[0-9.,].*/, "").trim() || ""}
                  suffix={metric.value.replace(/^[^0-9]*[0-9.,]*/, "").trim() || ""}
                  duration={1.8}
                />
              </div>
              <p className={styles.metricLabel}>{metric.label}</p>
              {metric.description && <p className={styles.metricDesc}>{metric.description}</p>}
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="investor-reports-heading" className={styles.reports}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.reportsEyebrow}</p>
          <h2 id="investor-reports-heading">{copy.reportsTitle}</h2>
        </div>
        <HorizontalScroll
          className={styles.reportsScroll}
          trackClassName={styles.reportsTrack}
        >
          {copy.reports.map((report, index) => (
            <Reveal className={styles.reportCard} delay={index * 0.06} key={`${report.year}-${report.type}-${report.language}`}>
              <div className={styles.reportHeader}>
                <span className={styles.reportYear}>{report.year}</span>
                <span className={`${styles.reportType} ${styles[report.type]}`}>{report.type.charAt(0).toUpperCase() + report.type.slice(1)}</span>
              </div>
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <div className={styles.reportMeta}>
                <span>{report.size}</span>
                <span>{report.language === "both" ? "ID/EN" : report.language.toUpperCase()}</span>
              </div>
              {report.available ? (
                <Link href={report.pdfUrl} className={styles.reportAction}>
                  <Download aria-hidden="true" size={16} />
                  {locale === "id" ? "Unduh PDF" : "Download PDF"}
                  <ExternalLink aria-hidden="true" size={14} />
                </Link>
              ) : (
                <button className={`${styles.reportAction} ${styles.disabled}`} disabled aria-disabled="true">
                  <Download aria-hidden="true" size={16} />
                  {locale === "id" ? "Segera hadir" : "Coming soon"}
                </button>
              )}
            </Reveal>
          ))}
        </HorizontalScroll>
      </section>

      <section aria-labelledby="investor-rups-heading" className={styles.rups}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.rupsEyebrow}</p>
          <h2 id="investor-rups-heading">{copy.rupsTitle}</h2>
        </div>
        <div className={styles.rupsList}>
          {copy.rups.map((rups, index) => (
            <Reveal className={styles.rupsItem} delay={index * 0.08} key={rups.date}>
              <div className={styles.rupsHeader}>
                <div className={styles.rupsDate}>
                  <Calendar aria-hidden="true" size={18} />
                  <time dateTime={rups.date}>{new Date(rups.date).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", { day: "numeric", month: "long", year: "numeric" })}</time>
                </div>
                <span className={`${styles.rupsStatus} ${styles[rups.status]}`}>
                  {rups.status === "upcoming" && locale === "id" && "Akan Datang"}
                  {rups.status === "upcoming" && locale === "en" && "Upcoming"}
                  {rups.status === "completed" && locale === "id" && "Selesai"}
                  {rups.status === "completed" && locale === "en" && "Completed"}
                  {rups.status === "cancelled" && locale === "id" && "Dibatalkan"}
                  {rups.status === "cancelled" && locale === "en" && "Cancelled"}
                </span>
              </div>
              <h3>{rups.title}</h3>
              <p>{rups.description}</p>
              {rups.documents && rups.documents.length > 0 && (
                <div className={styles.rupsDocs}>
                  {rups.documents.map((doc, i) => (
                    <Link href={doc.url} key={i} className={styles.rupsDocLink}>
                      <FileText aria-hidden="true" size={16} />
                      {doc.label}
                      <ExternalLink aria-hidden="true" size={14} />
                    </Link>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="investor-faq-heading" className={styles.faq}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.faqEyebrow}</p>
          <h2 id="investor-faq-heading">{copy.faqTitle}</h2>
        </div>
        <div className={styles.faqList}>
          {copy.faq.map((faq, index) => {
            const isOpen = openFaq === faq.question;
            return (
              <Reveal className={styles.faqItem} delay={index * 0.04} key={faq.question}>
                <div className={styles.faqDetails}>
                  <button
                    className={styles.faqSummary}
                    onClick={() => toggleFaq(faq.question)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className={styles.faqCategory}>{faq.category}</span>
                    <strong>{faq.question}</strong>
                    <span className={`${styles.faqIcon} ${isOpen ? styles.rotate : ""}`} aria-hidden="true">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={styles.faqAnswer}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    hidden={!isOpen}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className={styles.investorCta}>
        <div className={styles.ctaContent}>
          <p className={styles.eyebrow}>{copy.contactEyebrow}</p>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactDescription}</p>
          <Link href="mailto:ir@nusantaramineral.co.id" className={styles.ctaButton}>
            <ArrowUpRight aria-hidden="true" size={18} />
            {locale === "id" ? "Hubungi Tim IR" : "Contact IR Team"}
          </Link>
        </div>
        <Parallax className={styles.ctaMedia} distance={20}>
          <Image
            alt={images.modernOffice.alt}
            fill
            sizes="100vw"
            src={images.modernOffice.src}
          />
        </Parallax>
        <div className={styles.ctaShade} />
      </section>

      {copy.disclaimer && (
        <section className={styles.disclaimer}>
          <p>{copy.disclaimer}</p>
        </section>
      )}
    </main>
  );
}