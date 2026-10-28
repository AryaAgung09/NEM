"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

function GlowWord({
  children,
  index,
  total,
  progress,
  reducedMotion,
}: {
  children: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reducedMotion: boolean;
}) {
  const start = 0.08 + (index / total) * 0.72;
  const end = Math.min(start + 0.17, 1);
  const opacity = useTransform(
    progress,
    [start, end],
    reducedMotion ? [1, 1] : [0.28, 1],
  );
  const color = useTransform(
    progress,
    [start, end],
    reducedMotion ? ["#f5a623", "#f5a623"] : ["#77766f", "#f5a623"],
  );

  return (
    <motion.span className={styles.glowWord} style={{ color, opacity }}>
      {children}{" "}
    </motion.span>
  );
}

export function CompanyStatement() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].statement;
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start 82%", "end 25%"],
  });

  return (
    <section
      className={styles.statementSection}
      id="tentang"
      ref={section}
      aria-labelledby="company-statement-heading"
    >
      <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
      <h2 className={styles.statementText} id="company-statement-heading">
        <span className={styles.srOnly}>{copy.words.join(" ")}</span>
        <span aria-hidden="true">
          {copy.words.map((word, index) => (
            <GlowWord
              index={index}
              key={`${word}-${index}`}
              progress={scrollYProgress}
              reducedMotion={reducedMotion}
              total={copy.words.length}
            >
              {word}
            </GlowWord>
          ))}
        </span>
      </h2>
      <p className={styles.statementSupporting}>{copy.supporting}</p>
    </section>
  );
}
