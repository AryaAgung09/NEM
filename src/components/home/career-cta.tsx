"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

export function CareerCta() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].career;

  return (
    <section aria-labelledby="career-heading" className={styles.career} id="karir">
      <Image
        alt={copy.image.alt}
        className={styles.careerImage}
        fill
        sizes="100vw"
        src={copy.image.src}
      />
      <div className={styles.careerOverlay} />
      <div className={styles.careerContent}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 id="career-heading">{copy.title}</h2>
        <p className={styles.careerDescription}>{copy.description}</p>
        <Link className={styles.careerAction} href="/karir">
          {copy.action}
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}
