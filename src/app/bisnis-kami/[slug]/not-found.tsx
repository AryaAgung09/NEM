"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { companyPageCopy } from "@/data/company-pages";
import styles from "@/components/company/company.module.css";

export default function BusinessNotFound() {
  const { locale } = useLocale();
  const copy = companyPageCopy[locale].businesses;

  return (
    <main>
      <section className={styles.detailNotFound}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1>{locale === "id" ? "Lini bisnis tidak ditemukan." : "Business line not found."}</h1>
        <p>
          {locale === "id"
            ? "Halaman yang Anda cari tidak tersedia. Jelajahi kembali seluruh lini bisnis kami."
            : "The page you are looking for is unavailable. Explore our business lines instead."}
        </p>
        <Link href="/bisnis-kami">
          <ArrowLeft aria-hidden="true" size={17} />
          {copy.allBusinesses}
        </Link>
      </section>
    </main>
  );
}
