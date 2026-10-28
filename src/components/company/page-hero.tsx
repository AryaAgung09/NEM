"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Parallax, SplitText } from "@/components/motion";
import type { ImageAsset } from "@/data/media";
import styles from "./company.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: ImageAsset;
  action?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  action,
}: PageHeroProps) {
  return (
    <section aria-label={eyebrow} className={styles.hero}>
      <Parallax className={styles.heroMedia} distance={36}>
        <Image
          alt={image.alt}
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src={image.src}
        />
      </Parallax>
      <div className={styles.heroShade} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>
          <SplitText className={styles.heroTitle} text={title} />
        </h1>
        <p className={styles.heroDescription}>{description}</p>
        {action && (
          <Link className={styles.heroAction} href={action.href}>
            {action.label}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        )}
      </div>
      <span className={styles.heroScroll}>
        <ArrowDown aria-hidden="true" size={15} />
      </span>
    </section>
  );
}
