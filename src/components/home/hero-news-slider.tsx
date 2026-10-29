"use client";

import Link from "next/link";
import { Pause, Play, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import styles from "./home.module.css";

type NewsItem = {
  category: string;
  title: string;
};

type HeroNewsSliderProps = {
  label: string;
  items: NewsItem[];
};

export function HeroNewsSlider({ label, items }: HeroNewsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const toggleAutoplay = () => {
    if (!swiper) return;
    if (isPaused) swiper.autoplay.start();
    else swiper.autoplay.stop();
    setIsPaused(!isPaused);
  };

  return (
    <div className={styles.newsSlider}>
      <div className={styles.newsSliderHeader}>
        <span>{label}</span>
        <div className={styles.newsSliderControls}>
          <button
            aria-label={isPaused ? "Putar sorotan" : "Jeda sorotan"}
            className={styles.sliderPlayButton}
            onClick={toggleAutoplay}
            type="button"
          >
            {isPaused ? (
              <Play aria-hidden="true" size={14} />
            ) : (
              <Pause aria-hidden="true" size={14} />
            )}
          </button>
          <span className={styles.sliderDivider} />
          <span className={styles.sliderCount} aria-live="polite">
            0{activeIndex + 1}
            <span> / 0{items.length}</span>
          </span>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, A11y]}
        autoplay={
          reducedMotion
            ? false
            : { delay: 5200, disableOnInteraction: false }
        }
        loop
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
        slidesPerView={1}
        spaceBetween={18}
        className={styles.newsSwiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.title}>
            <Link
              className={styles.newsSlide}
              href={["/#bisnis", "/#tentang", "/#bisnis"][index]}
            >
              <span className={styles.newsCategory}>{item.category}</span>
              <span className={styles.newsTitle}>{item.title}</span>
              <ArrowUpRight
                aria-hidden="true"
                className={styles.newsArrow}
                size={17}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
