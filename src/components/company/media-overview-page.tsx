"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, Video, Image as ImageIcon, Tag, MessageSquare } from "lucide-react";
import { HorizontalScroll, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { mediaPageCopy, type MediaCategory } from "@/data/media-pages";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";
import { useState, useMemo } from "react";

export function MediaOverviewPage() {
  const { locale } = useLocale();
  const copy = mediaPageCopy[locale];
  const heroImage = copy.image;

  const [activeCategory, setActiveCategory] = useState<MediaCategory>("semua");
  const categories: MediaCategory[] = ["semua", "berita", "pengumuman", "keberlanjutan", "investor", "operasional"];

  const filteredItems = useMemo(() => {
    if (activeCategory === "semua") return copy.items;
    return copy.items.filter(item => item.category === activeCategory);
  }, [activeCategory, copy.items]);

  return (
    <main>
      <PageHero
        action={{ label: copy.cta.buttonText, href: copy.cta.buttonLink }}
        description={copy.description}
        eyebrow={copy.eyebrow}
        image={heroImage}
        title={copy.title}
      />

      <section aria-labelledby="media-filters-heading" className={styles.filters}>
        <div className={styles.filtersContainer}>
          <div className={styles.filtersHeading}>
            <Filter aria-hidden="true" size={16} />
            <span className={styles.filterLabel}>{copy.gallery.filterLabel}</span>
          </div>
          <div className={styles.filterChips} role="group" aria-label={copy.gallery.filterLabel}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterChip} ${activeCategory === category ? styles.active : ""}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {copy.categories[category]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="media-grid-heading" className={styles.mediaGrid}>
        <div className={styles.mediaGridHeading}>
          <p className={styles.eyebrowDark}>{copy.eyebrow}</p>
          <h2 id="media-grid-heading">
            {locale === "id"
              ? `Menampilkan ${filteredItems.length} dari ${copy.items.length} konten`
              : `Showing ${filteredItems.length} of ${copy.items.length} items`}
          </h2>
        </div>
        <HorizontalScroll
          className={styles.mediaScroll}
          trackClassName={styles.mediaTrack}
        >
          {filteredItems.map((item, index) => (
            <article className={styles.mediaCard} key={item.slug} data-index={index}>
              <Link
                aria-label={`${copy.detail.relatedTitle}: ${item.title}`}
                className={styles.mediaCardImage}
                href={`/media-informasi/${item.slug}`}
              >
                <div className={styles.mediaCardMedia}>
                  {item.type === "video" && item.video && (
                    <div className={styles.videoOverlay}>
                      <Video aria-hidden="true" size={32} />
                    </div>
                  )}
                  {item.type === "foto" && (
                    <div className={styles.fotoOverlay}>
                      <ImageIcon aria-hidden="true" size={32} />
                    </div>
                  )}
                  <Image
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 700px) 82vw, 35vw"
                    src={item.image.src}
                  />
                </div>
                <div className={styles.mediaCardMeta}>
                  <span className={`${styles.mediaTag} ${styles[item.category]}`}>
                    {copy.categories[item.category]}
                  </span>
                  <span className={styles.mediaType}>
                    {item.type === "video" ? (
                      <>
                        <Video aria-hidden="true" size={12} />
                        {locale === "id" ? "Video" : "Video"}
                      </>
                    ) : item.type === "foto" ? (
                      <>
                        <ImageIcon aria-hidden="true" size={12} />
                        {locale === "id" ? "Foto" : "Photo"}
                      </>
                    ) : item.type === "pengumuman" ? (
                      <>
                        <MessageSquare aria-hidden="true" size={12} />
                        {locale === "id" ? "Pengumuman" : "Announcement"}
                      </>
                    ) : (
                      <>
                        <Tag aria-hidden="true" size={12} />
                        {locale === "id" ? "Artikel" : "Article"}
                      </>
                    )}
                  </span>
                </div>
              </Link>
              <div className={styles.mediaCardBody}>
                <div className={styles.mediaCardMetaBottom}>
                  <time dateTime={item.date}>{item.date}</time>
                  <span className={styles.mediaReadTime}>{item.readTime}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <Link href={`/media-informasi/${item.slug}`} className={styles.mediaCardLink}>
                  {locale === "id" ? "Baca selengkapnya" : "Read more"}
                  <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </HorizontalScroll>
      </section>

      <section aria-labelledby="gallery-heading" className={styles.gallery}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.gallery.eyebrow}</p>
          <h2 id="gallery-heading">{copy.gallery.title}</h2>
          <p className={styles.contentNote}>{copy.gallery.description}</p>
        </div>
        <HorizontalScroll
          className={styles.galleryScroll}
          trackClassName={styles.galleryTrack}
        >
          {copy.gallery.items.map((item, index) => (
            <Reveal className={styles.galleryCard} delay={index * 0.04} key={item.id}>
              <div className={styles.galleryMedia}>
                {item.type === "video" && item.video && (
                  <div className={styles.videoOverlayLarge}>
                    <Video aria-hidden="true" size={40} />
                  </div>
                )}
                <Image
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 800px) 90vw, 45vw"
                  src={item.image.src}
                />
              </div>
              <div className={styles.galleryCardBody}>
                <span className={`${styles.galleryTag} ${styles[item.category]}`}>
                  {copy.categories[item.category]}
                </span>
                <h3>{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </HorizontalScroll>
      </section>

      <section className={styles.mediaCta}>
        <div className={styles.ctaContent}>
          <p className={styles.eyebrow}>{copy.cta.eyebrow}</p>
          <h2>{copy.cta.title}</h2>
          <p>{copy.cta.description}</p>
          <Link href={copy.cta.buttonLink} className={styles.ctaButton}>
            <ArrowUpRight aria-hidden="true" size={18} />
            {copy.cta.buttonText}
          </Link>
        </div>
        <div className={styles.ctaShade} />
      </section>
    </main>
  );
}