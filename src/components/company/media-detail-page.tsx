"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, Tag, Share2, Copy, Video, Image as ImageIcon, MessageSquare } from "lucide-react";
import { HorizontalScroll, Reveal, SplitText } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { mediaPageCopy, mediaItemsId, mediaItemsEn, type MediaItem } from "@/data/media-pages";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";
import { useState } from "react";

function getRelatedItems(allItems: MediaItem[], currentSlug: string, limit = 3) {
  const current = allItems.find(i => i.slug === currentSlug);
  if (!current) return allItems.slice(0, limit);
  return allItems
    .filter(i => i.slug !== currentSlug && i.category === current.category)
    .slice(0, limit);
}

export function MediaDetailPage({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const copy = mediaPageCopy[locale];
  const allItems = locale === "id" ? mediaItemsId : mediaItemsEn;
  const item = allItems.find(i => i.slug === slug) || allItems[0];
  const relatedItems = getRelatedItems(allItems, slug);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy:", e);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.excerpt,
          url: window.location.href,
        });
      } catch (e) {
        if ((e as Error).name !== "AbortError") console.error("Share failed:", e);
      }
    }
  };

  return (
    <main>
      <PageHero
        action={{ label: copy.detail.backToMedia, href: "/media-informasi" }}
        description={item.excerpt}
        eyebrow={copy.eyebrow}
        image={item.image}
        title={item.title}
      />

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <div className={styles.articleMeta}>
            <span className={`${styles.articleCategory} ${styles[item.category]}`}>
              {copy.categories[item.category]}
            </span>
            <span className={styles.articleType}>
              {item.type === "video" ? (
                <>
                  <Video aria-hidden="true" size={14} />
                  {locale === "id" ? "Video" : "Video"}
                </>
              ) : item.type === "foto" ? (
                <>
                  <ImageIcon aria-hidden="true" size={14} />
                  {locale === "id" ? "Foto" : "Photo"}
                </>
              ) : item.type === "pengumuman" ? (
                <>
                  <MessageSquare aria-hidden="true" size={14} />
                  {locale === "id" ? "Pengumuman" : "Announcement"}
                </>
              ) : (
                <>
                  <Tag aria-hidden="true" size={14} />
                  {locale === "id" ? "Artikel" : "Article"}
                </>
              )}
            </span>
            <div className={styles.articleMetaBottom}>
              <time dateTime={item.date}>
                <Calendar aria-hidden="true" size={14} />
                {item.date}
              </time>
              <span>
                <Clock aria-hidden="true" size={14} />
                {item.readTime}
              </span>
              <span>
                <MessageSquare aria-hidden="true" size={14} />
                {item.author}
              </span>
            </div>
          </div>
          <h1>
            <SplitText className={styles.articleTitle} text={item.title} />
          </h1>
          <div className={styles.articleTags}>
            {item.tags.map((tag, i) => (
              <span key={i} className={styles.articleTag}>{tag}</span>
            ))}
          </div>
        </header>

        <div className={styles.articleActions}>
          <button onClick={handleShare} className={styles.shareButton} aria-label={copy.detail.shareTitle}>
            <Share2 aria-hidden="true" size={18} />
            <span>{copy.detail.shareTitle}</span>
          </button>
          <button onClick={handleCopyLink} className={styles.copyButton} aria-label={copy.detail.shareLabel}>
            <Copy aria-hidden="true" size={18} />
            <span>{copied ? (locale === "id" ? "Tersalin!" : "Copied!") : copy.detail.shareLabel}</span>
          </button>
        </div>

        {item.type === "video" && item.video && (
          <div className={styles.articleVideo}>
            <video
              controls
              poster={item.image.src}
              preload="metadata"
              playsInline
            >
              <source src={item.video.src} type="video/mp4" />
              {locale === "id" ? "Browser Anda tidak mendukung video." : "Your browser does not support the video tag."}
            </video>
          </div>
        )}

        <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: item.content }} />

        {item.tags.length > 0 && (
          <footer className={styles.articleFooterTags}>
            <Tag aria-hidden="true" size={16} />
            <div>
              {item.tags.map((tag, i) => (
                <span key={i} className={styles.footerTag}>{tag}</span>
              ))}
            </div>
          </footer>
        )}

        {relatedItems.length > 0 && (
          <section aria-labelledby="related-heading" className={styles.related}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{copy.detail.relatedTitle}</p>
              <h2 id="related-heading">{copy.detail.relatedTitle}</h2>
            </div>
            <HorizontalScroll
              className={styles.relatedScroll}
              trackClassName={styles.relatedTrack}
            >
              {relatedItems.map((related, index) => (
                <Reveal className={styles.relatedCard} delay={index * 0.06} key={related.slug}>
                  <Link href={`/media-informasi/${related.slug}`} className={styles.relatedCardLink}>
                    <div className={styles.relatedCardImage}>
                      <Image
                        alt={related.image.alt}
                        fill
                        sizes="(max-width: 700px) 82vw, 35vw"
                        src={related.image.src}
                      />
                    </div>
                    <div className={styles.relatedCardBody}>
                      <span className={`${styles.relatedCardCategory} ${styles[related.category]}`}>
                        {copy.categories[related.category]}
                      </span>
                      <h3>{related.title}</h3>
                      <p>{related.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </HorizontalScroll>
          </section>
        )}
      </article>

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