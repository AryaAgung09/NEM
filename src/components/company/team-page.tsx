"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Users, UserCircle, Building2, Award } from "lucide-react";
import { HorizontalScroll, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { dictionary } from "@/data/dictionary";
import { images } from "@/data/media";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

const direksi = [
  {
    name: "Budi Santoso",
    role: "Direktur Utama",
    period: "2020 – Sekarang",
    bio: "Memimpin transformasi NME menjadi perusahaan pertambangan berkelanjutan dengan fokus pada dekarbonisasi dan digitalisasi operasional.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=675&h=900&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Siti Rahayu",
    role: "Direktur Operasi",
    period: "2021 – Sekarang",
    bio: "Mengelola efisiensi operasional 6 site tambang dan pengolahan, menerapkan teknologi autonomous haulage dan predictive maintenance.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=675&h=900&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Andi Wijaya",
    role: "Direktur Keuangan",
    period: "2019 – Sekarang",
    bio: "Mengelola struktur modal optimal, memimpin penggalangan dana hijau (green financing) untuk proyek dekarbonisasi.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=675&h=900&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Dewi Lestari",
    role: "Direktur SDM & HSE",
    period: "2022 – Sekarang",
    bio: "Mengembangkan budaya Zero Harm, program pengembangan kompetensi, dan strategi retensi talenta teknis.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=675&h=900&fit=crop&crop=faces&auto=format&q=80",
  },
];

const komisaris = [
  {
    name: "Prof. Dr. Ir. Hartono Wijaya",
    role: "Presiden Komisaris",
    period: "2018 – Sekarang",
    bio: "Ahli geologi dan pertambangan dengan pengalaman 35+ tahun di industri dan akademisi. Mantan Rektor ITB.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=675&h=900&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Drs. H. Agus Supriyanto, M.M.",
    role: "Komisaris Independen",
    period: "2020 – Sekarang",
    bio: "Praktisi keuangan dan tata kelola korporasi. Mantan Komisaris BUMN energi dan perbankan.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=675&h=900&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Ir. Sri Wahyuni, M.T.",
    role: "Komisaris",
    period: "2022 – Sekarang",
    bio: "Ahli lingkungan dan keberlanjutan. Mantan Direktur Jenderal Pengendalian Pencemaran KLHK.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=675&h=900&fit=crop&crop=faces&auto=format&q=80",
  },
];

const karyawanStats = [
  { label: "Total Karyawan", value: "2.450+", icon: Users },
  { label: "Tenaga Ahli & Teknis", value: "68%", icon: UserCircle },
  { label: "Lokasi Operasional", value: "6 Site", icon: Building2 },
  { label: "Penghargaan HSE", value: "12+", icon: Award },
];

export function TeamPage() {
  const { locale } = useLocale();
  const copy = dictionary[locale];
  const t = copy.about;

  return (
    <main>
      <PageHero
        action={{ label: t.team.direksi, href: "/tentang-kami" }}
        description={t.team.description}
        eyebrow={t.eyebrow}
        image={images.landscape}
        title={locale === "id" ? "Tim Kami" : "Our Team"}
      />

      <section aria-labelledby="team-stats-heading" className={styles.stats}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrowDark}>{t.team.title}</p>
          <h2 id="team-stats-heading">{locale === "id" ? "Karyawan dalam Angka" : "Team in Numbers"}</h2>
        </div>
        <div className={styles.statsGrid}>
          {karyawanStats.map((stat, index) => (
            <Reveal className={styles.statCard} delay={index * 0.08} key={stat.label}>
              <div className={styles.statIcon}>
                <stat.icon aria-hidden="true" size={28} />
              </div>
              <div className={styles.statValue}>{stat.value}</div>
              <p className={styles.statLabel}>{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="direksi-heading" className={styles.leaders}>
        <div className={styles.leadersHead}>
          <p className={styles.leadersEyebrow}>{t.team.direksi}</p>
          <h2 id="direksi-heading">{locale === "id" ? "Pemimpin Kami" : "Our Leaders"}</h2>
          <p className={styles.leadersIntro}>
            {locale === "id"
              ? "Empat direktur yang memimpin strategi, operasi, keuangan, serta SDM dan keselamatan kerja NME."
              : "Four directors leading NME's strategy, operations, finance, and people & safety agenda."}
          </p>
        </div>
        <div className={styles.leadersGrid}>
          {direksi.map((member, index) => (
            <Reveal className={styles.leaderCard} delay={index * 0.08} key={member.name}>
              <div className={styles.leaderPortrait}>
                <Image
                  alt={member.name}
                  src={member.photo}
                  width={675}
                  height={900}
                  className={styles.leaderPhoto}
                  unoptimized
                />
              </div>
              <div className={styles.leaderInfo}>
                <h3>{member.name}</h3>
                <p className={styles.leaderRole}>{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="komisaris-heading" className={styles.komisaris}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrowDark}>{t.team.komisaris}</p>
          <h2 id="komisaris-heading">{t.team.komisaris}</h2>
        </div>
        <HorizontalScroll
          className={styles.teamScroll}
          trackClassName={styles.teamTrack}
        >
          {komisaris.map((member, index) => (
            <Reveal className={styles.teamCard} delay={index * 0.1} key={member.name}>
              <div className={styles.teamCardPhotoWrapper}>
                <Image
                  alt={member.name}
                  src={member.photo}
                  width={300}
                  height={300}
                  className={styles.teamCardPhoto}
                  unoptimized
                />
                <div className={styles.teamCardOverlay}>
                  <span className={styles.teamCardRole}>{member.role}</span>
                </div>
              </div>
              <div className={styles.teamCardBody}>
                <h3>{member.name}</h3>
                <p className={styles.teamCardPeriod}>{member.period}</p>
                <p>{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </HorizontalScroll>
      </section>

      <section className={styles.teamCta}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2>{locale === "id" ? "Bergabung dengan Tim Kami" : "Join Our Team"}</h2>
        <p>{locale === "id" ? "Kami selalu mencari talenta terbaik untuk bergabung dalam perjalanan NME menuju masa depan yang berkelanjutan." : "We're always looking for exceptional talent to join NME's journey toward a sustainable future."}</p>
        <Link href="/karir" className={styles.ctaButton}>
          {locale === "id" ? "Lihat Lowongan" : "View Openings"}
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </main>
  );
}