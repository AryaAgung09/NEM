"use client";

import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

const chartPaths = [
  "M4 45 C18 43 23 37 34 39 S52 29 62 32 S78 20 88 23 S103 12 116 14",
  "M4 33 C17 34 24 24 36 27 S51 19 63 22 S80 16 90 18 S106 11 116 13",
  "M4 43 C17 39 23 41 35 33 S52 35 62 26 S77 30 88 21 S104 22 116 11",
];

export function InvestorRelations() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].investor;

  return (
    <section
      aria-labelledby="investor-heading"
      className={styles.investor}
      id="investor"
    >
      <div className={styles.investorHeader}>
        <div>
          <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
          <h2 id="investor-heading">{copy.title}</h2>
        </div>
        <p className={styles.investorNote}>{copy.note}</p>
      </div>

      <div className={styles.investorMetrics}>
        {copy.metrics.map((metric, index) => (
          <article className={styles.investorMetric} key={metric.label}>
            <span className={styles.investorMetricLabel}>{metric.label}</span>
            <strong>{metric.value}</strong>
            <div className={styles.investorChart}>
              <svg
                aria-hidden="true"
                preserveAspectRatio="none"
                viewBox="0 0 120 54"
              >
                <path
                  className={styles.investorChartLine}
                  d={chartPaths[index]}
                />
              </svg>
            </div>
            <span className={styles.investorTrend}>
              <ArrowUpRight aria-hidden="true" size={14} />
              {metric.trend}
            </span>
          </article>
        ))}
      </div>

      <div className={styles.investorReport}>
        <span>{copy.reportStatus}</span>
        <button disabled type="button">
          {copy.report}
          <ArrowDownToLine aria-hidden="true" size={17} />
        </button>
      </div>
    </section>
  );
}
