"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "@/components/home/home.module.css";

export default function CareerPage() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].career;

  return (
    <main>
      <section
        aria-labelledby="career-page-heading"
        className={styles.career}
      >
        <Image
          alt={copy.image.alt}
          className={styles.careerImage}
          fill
          priority
          sizes="100vw"
          src={copy.image.src}
        />
        <div className={styles.careerOverlay} />
        <div className={styles.careerContent}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1 className={styles.careerLandingTitle} id="career-page-heading">
            {copy.landingTitle}
          </h1>
          <p className={styles.careerDescription}>{copy.landingDescription}</p>
          <Link className={styles.careerAction} href="/#karir">
            <ArrowLeft aria-hidden="true" size={18} />
            {copy.backHome}
          </Link>
        </div>
      </section>
    </main>
  );
}
