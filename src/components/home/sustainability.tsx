"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

export function Sustainability() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].sustainability;
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeSlide = copy.slides[activeIndex];

  const changeSlide = (direction: -1 | 1) => {
    setActiveIndex(
      (index) => (index + direction + copy.slides.length) % copy.slides.length,
    );
  };

  return (
    <section
      aria-labelledby="sustainability-heading"
      className={styles.sustainability}
      id="keberlanjutan"
    >
      <div className={styles.sustainabilityHeader}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 id="sustainability-heading">{copy.title}</h2>
      </div>

      <div className={styles.sustainabilityLayout}>
        <div className={styles.sustainabilityVisual}>
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className={styles.sustainabilityImage}
              exit={{ opacity: 0, scale: reducedMotion ? 1 : 1.025 }}
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.025 }}
              key={activeSlide.title}
              transition={{ duration: reducedMotion ? 0 : 0.4 }}
            >
              <Image
                alt={activeSlide.image.alt}
                fill
                sizes="(max-width: 800px) 100vw, 58vw"
                src={activeSlide.image.src}
              />
            </motion.div>
          </AnimatePresence>
          <span className={styles.sustainabilityImageIndex}>
            0{activeIndex + 1} <span>/ 0{copy.slides.length}</span>
          </span>
        </div>

        <div className={styles.sustainabilityDetails}>
          <div className={styles.sustainabilitySlideContent} aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : -14 }}
                key={activeSlide.title}
                transition={{ duration: reducedMotion ? 0 : 0.3 }}
              >
                <h3>{activeSlide.title}</h3>
                <p>{activeSlide.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.sustainabilityPagination}>
            {copy.slides.map((slide, index) => (
              <button
                aria-label={`${String(index + 1).padStart(2, "0")}: ${slide.title}`}
                aria-pressed={activeIndex === index}
                className={
                  activeIndex === index
                    ? styles.sustainabilityPageActive
                    : styles.sustainabilityPage
                }
                key={slide.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span>0{index + 1}</span>
                <span>{slide.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.sustainabilityControls}>
            <span>
              0{activeIndex + 1} <span>/ 0{copy.slides.length}</span>
            </span>
            <div>
              <button
                aria-label={copy.previous}
                onClick={() => changeSlide(-1)}
                type="button"
              >
                <ArrowLeft aria-hidden="true" size={18} />
              </button>
              <button
                aria-label={copy.next}
                onClick={() => changeSlide(1)}
                type="button"
              >
                <ArrowRight aria-hidden="true" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
