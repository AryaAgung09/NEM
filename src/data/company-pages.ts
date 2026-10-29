import type { Locale } from "./dictionary";
import { images } from "./media";

export type BusinessSlug =
  | "pertambangan-mineral"
  | "jasa-pertambangan"
  | "pengolahan-industri"
  | "energi-infrastruktur"
  | "teknologi-inovasi";

export type ProjectSlug =
  | "tambang-kalimantan-timur"
  | "pengolahan-sulawesi-tenggara"
  | "infrastruktur-kalimantan-selatan"
  | "energi-maluku-utara"
  | "teknologi-dashboard-operasional"
  | "reklamasi-tambang-terpadu";

export type ProjectRegion = "Kalimantan" | "Sulawesi" | "Maluku" | "Sumatera" | "Papua";
export type ProjectCommodity = "Mineral" | "Energi" | "Infrastruktur" | "Teknologi" | "Jasa";

export type CompanyPageCopy = {
  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: (typeof images)["landscape"];
    visionMissionEyebrow: string;
    visionTitle: string;
    vision: string;
    missionTitle: string;
    missions: string[];
    valuesEyebrow: string;
    valuesTitle: string;
    values: { title: string; description: string }[];
    historyEyebrow: string;
    historyTitle: string;
    historyHint: string;
    historyNote: string;
    milestones: { period: string; title: string; description: string }[];
    leadershipEyebrow: string;
    leadershipTitle: string;
    leadershipNote: string;
    leaders: { role: string; focus: string; image: (typeof images)["fieldTeam"] }[];
    governanceEyebrow: string;
    governanceTitle: string;
    governance: { title: string; description: string }[];
  };
  businesses: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      slug: BusinessSlug;
      title: string;
      description: string;
      image: (typeof images)["openPitMine"];
    }[];
    detail: {
      eyebrow: string;
      capabilitiesTitle: string;
      toolsTitle: string;
      caseTitle: string;
      caseLabel: string;
      caseDescription: string;
      ctaTitle: string;
      capabilities: string[];
      tools: string[];
      caseImage: (typeof images)["industrialFacility"];
    };
    detailBySlug: Record<
      BusinessSlug,
      {
        title: string;
        description: string;
        image: (typeof images)["openPitMine"];
        capabilities: string[];
        tools: string[];
        caseTitle: string;
        caseDescription: string;
        caseImage: (typeof images)["industrialFacility"];
      }
    >;
    back: string;
    explore: string;
    allBusinesses: string;
    contact: string;
    learnMore: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      slug: ProjectSlug;
      title: string;
      description: string;
      region: ProjectRegion;
      commodity: ProjectCommodity;
      image: (typeof images)["openPitMine"];
      year: string;
      status: string;
    }[];
    detail: {
      eyebrow: string;
      specsTitle: string;
      galleryTitle: string;
      mapTitle: string;
      relatedTitle: string;
      ctaTitle: string;
    };
    detailBySlug: Record<
      ProjectSlug,
      {
        title: string;
        description: string;
        image: (typeof images)["openPitMine"];
        region: ProjectRegion;
        commodity: ProjectCommodity;
        coordinates: [number, number];
        year: string;
        status: string;
        specifications: { label: string; value: string }[];
        gallery: (typeof images)["openPitMine"][];
        mapImage: (typeof images)["openPitMine"];
        highlights: string[];
      }
    >;
    filters: {
      all: string;
      regions: Record<ProjectRegion, string>;
      commodities: Record<ProjectCommodity, string>;
    };
    back: string;
    explore: string;
    contact: string;
  };
};

export type ProjectItem = {
  slug: ProjectSlug;
  title: string;
  description: string;
  region: ProjectRegion;
  commodity: ProjectCommodity;
  image: (typeof images)["openPitMine"];
  year: string;
  status: string;
};

const businessAssets = {
  "pertambangan-mineral": images.openPitMine,
  "jasa-pertambangan": images.miningTruck,
  "pengolahan-industri": images.industrialFacility,
  "energi-infrastruktur": images.powerInfrastructure,
  "teknologi-inovasi": images.engineering,
} satisfies Record<BusinessSlug, (typeof images)["openPitMine"]>;

const businessSlugs = [
  "pertambangan-mineral",
  "jasa-pertambangan",
  "pengolahan-industri",
  "energi-infrastruktur",
  "teknologi-inovasi",
] as const satisfies readonly BusinessSlug[];

const projectAssets = {
  "tambang-kalimantan-timur": images.openPitMine,
  "pengolahan-sulawesi-tenggara": images.industrialFacility,
  "infrastruktur-kalimantan-selatan": images.powerInfrastructure,
  "energi-maluku-utara": images.solarEnergy,
  "teknologi-dashboard-operasional": images.engineering,
  "reklamasi-tambang-terpadu": images.reclamation,
} satisfies Record<ProjectSlug, (typeof images)["openPitMine"]>;

const projectSlugs = [
  "tambang-kalimantan-timur",
  "pengolahan-sulawesi-tenggara",
  "infrastruktur-kalimantan-selatan",
  "energi-maluku-utara",
  "teknologi-dashboard-operasional",
  "reklamasi-tambang-terpadu",
] as const satisfies readonly ProjectSlug[];

export function getProjectSlugs() {
  return projectSlugs;
}

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return projectSlugs.some((candidate) => candidate === slug);
}

