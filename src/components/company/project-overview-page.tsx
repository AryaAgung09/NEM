"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, MapPin, Tag } from "lucide-react";
import { HorizontalScroll, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { companyPageCopy, getProjectSlugs, type ProjectRegion, type ProjectCommodity } from "@/data/company-pages";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";
import { useState, useMemo } from "react";

export function ProjectOverviewPage() {
  const { locale } = useLocale();
  const copy = companyPageCopy[locale].projects;
  const heroImage = copy.items[0].image;

  const [activeRegion, setActiveRegion] = useState<ProjectRegion | "all">("all");
  const [activeCommodity, setActiveCommodity] = useState<ProjectCommodity | "all">("all");

  const regions: (ProjectRegion | "all")[] = ["all", "Kalimantan", "Sulawesi", "Maluku", "Sumatera", "Papua"];
  const commodities: (ProjectCommodity | "all")[] = ["all", "Mineral", "Energi", "Infrastruktur", "Teknologi", "Jasa"];

  const filteredProjects = useMemo(() => {
    return copy.items.filter((project) => {
      const regionMatch = activeRegion === "all" || project.region === activeRegion;
      const commodityMatch = activeCommodity === "all" || project.commodity === activeCommodity;
      return regionMatch && commodityMatch;
    });
  }, [activeRegion, activeCommodity, copy.items]);

  const regionLabels = copy.filters.regions;
  const commodityLabels = copy.filters.commodities;

  return (
    <main>
      <PageHero
        action={{ label: copy.explore, href: `/proyek/${getProjectSlugs()[0]}` }}
        description={copy.description}
        eyebrow={copy.eyebrow}
        image={heroImage}
        title={copy.title}
      />

      <section aria-labelledby="project-filters-heading" className={styles.filters}>
        <div className={styles.filtersContainer}>
          <div className={styles.filtersHeading}>
            <p className={styles.eyebrowDark}>{copy.filters.all}</p>
            <h2 id="project-filters-heading">
              {locale === "id" ? "Saring portofolio proyek" : "Filter project portfolio"}
            </h2>
          </div>

          <div className={styles.filtersGroups}>
            <div className={styles.filterGroup}>
              <Filter aria-hidden="true" size={16} />
              <span className={styles.filterLabel}>
                {locale === "id" ? "Wilayah" : "Region"}
              </span>
              <div className={styles.filterChips} role="group" aria-label={locale === "id" ? "Filter wilayah" : "Filter by region"}>
                {regions.map((region) => (
                  <button
                    key={region}
                    className={`${styles.filterChip} ${activeRegion === region ? styles.active : ""}`}
                    onClick={() => setActiveRegion(region)}
                    aria-pressed={activeRegion === region}
                  >
                    {region === "all" ? copy.filters.all : regionLabels[region as ProjectRegion]}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <Tag aria-hidden="true" size={16} />
              <span className={styles.filterLabel}>
                {locale === "id" ? "Komoditas" : "Commodity"}
              </span>
              <div className={styles.filterChips} role="group" aria-label={locale === "id" ? "Filter komoditas" : "Filter by commodity"}>
                {commodities.map((commodity) => (
                  <button
                    key={commodity}
                    className={`${styles.filterChip} ${activeCommodity === commodity ? styles.active : ""}`}
                    onClick={() => setActiveCommodity(commodity)}
                    aria-pressed={activeCommodity === commodity}
                  >
                    {commodity === "all" ? copy.filters.all : commodityLabels[commodity as ProjectCommodity]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="project-portfolio-heading" className={styles.portfolio}>
        <div className={styles.portfolioHeading}>
          <div>
            <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
            <h2 id="project-portfolio-heading">
              {locale === "id"
                ? `Menampilkan ${filteredProjects.length} dari ${copy.items.length} proyek`
                : `Showing ${filteredProjects.length} of ${copy.items.length} projects`}
            </h2>
          </div>
        </div>
        <HorizontalScroll
          className={styles.portfolioScroll}
          trackClassName={styles.portfolioTrack}
        >
          {filteredProjects.map((project, index) => (
            <article className={styles.portfolioCard} key={project.slug}>
              <Link
                aria-label={`${copy.explore}: ${project.title}`}
                className={styles.portfolioImage}
                href={`/proyek/${project.slug}`}
              >
                <Image
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 700px) 82vw, 35vw"
                  src={project.image.src}
                />
                <span>
                  {String(index + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                </span>
                <div className={styles.projectMeta}>
                  <span className={styles.metaItem}>
                    <MapPin aria-hidden="true" size={12} />
                    {project.region}
                  </span>
                  <span className={styles.metaItem}>
                    <Tag aria-hidden="true" size={12} />
                    {project.commodity}
                  </span>
                </div>
              </Link>
              <div className={styles.portfolioCardBody}>
                <div className={styles.projectTags}>
                  <span className={styles.projectYear}>{project.year}</span>
                  <span className={`${styles.projectStatus} ${styles[project.status.toLowerCase()]}`}>
                    {project.status}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link href={`/proyek/${project.slug}`}>
                  {copy.explore}
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
          <Link href="/bisnis-kami">
            {locale === "id" ? "Lihat lini bisnis kami" : "View our business lines"}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}