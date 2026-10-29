"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HorizontalScroll, Parallax, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { companyPageCopy } from "@/data/company-pages";
import { images } from "@/data/media";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

export function AboutPage() {
  const { locale } = useLocale();
  const copy = companyPageCopy[locale].about;
  const businessCopy = companyPageCopy[locale].businesses;

  return (
    <main>
      <PageHero
        action={{
          label: businessCopy.explore,
          href: "/bisnis-kami",
        }}
        description={copy.description}
        eyebrow={copy.eyebrow}
        image={copy.image}
        title={copy.title}
      />

      <section
        aria-labelledby="about-direction-heading"
        className={styles.direction}
        id="visi-misi"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrowDark}>{copy.visionMissionEyebrow}</p>
          <h2 id="about-direction-heading">{copy.visionTitle} &amp; {copy.missionTitle}</h2>
        </div>
        <div className={styles.directionGrid}>
          <Reveal className={styles.directionCard}>
            <span className={styles.cardIndex}>01</span>
            <h3>{copy.visionTitle}</h3>
            <p>{copy.vision}</p>
          </Reveal>
          <Reveal className={styles.directionCard} delay={0.1}>
            <span className={styles.cardIndex}>02</span>
            <h3>{copy.missionTitle}</h3>
            <ul>
              {copy.missions.map((mission) => <li key={mission}>{mission}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="company-values-heading"
        className={styles.values}
        id="nilai"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.valuesEyebrow}</p>
          <h2 id="company-values-heading">{copy.valuesTitle}</h2>
        </div>
        <div className={styles.valuesGrid}>
          {copy.values.map((value, index) => (
            <Reveal className={styles.valueCard} delay={index * 0.06} key={value.title}>
              <span className={styles.cardIndex}>0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="history-heading" className={styles.history}>
        <div className={styles.historyHeading}>
          <div>
            <p className={styles.eyebrow}>{copy.historyEyebrow}</p>
            <h2 id="history-heading">{copy.historyTitle}</h2>
            <p className={styles.contentNote}>{copy.historyNote}</p>
          </div>
          <span>{copy.historyHint} <ArrowUpRight aria-hidden="true" size={16} /></span>
        </div>
        <HorizontalScroll
          className={styles.historyScroll}
          trackClassName={styles.historyTrack}
        >
          {copy.milestones.map((milestone, index) => (
            <article className={styles.historyCard} key={milestone.period}>
              <span className={styles.historyNumber}>0{index + 1}</span>
              <span className={styles.historyPeriod}>{milestone.period}</span>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </HorizontalScroll>
      </section>

      <section
        aria-labelledby="leadership-heading"
        className={styles.leadership}
        id="manajemen"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrowDark}>{copy.leadershipEyebrow}</p>
          <h2 id="leadership-heading">{copy.leadershipTitle}</h2>
          <p className={styles.contentNoteDark}>{copy.leadershipNote}</p>
        </div>
        <div className={styles.leadershipGrid}>
          {copy.leaders.map((leader, index) => (
            <Reveal className={styles.leaderCard} delay={index * 0.08} key={leader.role}>
              <Parallax className={styles.leaderPhoto} distance={16}>
                <Image
                  alt={leader.image.alt}
                  fill
                  sizes="(max-width: 700px) 90vw, 33vw"
                  src={leader.image.src}
                />
              </Parallax>
              <span className={styles.cardIndex}>0{index + 1}</span>
              <h3>{leader.role}</h3>
              <p>{leader.focus}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="governance-heading"
        className={styles.governance}
        id="tata-kelola"
      >
        <div className={styles.governanceIntro}>
          <p className={styles.eyebrow}>{copy.governanceEyebrow}</p>
          <h2 id="governance-heading">{copy.governanceTitle}</h2>
        </div>
        <div className={styles.governanceList}>
          {copy.governance.map((item, index) => (
            <details className={styles.governanceItem} key={item.title}>
              <summary>
                <span>0{index + 1}</span>
                <strong>{item.title}</strong>
                <span aria-hidden="true" className={styles.governanceIcon}>+</span>
              </summary>
              <p>{item.description}</p>
            </details>
          ))}
        </div>
      </section>

      <section aria-label={businessCopy.eyebrow} className={styles.aboutCta}>
        <Parallax className={styles.aboutCtaMedia} distance={20}>
          <Image
            alt={images.openPitMine.alt}
            fill
            sizes="100vw"
            src={images.openPitMine.src}
          />
        </Parallax>
        <div className={styles.aboutCtaShade} />
        <div className={styles.aboutCtaContent}>
          <p className={styles.eyebrow}>{businessCopy.eyebrow}</p>
          <h2>{businessCopy.title}</h2>
          <Link href="/bisnis-kami">
            {businessCopy.explore}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