export const projectsItemsId: ProjectItem[] = [
  {
    slug: "tambang-kalimantan-timur",
    title: "Tambang Kalimantan Timur",
    description: "Operasi pertambangan mineral skala besar dengan standar keselamatan dan lingkungan terbaik.",
    region: "Kalimantan" as ProjectRegion,
    commodity: "Mineral" as ProjectCommodity,
    image: projectAssets["tambang-kalimantan-timur"],
    year: "2020–Sekarang",
    status: "Operasional",
  },
  {
    slug: "pengolahan-sulawesi-tenggara",
    title: "Pengolahan Sulawesi Tenggara",
    description: "Fasilitas pengolahan mineral modern yang mengoptimalkan recovery dan efisiensi energi.",
    region: "Sulawesi" as ProjectRegion,
    commodity: "Mineral" as ProjectCommodity,
    image: projectAssets["pengolahan-sulawesi-tenggara"],
    year: "2021–Sekarang",
    status: "Operasional",
  },
  {
    slug: "infrastruktur-kalimantan-selatan",
    title: "Infrastruktur Kalimantan Selatan",
    description: "Jalan raya, pelabuhan, dan fasilitas logistik pendukung operasi tambang terintegrasi.",
    region: "Kalimantan" as ProjectRegion,
    commodity: "Infrastruktur" as ProjectCommodity,
    image: projectAssets["infrastruktur-kalimantan-selatan"],
    year: "2019–2023",
    status: "Selesai",
  },
  {
    slug: "energi-maluku-utara",
    title: "Energi Maluku Utara",
    description: "Pembangkit listrik tenaga suraya dan jaringan transmisi untuk operasional dan masyarakat.",
    region: "Maluku" as ProjectRegion,
    commodity: "Energi" as ProjectCommodity,
    image: projectAssets["energi-maluku-utara"],
    year: "2022–Sekarang",
    status: "Pengembangan",
  },
  {
    slug: "teknologi-dashboard-operasional",
    title: "Dashboard Operasional Terpadu",
    description: "Platform digital untuk pemantauan real-time keselamatan, produksi, dan performa aset.",
    region: "Sumatera" as ProjectRegion,
    commodity: "Teknologi" as ProjectCommodity,
    image: projectAssets["teknologi-dashboard-operasional"],
    year: "2023–Sekarang",
    status: "Operasional",
  },
  {
    slug: "reklamasi-tambang-terpadu",
    title: "Reklamasi Tambang Terpadu",
    description: "Program reklamasi bertahap mengembalikan fungsi lahan dan menciptakan nilai ekologis.",
    region: "Papua" as ProjectRegion,
    commodity: "Jasa" as ProjectCommodity,
    image: projectAssets["reklamasi-tambang-terpadu"],
    year: "2018–Sekarang",
    status: "Berlangsung",
  },
] ;

export const projectsItemsEn: ProjectItem[] = [
  {
    slug: "tambang-kalimantan-timur",
    title: "East Kalimantan Mine",
    description: "Large-scale mineral mining operation with industry-leading safety and environmental standards.",
    region: "Kalimantan" as ProjectRegion,
    commodity: "Mineral" as ProjectCommodity,
    image: projectAssets["tambang-kalimantan-timur"],
    year: "2020–Present",
    status: "Operational",
  },
  {
    slug: "pengolahan-sulawesi-tenggara",
    title: "Southeast Sulawesi Processing",
    description: "Modern mineral processing facility optimizing recovery and energy efficiency.",
    region: "Sulawesi" as ProjectRegion,
    commodity: "Mineral" as ProjectCommodity,
    image: projectAssets["pengolahan-sulawesi-tenggara"],
    year: "2021–Present",
    status: "Operational",
  },
  {
    slug: "infrastruktur-kalimantan-selatan",
    title: "South Kalimantan Infrastructure",
    description: "Roads, ports, and integrated logistics infrastructure supporting mining operations.",
    region: "Kalimantan" as ProjectRegion,
    commodity: "Infrastruktur" as ProjectCommodity,
    image: projectAssets["infrastruktur-kalimantan-selatan"],
    year: "2019–2023",
    status: "Completed",
  },
  {
    slug: "energi-maluku-utara",
    title: "North Maluku Energy",
    description: "Utility-scale solar power plant and transmission network for operations and communities.",
    region: "Maluku" as ProjectRegion,
    commodity: "Energi" as ProjectCommodity,
    image: projectAssets["energi-maluku-utara"],
    year: "2022–Present",
    status: "Development",
  },
  {
    slug: "teknologi-dashboard-operasional",
    title: "Integrated Operational Dashboard",
    description: "Digital platform for real-time monitoring of safety, production, and asset performance.",
    region: "Sumatera" as ProjectRegion,
    commodity: "Teknologi" as ProjectCommodity,
    image: projectAssets["teknologi-dashboard-operasional"],
    year: "2023–Present",
    status: "Operational",
  },
  {
    slug: "reklamasi-tambang-terpadu",
    title: "Integrated Mine Reclamation",
    description: "Phased reclamation program restoring land function and creating ecological value.",
    region: "Papua" as ProjectRegion,
    commodity: "Jasa" as ProjectCommodity,
    image: projectAssets["reklamasi-tambang-terpadu"],
    year: "2018–Present",
    status: "Ongoing",
  },
] ;

