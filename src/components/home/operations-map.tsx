"use client";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

const OperationsMapCanvas = dynamic(
  () =>
    import("./operations-map-canvas").then(
      (module) => module.OperationsMapCanvas,
    ),
  {
    ssr: false,
    loading: () => (
      <div className={styles.mapLoading} role="status">
        <span className={styles.mapLoadingPulse} />
      </div>
    ),
  },
);

export function OperationsMap() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].operations;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { ref, inView } = useInView({
    rootMargin: "300px 0px",
    triggerOnce: true,
  });

  return (
    <section
      aria-labelledby="operations-heading"
      className={styles.operations}
      id="operasi"
      ref={ref}
    >
      <div className={styles.operationsHeader}>
        <div>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="operations-heading">{copy.title}</h2>
        </div>
        <p>{copy.description}</p>
      </div>

      {inView ? (
        <OperationsMapCanvas
          fallbackTitle={copy.fallbackTitle}
          fallbackDescription={copy.fallback}
          sites={copy.sites}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      ) : (
        <div
          aria-label={locale === "id" ? "Memuat peta operasi" : "Loading operations map"}
          className={styles.mapLoading}
          role="status"
        >
          <span className={styles.mapLoadingPulse} />
        </div>
      )}

      <div className={styles.operationsSites}>
        {copy.sites.map((site, index) => (
          <button
            aria-pressed={selectedIndex === index}
            className={
              selectedIndex === index
                ? styles.operationSiteActive
                : styles.operationSite
            }
            key={site.name}
            onClick={() => setSelectedIndex(index)}
            type="button"
          >
            <MapPin aria-hidden="true" size={16} />
            <span>{site.name}</span>
            <ArrowUpRight aria-hidden="true" size={15} />
          </button>
        ))}
      </div>
    </section>
  );
}
