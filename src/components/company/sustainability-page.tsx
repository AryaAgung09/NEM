"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, Shield, Users, TrendingUp, Sun, Droplet, Trees, UserCheck, Award, ChevronRight } from "lucide-react";
import { HorizontalScroll, Reveal, Counter, PinnedStory } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { investorSustainabilityData } from "@/data/investor-sustainability";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

const iconMap: Record<string, React.ReactNode> = {
  tree: <Trees aria-hidden="true" size={24} />,
  leaf: <Leaf aria-hidden="true" size={24} />,
  droplet: <Droplet aria-hidden="true" size={24} />,
  sun: <Sun aria-hidden="true" size={24} />,
  users: <Users aria-hidden="true" size={24} />,
  "user-check": <UserCheck aria-hidden="true" size={24} />,
  shield: <Shield aria-hidden="true" size={24} />,
  "trending-up": <TrendingUp aria-hidden="true" size={24} />,
};

const pillarLabels = {
  id: { E: "Lingkungan", S: "Sosial", G: "Tata Kelola" },
  en: { E: "Environment", S: "Social", G: "Governance" },
};

const pillarColors = {
  E: { bg: "rgb(34 197 94 / 15%)", text: "#16a34a", border: "rgb(34 197 94 / 30%)" },
  S: { bg: "rgb(59 130 246 / 15%)", text: "#3b82f6", border: "rgb(59 130 246 / 30%)" },
  G: { bg: "rgb(168 85 247 / 15%)", text: "#a855f7", border: "rgb(168 85 247 / 30%)" },
};

const statusLabels = {
  id: { "on-track": "Sesuai Rencana", "at-risk": "Perlu Perhatian", achieved: "Tercapai" },
  en: { "on-track": "On Track", "at-risk": "At Risk", achieved: "Achieved" },
};

const statusColors = {
  "on-track": { bg: "rgb(34 197 94 / 15%)", text: "#16a34a" },
  "at-risk": { bg: "rgb(245 166 35 / 15%)", text: "#f5a623" },
  achieved: { bg: "rgb(59 130 246 / 15%)", text: "#3b82f6" },
};

function ImpactCounterCard({ counter, index }: { counter: typeof investorSustainabilityData.id.sustainability.impactCounters[0]; index: number }) {
  return (
    <Reveal className={styles.impactCard} delay={index * 0.06} key={counter.id}>
      <div className={styles.impactIcon}>
        {iconMap[counter.icon] || <Award aria-hidden="true" size={24} />}
      </div>
      <div className={styles.impactValue}>
        <Counter end={counter.value} suffix={counter.suffix} duration={2.2} />
      </div>
      <p className={styles.impactLabel}>{counter.label}</p>
      <p className={styles.impactDesc}>{counter.description}</p>
    </Reveal>
  );
}

import React from "react";