const projectsDetailBySlugId = {
  "tambang-kalimantan-timur": {
    title: "Tambang Kalimantan Timur",
    description:
      "Operasi penambangan terbuka skala besar yang mengutamakan pengelolaan lingkungan bertanggung jawab, keselamatan nol kecelakaan, dan pemberdayaan ekonomi masyarakat sekitar.",
    image: projectAssets["tambang-kalimantan-timur"],
    region: "Kalimantan" as ProjectRegion,
    commodity: "Mineral" as ProjectCommodity,
    coordinates: [117.2, 0.5] as [number, number],
    year: "2020–Sekarang",
    status: "Operasional",
    specifications: [
      { label: "Jenis Tambang", value: "Tambang Terbuka (Open Pit)" },
      { label: "Komoditas", value: "Nickel, Kobalt" },
      { label: "Luas Area", value: "12.500 Ha" },
      { label: "Kapasitas Produksi", value: "15 Juta Ton/Tahun" },
      { label: "Metode Penambangan", value: "Shovel-Truck + In-Pit Crushing" },
      { label: "Standar Keselamatan", value: "ISO 45001, Zero LTI" },
      { label: "Manajemen Lingkungan", value: "AMDAL, RKL-RPL, PROPER Hijau" },
    ],
    gallery: [
      projectAssets["tambang-kalimantan-timur"],
      images.miningTruck,
      images.openPitMine,
      images.fieldTeam,
    ],
    mapImage: images.landscape,
    highlights: [
      "Penerapan teknologi autonomous haulage untuk efisiensi dan keselamatan",
      "Program reklamasi progresif: >300 Ha telah direklamasi",
      "Kemitraan dengan 15+ UKM lokal untuk logistik dan jasa pendukung",
      "Program bina desa mencakup pendidikan, kesehatan, dan pertanian",
    ],
  },
  "pengolahan-sulawesi-tenggara": {
    title: "Pengolahan Sulawesi Tenggara",
    description:
      "Kompleks pengolahan mineral berkapasitas tinggi dengan teknologi hidrometalurgi mutakhir untuk memaksimalkan nilai tambah sumber daya nickel.",
    image: projectAssets["pengolahan-sulawesi-tenggara"],
    region: "Sulawesi" as ProjectRegion,
    commodity: "Mineral" as ProjectCommodity,
    coordinates: [122.5, -4.1] as [number, number],
    year: "2021–Sekarang",
    status: "Operasional",
    specifications: [
      { label: "Teknologi Proses", value: "HPAL (High Pressure Acid Leaching)" },
      { label: "Produk Utama", value: "MHP (Mixed Hydroxide Precipitate)" },
      { label: "Kapasitas Desain", value: "60.000 Ton Ni/Tahun" },
      { label: "Efisiensi Energi", value: "Cogeneration 120 MW" },
      { label: "Pengelolaan Limbah", value: "Tailings Storage Facility + Water Recycle 85%" },
      { label: "Otomasi", value: "DCS + Advanced Process Control" },
      { label: "Sertifikasi", value: "ISO 9001, ISO 14001, ISO 45001" },
    ],
    gallery: [
      projectAssets["pengolahan-sulawesi-tenggara"],
      images.industrialFacility,
      images.engineering,
      images.powerInfrastructure,
    ],
    mapImage: images.landscape,
    highlights: [
      "Teknologi HPAL generasi terbaru dengan konsumsi asam terendah di kelasnya",
      "Sistem pengelolaan air tertutup mengurangi ambilan air baku 60%",
      "Program pengembangan vendor lokal menciptakan 500+ lapangan kerja",
      "Integrasi dengan pelabuhan khusus untuk ekspor MHP efisien",
    ],
  },
  "infrastruktur-kalimantan-selatan": {
    title: "Infrastruktur Kalimantan Selatan",
    description:
      "Pengembangan infrastruktur multimodal mencakup jalan tol akses tambang, pelabuhan batubara/mineral, dan jaringan logistik terintegrasi.",
    image: projectAssets["infrastruktur-kalimantan-selatan"],
    region: "Kalimantan" as ProjectRegion,
    commodity: "Infrastruktur" as ProjectCommodity,
    coordinates: [115.4, -3.1] as [number, number],
    year: "2019–2023",
    status: "Selesai",
    specifications: [
      { label: "Jalan Akses", value: "85 km (4 jalur, standar tol)" },
      { label: "Pelabuhan", value: "2 Dermaga Panjang 450m, Kedalaman 16m" },
      { label: "Kapasitas Muat", value: "40 Juta Ton/Tahun" },
      { label: "Jembatan Utama", value: "3 Unit (Span 120–200m)" },
      { label: "Sistem Transportasi", value: "Overland Conveyor 12 km + Truck" },
      { label: "Investasi", value: "USD 1,2 Miliar" },
      { label: "Waktu Konstruksi", value: "42 Bulan" },
    ],
    gallery: [
      projectAssets["infrastruktur-kalimantan-selatan"],
      images.powerInfrastructure,
      images.openPitMine,
      images.miningTruck,
    ],
    mapImage: images.landscape,
    highlights: [
      "Mengurangi biaya logistik 35% dan emisi CO2 28% per ton-km",
      "Desain tahan gempa dan banjir mengacu standar SNI & AASHTO",
      "Pelabuhan green port: shore power, dust suppression, ballast water treatment",
      "Mendorong pembukaan akses 50+ desa terpencil di koridor",
    ],
  },
  "energi-maluku-utara": {
    title: "Energi Maluku Utara",
    description:
      "Pengembangan pembangkit listrik tenaga suraya (PLTS) skala utilitas dan jaringan transmisi untuk mendekabonisasi operasional tambang serta menyediakan listrik bersih bagi masyarakat.",
    image: projectAssets["energi-maluku-utara"],
    region: "Maluku" as ProjectRegion,
    commodity: "Energi" as ProjectCommodity,
    coordinates: [127.8, 1.2] as [number, number],
    year: "2022–Sekarang",
    status: "Pengembangan",
    specifications: [
      { label: "Jenis Pembangkit", value: "PLTS (Photovoltaic) + BESS" },
      { label: "Kapasitas PLTS", value: "150 MWp" },
      { label: "Battery Storage (BESS)", value: "80 MW / 320 MWh" },
      { label: "Transmisi", value: "150 kV, 65 km ke Substation Tambang" },
      { label: "Produksi Tahunan", value: "~220 GWh (offset 150 kt CO2e)" },
      { label: "Luas Lahan", value: "180 Ha (lahan non-produktif)" },
      { label: "COPD", value: "Target 2026" },
    ],
    gallery: [
      projectAssets["energi-maluku-utara"],
      images.solarEnergy,
      images.powerInfrastructure,
      images.landscape,
    ],
    mapImage: images.landscape,
    highlights: [
      "Model hybrid: PLTS + BESS + genset cadangan untuk keandalan 99.9%",
      "Skema PPA jangka panjang dengan PLN dan kontraktor tambang",
      "Program community solar: 5 MW dialokasikan untuk desa sekitar",
      "Penelitian kolaboratif dengan institut teknologi untuk efisiensi panel tropis",
    ],
  },
  "teknologi-dashboard-operasional": {
    title: "Dashboard Operasional Terpadu",
    description:
      "Platform digital end-to-end yang menyatukan data geologi, tambang, pengolahan, logistik, dan K3 dalam satu dasbor real-time untuk pengambilan keputusan berbasis data.",
    image: projectAssets["teknologi-dashboard-operasional"],
    region: "Sumatera" as ProjectRegion,
    commodity: "Teknologi" as ProjectCommodity,
    coordinates: [101.5, 0.8] as [number, number],
    year: "2023–Sekarang",
    status: "Operasional",
    specifications: [
      { label: "Arsitektur", value: "Cloud-native (Kubernetes, Microservices)" },
      { label: "Sumber Data", value: "50+ sistem (SCADA, ERP, GIS, IoT, LIMS)" },
      { label: "Latensi Data", value: "<5 detik (near real-time)" },
      { label: "Modul Utama", value: "Geologi, Mine Planning, Fleet, Plant, Logistics, HSE, ESG" },
      { label: "Analitik", value: "ML-based: predictive maintenance, grade control, route optimization" },
      { label: "Keamanan", value: "ISO 27001, Zero Trust Architecture" },
      { label: "Pengguna Aktif", value: "1.200+ (operator hingga direksi)" },
    ],
    gallery: [
      projectAssets["teknologi-dashboard-operasional"],
      images.engineering,
      images.collaboration,
      images.modernOffice,
    ],
    mapImage: images.landscape,
    highlights: [
      "Mengurangi unplanned downtime 22% via predictive maintenance",
      "Optimasi rute armada menghemat BBM 15% per ton-km",
      "Single source of truth untuk pelaporan ESG otomatis ke regulator",
      "Platform terbuka: API untuk integrasi mitra dan vendor",
    ],
  },
  "reklamasi-tambang-terpadu": {
    title: "Reklamasi Tambang Terpadu",
    description:
      "Program reklamasi bertahap yang mengintegrasikan restorasi ekologi, agroforestri, dan pemberdayaan masyarakat untuk menciptakan lanskap multifungsi pascatambang.",
    image: projectAssets["reklamasi-tambang-terpadu"],
    region: "Papua" as ProjectRegion,
    commodity: "Jasa" as ProjectCommodity,
    coordinates: [138.5, -4.2] as [number, number],
    year: "2018–Sekarang",
    status: "Berlangsung",
    specifications: [
      { label: "Total Area Target", value: "2.500 Ha" },
      { label: "Area Tereklamasi", value: "1.800 Ha (72%)" },
      { label: "Jenis Tanaman", value: "200+ spesies lokal (pohon, MPTS, tanaman obat)" },
      { label: "Model Agroforestri", value: "Kopi, Karet, Kelapa Sawit, Buah-buahan lokal" },
      { label: "Carbon Sequestration", value: "Est. 450.000 Ton CO2e (2030)" },
      { label: "Keterlibatan Masyarakat", value: "12 Kelompok Tani, 800+ KK" },
      { label: "Monitoring", value: "Drone + Sentinel-2 + Ground Truthing" },
    ],
    gallery: [
      projectAssets["reklamasi-tambang-terpadu"],
      images.reclamation,
      images.collaboration,
      images.landscape,
    ],
    mapImage: images.landscape,
    highlights: [
      "Sertifikasi FSC untuk pengelolaan hutan produksi berkelanjutan",
      "Program beekeeping & madu hutan: pendapatan tambahan petani",
      "Kawasan edukasi lingkungan untuk siswa dan peneliti",
      "Model replikasi untuk proyek tambang lain di Indonesia timur",
    ],
  },
} satisfies Record<ProjectSlug, CompanyPageCopy["projects"]["detailBySlug"][ProjectSlug]>;

