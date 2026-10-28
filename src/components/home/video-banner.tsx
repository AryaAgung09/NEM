"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Parallax } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import { images, videos } from "@/data/media";
import styles from "./home.module.css";

const VideoModal = dynamic(
  () => import("./video-modal").then((module) => module.VideoModal),
  { ssr: false },
);

export function VideoBanner() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].videoBanner;
  const [modalOpen, setModalOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <>
      <section
        className={styles.videoBanner}
        aria-labelledby="video-banner-heading"
      >
        <div className={styles.videoBannerMedia}>
          <Parallax className={styles.videoBannerParallax} distance={45}>
            <Image
              alt={images.openPitMine.alt}
              className={styles.videoBannerImage}
              fill
              sizes="100vw"
              src={images.openPitMine.src}
            />
          </Parallax>
        </div>
        <div className={styles.videoBannerShade} aria-hidden="true" />
        <div className={styles.videoBannerContent}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="video-banner-heading">{copy.title}</h2>
          <button
            className={styles.watchButton}
            onClick={() => setModalOpen(true)}
            type="button"
          >
            <span className={styles.playIcon}>
              <Play aria-hidden="true" fill="currentColor" size={16} />
            </span>
            {copy.watch}
            <ArrowUpRight aria-hidden="true" size={18} />
          </button>
        </div>
      </section>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.modalLoading}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.18 }}
          >
            <VideoModal
              onClose={() => setModalOpen(false)}
              poster={videos.mineOperations.poster}
              src={videos.mineOperations.src}
              title={copy.videoTitle}
              closeLabel={copy.close}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
