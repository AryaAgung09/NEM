import type { Locale } from "./dictionary";
import { images } from "./media";

export type ReportType = "annual" | "quarterly" | "sustainability" | "governance";

export interface InvestorMetric {
  label: string;
  value: string;
  trend: "up" | "down" | "stable";
  description?: string;
}

export interface AnnualReport {
  year: number;
  title: string;
  description: string;
  pdfUrl: string;
  size: string;
  type: ReportType;
  language: "id" | "en" | "both";
  available?: boolean;
}

export interface RUPSItem {
  date: string;
  title: string;
  description: string;
  status: "upcoming" | "completed" | "cancelled";
  documents?: { label: string; url: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ESGTarget {
  pillar: "E" | "S" | "G";
  title: string;
  description: string;
  target: string;
  baseline: string;
  current: string;
  unit: string;
  targetYear: number;
  status: "on-track" | "at-risk" | "achieved";
}

export interface ReclamationProgram {
  id: string;
  title: string;
  description: string;
  region: string;
  area: string;
  status: "planning" | "active" | "completed" | "monitoring";
  startYear: number;
  endYear: number;
  species: number;
  communities: number;
  carbonSequestered: string;
  image: (typeof images)["reclamation"];
  highlights: string[];
}

export interface ImpactCounter {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
}

export interface SustainabilityProgram {
  id: string;
  title: string;
  description: string;
  pillar: "E" | "S" | "G";
  region: string;
  image: (typeof images)["reclamation"];
  metrics: { label: string; value: string }[];
  link?: { label: string; href: string };
}

export type InvestorSustainabilityCopy = {
  investor: {
    eyebrow: string;
    title: string;
    description: string;
    image: (typeof images)["landscape"];
    metricsEyebrow: string;
    metricsTitle: string;
    metrics: InvestorMetric[];
    reportsEyebrow: string;
    reportsTitle: string;
    reports: AnnualReport[];
    rupsEyebrow: string;
    rupsTitle: string;
    rups: RUPSItem[];
    faqEyebrow: string;
    faqTitle: string;
    faq: FAQItem[];
    contactEyebrow: string;
    contactTitle: string;
    contactDescription: string;
    disclaimer?: string;
  };
  sustainability: {
    eyebrow: string;
    title: string;
    description: string;
    image: (typeof images)["reclamation"];
    esgEyebrow: string;
    esgTitle: string;
    esgDescription: string;
    esgTargets: ESGTarget[];
    reclamationEyebrow: string;
    reclamationTitle: string;
    reclamationDescription: string;
    reclamationPrograms: ReclamationProgram[];
    impactEyebrow: string;
    impactTitle: string;
    impactDescription: string;
    impactCounters: ImpactCounter[];
    programsEyebrow: string;
    programsTitle: string;
    programs: SustainabilityProgram[];
    commitmentEyebrow: string;
    commitmentTitle: string;
    commitmentDescription: string;
    commitments: { title: string; description: string }[];
    disclaimer?: string;
  };
};

const reclamationImage = images.reclamation;
const fieldTeamImage = images.fieldTeam;
const collaborationImage = images.collaboration;
const solarImage = images.solarEnergy;
const landscapeImage = images.landscape;
const powerImage = images.powerInfrastructure;
const engineeringImage = images.engineering;

export const investorSustainabilityData: Record<Locale, InvestorSustainabilityCopy> = {
  id: {
    investor: {
      eyebrow: "Hubungan Investor",
      title: "Transparansi dan akuntabilitas untuk nilai jangka panjang.",
      description:
        "Kami berkomitmen menyediakan informasi yang akurat, tepat waktu, dan dapat diakses oleh semua pemangku kepentingan untuk mendukung keputusan investasi yang terinformasi.",
      image: images.modernOffice,
      metricsEyebrow: "Kinerja Keuangan",
      metricsTitle: "Metrik utama yang mendorong pertumbuhan berkelanjutan.",
      metrics: [
        { label: "Pendapatan Konsolidasian", value: "Rp 4,8 T", trend: "up", description: "YoY +12% dari Rp 4,3 T" },
        { label: "Margin EBITDA", value: "18%", trend: "stable", description: "Efisiensi operasional terjaga" },
        { label: "Belanja Modal (CapEx)", value: "Rp 850 M", trend: "up", description: "Investasi ekspansi & modernisasi" },
        { label: "Laba Bersih", value: "Rp 620 M", trend: "up", description: "YoY +15% margin bersih 12,9%" },
        { label: "Utang Netto / EBITDA", value: "1,2x", trend: "stable", description: "Di bawah ambang 2,0x covenant" },
        { label: "Arus Kas Bebas", value: "Rp 1,1 T", trend: "up", description: "Dukungan dividen & reinvestasi" },
        { label: "ROE", value: "14,2%", trend: "up", description: "Melebihi WACC ~11%" },
        { label: "Dividen per Saham", value: "Rp 42", trend: "stable", description: "Payout ratio 35%" },
      ],
      reportsEyebrow: "Laporan Tahunan & Berkala",
      reportsTitle: "Arsip laporan keuangan, keberlanjutan, dan tata kelola.",
      reports: [
        { year: 2025, title: "Laporan Tahunan 2025", description: "Laporan keuangan teraudit, laporan keberlanjutan, dan laporan tata kelola terintegrasi.", pdfUrl: "/reports/annual-2025.pdf", size: "12,4 MB", type: "annual", language: "both", available: false },
        { year: 2025, title: "Laporan Keberlanjutan 2025", description: "Kinerja ESG, indeks GRI, SASB, dan OJK. Target net zero 2050.", pdfUrl: "/reports/sustainability-2025.pdf", size: "8,7 MB", type: "sustainability", language: "both", available: false },
        { year: 2024, title: "Laporan Tahunan 2024", description: "Laporan keuangan teraudit dan laporan direksi.", pdfUrl: "/reports/annual-2024.pdf", size: "11,2 MB", type: "annual", language: "both", available: false },
        { year: 2024, title: "Laporan Keberlanjutan 2024", description: "Progres ESG dan roadmap dekarbonisasi.", pdfUrl: "/reports/sustainability-2024.pdf", size: "7,9 MB", type: "sustainability", language: "both", available: false },
        { year: 2023, title: "Laporan Tahunan 2023", description: "Laporan keuangan dan tata kelola korporasi.", pdfUrl: "/reports/annual-2023.pdf", size: "10,5 MB", type: "annual", language: "both", available: false },
        { year: 2023, title: "Laporan Triwulan Q4 2025", description: "Update kinerja keuangan triwulan ke-4.", pdfUrl: "/reports/quarterly-q4-2025.pdf", size: "3,2 MB", type: "quarterly", language: "id", available: false },
        { year: 2023, title: "Laporan Tata Kelola 2025", description: "Kepatuhan GCG, struktur dewan, dan remunerasi.", pdfUrl: "/reports/governance-2025.pdf", size: "4,1 MB", type: "governance", language: "id", available: false },
      ],
      rupsEyebrow: "Kalender RUPS",
      rupsTitle: "Rapat Umum Pemegang Saham yang tersedia dan terjadwal.",
      rups: [
        { date: "2026-06-15", title: "RUPS Tahunan 2026", description: "Persetujuan laporan tahunan 2025, penggunaan laba, pengangkatan komisi akuntan publik, dan remunerasi dewan.", status: "upcoming", documents: [{ label: "Surat Pemanggilan", url: "/rups/2026-summons.pdf" }, { label: "Materi RUPS", url: "/rups/2026-materials.pdf" }] },
        { date: "2025-06-20", title: "RUPS Tahunan 2025", description: "Disetujui: laporan tahunan 2024, dividen tunai Rp 42/saham, reappointment KAP Purwantono, Sungkoro & Surja.", status: "completed", documents: [{ label: "Risalah RUPS", url: "/rups/2025-minutes.pdf" }, { label: "Hasil Voting", url: "/rups/2025-voting.pdf" }] },
        { date: "2024-06-18", title: "RUPS Tahunan 2024", description: "Disetujui: laporan tahunan 2023, dividen Rp 38/saham, perubahan anggaran dasar.", status: "completed", documents: [{ label: "Risalah RUPS", url: "/rups/2024-minutes.pdf" }] },
      ],
      faqEyebrow: "Pertanyaan Umum",
      faqTitle: "Jawaban untuk pertanyaan investor yang sering diajukan.",
      faq: [
        { question: "Kapan jadwal pembayaran dividen?", answer: "Dividen interim biasanya dibayar Agustus, dividen akhir Juni tahun berikutnya setelah disetujui RUPS.", category: "Dividen" },
        { question: "Bagaimana cara menghubungi Investor Relations?", answer: "Email: ir@nusantaramineral.co.id | Telepon: +62 21 5555 1234 | Jam kerja: Senin-Jumat 09:00-17:00 WIB.", category: "Kontak" },
        { question: "Apa target net zero emisi NME?", answer: "NME berkomitmen net zero Scope 1 & 2 pada 2050, dengan target interim pengurangan 30% pada 2030 dari baseline 2020.", category: "ESG" },
        { question: "Di mana saya bisa menemukan presentasi hasil kwartalan?", answer: "Semua presentasi hasil tersedia di bagian 'Laporan Tahunan & Berkala' di halaman ini, serta di situs IDX.", category: "Laporan" },
        { question: "Bagaimana kebijakan hedging komoditas NME?", answer: "NME menerapkan hedging sistematis untuk 40-60% produksi 12-18 bulan ke depan menggunakan forward contract dan collar.", category: "Risiko" },
        { question: "Apa saja rating kredit yang dimiliki NME?", answer: "Saat ini: Pefindo idAA+ (Stable), Moody's Baa2 (Stable). Detail di laporan tahunan.", category: "Rating" },
        { question: "Bagaimana NME mengelola risiko lingkungan?", answer: "Melalui sistem ISO 14001, AMDAL setiap proyek, monitoring real-time, dan komite ESG di tingkat dewan.", category: "ESG" },
        { question: "Apakah NME menyediakan DRIP (Dividend Reinvestment Plan)?", answer: "Belum tersedia saat ini. Dividen dibayarkan tunai ke rekening efek pemegang saham.", category: "Dividen" },
      ],
      contactEyebrow: "Kontak Investor Relations",
      contactTitle: "Tim IR siap membantu kebutuhan informasi Anda.",
      contactDescription: "Untuk pertanyaan lanjutan, permintaan kunjungan pabrikan, atau jadwal one-on-one meeting, silakan hubungi tim kami.",
      disclaimer: "Catatan: Semua angka dan data di halaman ini bersifat ilustratif untuk tujuan demonstrasi. Ganti dengan data teraudit dan terverifikasi sebelum produksi.",
    },
    sustainability: {
      eyebrow: "Keberlanjutan",
      title: "Tumbuh dengan tanggung jawab, menciptakan dampak nyata.",
      description:
        "Strategi keberlanjutan NME terintegrasi dengan bisnis: mengurangi jejak karbon, memulihkan ekosistem, dan memberdayakan masyarakat di sekitar area operasional.",
      image: reclamationImage,
      esgEyebrow: "Target ESG 2030",
      esgTitle: "Komitmen terukur untuk masa depan yang lebih hijau.",
      esgDescription: "Target berbasis sains (science-based) selaras dengan Paris Agreement dan roadmap dekarbonisasi nasional Indonesia.",
      esgTargets: [
        { pillar: "E", title: "Reduksi Emisi Scope 1 & 2", description: "Pengurangan intensitas emisi per ton produksi melalui efisiensi energi, elektrifikasi armada, dan energi terbarukan.", target: "30%", baseline: "2020", current: "18%", unit: "% reduksi", targetYear: 2030, status: "on-track" },
        { pillar: "E", title: "Porsi Energi Terbarukan", description: "Penambahan kapasitas PLTS, PLTB, dan pembelian sertifikat REC untuk operasi tambang dan pengolahan.", target: "40%", baseline: "2020", current: "22%", unit: "% dari total konsumsi", targetYear: 2030, status: "on-track" },
        { pillar: "E", title: "Air Daur Ulang", description: "Sistem closed-loop water management di semua fasilitas pengolahan.", target: "85%", baseline: "2020", current: "68%", unit: "% air daur ulang", targetYear: 2030, status: "on-track" },
        { pillar: "E", title: "Lahan Terekam (Reclamation)", description: "Reklamasi progresif: lahan direklamasi segera setelah tambang selesai.", target: "100%", baseline: "2020", current: "72%", unit: "% area tertambang", targetYear: 2030, status: "on-track" },
        { pillar: "S", title: "Zero Fatality (LTIFR)", description: "Budaya keselamatan generatif, leadership visible felt leadership, teknologi wearable safety.", target: "0", baseline: "2020", current: "0", unit: "fatalitas/tahun", targetYear: 2030, status: "achieved" },
        { pillar: "S", title: "Tenaga Kerja Lokal", description: "Prioritas rekrutmen dari kabupaten/kota operasional, program magang & apprenticeship.", target: "70%", baseline: "2020", current: "62%", unit: "% karyawan lokal", targetYear: 2030, status: "on-track" },
        { pillar: "S", title: "Investasi Masyarakat (CSR)", description: "Program pendidikan, kesehatan, ekonomi kreatif, infrastruktur desa.", target: "Rp 50 M", baseline: "2020", current: "Rp 32 M", unit: "/tahun", targetYear: 2030, status: "on-track" },
        { pillar: "G", title: "Keanekaragaman Dewan", description: "Representasi perempuan dan latar belakang divers di Dewan Komisaris & Direksi.", target: "30%", baseline: "2020", current: "22%", unit: "% kursi dewan", targetYear: 2030, status: "at-risk" },
        { pillar: "G", title: "Transparansi Pelaporan", description: "Pelaporan ESG terintegrasi, assurance pihak ketiga, alignment GRI/SASB/TCFD/OJK.", target: "100%", baseline: "2020", current: "90%", unit: "% indikator tercover", targetYear: 2030, status: "on-track" },
      ],
      reclamationEyebrow: "Program Reklamasi",
      reclamationTitle: "Memulihkan lahan, menciptakan nilai ekologis & ekonomi.",
      reclamationDescription: "Reklamasi progresif dengan pendekatan landscape approach: integrasi hutan produksi, agroforestri, dan kawasan konservasi.",
      reclamationPrograms: [
        { id: "rek-kaltim", title: "Reklamasi Tambang Kalimantan Timur", description: "Reklamasi progresif area bekas tambang dengan tanaman multipurpose: kayu energis, buah-buahan, dan tanaman obat.", region: "Kalimantan Timur", area: "320 Ha (terekam)", status: "active", startYear: 2021, endYear: 2028, species: 45, communities: 12, carbonSequestered: "45.000 ton CO2e", image: reclamationImage, highlights: ["Agroforestri kopi & durian: pendapatan petani +40%", "Kawasan edukasi lingkungan 15 Ha", "Sertifikasi FSC hutan produksi"] },
        { id: "rek-sultra", title: "Reklamasi Pengolahan Sulawesi Tenggara", description: "Restorasi area tailings storage facility dengan fitorehabilitasi dan pengembangan kawasan wisata ekologi.", region: "Sulawesi Tenggara", area: "180 Ha (terekam)", status: "active", startYear: 2022, endYear: 2030, species: 38, communities: 8, carbonSequestered: "28.000 ton CO2e", image: reclamationImage, highlights: ["Fitorehabilitasi tanaman hiperakumulator", "Kolam bioremediaisi air asam tambang", "Wisata edukasi geologi & reklamasi"] },
        { id: "rek-papua", title: "Reklamasi Terpadu Papua", description: "Program skala besar integrasi reklamasi, agroforestri komunitas, dan payment for ecosystem services (PES).", region: "Papua", area: "1.800 Ha (terekam)", status: "active", startYear: 2018, endYear: 2035, species: 210, communities: 800, carbonSequestered: "450.000 ton CO2e", image: reclamationImage, highlights: ["Model PES pertama di Indonesia timur", "Madurasa hutan & beekeeping 800 KK", "Kawasan konservasi orangutan 500 Ha"] },
      ],
      impactEyebrow: "Dampak Kita",
      impactTitle: "Angka yang mewakili komitmen nyata.",
      impactDescription: "Data kumulatif per Desember 2025. Terverifikasi oleh pihak ketiga independen.",
      impactCounters: [
        { id: "trees", label: "Pohon Ditanam", value: 2450000, suffix: "+", description: "Spesies lokal di seluruh lokasi reklamasi", icon: "tree" },
        { id: "carbon", label: "Karbon Terekam", value: 523000, suffix: " ton CO2e", description: "Estimasi sequestration 2030", icon: "leaf" },
        { id: "water", label: "Air Didaur Ulang", value: 68, suffix: "%", description: "Rata-rata seluruh fasilitas", icon: "droplet" },
        { id: "renewable", label: "Energi Terbarukan", value: 22, suffix: "%", description: "Porsi dari total konsumsi energi", icon: "sun" },
        { id: "communities", label: "Desa Terecap", value: 156, suffix: "+", description: "Program pemberdayaan komunitas", icon: "users" },
        { id: "localjobs", label: "Tenaga Kerja Lokal", value: 62, suffix: "%", description: "Dari total karyawan operasional", icon: "user-check" },
        { id: "safety", label: "Hari Tanpa Kecelakaan", value: 1840, suffix: "+", description: "Rekor keselamatan seluruh site", icon: "shield" },
        { id: "investment", label: "Investasi Hijau", value: 1200, suffix: " M USD", description: "CapEx proyek dekarbonisasi 2020-2025", icon: "trending-up" },
      ],
      programsEyebrow: "Program Keberlanjutan",
      programsTitle: "Inisiatif terintegrasi di seluruh rantai nilai.",
      programs: [
        { id: "decarbon", title: "Roadmap Dekarbonisasi", description: "Strategi net zero 2050: efisiensi, elektrifikasi, H2 hijau, CCUS, dan nature-based solutions.", pillar: "E", region: "Seluruh Operasi", image: solarImage, metrics: [{ label: "Target 2030", value: "-30% intensitas emisi" }, { label: "Investasi", value: "USD 1,2 M" }, { label: "Proyek Aktif", value: "8" }], link: { label: "Baca Roadmap", href: "/keberlanjutan/dekarbonisasi" } },
        { id: "circular", title: "Ekonomi Sirkular", description: "Pemanfaatan tailings untuk bahan bangunan, recovery logam dari limbah, composting organik.", pillar: "E", region: "Fasilitas Pengolahan", image: engineeringImage, metrics: [{ label: "Tailings Dimanfaatkan", value: "35%" }, { label: "Produk Sirkular", value: "3 varian" }, { label: "Pengurangan Limbah", value: "40%" }], link: { label: "Pelajari Lebih Lanjut", href: "/keberlanjutan/ekonomi-sirkular" } },
        { id: "biodiversity", title: "Biodiversity Net Gain", description: "Offset biodiversity: restorasi habitat, koridor satwa, ex-situ conservation.", pillar: "E", region: "Kalimantan, Sulawesi, Papua", image: landscapeImage, metrics: [{ label: "Habitat Dirusak", value: "100% di-offset" }, { label: "Koridor Satwa", value: "12 koridor" }, { label: "Spesies Terlindungi", value: "28" }], link: { label: "Laporan Biodiversitas", href: "/keberlanjutan/biodiversitas" } },
        { id: "community", title: "Pemberdayaan Ekonomi Masyarakat", description: "Koperasi desa, pelatihan keterampilan, akses pasar, dana putaran usaha mikro.", pillar: "S", region: "156 Desa", image: collaborationImage, metrics: [{ label: "Koperasi Dibentuk", value: "42" }, { label: "Peserta Pelatihan", value: "3.200+" }, { label: "Pendapatan Rata-rata", value: "+38%" }], link: { label: "Cerita Dampak", href: "/keberlanjutan/pemberdayaan" } },
        { id: "education", title: "Pendidikan & Kesehatan", description: "Bantuan sarana sekolah, beasiswa, posyandu, telemedicine, sanitasi air bersih.", pillar: "S", region: "Daerah Operasional", image: fieldTeamImage, metrics: [{ label: "Siswa Beasiswa", value: "850" }, { label: "Fasilitas Dibangun", value: "28" }, { label: "Akses Air Bersih", value: "12.000 KK" }], link: { label: "Program Sosial", href: "/keberlanjutan/pendidikan-kesehatan" } },
        { id: "governance", title: "Tata Kelola ESG", description: "Komite ESG di tingkat Dewan, kebijakan anti-korupsi, whistleblowing, due diligence HAM.", pillar: "G", region: "Korporat", image: powerImage, metrics: [{ label: "Kebijakan ESG", value: "12 dokumen" }, { label: "Pelatihan Etika", value: "100% karyawan" }, { label: "Laporan Whistleblowing", value: "0 kasus terbuka" }], link: { label: "Kebijakan ESG", href: "/keberlanjutan/tata-kelola" } },
      ],
      commitmentEyebrow: "Komitmen Kami",
      commitmentTitle: "Prinzip yang mengarah pada aksi nyata.",
      commitmentDescription: "Keberlanjutan bukan tambahan—adalah cara kami berbisnis. Setiap keputusan diukur dari tiga dimensi: planet, orang, dan prosperitas.",
      commitments: [
        { title: "Net Zero 2050", description: "Dekarbonisasi operasi selaras dengan Paris Agreement, divalidasi SBTi." },
        { title: "Biodiversity Positive", description: "Target net gain biodiversitas 2030 melalui mitigasi hierarkis dan restorasi." },
        { title: "Zero Harm", description: "Keselamatan, kesehatan, dan lingkungan sebagai prasyarat tak tergoyahkan." },
        { title: "Inklusif & Adil", description: "Hak HAM, keanekaragaman, pemberdayaan perempuan, dan kesejahteraan pekerja." },
        { title: "Transparansi Radikal", description: "Pelaporan ESG terintegrasi, assurance independen, dialog berkelanjutan." },
      ],
      disclaimer: "Catatan: Semua angka dan data di halaman ini bersifat ilustratif untuk tujuan demonstrasi. Ganti dengan data terverifikasi sebelum produksi.",
    },
  },
  en: {
    investor: {
      eyebrow: "Investor Relations",
      title: "Transparency and accountability for long-term value.",
      description:
        "We are committed to providing accurate, timely, and accessible information to all stakeholders to support informed investment decisions.",
      image: images.modernOffice,
      metricsEyebrow: "Financial Performance",
      metricsTitle: "Key metrics driving sustainable growth.",
      metrics: [
        { label: "Consolidated Revenue", value: "IDR 4.8 T", trend: "up", description: "YoY +12% from IDR 4.3 T" },
        { label: "EBITDA Margin", value: "18%", trend: "stable", description: "Operational efficiency maintained" },
        { label: "Capital Expenditure (CapEx)", value: "IDR 850 B", trend: "up", description: "Expansion & modernization investment" },
        { label: "Net Profit", value: "IDR 620 B", trend: "up", description: "YoY +15%, net margin 12.9%" },
        { label: "Net Debt / EBITDA", value: "1.2x", trend: "stable", description: "Below 2.0x covenant threshold" },
        { label: "Free Cash Flow", value: "IDR 1.1 T", trend: "up", description: "Supports dividend & reinvestment" },
        { label: "ROE", value: "14.2%", trend: "up", description: "Exceeds WACC ~11%" },
        { label: "Dividend per Share", value: "IDR 42", trend: "stable", description: "Payout ratio 35%" },
      ],
      reportsEyebrow: "Annual & Periodic Reports",
      reportsTitle: "Archive of financial, sustainability, and governance reports.",
      reports: [
        { year: 2025, title: "Annual Report 2025", description: "Audited financial statements, integrated sustainability report, and governance report.", pdfUrl: "/reports/annual-2025.pdf", size: "12.4 MB", type: "annual", language: "both", available: false },
        { year: 2025, title: "Sustainability Report 2025", description: "ESG performance, GRI, SASB, and OJK indices. Net zero 2050 roadmap.", pdfUrl: "/reports/sustainability-2025.pdf", size: "8.7 MB", type: "sustainability", language: "both", available: false },
        { year: 2024, title: "Annual Report 2024", description: "Audited financial statements and board report.", pdfUrl: "/reports/annual-2024.pdf", size: "11.2 MB", type: "annual", language: "both", available: false },
        { year: 2024, title: "Sustainability Report 2024", description: "ESG progress and decarbonization roadmap.", pdfUrl: "/reports/sustainability-2024.pdf", size: "7.9 MB", type: "sustainability", language: "both", available: false },
        { year: 2023, title: "Annual Report 2023", description: "Financial statements and corporate governance.", pdfUrl: "/reports/annual-2023.pdf", size: "10.5 MB", type: "annual", language: "both", available: false },
        { year: 2023, title: "Quarterly Report Q4 2025", description: "Q4 2025 financial performance update.", pdfUrl: "/reports/quarterly-q4-2025.pdf", size: "3.2 MB", type: "quarterly", language: "en", available: false },
        { year: 2023, title: "Governance Report 2025", description: "GCG compliance, board structure, and remuneration.", pdfUrl: "/reports/governance-2025.pdf", size: "4.1 MB", type: "governance", language: "en", available: false },
      ],
      rupsEyebrow: "RUPS Calendar",
      rupsTitle: "Available and scheduled General Meetings of Shareholders.",
      rups: [
        { date: "2026-06-15", title: "Annual GMS 2026", description: "Approval of 2025 annual report, profit allocation, appointment of public accountant, and board remuneration.", status: "upcoming", documents: [{ label: "Summons", url: "/rups/2026-summons.pdf" }, { label: "GMS Materials", url: "/rups/2026-materials.pdf" }] },
        { date: "2025-06-20", title: "Annual GMS 2025", description: "Approved: 2024 annual report, cash dividend IDR 42/share, reappointment of KAP Purwantono, Sungkoro & Surja.", status: "completed", documents: [{ label: "GMS Minutes", url: "/rups/2025-minutes.pdf" }, { label: "Voting Results", url: "/rups/2025-voting.pdf" }] },
        { date: "2024-06-18", title: "Annual GMS 2024", description: "Approved: 2023 annual report, dividend IDR 38/share, articles of association amendment.", status: "completed", documents: [{ label: "GMS Minutes", url: "/rups/2024-minutes.pdf" }] },
      ],
      faqEyebrow: "Frequently Asked Questions",
      faqTitle: "Answers to commonly asked investor questions.",
      faq: [
        { question: "When is the dividend payment schedule?", answer: "Interim dividend typically paid August, final dividend June following year after GMS approval.", category: "Dividend" },
        { question: "How to contact Investor Relations?", answer: "Email: ir@nusantaramineral.co.id | Phone: +62 21 5555 1234 | Business hours: Mon-Fri 09:00-17:00 WIB.", category: "Contact" },
        { question: "What is NME's net zero emissions target?", answer: "NME commits to net zero Scope 1 & 2 by 2050, with interim target of 30% reduction by 2030 from 2020 baseline.", category: "ESG" },
        { question: "Where can I find quarterly earnings presentations?", answer: "All earnings presentations are available in the 'Annual & Periodic Reports' section on this page, and on the IDX website.", category: "Reports" },
        { question: "How does NME manage commodity hedging?", answer: "NME applies systematic hedging for 40-60% of production 12-18 months forward using forward contracts and collars.", category: "Risk" },
        { question: "What credit ratings does NME have?", answer: "Currently: Pefindo idAA+ (Stable), Moody's Baa2 (Stable). Details in annual report.", category: "Rating" },
        { question: "How does NME manage environmental risk?", answer: "Through ISO 14001 system, AMDAL for each project, real-time monitoring, and ESG committee at board level.", category: "ESG" },
        { question: "Does NME offer a DRIP (Dividend Reinvestment Plan)?", answer: "Not available at this time. Dividends are paid in cash to shareholders' securities accounts.", category: "Dividend" },
      ],
      contactEyebrow: "Investor Relations Contact",
      contactTitle: "Our IR team is ready to assist your information needs.",
      contactDescription: "For further inquiries, site visit requests, or one-on-one meeting scheduling, please contact our team.",
      disclaimer: "Note: All figures and data on this page are illustrative for demonstration purposes. Replace with audited and verified data before production.",
    },
    sustainability: {
      eyebrow: "Sustainability",
      title: "Growing responsibly, creating measurable impact.",
      description:
        "NME's sustainability strategy is integrated with our business: reducing carbon footprint, restoring ecosystems, and empowering communities around our operational areas.",
      image: reclamationImage,
      esgEyebrow: "ESG Targets 2030",
      esgTitle: "Science-based commitments for a greener future.",
      esgDescription: "Science-based targets aligned with the Paris Agreement and Indonesia's national decarbonization roadmap.",
      esgTargets: [
        { pillar: "E", title: "Scope 1 & 2 Emissions Reduction", description: "Emission intensity reduction per ton production through energy efficiency, fleet electrification, and renewable energy.", target: "30%", baseline: "2020", current: "18%", unit: "% reduction", targetYear: 2030, status: "on-track" },
        { pillar: "E", title: "Renewable Energy Share", description: "Additional solar, wind capacity and REC procurement for mining and processing operations.", target: "40%", baseline: "2020", current: "22%", unit: "% of total consumption", targetYear: 2030, status: "on-track" },
        { pillar: "E", title: "Water Recycling Rate", description: "Closed-loop water management systems at all processing facilities.", target: "85%", baseline: "2020", current: "68%", unit: "% water recycled", targetYear: 2030, status: "on-track" },
        { pillar: "E", title: "Land Reclaimed (Reclamation)", description: "Progressive reclamation: land reclaimed immediately after mining completion.", target: "100%", baseline: "2020", current: "72%", unit: "% mined area", targetYear: 2030, status: "on-track" },
        { pillar: "S", title: "Zero Fatality (LTIFR)", description: "Generative safety culture, visible felt leadership, wearable safety technology.", target: "0", baseline: "2020", current: "0", unit: "fatalities/year", targetYear: 2030, status: "achieved" },
        { pillar: "S", title: "Local Workforce", description: "Priority recruitment from operational regencies/cities, internship & apprenticeship programs.", target: "70%", baseline: "2020", current: "62%", unit: "% local employees", targetYear: 2030, status: "on-track" },
        { pillar: "S", title: "Community Investment (CSR)", description: "Education, health, creative economy, village infrastructure programs.", target: "IDR 50 B", baseline: "2020", current: "IDR 32 B", unit: "/year", targetYear: 2030, status: "on-track" },
        { pillar: "G", title: "Board Diversity", description: "Female and diverse background representation in Board of Commissioners & Directors.", target: "30%", baseline: "2020", current: "22%", unit: "% board seats", targetYear: 2030, status: "at-risk" },
        { pillar: "G", title: "Reporting Transparency", description: "Integrated ESG reporting, third-party assurance, GRI/SASB/TCFD/OJK alignment.", target: "100%", baseline: "2020", current: "90%", unit: "% indicators covered", targetYear: 2030, status: "on-track" },
      ],
      reclamationEyebrow: "Reclamation Programs",
      reclamationTitle: "Restoring land, creating ecological & economic value.",
      reclamationDescription: "Progressive reclamation with landscape approach: integration of production forest, agroforestry, and conservation areas.",
      reclamationPrograms: [
        { id: "rek-kaltim", title: "East Kalimantan Mine Reclamation", description: "Progressive reclamation of post-mining areas with multipurpose species: energy wood, fruit trees, and medicinal plants.", region: "East Kalimantan", area: "320 Ha (reclaimed)", status: "active", startYear: 2021, endYear: 2028, species: 45, communities: 12, carbonSequestered: "45,000 ton CO2e", image: reclamationImage, highlights: ["Coffee & durian agroforestry: farmer income +40%", "15 Ha environmental education zone", "FSC-certified production forest"] },
        { id: "rek-sultra", title: "Southeast Sulawesi Processing Reclamation", description: "Restoration of tailings storage facility area with phytorehabilitation and ecological tourism development.", region: "Southeast Sulawesi", area: "180 Ha (reclaimed)", status: "active", startYear: 2022, endYear: 2030, species: 38, communities: 8, carbonSequestered: "28,000 ton CO2e", image: reclamationImage, highlights: ["Hyperaccumulator phytorehabilitation", "Acid mine drainage bioremediation ponds", "Geological & reclamation eco-tourism"] },
        { id: "rek-papua", title: "Integrated Papua Reclamation", description: "Large-scale program integrating reclamation, community agroforestry, and payment for ecosystem services (PES).", region: "Papua", area: "1,800 Ha (reclaimed)", status: "active", startYear: 2018, endYear: 2035, species: 210, communities: 800, carbonSequestered: "450,000 ton CO2e", image: reclamationImage, highlights: ["First PES model in eastern Indonesia", "Forest honey & beekeeping 800 households", "500 Ha orangutan conservation zone"] },
      ],
      impactEyebrow: "Our Impact",
      impactTitle: "Numbers representing real commitment.",
      impactDescription: "Cumulative data as of December 2025. Verified by independent third parties.",
      impactCounters: [
        { id: "trees", label: "Trees Planted", value: 2450000, suffix: "+", description: "Native species across all reclamation sites", icon: "tree" },
        { id: "carbon", label: "Carbon Sequestered", value: 523000, suffix: " ton CO2e", description: "Estimated sequestration by 2030", icon: "leaf" },
        { id: "water", label: "Water Recycled", value: 68, suffix: "%", description: "Average across all facilities", icon: "droplet" },
        { id: "renewable", label: "Renewable Energy", value: 22, suffix: "%", description: "Share of total energy consumption", icon: "sun" },
        { id: "communities", label: "Villages Reached", value: 156, suffix: "+", description: "Community empowerment programs", icon: "users" },
        { id: "localjobs", label: "Local Workforce", value: 62, suffix: "%", description: "Of total operational employees", icon: "user-check" },
        { id: "safety", label: "Days Without Incident", value: 1840, suffix: "+", description: "Safety record across all sites", icon: "shield" },
        { id: "investment", label: "Green Investment", value: 1200, suffix: " M USD", description: "Decarbonization CapEx 2020-2025", icon: "trending-up" },
      ],
      programsEyebrow: "Sustainability Programs",
      programsTitle: "Integrated initiatives across the value chain.",
      programs: [
        { id: "decarbon", title: "Decarbonization Roadmap", description: "Net zero 2050 strategy: efficiency, electrification, green H2, CCUS, and nature-based solutions.", pillar: "E", region: "All Operations", image: solarImage, metrics: [{ label: "2030 Target", value: "-30% emission intensity" }, { label: "Investment", value: "USD 1.2B" }, { label: "Active Projects", value: "8" }], link: { label: "Read Roadmap", href: "/keberlanjutan/dekarbonisasi" } },
        { id: "circular", title: "Circular Economy", description: "Tailings utilization for construction materials, metal recovery from waste, organic composting.", pillar: "E", region: "Processing Facilities", image: engineeringImage, metrics: [{ label: "Tailings Utilized", value: "35%" }, { label: "Circular Products", value: "3 variants" }, { label: "Waste Reduction", value: "40%" }], link: { label: "Learn More", href: "/keberlanjutan/ekonomi-sirkular" } },
        { id: "biodiversity", title: "Biodiversity Net Gain", description: "Biodiversity offsets: habitat restoration, wildlife corridors, ex-situ conservation.", pillar: "E", region: "Kalimantan, Sulawesi, Papua", image: landscapeImage, metrics: [{ label: "Habitat Offset", value: "100%" }, { label: "Wildlife Corridors", value: "12 corridors" }, { label: "Protected Species", value: "28" }], link: { label: "Biodiversity Report", href: "/keberlanjutan/biodiversitas" } },
        { id: "community", title: "Community Economic Empowerment", description: "Village cooperatives, skills training, market access, micro-enterprise revolving funds.", pillar: "S", region: "156 Villages", image: collaborationImage, metrics: [{ label: "Cooperatives Formed", value: "42" }, { label: "Training Participants", value: "3,200+" }, { label: "Avg Income Increase", value: "+38%" }], link: { label: "Impact Stories", href: "/keberlanjutan/pemberdayaan" } },
        { id: "education", title: "Education & Health", description: "School facility support, scholarships, health posts, telemedicine, clean water sanitation.", pillar: "S", region: "Operational Areas", image: fieldTeamImage, metrics: [{ label: "Scholarship Students", value: "850" }, { label: "Facilities Built", value: "28" }, { label: "Clean Water Access", value: "12,000 HH" }], link: { label: "Social Programs", href: "/keberlanjutan/pendidikan-kesehatan" } },
        { id: "governance", title: "ESG Governance", description: "Board-level ESG committee, anti-corruption policy, whistleblowing, human rights due diligence.", pillar: "G", region: "Corporate", image: powerImage, metrics: [{ label: "ESG Policies", value: "12 documents" }, { label: "Ethics Training", value: "100% employees" }, { label: "Open Whistleblowing", value: "0 cases" }], link: { label: "ESG Policies", href: "/keberlanjutan/tata-kelola" } },
      ],
      commitmentEyebrow: "Our Commitments",
      commitmentTitle: "Principles that drive real action.",
      commitmentDescription: "Sustainability is not an add-on—it's how we do business. Every decision is measured across three dimensions: planet, people, and prosperity.",
      commitments: [
        { title: "Net Zero 2050", description: "Operational decarbonization aligned with Paris Agreement, SBTi validated." },
        { title: "Biodiversity Positive", description: "Net gain biodiversity target 2030 through mitigation hierarchy and restoration." },
        { title: "Zero Harm", description: "Safety, health, and environment as non-negotiable prerequisites." },
        { title: "Inclusive & Fair", description: "Human rights, diversity, women's empowerment, and worker welfare." },
        { title: "Radical Transparency", description: "Integrated ESG reporting, independent assurance, ongoing stakeholder dialogue." },
      ],
      disclaimer: "Note: All figures and data on this page are illustrative for demonstration purposes. Replace with verified data before production.",
    },
  },
};