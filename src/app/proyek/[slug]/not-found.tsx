"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { companyPageCopy } from "@/data/company-pages";
import styles from "@/components/company/company.module.css";

export default function ProjectNotFound() {
  const { locale } = useLocale();
  const copy = companyPageCopy[locale].projects;

  return (
    <main>
      <section className={styles.detailNotFound}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1>{locale === "id" ? "Proyek tidak ditemukan." : "Project not found."}</h1>
        <p>
          {locale === "id"
            ? "Halaman yang Anda cari tidak tersedia. Jelajahi kembali seluruh portofolio proyek kami."
            : "The page you are looking for is unavailable. Explore our project portfolio instead."}
        </p>
        <Link href="/proyek">
          <ArrowLeft aria-hidden="true" size={17} />
          {copy.explore}
        </Link>
      </section>
    </main>
  );
}