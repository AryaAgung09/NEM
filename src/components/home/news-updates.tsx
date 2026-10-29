"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

export function NewsUpdates() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].newsUpdates;
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="news-updates-heading"
      className={styles.newsUpdates}
      id="berita"
    >
      <div className={styles.newsUpdatesHeader}>
        <div>
          <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
          <h2 id="news-updates-heading">{copy.title}</h2>
        </div>
        <Link className={styles.newsViewAll} href="/#berita">
          {copy.viewAll}
          <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
      </div>

      <div className={styles.newsUpdatesLayout}>
        <ol className={styles.newsUpdatesList}>
          {copy.items.map((item, index) => (
            <li key={item.title}>
              <Link
                aria-current={activeIndex === index ? "true" : undefined}
                className={
                  activeIndex === index
                    ? styles.newsUpdateActive
                    : styles.newsUpdate
                }
                href={item.href}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <time className={styles.newsUpdateDate}>{item.date}</time>
                <span className={styles.newsUpdateTitle}>{item.title}</span>
                <ArrowRight
                  aria-hidden="true"
                  className={styles.newsUpdateArrow}
                  size={20}
                />
              </Link>
            </li>
          ))}
        </ol>

        <div className={styles.newsPreview} aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className={styles.newsPreviewImage}
              exit={{ opacity: 0, scale: reducedMotion ? 1 : 1.02 }}
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.02 }}
              key={copy.items[activeIndex].title}
              transition={{ duration: reducedMotion ? 0 : 0.35 }}
            >
              <Image
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 42vw"
                src={copy.items[activeIndex].image.src}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
