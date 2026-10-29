export type Locale = "id" | "en";

export const dictionary = {
  id: {
    navigation: {
      about: "Tentang Kami",
      business: "Bisnis Kami",
      investor: "Hubungan Investor",
      media: "Media & Informasi",
      sustainability: "Keberlanjutan",
      contact: "Kontak",
    },
    about: {
      eyebrow: "Tentang Kami",
      title: "Mengenal NME lebih dekat.",
      team: {
        title: "Tim Kami",
        description: "Para pemimpin dan profesional yang mendorong NME ke depan.",
        direksi: "Direksi",
        komisaris: "Dewan Komisaris",
        karyawan: "Karyawan",
      },
      history: {
        title: "Sejarah Kami",
        description: "Perjalanan NME dari pendirian hingga sekarang.",
      },
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
    contact: {
      eyebrow: "Hubungi Kami",
      title: "Mari Mulai Percakapan",
      description: "Tim kami siap membantu Anda. Isi formulir di bawah atau hubungi kami melalui saluran lain.",
      form: {
        nameLabel: "Nama Lengkap",
        namePlaceholder: "Masukkan nama lengkap Anda",
        emailLabel: "Email",
        emailPlaceholder: "Masukkan alamat email Anda",
        companyLabel: "Perusahaan / Institusi",
        companyPlaceholder: "Nama perusahaan atau instansi (opsional)",
        subjectLabel: "Subjek",
        subjectPlaceholder: "Pilih subjek",
        subjectOptions: [
          "Umum",
          "Hubungan Investor",
          "Media & Pers",
          "Keberlanjutan",
          "Karir",
          "Lainnya"
        ],
        messageLabel: "Pesan",
        messagePlaceholder: "Tulis pesan Anda di sini...",
        submitButton: "Kirim Pesan",
        submitting: "Mengirim...",
        successTitle: "Pesan Terkirim",
        successMessage: "Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1-2 hari kerja.",
        errorTitle: "Gagal Mengirim",
        errorMessage: "Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung via email.",
        validation: {
          nameRequired: "Nama wajib diisi",
          emailRequired: "Email wajib diisi",
          emailInvalid: "Format email tidak valid",
          subjectRequired: "Subjek wajib dipilih",
          messageRequired: "Pesan wajib diisi",
          messageMinLength: "Pesan minimal 10 karakter"
        }
      },
      info: {
        title: "Informasi Kontak",
        officeTitle: "Kantor Pusat",
        officeAddress: "Jakarta, Indonesia",
        phoneTitle: "Telepon",
        phoneNumber: "+62 21 1234 5678",
        emailTitle: "Email",
        emailAddress: "info@nusantaramineral.co.id",
        hoursTitle: "Jam Operasional",
        hours: "Senin - Jumat: 08:00 - 17:00 WIB"
      },
      map: {
        title: "Lokasi Kami",
        placeholder: "Peta lokasi kantor pusat"
      },
      faq: {
        title: "Pertanyaan Umum",
        items: [
          {
            q: "Berapa lama waktu respons dari tim NME?",
            a: "Tim kami berusaha merespons semua pertanyaan dalam 1-2 hari kerja. Untuk urgensi tinggi, silakan hubungi kami via telepon."
          },
          {
            q: "Apakah saya bisa berkunjung langsung ke kantor?",
            a: "Ya, kami menyambut kunjungan dengan janji temu terlebih dahulu. Silakan hubungi kami untuk menjadwalkan pertemuan."
          },
          {
            q: "Bagaimana cara mengajukan proposta kerja sama?",
            a: "Silakan isi formulir kontak dengan subjek 'Lainnya' dan jelaskan proposta Anda. Tim pengembangan bisnis akan meninjau dan menghubungi Anda."
          },
          {
            q: "Di mana saya bisa menemukan laporan keberlanjutan NME?",
            a: "Laporan keberlanjutan tersedia di halaman Keberlanjutan dan Hubungan Investor. Anda juga dapat mengunduhnya langsung dari halaman tersebut."
          },
          {
            q: "Apakah NME menerima magang / PKL?",
            a: "Ya, kami memiliki program magang. Informasi lowongan magang dipublikasikan di halaman Karir dan media sosial resmi kami."
          }
        ]
      }
    },
  },
  en: {
    navigation: {
      about: "About Us",
      business: "Our Businesses",
      investor: "Investor Relations",
      media: "Media & Information",
      sustainability: "Sustainability",
      contact: "Contact",
    },
    about: {
      eyebrow: "About Us",
      title: "Get to know NME better.",
      team: {
        title: "Our Team",
        description: "The leaders and professionals driving NME forward.",
        direksi: "Board of Directors",
        komisaris: "Board of Commissioners",
        karyawan: "Employees",
      },
      history: {
        title: "Our History",
        description: "NME's journey from founding to present.",
      },
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
    contact: {
      eyebrow: "Contact Us",
      title: "Let's Start a Conversation",
      description: "Our team is ready to help. Fill out the form below or reach out through other channels.",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name",
        emailLabel: "Email",
        emailPlaceholder: "Enter your email address",
        companyLabel: "Company / Institution",
        companyPlaceholder: "Company or institution name (optional)",
        subjectLabel: "Subject",
        subjectPlaceholder: "Select a subject",
        subjectOptions: [
          "General",
          "Investor Relations",
          "Media & Press",
          "Sustainability",
          "Careers",
          "Other"
        ],
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        submitButton: "Send Message",
        submitting: "Sending...",
        successTitle: "Message Sent",
        successMessage: "Thank you for contacting us. Our team will respond within 1-2 business days.",
        errorTitle: "Failed to Send",
        errorMessage: "An error occurred. Please try again or contact us directly via email.",
        validation: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Invalid email format",
          subjectRequired: "Subject is required",
          messageRequired: "Message is required",
          messageMinLength: "Message must be at least 10 characters"
        }
      },
      info: {
        title: "Contact Information",
        officeTitle: "Head Office",
        officeAddress: "Jakarta, Indonesia",
        phoneTitle: "Phone",
        phoneNumber: "+62 21 1234 5678",
        emailTitle: "Email",
        emailAddress: "info@nusantaramineral.co.id",
        hoursTitle: "Business Hours",
        hours: "Monday - Friday: 08:00 - 17:00 WIB"
      },
      map: {
        title: "Our Location",
        placeholder: "Head office location map"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "How long does it take for NME team to respond?",
            a: "Our team aims to respond to all inquiries within 1-2 business days. For urgent matters, please contact us via phone."
          },
          {
            q: "Can I visit the office directly?",
            a: "Yes, we welcome visits by appointment. Please contact us to schedule a meeting."
          },
          {
            q: "How do I submit a partnership proposal?",
            a: "Please fill out the contact form with subject 'Other' and explain your proposal. Our business development team will review and contact you."
          },
          {
            q: "Where can I find NME's sustainability reports?",
            a: "Sustainability reports are available on the Sustainability and Investor Relations pages. You can also download them directly from those pages."
          },
          {
            q: "Does NME accept internships?",
            a: "Yes, we have an internship program. Internship openings are posted on the Careers page and our official social media channels."
          }
        ]
      }
    },
  },
} as const;
