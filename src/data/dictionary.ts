export type Locale = "id" | "en";

export const dictionary = {
  id: {
    navigation: {
      about: "Tentang Kami",
      business: "Bisnis Kami",
      investor: "Hubungan Investor",
      media: "Media & Informasi",
      sustainability: "Keberlanjutan",
    },
    actions: {
      explore: "Jelajahi",
      contact: "Hubungi Kami",
      careers: "Karir",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      backToTop: "Kembali ke atas",
    },
    topBar: {
      label: "Bersama membangun masa depan Indonesia",
      quickLinks: ["Hubungan Investor", "Karir", "Kontak"],
    },
    business: {
      eyebrow: "Portofolio Kami",
      title: "Menggerakkan kemajuan melalui bisnis yang terintegrasi.",
      companies: [
        "Pertambangan & Mineral",
        "Energi & Infrastruktur",
        "Jasa Pertambangan",
        "Teknologi & Inovasi",
      ],
    },
    footer: {
      description:
        "Mitra pertumbuhan Indonesia melalui pertambangan yang bertanggung jawab, teknologi, dan energi masa depan.",
      addressLabel: "Kantor Pusat",
      address: "Indonesia",
      emailLabel: "Email",
      groups: [
        {
          title: "Perusahaan",
          links: ["Tentang Kami", "Bisnis Kami", "Keberlanjutan"],
        },
        {
          title: "Informasi",
          links: ["Hubungan Investor", "Media & Informasi", "Karir"],
        },
      ],
      slogan: "Menggerakkan potensi. Membangun masa depan.",
      copyright: "Hak cipta dilindungi.",
    },
  },
  en: {
    navigation: {
      about: "About Us",
      business: "Our Businesses",
      investor: "Investor Relations",
      media: "Media & Information",
      sustainability: "Sustainability",
    },
    actions: {
      explore: "Explore",
      contact: "Contact Us",
      careers: "Careers",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      backToTop: "Back to top",
    },
    topBar: {
      label: "Together, building Indonesia's future",
      quickLinks: ["Investor Relations", "Careers", "Contact"],
    },
    business: {
      eyebrow: "Our Portfolio",
      title: "Driving progress through integrated businesses.",
      companies: [
        "Mining & Minerals",
        "Energy & Infrastructure",
        "Mining Services",
        "Technology & Innovation",
      ],
    },
    footer: {
      description:
        "Indonesia's growth partner through responsible mining, technology, and the energy of the future.",
      addressLabel: "Head Office",
      address: "Indonesia",
      emailLabel: "Email",
      groups: [
        {
          title: "Company",
          links: ["About Us", "Our Businesses", "Sustainability"],
        },
        {
          title: "Information",
          links: ["Investor Relations", "Media & Information", "Careers"],
        },
      ],
      slogan: "Unlocking potential. Building the future.",
      copyright: "All rights reserved.",
    },
  },
} as const;
