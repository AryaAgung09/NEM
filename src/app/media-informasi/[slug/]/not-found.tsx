"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { mediaPageCopy } from "@/data/media-pages";
import styles from "@/components/company/company.module.css";

export default function MediaNotFound() {
  const { locale } = useLocale();
  const copy = mediaPageCopy[locale];

  return (
    <main>
      <section className={styles.detailNotFound}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1>{locale === "id" ? "Konten tidak ditemukan." : "Content not found."}</h1>
        <p>
          {locale === "id"
            ? "Halaman yang Anda cari tidak tersedia. Jelajahi kembali seluruh media & informasi kami."
            : "The page you are looking for is unavailable. Explore our media & information instead."}
        </p>
        <Link href="/media-informasi">
          <ArrowLeft aria-hidden="true" size={17} />
          {copy.detail.backToMedia}
        </Link>
      </section>
    </main>
  );
}