export function SustainabilityPage() {
  const { locale } = useLocale();
  const copy = investorSustainabilityData[locale].sustainability;
  const labels = pillarLabels[locale];
  const sLabels = statusLabels[locale];

  return (
    <main>
      <PageHero
        description={copy.description}
        eyebrow={copy.eyebrow}
        image={copy.image}
        title={copy.title}
      />

      <section aria-labelledby="esg-targets-heading" className={styles.esgTargets}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.esgEyebrow}</p>
          <h2 id="esg-targets-heading">{copy.esgTitle}</h2>
          <p className={styles.contentNote}>{copy.esgDescription}</p>
        </div>
        <div className={styles.esgGrid}>
          {copy.esgTargets.map((target, index) => {
            const colors = pillarColors[target.pillar];
            const statusColor = statusColors[target.status];
            return (
              <Reveal className={styles.esgCard} delay={index * 0.05} key={target.title}>
                <div style={{ "--pillar-color": colors.text, "--pillar-bg": colors.bg, "--pillar-border": colors.border } as React.CSSProperties}>
                  <div className={styles.esgPillar} style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}>
                    {target.pillar}
                  </div>
                  <h3>{target.title}</h3>
                  <p>{target.description}</p>
                  <div className={styles.esgProgress}>
                    <div className={styles.esgProgressBar}>
                      <div
                        className={styles.esgProgressFill}
                        style={{ width: `${Math.min(100, (parseFloat(target.current.replace("%", "")) / parseFloat(target.target.replace("%", "")) * 100) || 0)}%`, backgroundColor: colors.text }}
                      />
                    </div>
                    <div className={styles.esgProgressLabels}>
                      <span>{locale === "id" ? "Baseline" : "Baseline"} ({target.baseline}): {target.current} {target.unit}</span>
                      <span>{locale === "id" ? "Target" : "Target"} ({target.targetYear}): {target.target} {target.unit}</span>
                    </div>
                  </div>
                  <span className={styles.esgStatus} style={{ backgroundColor: statusColor.bg, color: statusColor.text }}>
                    {sLabels[target.status]}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="impact-heading" className={styles.impact}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.impactEyebrow}</p>
          <h2 id="impact-heading">{copy.impactTitle}</h2>
          <p className={styles.contentNote}>{copy.impactDescription}</p>
        </div>
        <div className={styles.impactGrid}>
          {copy.impactCounters.map((counter, index) => (
            <ImpactCounterCard key={counter.id} counter={counter} index={index} />
          ))}
        </div>
      </section>

      <section aria-labelledby="reclamation-heading" className={styles.reclamation}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.reclamationEyebrow}</p>
          <h2 id="reclamation-heading">{copy.reclamationTitle}</h2>
          <p className={styles.contentNote}>{copy.reclamationDescription}</p>
        </div>
        <HorizontalScroll
          className={styles.reclamationScroll}
          trackClassName={styles.reclamationTrack}
        >
          {copy.reclamationPrograms.map((program, index) => (
            <Reveal className={styles.reclamationCard} delay={index * 0.08} key={program.id}>
              <div className={styles.reclamationImage}>
                <Image
                  alt={program.image.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  src={program.image.src}
                />
                <span className={`${styles.reclamationStatus} ${styles[program.status]}`}>
                  {program.status === "planning" && locale === "id" && "Perencanaan"}
                  {program.status === "planning" && locale === "en" && "Planning"}
                  {program.status === "active" && locale === "id" && "Berjalan"}
                  {program.status === "active" && locale === "en" && "Active"}
                  {program.status === "completed" && locale === "id" && "Selesai"}
                  {program.status === "completed" && locale === "en" && "Completed"}
                  {program.status === "monitoring" && locale === "id" && "Pemantauan"}
                  {program.status === "monitoring" && locale === "en" && "Monitoring"}
                </span>
              </div>
              <div className={styles.reclamationContent}>
                <div className={styles.reclamationMeta}>
                  <span>{program.region}</span>
                  <span>{program.area}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className={styles.reclamationStats}>
                  <div><strong>{program.species}</strong> <span>{locale === "id" ? "Spesies" : "Species"}</span></div>
                  <div><strong>{program.communities}</strong> <span>{locale === "id" ? "Komunitas" : "Communities"}</span></div>
                  <div><strong>{program.carbonSequestered}</strong> <span>CO2e</span></div>
                </div>
                <ul className={styles.reclamationHighlights}>
                  {program.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </HorizontalScroll>
      </section>

      <section aria-labelledby="programs-heading" className={styles.programs}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.programsEyebrow}</p>
          <h2 id="programs-heading">{copy.programsTitle}</h2>
        </div>
        <PinnedStory className={styles.pinnedPrograms}>
          <div className={styles.programsTrack}>
            {copy.programs.map((program, index) => {
              const colors = pillarColors[program.pillar];
              return (
                <Reveal className={styles.programCard} delay={index * 0.08} key={program.id}>
                  <div style={{ "--pillar-color": colors.text, "--pillar-bg": colors.bg, "--pillar-border": colors.border } as React.CSSProperties}>
                    <div className={styles.programImage}>
                      <Image
                        alt={program.image.alt}
                        fill
                        sizes="(max-width: 1000px) 100vw, 50vw"
                        src={program.image.src}
                      />
                      <span className={styles.programPillar} style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}>
                        {labels[program.pillar]}
                      </span>
                    </div>
                    <div className={styles.programContent}>
                      <div className={styles.programMeta}>
                        <span>{program.region}</span>
                      </div>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                      <div className={styles.programMetrics}>
                        {program.metrics.map((m, i) => (
                          <div key={i} className={styles.programMetric}>
                            <strong>{m.value}</strong>
                            <span>{m.label}</span>
                          </div>
                        ))}
                      </div>
                      {program.link && (
                        <Link href={program.link.href} className={styles.programLink}>
                          {program.link.label}
                          <ChevronRight aria-hidden="true" size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </PinnedStory>
      </section>

      <section aria-labelledby="commitment-heading" className={styles.commitment}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.commitmentEyebrow}</p>
          <h2 id="commitment-heading">{copy.commitmentTitle}</h2>
          <p className={styles.contentNote}>{copy.commitmentDescription}</p>
        </div>
        <div className={styles.commitmentGrid}>
          {copy.commitments.map((commitment, index) => (
            <Reveal className={styles.commitmentCard} delay={index * 0.06} key={commitment.title}>
              <h3>{commitment.title}</h3>
              <p>{commitment.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {copy.disclaimer && (
        <section className={styles.disclaimer}>
          <p>{copy.disclaimer}</p>
        </section>
      )}
    </main>
  );
}