const projectsDetailBySlugEn = {
  "tambang-kalimantan-timur": {
    title: "East Kalimantan Mine",
    description:
      "Large-scale open-pit mining operation prioritizing responsible environmental management, zero-harm safety, and community economic empowerment.",
    image: projectAssets["tambang-kalimantan-timur"],
    region: "Kalimantan" as ProjectRegion,
    commodity: "Mineral" as ProjectCommodity,
    coordinates: [117.2, 0.5] as [number, number],
    year: "2020–Present",
    status: "Operational",
    specifications: [
      { label: "Mine Type", value: "Open Pit" },
      { label: "Commodity", value: "Nickel, Cobalt" },
      { label: "Area", value: "12,500 Ha" },
      { label: "Production Capacity", value: "15 Million Ton/Year" },
      { label: "Mining Method", value: "Shovel-Truck + In-Pit Crushing" },
      { label: "Safety Standard", value: "ISO 45001, Zero LTI" },
      { label: "Environmental Mgmt", value: "AMDAL, RKL-RPL, PROPER Green" },
    ],
    gallery: [
      projectAssets["tambang-kalimantan-timur"],
      images.miningTruck,
      images.openPitMine,
      images.fieldTeam,
    ],
    mapImage: images.landscape,
    highlights: [
      "Autonomous haulage technology for efficiency and safety",
      "Progressive reclamation: >300 Ha reclaimed",
      "Partnership with 15+ local SMEs for logistics and support services",
      "Community development programs covering education, health, and agriculture",
    ],
  },
  "pengolahan-sulawesi-tenggara": {
    title: "Southeast Sulawesi Processing",
    description:
      "High-capacity mineral processing complex with state-of-the-art hydrometallurgical technology maximizing nickel resource value.",
    image: projectAssets["pengolahan-sulawesi-tenggara"],
    region: "Sulawesi" as ProjectRegion,
    commodity: "Mineral" as ProjectCommodity,
    coordinates: [122.5, -4.1] as [number, number],
    year: "2021–Present",
    status: "Operational",
    specifications: [
      { label: "Process Technology", value: "HPAL (High Pressure Acid Leaching)" },
      { label: "Main Product", value: "MHP (Mixed Hydroxide Precipitate)" },
      { label: "Design Capacity", value: "60,000 Ton Ni/Year" },
      { label: "Energy Efficiency", value: "Cogeneration 120 MW" },
      { label: "Waste Management", value: "Tailings Storage Facility + Water Recycle 85%" },
      { label: "Automation", value: "DCS + Advanced Process Control" },
      { label: "Certification", value: "ISO 9001, ISO 14001, ISO 45001" },
    ],
    gallery: [
      projectAssets["pengolahan-sulawesi-tenggara"],
      images.industrialFacility,
      images.engineering,
      images.powerInfrastructure,
    ],
    mapImage: images.landscape,
    highlights: [
      "Latest-generation HPAL technology with lowest acid consumption in class",
      "Closed-loop water management reduces raw water intake by 60%",
      "Local vendor development program creating 500+ jobs",
      "Integration with dedicated port for efficient MHP export",
    ],
  },
  "infrastruktur-kalimantan-selatan": {
    title: "South Kalimantan Infrastructure",
    description:
      "Multimodal infrastructure development including mine-access toll road, bulk mineral port, and integrated logistics network.",
    image: projectAssets["infrastruktur-kalimantan-selatan"],
    region: "Kalimantan" as ProjectRegion,
    commodity: "Infrastruktur" as ProjectCommodity,
    coordinates: [115.4, -3.1] as [number, number],
    year: "2019–2023",
    status: "Completed",
    specifications: [
      { label: "Access Road", value: "85 km (4 lanes, toll standard)" },
      { label: "Port", value: "2 Berths, 450m Length, 16m Depth" },
      { label: "Loading Capacity", value: "40 Million Ton/Year" },
      { label: "Main Bridges", value: "3 Units (Span 120–200m)" },
      { label: "Transport System", value: "Overland Conveyor 12 km + Truck" },
      { label: "Investment", value: "USD 1.2 Billion" },
      { label: "Construction Time", value: "42 Months" },
    ],
    gallery: [
      projectAssets["infrastruktur-kalimantan-selatan"],
      images.powerInfrastructure,
      images.openPitMine,
      images.miningTruck,
    ],
    mapImage: images.landscape,
    highlights: [
      "Reduces logistics cost 35% and CO2 emissions 28% per ton-km",
      "Earthquake and flood resilient design per SNI & AASHTO standards",
      "Green port: shore power, dust suppression, ballast water treatment",
      "Opens access for 50+ remote villages along the corridor",
    ],
  },
  "energi-maluku-utara": {
    title: "North Maluku Energy",
    description:
      "Utility-scale solar power plant (PLTS) and battery storage with transmission network for mining decarbonization and clean community power.",
    image: projectAssets["energi-maluku-utara"],
    region: "Maluku" as ProjectRegion,
    commodity: "Energi" as ProjectCommodity,
    coordinates: [127.8, 1.2] as [number, number],
    year: "2022–Present",
    status: "Development",
    specifications: [
      { label: "Plant Type", value: "PLTS (Photovoltaic) + BESS" },
      { label: "Solar Capacity", value: "150 MWp" },
      { label: "Battery Storage (BESS)", value: "80 MW / 320 MWh" },
      { label: "Transmission", value: "150 kV, 65 km to Mine Substation" },
      { label: "Annual Generation", value: "~220 GWh (offset 150 kt CO2e)" },
      { label: "Land Area", value: "180 Ha (non-productive land)" },
      { label: "COD Target", value: "2026" },
    ],
    gallery: [
      projectAssets["energi-maluku-utara"],
      images.solarEnergy,
      images.powerInfrastructure,
      images.landscape,
    ],
    mapImage: images.landscape,
    highlights: [
      "Hybrid model: Solar + BESS + backup genset for 99.9% reliability",
      "Long-term PPA with PLN and mining contractor",
      "Community solar program: 5 MW allocated for surrounding villages",
      "Collaborative research with tech institute for tropical panel efficiency",
    ],
  },
  "teknologi-dashboard-operasional": {
    title: "Integrated Operational Dashboard",
    description:
      "End-to-end digital platform unifying geology, mining, processing, logistics, and HSE data into a single real-time dashboard for data-driven decisions.",
    image: projectAssets["teknologi-dashboard-operasional"],
    region: "Sumatera" as ProjectRegion,
    commodity: "Teknologi" as ProjectCommodity,
    coordinates: [101.5, 0.8] as [number, number],
    year: "2023–Present",
    status: "Operational",
    specifications: [
      { label: "Architecture", value: "Cloud-native (Kubernetes, Microservices)" },
      { label: "Data Sources", value: "50+ systems (SCADA, ERP, GIS, IoT, LIMS)" },
      { label: "Data Latency", value: "<5 seconds (near real-time)" },
      { label: "Core Modules", value: "Geology, Mine Planning, Fleet, Plant, Logistics, HSE, ESG" },
      { label: "Analytics", value: "ML-based: predictive maintenance, grade control, route optimization" },
      { label: "Security", value: "ISO 27001, Zero Trust Architecture" },
      { label: "Active Users", value: "1,200+ (operators to directors)" },
    ],
    gallery: [
      projectAssets["teknologi-dashboard-operasional"],
      images.engineering,
      images.collaboration,
      images.modernOffice,
    ],
    mapImage: images.landscape,
    highlights: [
      "Reduced unplanned downtime 22% via predictive maintenance",
      "Fleet route optimization saves 15% fuel per ton-km",
      "Single source of truth for automated ESG reporting to regulators",
      "Open platform: APIs for partner and vendor integration",
    ],
  },
  "reklamasi-tambang-terpadu": {
    title: "Integrated Mine Reclamation",
    description:
      "Phased reclamation program integrating ecological restoration, agroforestry, and community empowerment to create multifunctional post-mining landscapes.",
    image: projectAssets["reklamasi-tambang-terpadu"],
    region: "Papua" as ProjectRegion,
    commodity: "Jasa" as ProjectCommodity,
    coordinates: [138.5, -4.2] as [number, number],
    year: "2018–Present",
    status: "Ongoing",
    specifications: [
      { label: "Total Target Area", value: "2,500 Ha" },
      { label: "Reclaimed Area", value: "1,800 Ha (72%)" },
      { label: "Plant Species", value: "200+ local species (trees, MPTS, medicinal)" },
      { label: "Agroforestry Model", value: "Coffee, Rubber, Oil Palm, Local Fruits" },
      { label: "Carbon Sequestration", value: "Est. 450,000 Ton CO2e (2030)" },
      { label: "Community Engagement", value: "12 Farmer Groups, 800+ Households" },
      { label: "Monitoring", value: "Drone + Sentinel-2 + Ground Truthing" },
    ],
    gallery: [
      projectAssets["reklamasi-tambang-terpadu"],
      images.reclamation,
      images.collaboration,
      images.landscape,
    ],
    mapImage: images.landscape,
    highlights: [
      "FSC certification for sustainable production forest management",
      "Beekeeping & forest honey program: additional farmer income",
      "Environmental education zone for students and researchers",
      "Replication model for other mining projects in eastern Indonesia",
    ],
  },
} satisfies Record<ProjectSlug, CompanyPageCopy["projects"]["detailBySlug"][ProjectSlug]>;

