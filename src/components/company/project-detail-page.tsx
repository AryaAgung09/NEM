"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Tag, Calendar, CheckCircle, Clock } from "lucide-react";
import { HorizontalScroll, Parallax, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { companyPageCopy, type ProjectSlug } from "@/data/company-pages";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

export function ProjectDetailPage({ slug }: { slug: ProjectSlug }) {
  const { locale } = useLocale();
  const copy = companyPageCopy[locale].projects;
  const detail = copy.detailBySlug[slug];
  const otherProjects = copy.items.filter((item) => item.slug !== slug);

  const statusStyles: Record<string, string> = {
    operasional: styles.statusOperational,
    operational: styles.statusOperational,
    pengembangan: styles.statusDevelopment,
    development: styles.statusDevelopment,
    selesai: styles.statusCompleted,
    completed: styles.statusCompleted,
    berlangsung: styles.statusOngoing,
    ongoing: styles.statusOngoing,
  };

  return (
    <main>
      <PageHero
        action={{ label: copy.back, href: "/proyek" }}
        description={detail.description}
        eyebrow={copy.eyebrow}
        image={detail.image}
        title={detail.title}
      />

      <section aria-labelledby="project-specs-heading" className={styles.specs}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.detail.eyebrow}</p>
          <h2 id="project-specs-heading">{copy.detail.specsTitle}</h2>
        </div>
        <div className={styles.specsGrid}>
          {detail.specifications.map((spec, index) => (
            <Reveal className={styles.specCard} delay={index * 0.04} key={spec.label}>
              <span className={styles.specLabel}>{spec.label}</span>
              <p className={styles.specValue}>{spec.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="project-gallery-heading" className={styles.gallery}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
          <h2 id="project-gallery-heading">{copy.detail.galleryTitle}</h2>
        </div>
        <HorizontalScroll
          className={styles.galleryScroll}
          trackClassName={styles.galleryTrack}
        >
          {detail.gallery.map((image, index) => (
            <figure className={styles.galleryItem} key={index}>
              <Image
                alt={`${detail.title} - ${image.alt}`}
                fill
                sizes="(max-width: 800px) 90vw, 45vw"
                src={image.src}
              />
            </figure>
          ))}
        </HorizontalScroll>
      </section>

      <section aria-labelledby="project-map-heading" className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div className={styles.mapVisual}>
            <Parallax className={styles.mapImage} distance={18}>
              <Image
                alt={detail.mapImage.alt}
                fill
                sizes="(max-width: 800px) 100vw, 60vw"
                src={detail.mapImage.src}
              />
            </Parallax>
            <div className={styles.mapOverlay}>
              <div className={styles.mapInfo}>
                <div className={styles.mapInfoRow}>
                  <MapPin aria-hidden="true" size={18} />
                  <div>
                    <span className={styles.mapInfoLabel}>
                      {locale === "id" ? "Lokasi" : "Location"}
                    </span>
                    <p>{detail.region}, Indonesia</p>
                  </div>
                </div>
                <div className={styles.mapInfoRow}>
                  <Tag aria-hidden="true" size={18} />
                  <div>
                    <span className={styles.mapInfoLabel}>
                      {locale === "id" ? "Komoditas" : "Commodity"}
                    </span>
                    <p>{detail.commodity}</p>
                  </div>
                </div>
                <div className={styles.mapInfoRow}>
                  <Calendar aria-hidden="true" size={18} />
                  <div>
                    <span className={styles.mapInfoLabel}>
                      {locale === "id" ? "Periode" : "Period"}
                    </span>
                    <p>{detail.year}</p>
                  </div>
                </div>
                <div className={styles.mapInfoRow}>
                  {detail.status === "Operasional" || detail.status === "Operational" ? (
                    <CheckCircle className={styles.statusIconOperational} aria-hidden="true" size={18} />
                  ) : detail.status === "Pengembangan" || detail.status === "Development" ? (
                    <Clock className={styles.statusIconDevelopment} aria-hidden="true" size={18} />
                  ) : detail.status === "Selesai" || detail.status === "Completed" ? (
                    <CheckCircle className={styles.statusIconCompleted} aria-hidden="true" size={18} />
                  ) : (
                    <Clock className={styles.statusIconOngoing} aria-hidden="true" size={18} />
                  )}
                  <div>
                    <span className={styles.mapInfoLabel}>
                      {locale === "id" ? "Status" : "Status"}
                    </span>
                    <p className={`${styles.mapStatus} ${statusStyles[detail.status.toLowerCase()] || ""}`}>
                      {detail.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Reveal className={styles.mapHighlights}>
            <h3>{copy.detail.mapTitle}</h3>
            <p>{detail.description}</p>
            <ul>
              {detail.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="related-project-heading" className={styles.related}>
        <div className={styles.relatedHeading}>
          <p className={styles.eyebrowDark}>{copy.detail.relatedTitle}</p>
          <h2 id="related-project-heading">{copy.detail.relatedTitle}</h2>
        </div>
        <div className={styles.relatedGrid}>
          {otherProjects.slice(0, 3).map((project) => (
            <Link className={styles.relatedCard} href={`/proyek/${project.slug}`} key={project.slug}>
              <div className={styles.relatedCardContent}>
                <span className={styles.relatedCardTitle}>{project.title}</span>
                <div className={styles.relatedCardMeta}>
                  <span>
                    <MapPin aria-hidden="true" size={12} />
                    {project.region}
                  </span>
                  <span>
                    <Tag aria-hidden="true" size={12} />
                    {project.commodity}
                  </span>
                </div>
              </div>
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