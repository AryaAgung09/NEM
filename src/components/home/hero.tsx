"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Magnetic, SplitText } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import { images, videos } from "@/data/media";
import styles from "./home.module.css";

const HeroNewsSlider = dynamic(
  () => import("./hero-news-slider").then((module) => module.HeroNewsSlider),
  { ssr: false },
);

export function Hero() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].hero;
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.heroMedia} aria-hidden="true">
        {videoFailed ? (
          <Image
            alt=""
            className={styles.heroFallback}
            fill
            priority
            sizes="100vw"
            src={images.miningTruck.src}
          />
        ) : (
          <video
            autoPlay
            className={styles.heroVideo}
            loop
            muted
            playsInline
            poster={videos.mineOperations.poster}
            preload="metadata"
            onError={() => setVideoFailed(true)}
          >
            <source src={videos.mineOperations.src} type="video/mp4" />
          </video>
        )}
      </div>
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1 id="home-hero-title">
          <SplitText text={copy.title} className={styles.heroTitle} />
        </h1>
        <p className={styles.heroDescription}>{copy.description}</p>
        <div className={styles.heroActions}>
          <Magnetic className={styles.magneticWrap} strength={0.14}>
            <Link className={styles.primaryButton} href="/#bisnis">
              {copy.primaryCta}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </Magnetic>
          <Link className={styles.secondaryButton} href="/#tentang">
            {copy.secondaryCta}
          </Link>
        </div>
      </div>

      <div className={styles.heroBottom}>
        <HeroNewsSlider label={copy.newsLabel} items={copy.news} />
        <a className={styles.scrollHint} href="#tentang">
          <span>{copy.scroll}</span>
          <ArrowDown aria-hidden="true" size={16} />
        </a>
      </div>
    </section>
  );
}