export function getBusinessSlugs() {
  return businessSlugs;
}

export function isBusinessSlug(slug: string): slug is BusinessSlug {
  return businessSlugs.some((candidate) => candidate === slug);
}

const idLocale: CompanyPageCopy = {
  about: {
    eyebrow: "Tentang Kami",
    title: "Menghubungkan potensi Indonesia dengan kemajuan yang bertanggung jawab.",
    description:
      "Nusantara Mineral Energi membangun kapabilitas mineral, energi, dan teknologi yang terintegrasi untuk menciptakan nilai jangka panjang.",
    image: images.landscape,
    visionMissionEyebrow: "Arah Perusahaan",
    visionTitle: "Visi",
    vision:
      "Menjadi mitra pertumbuhan Indonesia yang menghadirkan kemajuan melalui pengelolaan sumber daya dan inovasi secara bertanggung jawab.",
    missionTitle: "Misi",
    missions: [
      "Mengembangkan kapabilitas bisnis yang terintegrasi dan berdaya saing.",
      "Menjaga keselamatan, integritas, dan tanggung jawab lingkungan dalam setiap keputusan.",
      "Membangun kemitraan yang memberi manfaat berkelanjutan bagi masyarakat.",
    ],
    valuesEyebrow: "Nilai Perusahaan",
    valuesTitle: "Prinsip yang menyatukan cara kami bekerja.",
    values: [
      { title: "Integritas", description: "Bertindak jujur, konsisten, dan dapat dipercaya." },
      { title: "Keselamatan", description: "Menempatkan keselamatan manusia di setiap kegiatan." },
      { title: "Kolaborasi", description: "Mencapai hasil lebih baik melalui kemitraan terbuka." },
      { title: "Kemajuan", description: "Terus belajar, berinovasi, dan memberi dampak." },
    ],
    historyEyebrow: "Perjalanan Kami",
    historyTitle: "Bertumbuh melalui kapabilitas dan kemitraan.",
    historyHint: "Geser untuk melihat perjalanan",
    historyNote: "Tonggak waktu ilustratif; sesuaikan dengan sejarah resmi perusahaan.",
    milestones: [
      { period: "2010", title: "Awal perjalanan", description: "Membangun fondasi dan arah usaha untuk berkontribusi pada potensi Indonesia." },
      { period: "2015", title: "Memperluas kapabilitas", description: "Mengembangkan keahlian operasional dan menjalin kemitraan di sektor sumber daya." },
      { period: "2020", title: "Menghubungkan rantai nilai", description: "Memperkuat keterhubungan layanan, infrastruktur, dan proses pengolahan." },
      { period: "2025", title: "Melangkah ke masa depan", description: "Mendorong inovasi dan pertumbuhan yang makin bertanggung jawab." },
    ],
    leadershipEyebrow: "Manajemen",
    leadershipTitle: "Keahlian yang menggerakkan langkah bersama.",
    leadershipNote: "Perbarui kartu peran ini dengan susunan dan profil manajemen resmi.",
    leaders: [
      { role: "Direktur Utama", focus: "Arah strategis dan kinerja perusahaan.", image: images.modernOffice },
      { role: "Direktur Operasi", focus: "Keunggulan operasi, keselamatan, dan keandalan.", image: images.fieldTeam },
      { role: "Direktur Keuangan", focus: "Ketahanan finansial dan alokasi modal yang bertanggung jawab.", image: images.collaboration },
    ],
    governanceEyebrow: "Tata Kelola",
    governanceTitle: "Menjaga kepercayaan melalui tata kelola yang kuat.",
    governance: [
      { title: "Etika dan integritas", description: "Pedoman perilaku menjadi acuan bagi insan perusahaan dalam mengambil keputusan yang jujur, adil, dan dapat dipertanggungjawabkan." },
      { title: "Manajemen risiko", description: "Risiko strategis dan operasional diidentifikasi, dinilai, dan ditangani sebagai bagian dari perencanaan dan pengawasan." },
      { title: "Kepatuhan", description: "Kami berkomitmen menjalankan kegiatan sesuai ketentuan yang berlaku serta standar internal perusahaan." },
      { title: "Transparansi dan akuntabilitas", description: "Pelaporan dan pengawasan yang jelas mendukung tanggung jawab kepada pemangku kepentingan." },
    ],
  },
  businesses: {
    eyebrow: "Bisnis Kami",
    title: "Kapabilitas terhubung, nilai berkelanjutan.",
    description:
      "Portofolio kami menghubungkan kegiatan mineral dengan layanan, pengolahan, energi, infrastruktur, dan teknologi.",
    items: [
      { slug: "pertambangan-mineral", title: "Pertambangan Mineral", description: "Pengelolaan sumber daya mineral melalui operasi yang bertanggung jawab dan berorientasi jangka panjang.", image: businessAssets["pertambangan-mineral"] },
      { slug: "jasa-pertambangan", title: "Jasa Pertambangan", description: "Dukungan teknis dan operasional untuk menjaga kegiatan pertambangan berjalan aman dan andal.", image: businessAssets["jasa-pertambangan"] },
      { slug: "pengolahan-industri", title: "Pengolahan & Industri", description: "Pengembangan kemampuan pengolahan untuk mendorong nilai tambah sumber daya mineral.", image: businessAssets["pengolahan-industri"] },
      { slug: "energi-infrastruktur", title: "Energi & Infrastruktur", description: "Infrastruktur dan solusi energi yang mendukung operasi serta pertumbuhan wilayah.", image: businessAssets["energi-infrastruktur"] },
      { slug: "teknologi-inovasi", title: "Teknologi & Inovasi", description: "Pemanfaatan teknologi dan keahlian untuk mendorong operasi yang terus berkembang.", image: businessAssets["teknologi-inovasi"] },
    ],
    detail: {
      eyebrow: "Kapabilitas Kami",
      capabilitiesTitle: "Keahlian yang terhubung dengan kebutuhan operasi.",
      toolsTitle: "Alat dan teknologi",
      caseLabel: "Studi Kasus",
      caseTitle: "Mengubah tantangan operasi menjadi kemajuan terukur.",
      caseDescription:
        "Contoh pendekatan lintas fungsi: memadukan perencanaan, keahlian teknis, dan pemantauan kinerja untuk mendukung operasi yang lebih aman dan andal.",
      ctaTitle: "Mari membangun kemitraan yang saling menguatkan.",
      capabilities: ["Perencanaan operasi terpadu", "Keahlian teknis lintas disiplin", "Pengendalian mutu dan keselamatan", "Kemitraan dan pengembangan lokal"],
      tools: ["Pemantauan kondisi dan kinerja", "Analisis data operasional", "Perencanaan digital", "Prosedur kerja dan keselamatan"],
      caseImage: images.industrialFacility,
    },
    detailBySlug: {
      "pertambangan-mineral": {
        title: "Pertambangan Mineral",
        description: "Mengelola potensi mineral dengan perencanaan yang cermat, operasi yang aman, dan tanggung jawab jangka panjang.",
        image: businessAssets["pertambangan-mineral"],
        capabilities: ["Perencanaan dan pengembangan tambang", "Operasi penambangan yang aman", "Pengelolaan kualitas dan produktivitas", "Reklamasi dan pemantauan lingkungan"],
        tools: ["Pemetaan dan pemodelan geologi", "Pemantauan alat dan kondisi operasi", "Perencanaan tambang digital", "Sistem manajemen keselamatan"],
        caseTitle: "Perencanaan tambang yang menghubungkan keselamatan dan produktivitas",
        caseDescription: "Tim lintas fungsi menyelaraskan rencana kerja, pemantauan operasi, dan pengendalian risiko untuk mendukung pengelolaan sumber daya secara bertanggung jawab.",
        caseImage: images.openPitMine,
      },
      "jasa-pertambangan": {
        title: "Jasa Pertambangan",
        description: "Menyediakan dukungan teknis dan operasional yang membantu mitra menjalankan kegiatan secara aman dan andal.",
        image: businessAssets["jasa-pertambangan"],
        capabilities: ["Pengupasan dan pemindahan material", "Pengelolaan armada dan perawatan", "Perencanaan tenaga kerja operasional", "Pengawasan keselamatan dan mutu"],
        tools: ["Pemantauan armada", "Perawatan berbasis kondisi", "Perencanaan shift dan dispatch", "Pelaporan kinerja operasi"],
        caseTitle: "Koordinasi armada untuk operasi yang lebih andal",
        caseDescription: "Integrasi perencanaan kerja, pemeliharaan, dan pemantauan harian membantu tim mengenali hambatan dan menyelaraskan prioritas operasi.",
        caseImage: images.miningTruck,
      },
      "pengolahan-industri": {
        title: "Pengolahan & Industri",
        description: "Mengembangkan kemampuan pengolahan yang meningkatkan nilai tambah dan menjaga kualitas produk.",
        image: businessAssets["pengolahan-industri"],
        capabilities: ["Perancangan alur proses", "Pengendalian kualitas produk", "Keandalan fasilitas industri", "Efisiensi sumber daya dan energi"],
        tools: ["Instrumentasi dan kontrol proses", "Pemantauan kondisi fasilitas", "Analisis kualitas material", "Sistem perencanaan pemeliharaan"],
        caseTitle: "Menjaga konsistensi proses dan kualitas",
        caseDescription: "Pemantauan parameter proses dan koordinasi pemeliharaan mendukung kestabilan fasilitas serta keputusan berbasis data.",
        caseImage: images.industrialFacility,
      },
      "energi-infrastruktur": {
        title: "Energi & Infrastruktur",
        description: "Menghubungkan kebutuhan operasi dan wilayah dengan solusi energi serta infrastruktur yang andal.",
        image: businessAssets["energi-infrastruktur"],
        capabilities: ["Perencanaan infrastruktur pendukung", "Konektivitas energi dan operasi", "Pengelolaan keandalan aset", "Dukungan pengembangan wilayah"],
        tools: ["Pemantauan jaringan dan fasilitas", "Perencanaan pemeliharaan aset", "Sistem manajemen energi", "Analisis keandalan layanan"],
        caseTitle: "Memperkuat konektivitas untuk operasi terpadu",
        caseDescription: "Perencanaan kebutuhan energi, infrastruktur, dan pemeliharaan diselaraskan untuk mendukung kesinambungan layanan.",
        caseImage: images.powerInfrastructure,
      },
      "teknologi-inovasi": {
        title: "Teknologi & Inovasi",
        description: "Menerapkan teknologi dan keahlian untuk menyederhanakan proses serta mendukung keputusan yang lebih baik.",
        image: businessAssets["teknologi-inovasi"],
        capabilities: ["Transformasi proses operasional", "Analitik dan pemanfaatan data", "Otomasi alur kerja", "Pengembangan kapabilitas digital"],
        tools: ["Dasbor kinerja", "Integrasi data operasional", "Pemantauan digital", "Perangkat kolaborasi dan pelaporan"],
        caseTitle: "Menyatukan data untuk keputusan yang lebih cepat",
        caseDescription: "Informasi dari tim dan proses yang berbeda dirangkum untuk membantu pemimpin operasi memahami kinerja dan menentukan tindak lanjut.",
        caseImage: images.engineering,
      },
    },
    back: "Kembali ke Bisnis Kami",
    explore: "Jelajahi portofolio",
    allBusinesses: "Semua lini bisnis",
    contact: "Hubungi tim kami",
    learnMore: "Pelajari kapabilitas",
  },
  projects: {
    eyebrow: "Proyek Kami",
    title: "Portofolio proyek yang menghubungkan potensi dengan kemajuan.",
    description:
      "Dari tambang terbuka hingga infrastruktur energi, proyek kami mencerminkan komitmen pada keselamatan, inovasi, dan tanggung jawab lingkungan.",
    items: projectsItemsId,
    detail: {
      eyebrow: "Detail Proyek",
      specsTitle: "Spesifikasi Teknis",
      galleryTitle: "Galeri Proyek",
      mapTitle: "Lokasi Proyek",
      relatedTitle: "Proyek Terkait",
      ctaTitle: "Berkolaborasi pada proyek selanjutnya?",
    },
    detailBySlug: projectsDetailBySlugId,
    filters: {
      all: "Semua",
      regions: {
        Kalimantan: "Kalimantan",
        Sulawesi: "Sulawesi",
        Maluku: "Maluku",
        Sumatera: "Sumatera",
        Papua: "Papua",
      },
      commodities: {
        Mineral: "Mineral",
        Energi: "Energi",
        Infrastruktur: "Infrastruktur",
        Teknologi: "Teknologi",
        Jasa: "Jasa",
      },
    },
    back: "Kembali ke Proyek",
    explore: "Jelajahi proyek lain",
    contact: "Diskusikan proyek Anda",
  },
};

