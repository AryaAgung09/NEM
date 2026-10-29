"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Flag, Target, TrendingUp, Sparkles } from "lucide-react";
import { HorizontalScroll, Parallax, Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { dictionary } from "@/data/dictionary";
import { images } from "@/data/media";
import { PageHero } from "./page-hero";
import styles from "./company.module.css";

const milestones = [
  {
    year: "2010",
    title: "Pendirian",
    description: "PT Nusantara Mineral Energi didirikan dengan visi menjadi mitra pertumbuhan Indonesia melalui pengelolaan sumber daya mineral yang bertanggung jawab.",
    image: images.landscape,
    highlights: ["Modal awal: Rp 500 M", "Fokus: Eksplorasi mineral", "Lokasi: Kalimantan Timur"],
    category: "fondasi",
  },
  {
    year: "2013",
    title: "Kontrak Karya Pertama",
    description: "Memperoleh Kontrak Karya (KK) penambangan mineral di Kalimantan Timur, menandai awal operasi komersial.",
    image: images.openPitMine,
    highlights: ["Luas area: 15.000 Ha", "Komoditas: Nikel & Kobalt", "Investasi: USD 200 M"],
    category: "ekspansi",
  },
  {
    year: "2015",
    title: "Operasi Penambangan Dimulai",
    description: "Operasi penambangan terbuka dimulai dengan kapasitas produksi 5 Juta Ton/tahun, menerapkan standar K3 internasional.",
    image: images.miningTruck,
    highlights: ["Zero fatalitas sejak awal", "ISO 45001 certified", "CSR: 5 desa binaan"],
    category: "operasional",
  },
  {
    year: "2018",
    title: "Fasilitas Pengolahan Sultra",
    description: "Pembangunan fasilitas pengolahan mineral (smelter) di Sulawesi Tenggara, mendukung program downstreaming nasional.",
    image: images.industrialFacility,
    highlights: ["Kapasitas: 60.000 Ton Ni/tahun", "Teknologi: HPAL", "Investasi: USD 1,2 M"],
    category: "ekspansi",
  },
  {
    year: "2020",
    title: "Transformasi Digital & Green Energy",
    description: "Meluncurkan Dashboard Operasional Terpadu dan memulai pengembangan PLTS Maluku Utara 150 MWp untuk dekarbonisasi operasional.",
    image: images.engineering,
    highlights: ["Platform IoT + AI", "PLTS + BESS 80 MW", "Target Net Zero 2050"],
    category: "transformasi",
  },
  {
    year: 2022,
    title: "Ekspansi Energi Terbarukan",
    description: "PLTS Maluku Utara beroperasi komersial, menyuplai 35% kebutuhan listrik operasional tambang dari energi surya.",
    image: images.solarEnergy,
    highlights: ["150 MWp + 80 MW BESS", "Pengurangan emisi 150 kt CO2e/th", "Green financing USD 300 M"],
    category: "transformasi",
  },
  {
    year: 2023,
    title: "Dashboard v2.0 & Autonomous Haulage",
    description: "Peluncuran platform digital v2.0 dengan predictive maintenance AI dan penerapan armada autonomous haulage pertama di site Kaltim.",
    image: images.engineering,
    highlights: ["Predictive maintenance AI", "5 unit autonomous truck", "Efisiensi BBM +15%"],
    category: "transformasi",
  },
  {
    year: 2024,
    title: "PROPER Hijau & Reklamasi 1.800 Ha",
    description: "Tiga site operasional menerima penghargaan PROPER Hijau. Akumulasi lahan direklamasi capai 1.800 Ha dengan program agroforestri komunitas.",
    image: images.reclamation,
    highlights: ["3 site PROPER Hijau", "1.800 Ha direklamasi", "800 KK terlibat agroforestri"],
    category: "kelestarian",
  },
  {
    year: 2025,
    title: "Net Zero Roadmap & Green Financing",
    description: "Meluncurkan Net Zero Roadmap 2050 divalidasi SBTi. Menggalang Green Bond USD 500 M untuk ekspansi energi terbarukan dan dekarbonisasi.",
    image: images.powerInfrastructure,
    highlights: ["SBTi validated", "Green Bond USD 500 M", "Target 40% RE 2030"],
    category: "transformasi",
  },
];

const categories = [
  { key: "fondasi", label: { id: "Fondasi", en: "Foundation" }, color: "#3b82f6" },
  { key: "ekspansi", label: { id: "Ekspansi", en: "Expansion" }, color: "#16a34a" },
  { key: "operasional", label: { id: "Operasional", en: "Operations" }, color: "#f5a623" },
  { key: "transformasi", label: { id: "Transformasi", en: "Transformation" }, color: "#a855f7" },
  { key: "kelestarian", label: { id: "Kelestarian", en: "Sustainability" }, color: "#10b981" },
];

export function HistoryPage() {
  const { locale } = useLocale();
  const copy = dictionary[locale];
  const t = copy.about;

  return (
    <main>
      <PageHero
        action={{ label: t.history.title, href: "/tentang-kami" }}
        description={t.history.description}
        eyebrow={t.eyebrow}
        image={images.landscape}
        title={t.history.title}
      />

      <section aria-labelledby="timeline-heading" className={styles.timeline}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrowDark}>{t.history.title}</p>
          <h2 id="timeline-heading">{locale === "id" ? "Perjalanan NME" : "NME's Journey"}</h2>
        </div>
        <HorizontalScroll
          className={styles.timelineScroll}
          trackClassName={styles.timelineTrack}
        >
          {milestones.map((milestone, index) => (
            <Reveal className={styles.timelineCard} delay={index * 0.06} key={milestone.year}>
              <div className={styles.timelineCardImage}>
                <Parallax className={styles.timelineParallax} distance={20}>
                  <Image
                    alt={milestone.image.alt}
                    fill
                    sizes="(max-width: 700px) 90vw, 40vw"
                    src={milestone.image.src}
                  />
                </Parallax>
                <span className={styles.timelineYear}>{milestone.year}</span>
                <span className={`${styles.timelineCategory} ${styles[milestone.category]}`}>
                  {categories.find(c => c.key === milestone.category)?.label[locale] || milestone.category}
                </span>
              </div>
              <div className={styles.timelineCardBody}>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
                <ul className={styles.timelineHighlights}>
                  {milestone.highlights.map((h, i) => (
                    <li key={i}>
                      <Flag aria-hidden="true" size={14} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </HorizontalScroll>
      </section>

      <section aria-labelledby="achievements-heading" className={styles.achievements}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrowDark}>{locale === "id" ? "Pencapaian Utama" : "Key Achievements"}</p>
          <h2 id="achievements-heading">{locale === "id" ? "Sepuluh Tahun Berkelanjutan" : "A Decade of Sustainable Progress"}</h2>
        </div>
        <div className={styles.achievementsGrid}>
          <Reveal className={styles.achievementCard} delay={0.05}>
            <div className={styles.achievementIcon}><TrendingUp aria-hidden="true" size={32} /></div>
            <h3>15+ Tahun</h3>
            <p>{locale === "id" ? "Beroperasi dengan komitmen berkelanjutan" : "Operating with sustainable commitment"}</p>
          </Reveal>
          <Reveal className={styles.achievementCard} delay={0.1}>
            <div className={styles.achievementIcon}><Target aria-hidden="true" size={32} /></div>
            <h3>6 Site</h3>
            <p>{locale === "id" ? "Operasional di seluruh Indonesia" : "Operational sites across Indonesia"}</p>
          </Reveal>
          <Reveal className={styles.achievementCard} delay={0.15}>
            <div className={styles.achievementIcon}><Sparkles aria-hidden="true" size={32} /></div>
            <h3>3 PROPER Hijau</h3>
            <p>{locale === "id" ? "Penghargaan lingkungan tertinggi" : "Highest environmental awards"}</p>
          </Reveal>
          <Reveal className={styles.achievementCard} delay={0.2}>
            <div className={styles.achievementIcon}><Calendar aria-hidden="true" size={32} /></div>
            <h3>2050 Net Zero</h3>
            <p>{locale === "id" ? "Roadmap tervalidasi SBTi" : "SBTi-validated roadmap"}</p>
          </Reveal>
        </div>
      </section>

      <section className={styles.historyCta}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2>{locale === "id" ? "Masa Depan yang Lebih Hijau" : "A Greener Future Ahead"}</h2>
        <p>{locale === "id" ? "Perjalanan kami baru dimulai. Bergabunglah dengan NME dalam membangun masa depan pertambangan yang berkelanjutan dan bermartabat." : "Our journey has just begun. Join NME in building a sustainable and dignified mining future."}</p>
        <Link href="/keberlanjutan" className={styles.ctaButton}>
          {locale === "id" ? "Lihat Roadmap Keberlanjutan" : "View Sustainability Roadmap"}
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </main>
  );
}