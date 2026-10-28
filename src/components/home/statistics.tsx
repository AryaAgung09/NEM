"use client";

import { Counter, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

export function Statistics() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].statistics;

  return (
    <section
      className={styles.statistics}
      aria-labelledby="statistics-heading"
    >
      <div className={styles.statisticsHeader}>
        <div>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="statistics-heading">{copy.title}</h2>
        </div>
        <p className={styles.statisticsNote}>{copy.note}</p>
      </div>
      <div className={styles.statisticsGrid}>
        {copy.items.map((item, index) => (
          <Reveal className={styles.statisticCard} delay={index * 0.1} key={item.label}>
            <span className={styles.statisticIndex}>0{index + 1}</span>
            <Counter
              className={styles.statisticValue}
              end={item.value}
              suffix={item.suffix}
              duration={1.6}
            />
            <span className={styles.statisticLabel}>{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