const enLocale: CompanyPageCopy = {
  about: {
    eyebrow: "About Us",
    title: "Connecting Indonesia's potential with responsible progress.",
    description:
      "Nusantara Mineral Energi builds integrated mineral, energy, and technology capabilities to create long-term value.",
    image: images.landscape,
    visionMissionEyebrow: "Our Direction",
    visionTitle: "Vision",
    vision: "To become Indonesia's growth partner, advancing progress through responsible resource management and innovation.",
    missionTitle: "Mission",
    missions: [
      "Develop integrated and competitive business capabilities.",
      "Uphold safety, integrity, and environmental responsibility in every decision.",
      "Build partnerships that create lasting value for communities.",
    ],
    valuesEyebrow: "Our Values",
    valuesTitle: "Principles that bring our work together.",
    values: [
      { title: "Integrity", description: "Act with honesty, consistency, and trust." },
      { title: "Safety", description: "Put people's safety at the heart of every activity." },
      { title: "Collaboration", description: "Achieve better outcomes through open partnership." },
      { title: "Progress", description: "Keep learning, innovating, and creating impact." },
    ],
    historyEyebrow: "Our Journey",
    historyTitle: "Growing through capabilities and partnership.",
    historyHint: "Swipe to explore our journey",
    historyNote: "Illustrative milestones; update to reflect the company's verified history.",
    milestones: [
      { period: "2010", title: "The beginning", description: "Establishing a foundation and direction to contribute to Indonesia's potential." },
      { period: "2015", title: "Expanding capabilities", description: "Developing operational expertise and partnerships in the resources sector." },
      { period: "2020", title: "Connecting the value chain", description: "Strengthening the links between services, infrastructure, and processing." },
      { period: "2025", title: "Looking ahead", description: "Advancing innovation and increasingly responsible growth." },
    ],
    leadershipEyebrow: "Management",
    leadershipTitle: "Expertise moving us forward together.",
    leadershipNote: "Update these role cards with the official management team and profiles.",
    leaders: [
      { role: "President Director", focus: "Company strategy and performance.", image: images.modernOffice },
      { role: "Operations Director", focus: "Operational excellence, safety, and reliability.", image: images.fieldTeam },
      { role: "Finance Director", focus: "Financial resilience and responsible capital allocation.", image: images.collaboration },
    ],
    governanceEyebrow: "Governance",
    governanceTitle: "Building trust through strong governance.",
    governance: [
      { title: "Ethics and integrity", description: "Our code of conduct guides people across the company to make honest, fair, and accountable decisions." },
      { title: "Risk management", description: "Strategic and operational risks are identified, assessed, and addressed through planning and oversight." },
      { title: "Compliance", description: "We are committed to operating in line with applicable requirements and company standards." },
      { title: "Transparency and accountability", description: "Clear reporting and oversight support our responsibilities to stakeholders." },
    ],
  },
  businesses: {
    eyebrow: "Our Businesses",
    title: "Connected capabilities, lasting value.",
    description:
      "Our portfolio connects minerals with services, processing, energy, infrastructure, and technology.",
    items: [
      { slug: "pertambangan-mineral", title: "Mineral Mining", description: "Responsible, long-term management of mineral resources and operations.", image: businessAssets["pertambangan-mineral"] },
      { slug: "jasa-pertambangan", title: "Mining Services", description: "Technical and operational support to keep mining activities safe and reliable.", image: businessAssets["jasa-pertambangan"] },
      { slug: "pengolahan-industri", title: "Processing & Industry", description: "Developing processing capabilities to unlock added value from mineral resources.", image: businessAssets["pengolahan-industri"] },
      { slug: "energi-infrastruktur", title: "Energy & Infrastructure", description: "Infrastructure and energy solutions that support operations and regional growth.", image: businessAssets["energi-infrastruktur"] },
      { slug: "teknologi-inovasi", title: "Technology & Innovation", description: "Applying technology and expertise to help operations continually advance.", image: businessAssets["teknologi-inovasi"] },
    ],
    detail: {
      eyebrow: "Our Capabilities",
      capabilitiesTitle: "Expertise connected to operational needs.",
      toolsTitle: "Tools and technology",
      caseLabel: "Case Study",
      caseTitle: "Turning operational challenges into measurable progress.",
      caseDescription:
        "An illustrative cross-functional approach: combining planning, technical expertise, and performance monitoring to support safer, more reliable operations.",
      ctaTitle: "Let's build a partnership that makes us stronger.",
      capabilities: ["Integrated operational planning", "Cross-disciplinary technical expertise", "Quality and safety controls", "Partnership and local development"],
      tools: ["Condition and performance monitoring", "Operational data analysis", "Digital planning", "Work and safety procedures"],
      caseImage: images.industrialFacility,
    },
    detailBySlug: {
      "pertambangan-mineral": {
        title: "Mineral Mining",
        description: "Managing mineral potential through careful planning, safe operations, and long-term responsibility.",
        image: businessAssets["pertambangan-mineral"],
        capabilities: ["Mine planning and development", "Safe mining operations", "Quality and productivity management", "Reclamation and environmental monitoring"],
        tools: ["Geological mapping and modelling", "Equipment and operational monitoring", "Digital mine planning", "Safety management systems"],
        caseTitle: "Mine planning connecting safety and productivity",
        caseDescription: "Cross-functional teams align work plans, operational monitoring, and risk controls to support responsible resource management.",
        caseImage: images.openPitMine,
      },
      "jasa-pertambangan": {
        title: "Mining Services",
        description: "Providing technical and operational support to help partners run activities safely and reliably.",
        image: businessAssets["jasa-pertambangan"],
        capabilities: ["Overburden removal and material movement", "Fleet and maintenance management", "Operational workforce planning", "Safety and quality oversight"],
        tools: ["Fleet monitoring", "Condition-based maintenance", "Shift and dispatch planning", "Operational performance reporting"],
        caseTitle: "Fleet coordination for more reliable operations",
        caseDescription: "Integrated work planning, maintenance, and daily monitoring help teams identify constraints and align operational priorities.",
        caseImage: images.miningTruck,
      },
      "pengolahan-industri": {
        title: "Processing & Industry",
        description: "Developing processing capabilities that increase value and maintain product quality.",
        image: businessAssets["pengolahan-industri"],
        capabilities: ["Process flow design", "Product quality control", "Industrial facility reliability", "Resource and energy efficiency"],
        tools: ["Process instrumentation and control", "Facility condition monitoring", "Material quality analysis", "Maintenance planning systems"],
        caseTitle: "Maintaining process and product consistency",
        caseDescription: "Monitoring process parameters and coordinating maintenance supports facility stability and data-informed decisions.",
        caseImage: images.industrialFacility,
      },
      "energi-infrastruktur": {
        title: "Energy & Infrastructure",
        description: "Connecting operational and regional needs with reliable energy and infrastructure solutions.",
        image: businessAssets["energi-infrastruktur"],
        capabilities: ["Supporting infrastructure planning", "Energy and operational connectivity", "Asset reliability management", "Regional development support"],
        tools: ["Network and facility monitoring", "Asset maintenance planning", "Energy management systems", "Service reliability analysis"],
        caseTitle: "Strengthening connectivity for integrated operations",
        caseDescription: "Energy, infrastructure, and maintenance requirements are aligned to support continuity of service.",
        caseImage: images.powerInfrastructure,
      },
      "teknologi-inovasi": {
        title: "Technology & Innovation",
        description: "Applying technology and expertise to simplify processes and support better decisions.",
        image: businessAssets["teknologi-inovasi"],
        capabilities: ["Operational process transformation", "Analytics and data use", "Workflow automation", "Digital capability development"],
        tools: ["Performance dashboards", "Operational data integration", "Digital monitoring", "Collaboration and reporting tools"],
        caseTitle: "Bringing data together for faster decisions",
        caseDescription: "Information across teams and processes is brought together to help operational leaders understand performance and determine next steps.",
        caseImage: images.engineering,
      },
    },
    back: "Back to Our Businesses",
    explore: "Explore our portfolio",
    allBusinesses: "All business lines",
    contact: "Talk to our team",
    learnMore: "Explore capabilities",
  },
  projects: {
    eyebrow: "Our Projects",
    title: "A project portfolio connecting potential to progress.",
    description:
      "From open-pit mines to energy infrastructure, our projects reflect a commitment to safety, innovation, and environmental responsibility.",
    items: projectsItemsEn,
    detail: {
      eyebrow: "Project Details",
      specsTitle: "Technical Specifications",
      galleryTitle: "Project Gallery",
      mapTitle: "Project Location",
      relatedTitle: "Related Projects",
      ctaTitle: "Collaborate on the next project?",
    },
    detailBySlug: projectsDetailBySlugEn,
    filters: {
      all: "All",
      regions: {
        Kalimantan: "Kalimantan",
        Sulawesi: "Sulawesi",
        Maluku: "Maluku",
        Sumatera: "Sumatera",
        Papua: "Papua",
      },
      commodities: {
        Mineral: "Mineral",
        Energi: "Energy",
        Infrastruktur: "Infrastructure",
        Teknologi: "Technology",
        Jasa: "Services",
      },
    },
    back: "Back to Projects",
    explore: "Explore other projects",
    contact: "Discuss your project",
  },
};

export const companyPageCopy: Record<Locale, CompanyPageCopy> = {
  id: idLocale,
  en: enLocale,
};