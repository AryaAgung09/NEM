"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

export function Businesses() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].businesses;
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="businesses-heading"
      className={styles.businesses}
      id="bisnis"
    >
      <div className={styles.businessesHeader}>
        <div>
          <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
          <h2 id="businesses-heading">{copy.title}</h2>
        </div>
        <span className={styles.businessesCount}>01 — 05</span>
      </div>

      <div className={styles.businessesLayout}>
        <ol className={styles.businessList}>
          {copy.items.map((item, index) => (
            <li key={item.title}>
              <button
                aria-controls={
                  activeIndex === index
                    ? `business-description-${index}`
                    : undefined
                }
                aria-expanded={activeIndex === index}
                className={
                  activeIndex === index
                    ? styles.businessItemActive
                    : styles.businessItem
                }
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                type="button"
              >
                <span className={styles.businessItemNumber}>
                  0{index + 1}
                </span>
                <span className={styles.businessItemText}>
                  <span className={styles.businessItemTitle}>
                    {item.title}
                  </span>
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.span
                        animate={{ opacity: 1, height: "auto" }}
                        className={styles.businessDescription}
                        exit={{ opacity: 0, height: 0 }}
                        initial={{ opacity: 0, height: 0 }}
                        id={`business-description-${index}`}
                        transition={{ duration: reducedMotion ? 0 : 0.24 }}
                      >
                        {item.description}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <Plus
                  aria-hidden="true"
                  className={styles.businessItemIcon}
                  size={18}
                />
              </button>
            </li>
          ))}
        </ol>

        <div className={styles.businessVisual} aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              className={styles.businessImage}
              exit={{ opacity: 0, clipPath: "inset(0% 0% 0% 100%)" }}
              initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
              key={copy.items[activeIndex].title}
              transition={{
                duration: reducedMotion ? 0 : 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <Image
                alt={copy.items[activeIndex].image.alt}
                fill
                sizes="(max-width: 800px) 100vw, 52vw"
                src={copy.items[activeIndex].image.src}
              />
            </motion.div>
          </AnimatePresence>
          <span className={styles.businessVisualLabel}>
            {copy.items[activeIndex].title}
          </span>
        </div>
      </div>
    </section>
  );
}
