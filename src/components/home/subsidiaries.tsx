"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

export function Subsidiaries() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].subsidiaries;
  const track = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateScrollState = useCallback(() => {
    const element = track.current;
    if (!element) return;
    setCanScrollBack(element.scrollLeft > 2);
    setCanScrollForward(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 2,
    );
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scrollCards = (direction: -1 | 1) => {
    const element = track.current;
    const card = element?.querySelector<HTMLElement>(
      `.${styles.subsidiaryCard}`,
    );
    if (!element || !card) return;
    element.scrollBy({
      left: direction * (card.offsetWidth + 22),
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="subsidiaries-heading"
      className={styles.subsidiaries}
      id="anak-usaha"
    >
      <div className={styles.subsidiariesHeader}>
        <div>
          <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
          <h2 id="subsidiaries-heading">{copy.title}</h2>
        </div>
        <div className={styles.carouselControls}>
          <button
            aria-label={locale === "id" ? "Geser ke kiri" : "Scroll left"}
            disabled={!canScrollBack}
            onClick={() => scrollCards(-1)}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button
            aria-label={locale === "id" ? "Geser ke kanan" : "Scroll right"}
            disabled={!canScrollForward}
            onClick={() => scrollCards(1)}
            type="button"
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>

      <div
        className={styles.subsidiariesTrack}
        onScroll={updateScrollState}
        ref={track}
        tabIndex={0}
        aria-label={copy.eyebrow}
      >
        {copy.items.map((item, index) => (
          <article className={styles.subsidiaryCard} key={item.name}>
            <div className={styles.subsidiaryImage}>
              <Image
                alt={item.image.alt}
                fill
                sizes="(max-width: 700px) 82vw, (max-width: 1100px) 46vw, 31vw"
                src={item.image.src}
              />
              <span className={styles.subsidiaryIndex}>
                0{index + 1} / 0{copy.items.length}
              </span>
            </div>
            <div className={styles.subsidiaryCardBody}>
              <div className={styles.subsidiaryCardHeading}>
                <span className={styles.subsidiaryLogoPlaceholder}>
                  {copy.logoPlaceholder}
                </span>
                <span className={styles.subsidiaryCategory}>
                  {item.category}
                </span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a className={styles.subsidiaryVisit} href={item.href}>
                {copy.visit}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
