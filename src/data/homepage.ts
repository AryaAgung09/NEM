import type { Locale } from "./dictionary";
import { images } from "./media";

export const homepageCopy = {
  id: {
    hero: {
      eyebrow: "PT Nusantara Mineral Energi",
      title: "Menggerakkan potensi, membangun masa depan.",
      description:
        "Menghubungkan kekayaan mineral Indonesia dengan inovasi, energi, dan kemajuan yang bertanggung jawab.",
      primaryCta: "Jelajahi bisnis kami",
      secondaryCta: "Tentang perusahaan",
      newsLabel: "Sorotan",
      news: [
        {
          category: "Operasi bertanggung jawab",
          title: "Mendorong praktik pertambangan yang lebih bertanggung jawab",
        },
        {
          category: "Inovasi",
          title: "Teknologi untuk operasi yang semakin aman dan efisien",
        },
        {
          category: "Energi masa depan",
          title: "Membangun nilai tambah untuk masa depan Indonesia",
        },
      ],
      scroll: "Gulir untuk menjelajah",
    },
    statement: {
      eyebrow: "Tentang Kami",
      words: [
        "Kami",
        "menghubungkan",
        "potensi",
        "mineral",
        "Indonesia",
        "dengan",
        "kemajuan",
        "yang",
        "bertanggung",
        "jawab.",
      ],
      supporting:
        "Melalui kolaborasi dan pemikiran jangka panjang, kami menghadirkan nilai bagi masyarakat, mitra, dan generasi mendatang.",
    },
    statistics: {
      eyebrow: "Dalam Angka",
      title: "Satu visi, beragam potensi.",
      items: [
        { value: 3, suffix: "", label: "Fokus pertumbuhan" },
        { value: 2, suffix: "", label: "Sektor terintegrasi" },
        { value: 1, suffix: "", label: "Tujuan bersama" },
      ],
      note: "Mineral, teknologi, dan energi untuk masa depan.",
    },
    videoBanner: {
      eyebrow: "Dampak yang Kami Bangun",
      title: "Setiap langkah membawa potensi lebih dekat menjadi kemajuan.",
      watch: "Tonton video",
      close: "Tutup video",
      videoTitle: "Operasi pertambangan Nusantara Mineral Energi",
      posterAlt: "Area pertambangan terbuka dengan ekskavator",
    },
    journey: {
      eyebrow: "Rantai Nilai Terintegrasi",
      title: "Dari Tambang ke Pelanggan",
      intro:
        "Setiap tahap terhubung dengan standar keselamatan, ketelitian, dan tanggung jawab.",
      steps: [
        {
          title: "Eksplorasi",
          description:
            "Memahami potensi geologi melalui kajian dan eksplorasi yang cermat.",
          image: images.landscape,
        },
        {
          title: "Penambangan",
          description:
            "Mengelola operasi dengan mengutamakan keselamatan dan efisiensi.",
          image: images.miningTruck,
        },
        {
          title: "Pengolahan",
          description:
            "Mengolah material untuk menghasilkan produk mineral bernilai tambah.",
          image: images.industrialFacility,
        },
        {
          title: "Pengangkutan",
          description:
            "Menghubungkan area operasi dengan fasilitas logistik secara andal.",
          image: images.powerInfrastructure,
        },
        {
          title: "Pelabuhan",
          description:
            "Menyiapkan produk dan dokumentasi untuk proses muat yang tertib.",
          image: images.engineering,
        },
        {
          title: "Pengiriman",
          description:
            "Mengantarkan produk kepada pelanggan dan mitra di berbagai tujuan.",
          image: images.openPitMine,
        },
      ],
    },
    businesses: {
      eyebrow: "Bisnis Kami",
      title: "Kapabilitas terhubung, nilai berkelanjutan.",
      items: [
        {
          title: "Pertambangan Mineral",
          description:
            "Pengelolaan sumber daya mineral melalui operasi yang bertanggung jawab dan berorientasi jangka panjang.",
          image: images.openPitMine,
        },
        {
          title: "Jasa Pertambangan",
          description:
            "Dukungan teknis dan operasional untuk menjaga kegiatan pertambangan berjalan aman dan andal.",
          image: images.miningTruck,
        },
        {
          title: "Pengolahan & Industri",
          description:
            "Pengembangan kemampuan pengolahan untuk mendorong nilai tambah dari sumber daya mineral.",
          image: images.industrialFacility,
        },
        {
          title: "Energi & Infrastruktur",
          description:
            "Infrastruktur dan solusi energi yang mendukung operasi serta pertumbuhan wilayah.",
          image: images.powerInfrastructure,
        },
        {
          title: "Teknologi & Inovasi",
          description:
            "Pemanfaatan teknologi dan keahlian untuk mendorong operasi yang terus berkembang.",
          image: images.engineering,
        },
      ],
    },
    operations: {
      eyebrow: "Kehadiran Operasi",
      title: "Berakar di Indonesia, terhubung dengan dunia.",
      description:
        "Jelajahi titik operasi dan proyek kami di berbagai wilayah Indonesia.",
      fallbackTitle: "Peta operasi Indonesia",
      fallback:
        "Peta interaktif sementara tidak tersedia. Titik operasi tetap dapat dilihat pada daftar berikut.",
      sites: [
        {
          name: "Kalimantan Timur",
          project: "Operasi Mineral Kalimantan",
          description:
            "Kawasan operasi pertambangan dan dukungan logistik di Kalimantan Timur.",
          coordinates: [117.2, 0.5] as [number, number],
        },
        {
          name: "Kalimantan Selatan",
          project: "Proyek Mineral Selatan",
          description:
            "Pengembangan proyek mineral dan infrastruktur pendukung di Kalimantan Selatan.",
          coordinates: [115.4, -3.1] as [number, number],
        },
        {
          name: "Sulawesi Tenggara",
          project: "Proyek Pengolahan Sulawesi",
          description:
            "Kawasan proyek pengolahan dan konektivitas maritim di Sulawesi Tenggara.",
          coordinates: [122.5, -4.1] as [number, number],
        },
        {
          name: "Maluku Utara",
          project: "Proyek Mineral Timur",
          description:
            "Inisiatif pengembangan mineral di wilayah kepulauan Maluku Utara.",
          coordinates: [127.8, 1.2] as [number, number],
        },
      ],
    },
    subsidiaries: {
      eyebrow: "Anak Usaha & Afiliasi",
      title: "Bersama membangun kapabilitas yang saling melengkapi.",
      visit: "Kunjungi",
      logoPlaceholder: "Logo",
      items: [
        {
          name: "NME Mineral",
          category: "Pertambangan",
          description:
            "Fokus pada pengembangan dan pengelolaan aset mineral secara bertanggung jawab.",
          image: images.openPitMine,
          href: "/bisnis-kami",
        },
        {
          name: "NME Energi",
          category: "Energi",
          description:
            "Mendukung kebutuhan energi melalui solusi yang andal dan berorientasi masa depan.",
          image: images.solarEnergy,
          href: "/bisnis-kami",
        },
        {
          name: "NME Infrastruktur",
          category: "Infrastruktur",
          description:
            "Menghubungkan operasi dan wilayah melalui layanan infrastruktur terintegrasi.",
          image: images.powerInfrastructure,
          href: "/bisnis-kami",
        },
        {
          name: "NME Teknologi",
          category: "Teknologi",
          description:
            "Mendorong inovasi dan keunggulan operasional melalui pemanfaatan teknologi.",
          image: images.engineering,
          href: "/bisnis-kami",
        },
      ],
    },
    sustainability: {
      eyebrow: "Keberlanjutan",
      title: "Tumbuh dengan tanggung jawab.",
      slides: [
        {
          title: "K3 dan nol kecelakaan",
          description:
            "Keselamatan menjadi bagian dari setiap keputusan, dengan penguatan budaya kerja aman dan pencegahan risiko di seluruh kegiatan.",
          image: { ...images.fieldTeam, alt: "Tim teknis bekerja dengan aman di lapangan" },
        },
        {
          title: "Reklamasi dan lingkungan",
          description:
            "Perencanaan reklamasi dan pengelolaan lingkungan menyertai setiap tahap operasi untuk menjaga kualitas lahan dan ekosistem.",
          image: { ...images.reclamation, alt: "Pepohonan tumbuh di kawasan hijau" },
        },
        {
          title: "Pemberdayaan masyarakat",
          description:
            "Berkolaborasi dengan masyarakat untuk memperluas kesempatan, mengembangkan keterampilan, dan membangun manfaat jangka panjang.",
          image: { ...images.collaboration, alt: "Tim berdiskusi dan bekerja bersama" },
        },
      ],
      previous: "Topik sebelumnya",
      next: "Topik berikutnya",
    },
    investor: {
      eyebrow: "Hubungan Investor",
      title: "Kinerja yang dibangun untuk jangka panjang.",
      note: "Angka ilustratif untuk pratinjau; ganti dengan data keuangan terverifikasi.",
      metrics: [
        { label: "Pendapatan konsolidasian", value: "Rp 4,8 T", trend: "Meningkat" },
        { label: "Margin EBITDA", value: "18%", trend: "Stabil" },
        { label: "Belanja modal", value: "Rp 850 M", trend: "Investasi" },
      ],
      report: "Unduh laporan",
      reportStatus: "Laporan segera tersedia",
    },
    newsUpdates: {
      eyebrow: "Berita & Update",
      title: "Kabar terbaru dari NME.",
      viewAll: "Lihat semua",
      items: [
        {
          date: "14 Oktober 2026",
          title: "Memperkuat standar keselamatan di seluruh kegiatan operasi",
          image: { ...images.engineering, alt: "Teknisi memeriksa peralatan industri" },
          href: "/#keberlanjutan",
        },
        {
          date: "03 Oktober 2026",
          title: "Inisiatif reklamasi mendorong pemulihan kawasan hijau",
          image: { ...images.reclamation, alt: "Kawasan hijau dengan pepohonan" },
          href: "/#keberlanjutan",
        },
        {
          date: "22 September 2026",
          title: "Kolaborasi lokal membuka peluang pengembangan keterampilan",
          image: { ...images.collaboration, alt: "Kolaborasi tim dalam suasana kerja" },
          href: "/#anak-usaha",
        },
      ],
    },
    career: {
      eyebrow: "Karir di NME",
      title: "Bersama, ciptakan masa depan yang berarti.",
      description:
        "Berkembang bersama tim yang menghubungkan potensi, keahlian, dan kemajuan Indonesia.",
      action: "Jelajahi karir",
      image: { ...images.fieldTeam, alt: "Tim profesional bekerja bersama di lapangan" },
      landingTitle: "Karir di NME",
      landingDescription:
        "Informasi peluang karir dan kehidupan kerja di NME akan tersedia di sini. Nantikan pembaruan dari kanal resmi perusahaan.",
      backHome: "Kembali ke beranda",
    },
  },
  en: {
    hero: {
      eyebrow: "PT Nusantara Mineral Energi",
      title: "Unlocking potential, building the future.",
      description:
        "Connecting Indonesia's mineral resources with innovation, energy, and responsible progress.",
      primaryCta: "Explore our businesses",
      secondaryCta: "About the company",
      newsLabel: "Highlights",
      news: [
        {
          category: "Responsible operations",
          title: "Advancing more responsible mining practices",
        },
        {
          category: "Innovation",
          title: "Technology for safer and more efficient operations",
        },
        {
          category: "Future energy",
          title: "Building lasting value for Indonesia's future",
        },
      ],
      scroll: "Scroll to explore",
    },
    statement: {
      eyebrow: "About Us",
      words: [
        "We",
        "connect",
        "Indonesia's",
        "mineral",
        "potential",
        "with",
        "responsible",
        "progress",
        "for",
        "all.",
      ],
      supporting:
        "Through collaboration and long-term thinking, we create value for communities, partners, and generations to come.",
    },
    statistics: {
      eyebrow: "At a Glance",
      title: "One vision, boundless potential.",
      items: [
        { value: 3, suffix: "", label: "Growth priorities" },
        { value: 2, suffix: "", label: "Connected sectors" },
        { value: 1, suffix: "", label: "Shared purpose" },
      ],
      note: "Minerals, technology, and energy for the future.",
    },
    videoBanner: {
      eyebrow: "The Impact We Build",
      title: "Every step brings potential closer to progress.",
      watch: "Watch the film",
      close: "Close video",
      videoTitle: "Nusantara Mineral Energi mining operations",
      posterAlt: "Open-pit mine with an excavator",
    },
    journey: {
      eyebrow: "Integrated Value Chain",
      title: "From Mine to Customer",
      intro:
        "Every stage is connected through standards of safety, precision, and responsibility.",
      steps: [
        {
          title: "Exploration",
          description:
            "Understanding geological potential through careful studies and exploration.",
          image: images.landscape,
        },
        {
          title: "Mining",
          description:
            "Managing operations with a focus on safety and efficiency.",
          image: images.miningTruck,
        },
        {
          title: "Processing",
          description:
            "Processing materials into value-added mineral products.",
          image: images.industrialFacility,
        },
        {
          title: "Transport",
          description:
            "Connecting operating areas with logistics facilities reliably.",
          image: images.powerInfrastructure,
        },
        {
          title: "Port",
          description:
            "Preparing products and documentation for an orderly loading process.",
          image: images.engineering,
        },
        {
          title: "Delivery",
          description:
            "Delivering products to customers and partners across destinations.",
          image: images.openPitMine,
        },
      ],
    },
    businesses: {
      eyebrow: "Our Businesses",
      title: "Connected capabilities, lasting value.",
      items: [
        {
          title: "Mineral Mining",
          description:
            "Responsible, long-term management of mineral resources and operations.",
          image: images.openPitMine,
        },
        {
          title: "Mining Services",
          description:
            "Technical and operational support to keep mining activities safe and reliable.",
          image: images.miningTruck,
        },
        {
          title: "Processing & Industry",
          description:
            "Developing processing capabilities to unlock added value from mineral resources.",
          image: images.industrialFacility,
        },
        {
          title: "Energy & Infrastructure",
          description:
            "Infrastructure and energy solutions that support operations and regional growth.",
          image: images.powerInfrastructure,
        },
        {
          title: "Technology & Innovation",
          description:
            "Applying technology and expertise to help operations continually advance.",
          image: images.engineering,
        },
      ],
    },
    operations: {
      eyebrow: "Our Operations",
      title: "Rooted in Indonesia, connected to the world.",
      description:
        "Explore our operating sites and projects across Indonesia.",
      fallbackTitle: "Indonesia operations map",
      fallback:
        "The interactive map is temporarily unavailable. View the operating locations in the list below.",
      sites: [
        {
          name: "East Kalimantan",
          project: "Kalimantan Mineral Operations",
          description:
            "Mining operations and logistics support in East Kalimantan.",
          coordinates: [117.2, 0.5] as [number, number],
        },
        {
          name: "South Kalimantan",
          project: "Southern Mineral Project",
          description:
            "Mineral project development and supporting infrastructure in South Kalimantan.",
          coordinates: [115.4, -3.1] as [number, number],
        },
        {
          name: "Southeast Sulawesi",
          project: "Sulawesi Processing Project",
          description:
            "Processing and maritime connectivity project in Southeast Sulawesi.",
          coordinates: [122.5, -4.1] as [number, number],
        },
        {
          name: "North Maluku",
          project: "Eastern Mineral Project",
          description:
            "Mineral development initiative across the North Maluku islands.",
          coordinates: [127.8, 1.2] as [number, number],
        },
      ],
    },
    subsidiaries: {
      eyebrow: "Subsidiaries & Affiliates",
      title: "Building complementary capabilities together.",
      visit: "Visit",
      logoPlaceholder: "Logo",
      items: [
        {
          name: "NME Mineral",
          category: "Mining",
          description:
            "Focused on the responsible development and management of mineral assets.",
          image: images.openPitMine,
          href: "/bisnis-kami",
        },
        {
          name: "NME Energy",
          category: "Energy",
          description:
            "Supporting energy needs through reliable, forward-looking solutions.",
          image: images.solarEnergy,
          href: "/bisnis-kami",
        },
        {
          name: "NME Infrastructure",
          category: "Infrastructure",
          description:
            "Connecting operations and communities through integrated infrastructure services.",
          image: images.powerInfrastructure,
          href: "/bisnis-kami",
        },
        {
          name: "NME Technology",
          category: "Technology",
          description:
            "Advancing innovation and operational excellence through technology.",
          image: images.engineering,
          href: "/bisnis-kami",
        },
      ],
    },
    sustainability: {
      eyebrow: "Sustainability",
      title: "Progress with responsibility.",
      slides: [
        {
          title: "Safety and zero harm",
          description:
            "Safety informs every decision as we strengthen a culture of safe work and risk prevention across our activities.",
          image: { ...images.fieldTeam, alt: "Technical team working safely in the field" },
        },
        {
          title: "Reclamation and environment",
          description:
            "Reclamation planning and environmental management accompany every stage of operations to support healthy land and ecosystems.",
          image: { ...images.reclamation, alt: "Trees growing in a green landscape" },
        },
        {
          title: "Community empowerment",
          description:
            "We work with communities to expand opportunity, develop skills, and build long-term shared value.",
          image: { ...images.collaboration, alt: "A team discussing and working together" },
        },
      ],
      previous: "Previous topic",
      next: "Next topic",
    },
    investor: {
      eyebrow: "Investor Relations",
      title: "Performance built for the long term.",
      note: "Illustrative figures for preview; replace with verified financial data.",
      metrics: [
        { label: "Consolidated revenue", value: "IDR 4.8 T", trend: "Growing" },
        { label: "EBITDA margin", value: "18%", trend: "Stable" },
        { label: "Capital expenditure", value: "IDR 850 B", trend: "Investing" },
      ],
      report: "Download report",
      reportStatus: "Report coming soon",
    },
    newsUpdates: {
      eyebrow: "News & Updates",
      title: "The latest from NME.",
      viewAll: "View all",
      items: [
        {
          date: "14 October 2026",
          title: "Strengthening safety standards across our operations",
          image: { ...images.engineering, alt: "Technician inspecting industrial equipment" },
          href: "/#keberlanjutan",
        },
        {
          date: "3 October 2026",
          title: "Reclamation initiatives support the renewal of green spaces",
          image: { ...images.reclamation, alt: "Green landscape with trees" },
          href: "/#keberlanjutan",
        },
        {
          date: "22 September 2026",
          title: "Local partnerships create opportunities to develop skills",
          image: { ...images.collaboration, alt: "Team collaborating in a workplace" },
          href: "/#subsidiaries",
        },
      ],
    },
    career: {
      eyebrow: "Careers at NME",
      title: "Together, build a future that matters.",
      description:
        "Grow with a team connecting potential, expertise, and progress for Indonesia.",
      action: "Explore careers",
      image: { ...images.fieldTeam, alt: "Professionals working together in the field" },
      landingTitle: "Careers at NME",
      landingDescription:
        "Career opportunities and information about working at NME will be shared here. Please check back for updates through the company's official channels.",
      backHome: "Back to homepage",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;
