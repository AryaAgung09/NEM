import type { Locale } from "./dictionary";
import { images, videos } from "./media";

export type MediaCategory = "semua" | "berita" | "pengumuman" | "keberlanjutan" | "investor" | "operasional";
export type MediaType = "artikel" | "video" | "foto" | "pengumuman";

export interface MediaItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: MediaCategory;
  type: MediaType;
  image: (typeof images)["landscape"];
  video?: (typeof videos)["mineOperations"];
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export interface MediaPageCopy {
  eyebrow: string;
  title: string;
  description: string;
  image: (typeof images)["landscape"];
  categories: Record<MediaCategory, string>;
  items: MediaItem[];
  detail: {
    eyebrow: string;
    relatedTitle: string;
    shareTitle: string;
    shareLabel: string;
    backToMedia: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    filterLabel: string;
    items: {
      id: string;
      title: string;
      type: "foto" | "video";
      image: (typeof images)["landscape"];
      video?: (typeof videos)["mineOperations"];
      category: MediaCategory;
    }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

const mediaImage1 = images.openPitMine;
const mediaImage3 = images.industrialFacility;
const mediaImage4 = images.powerInfrastructure;
const mediaImage5 = images.engineering;
const mediaImage6 = images.fieldTeam;
const mediaImage7 = images.reclamation;
const mediaImage8 = images.solarEnergy;
const mediaImage9 = images.landscape;
const mediaImage10 = images.modernOffice;
const mediaImage11 = images.collaboration;

const mineVideo = videos.mineOperations;

export const mediaItemsId: MediaItem[] = [
  {
    slug: "perkuat-standar-k3",
    title: "Memperkuat Standar K3 di Seluruh Operasi",
    excerpt: "NME meluncurkan program Safety Excellence 2026 untuk menstandarkan prosedur keselamatan di semua site operasional.",
    content: `
      <p><strong>Jakarta, 14 Oktober 2026</strong> — PT Nusantara Mineral Energi (NME) hari ini mengumumkan peluncuran program <em>Safety Excellence 2026</em>, inisiatif komprehensif untuk memperkuat standar Keselamatan dan Kesehatan Kerja (K3) di seluruh lokasi operasional perusahaan.</p>
      
      <p>Program ini dirancang untuk mengharmonkan prosedur keselamatan, meningkatkan budaya kesadaran risiko, dan memanfaatkan teknologi wearable safety untuk monitoring real-time kondisi pekerja.</p>
      
      <h3>Tiga Pilar Utama</h3>
      <ul>
        <li><strong>Standarisasi Prosedur:</strong> Penyatuan 47 prosedur K3 yang tersebar di 6 site operasional menjadi satu kerangka terintegrasi.</li>
        <li><strong>Teknologi Wearable:</strong> Penggunaan smart helmet dan vest dengan sensor vital signs untuk deteksi dini kelelahan dan paparan berbahaya.</li>
        <li><strong>Budaya Generatif:</strong> Pelatihan <em>Visible Felt Leadership</em> untuk 200+ supervisor dan manajer tingkat menengah.</li>
      </ul>
      
      <p>"Keselamatan bukan prioritas yang berubah-ubah, melainkan nilai fundamental yang tidak tergoyahkan," ujar Direktur Operasi NME, Budi Santoso. "Program ini adalah komitmen kita untuk mencapai <em>Zero Harm</em> secara berkelanjutan."</p>
      
      <p>Program ini akan di-implementasikan bertahap mulai Q4 2026, dengan target penuh operasional di Q2 2027. Investasi awal diperkirakan Rp 85 miliar untuk pembelian perangkat, pengembangan platform digital, dan pelatihan.</p>
    `,
    category: "keberlanjutan",
    type: "artikel",
    image: mediaImage6,
    date: "14 Oktober 2026",
    author: "Tim Komunikasi Korporat",
    readTime: "4 menit",
    tags: ["K3", "Keselamatan", "Teknologi", "Zero Harm"],
    featured: true,
  },
  {
    slug: "inisiatif-reklamasi-kawasan-hijau",
    title: "Inisiatif Reklamasi Mendorong Pemulihan Kawasan Hijau",
    excerpt: "Program reklamasi progresif NME telah mereklamasi 1.800+ hektare lahan pasca-tambang di Indonesia timur.",
    content: `
      <p><strong>Jayapura, 3 Oktober 2026</strong> — Upaya reklamasi lahan pasca-tambang yang dilakukan NME di Papua, Kalimantan, dan Sulawesi menunjukkan hasil yang signifikan. Sejak 2018, lebih dari 1.800 hektare lahan telah direklamasi dengan pendekatan <em>landscape approach</em>.</p>
      
      <h3>Pendekatan Terpadu</h3>
      <p>Reklamasi NME tidak hanya menanam pohon, melainkan menciptakan ekosistem multifungsi yang menggabungkan:</p>
      <ul>
        <li>Hutan produksi berkelanjutan (sertifikasi FSC)</li>
        <li>Agroforestri komunitas (kopi, durian, kelapa sawit)</li>
        <li>Kawasan konservasi biodiversitas</li>
        <li>Payment for Ecosystem Services (PES) pertama di Indonesia timur</li>
      </ul>
      
      <p>Program ini melibatkan 800+ kepala keluarga dari 12 kelompok tani, dengan pendapatan rata-rata meningkat 38% melalui produk hutan non-kayu dan madu hutan.</p>
      
      <blockquote>"Model reklamasi ini membuktikan bahwa tambang dan lingkungan bisa berdampingan harmonis," kata Kepala Program Reklamasi NME, Dr. Siti Rahayu.</blockquote>
    `,
    category: "keberlanjutan",
    type: "artikel",
    image: mediaImage7,
    date: "3 Oktober 2026",
    author: "Divisi Keberlanjutan",
    readTime: "5 menit",
    tags: ["Reklamasi", "Lingkungan", "Komunitas", "Papua"],
    featured: true,
  },
  {
    slug: "kolaborasi-lokal-pengembangan-keterampilan",
    title: "Kolaborasi Lokal Membuka Peluang Pengembangan Keterampilan",
    excerpt: "NME bermitra dengan 15 poltekes dan universitas lokal untuk program magang dan sertifikasi kompetensi.",
    content: `
      <p><strong>Balikpapan, 22 September 2026</strong> — NME menandatangani MoU dengan 15 institusi pendidikan vokasi dan perguruan tinggi di Kalimantan dan Sulawesi untuk program <em>Talent Pipeline Program</em>.</p>
      
      <h3>Cakupan Program</h3>
      <ul>
        <li>Magang terstruktur 6–12 bulan untuk 200 mahasiswa per tahun</li>
        <li>Sertifikasi kompetensi: operator alat berat, teknis listrik, instrumentasi, K3</li>
        <li>Kurikulum disesuaikan kebutuhan industri (industry-driven curriculum)</li>
        <li>Jaminan kerja bagi lulusan terbaik (min. 60% diserap)</li>
      </ul>
      
      <p>Program ini bertujuan mengurangi kesenjangan keterampilan (skill gap) di sektor pertambangan dan energi, sekaligus memperluas peluang kerja bagi putra-putri daerah.</p>
      
      <p>"Kami tidak hanya membangun tambang, kami membangun manusia," ujar VP Human Capital NME, Andi Wijaya.</p>
    `,
    category: "berita",
    type: "artikel",
    image: mediaImage11,
    date: "22 September 2026",
    author: "Divisi SDM",
    readTime: "3 menit",
    tags: ["Pendidikan", "Magang", "Kompetensi", "Kalimantan"],
    featured: false,
  },
  {
    slug: "laporan-tahunan-2025-tersedia",
    title: "Laporan Tahunan 2025 dan Keberlanjutan 2025 Tersedia",
    excerpt: "Laporan terintegrasi mencakup kinerja keuangan, ESG, dan tata kelola kini dapat diunduh.",
    content: `
      <p><strong>Jakarta, 15 Agustus 2026</strong> — Laporan Tahunan 2025 dan Laporan Keberlanjutan 2025 PT Nusantara Mineral Energi kini tersedia untuk diunduh di bagian <a href="/hubungan-investor">Hubungan Investor</a>.</p>
      
      <h3>Highlight Laporan</h3>
      <ul>
        <li>Pendapatan konsolidasian: Rp 4,8 T (Naik 12% YoY)</li>
        <li>Margin EBITDA: 18% (Stabil)</li>
        <li>CapEx: Rp 850 M untuk ekspansi & dekarbonisasi</li>
        <li>Reduksi intensitas emisi: 18% dari baseline 2020</li>
        <li>Lahan direklamasi: 1.800+ Ha (72% dari target)</li>
        <li>Zero fatalitas: 1.840+ hari bebas kecelakaan fatal</li>
      </ul>
      
      <p>Laporan disusun mengacu pada standar GRI, SASB, TCFD, dan regulasi OJK POJK No. 51/2017. Assurance independen oleh KAP Purwantono, Sungkoro & Surja.</p>
    `,
    category: "investor",
    type: "pengumuman",
    image: mediaImage10,
    date: "15 Agustus 2026",
    author: "Investor Relations",
    readTime: "2 menit",
    tags: ["Laporan Tahunan", "Keuangan", "ESG", "Transparansi"],
    featured: false,
  },
  {
    slug: "video-operasi-tambang-kaltim",
    title: "Video: Operasi Tambang Kalimantan Timur",
    excerpt: "Fotografi udara menampilkan skala dan presisi operasi tambang terbuka NME di Kaltim.",
    content: `
      <p>Video ini menampilkan operasi tambang terbuka NME di Kalimantan Timur dengan resolusi 4K. Ditampilkan: armada autonomous haulage, in-pit crushing, dan area reklamasi progresif.</p>
    `,
    category: "operasional",
    type: "video",
    image: mediaImage1,
    video: mineVideo,
    date: "10 September 2026",
    author: "Tim Media",
    readTime: "2 menit (video)",
    tags: ["Video", "Operasional", "Kalimantan", "Autonomous"],
    featured: true,
  },
  {
    slug: "galeri-foto-reklamasi-papua",
    title: "Galeri Foto: Reklamasi Terpadu Papua",
    excerpt: "Koleksi 24 foto hasil reklamasi lahan pasca-tambang di Papua: hutan, agroforestri, dan komunitas.",
    content: `
      <p>Galeri ini menampilkan dokumentasi visual program reklamasi terpadu NME di Papua periode 2018–2025. Mencakup: area penanaman, agroforestri kopi, kolam bioremediasi, kegiatan komunitas madu hutan, dan kawasan konservasi orangutan.</p>
    `,
    category: "keberlanjutan",
    type: "foto",
    image: mediaImage7,
    date: "28 Agustus 2026",
    author: "Tim Dokumentasi",
    readTime: "3 menit",
    tags: ["Galeri", "Foto", "Reklamasi", "Papua"],
    featured: false,
  },
  {
    slug: "pengumuman-rups-tahunan-2026",
    title: "Pengumuman RUPS Tahunan 2026",
    excerpt: "RUPS Tahunan 2026 dijadwalkan 15 Juni 2026. Materi: persetujuan laporan tahunan, dividen, dan remunerasi dewan.",
    content: `
      <p><strong>Jakarta, 1 Mei 2026</strong> — Dewan Direksi PT Nusantara Mineral Energi Tbk dengan ini mengundang para Pemegang Saham untuk menghadiri Rapat Umum Pemegang Saham (RUPS) Tahunan 2026.</p>
      
      <h3>Informasi RUPS</h3>
      <ul>
        <li><strong>Tanggal:</strong> 15 Juni 2026, pukul 10:00 WIB</li>
        <li><strong>Tempat:</strong> Ballroom, Hotel Indonesia Kempinski, Jakarta / Hybrid (MS Teams)</li>
        <li><strong>Agenda:</strong> Persetujuan Laporan Tahunan 2025, Penggunaan Laba (Dividen Rp 42/saham), Penunjukan KAP, Remunerasi Dewan</li>
      </ul>
      
      <p>Surat pemanggilan dan materi lengkap tersedia di <a href="/hubungan-investor">Halaman Hubungan Investor</a>.</p>
    `,
    category: "pengumuman",
    type: "pengumuman",
    image: mediaImage10,
    date: "1 Mei 2026",
    author: "Corporate Secretary",
    readTime: "2 menit",
    tags: ["RUPS", "Pemegang Saham", "Dividen", "Tata Kelola"],
    featured: false,
  },
  {
    slug: "ekspansi-plts-maluku-utara",
    title: "Ekspansi PLTS Maluku Utara: Tambah 50 MW Kapasitas",
    excerpt: "NME menambah kapasitas pembangkit listrik tenaga surya di Maluku Utara mendukung dekarbonisasi operasional.",
    content: `
      <p><strong>Ternate, 18 Juli 2026</strong> — NME mengumumkan ekspansi PLTS Maluku Utara dari 150 MWp menjadi 200 MWp dengan penambahan sistem BESS 100 MW / 400 MWh.</p>
      
      <p>Ekspansi ini mendukung komitmen NME mencapai 40% porsi energi terbarukan pada 2030 dan net zero 2050. Investasi tambahan: USD 85 juta. COD target: Q4 2027.</p>
    `,
    category: "investor",
    type: "artikel",
    image: mediaImage8,
    date: "18 Juli 2026",
    author: "Divisi Energi",
    readTime: "3 menit",
    tags: ["Energi Terbarukan", "PLTS", "Dekarbonisasi", "Maluku"],
    featured: false,
  },
  {
    slug: "penghargaan-proper-hijau-2026",
    title: "NME Raih PROPER Hijau 2026 untuk 3 Site Operasional",
    excerpt: "Tiga lokasi operasi NME menerima penghargaan PROPER Hijau dari KLHK atas kinerja pengelolaan lingkungan.",
    content: `
      <p><strong>Jakarta, 5 Juni 2026</strong> — Tiga site operasional NME (Tambang Kaltim, Pengolahan Sultra, PLTS Maluku) menerima rating PROPER Hijau 2026 dari Kementerian Lingkungan Hidup dan Kehutanan.</p>
      
      <p>PROPER (Program Penilaian Peringkat Kinerja Perusahaan) adalah program pemerintah yang menilai kepatuhan pengelolaan lingkungan. Rating Hijau adalah tingkat kedua tertinggi setelah Emas.</p>
      
      <p>"Ini bukti komitmen kami pada pengelolaan lingkungan yang bertanggung jawab," kata VP HSE NME.</p>
    `,
    category: "berita",
    type: "artikel",
    image: mediaImage7,
    date: "5 Juni 2026",
    author: "Divisi HSE",
    readTime: "2 menit",
    tags: ["PROPER", "Lingkungan", "Penghargaan", "KLHK"],
    featured: false,
  },
  {
    slug: "teknologi-dashboard-operasional-v2",
    title: "Dashboard Operasional Terpadu Versi 2.0 Dirilis",
    excerpt: "Update platform digital NME menghadirkan ML-based predictive maintenance dan integrasi data ESG real-time.",
    content: `
      <p><strong>Jakarta, 12 Maret 2026</strong> — NME meluncurkan versi 2.0 Dashboard Operasional Terpadu dengan fitur baru:</p>
      
      <ul>
        <li>Predictive maintenance berbasis ML untuk 1.200+ aset kritis</li>
        <li>Integrasi data ESG real-time untuk pelaporan otomatis ke OJK</li>
        <li>Mobile app untuk supervisor lapangan (offline-first)</li>
        <li>API terbuka untuk integrasi vendor & mitra</li>
      </ul>
      
      <p>Platform ini kini digunakan 1.200+ pengguna aktif dari tingkat operator hingga direksi, di 6 site operasional.</p>
    `,
    category: "operasional",
    type: "artikel",
    image: mediaImage5,
    date: "12 Maret 2026",
    author: "Divisi Teknologi",
    readTime: "4 menit",
    tags: ["Teknologi", "Digital", "ML", "Dashboard", "ESG"],
    featured: false,
  },
];

export const mediaItemsEn: MediaItem[] = [
  {
    slug: "strengthening-safety-standards",
    title: "Strengthening Safety Standards Across All Operations",
    excerpt: "NME launches Safety Excellence 2026 program to standardize safety procedures across all operational sites.",
    content: `
      <p><strong>Jakarta, October 14, 2026</strong> — PT Nusantara Mineral Energi (NME) today announced the launch of the <em>Safety Excellence 2026</em> program, a comprehensive initiative to strengthen Occupational Health and Safety (OHS) standards across all operational sites.</p>
      
      <p>The program is designed to harmonize safety procedures, enhance risk awareness culture, and leverage wearable safety technology for real-time monitoring of worker conditions.</p>
      
      <h3>Three Main Pillars</h3>
      <ul>
        <li><strong>Procedure Standardization:</strong> Unifying 47 OHS procedures scattered across 6 operational sites into one integrated framework.</li>
        <li><strong>Wearable Technology:</strong> Deployment of smart helmets and vests with vital signs sensors for early detection of fatigue and hazardous exposure.</li>
        <li><strong>Generative Culture:</strong> <em>Visible Felt Leadership</em> training for 200+ supervisors and middle managers.</li>
      </ul>
      
      <p>"Safety is not a shifting priority, but a fundamental non-negotiable value," said NME Operations Director, Budi Santoso. "This program represents our commitment to achieving sustainable <em>Zero Harm</em>."</p>
      
      <p>The program will be implemented in phases starting Q4 2026, targeting full operational status by Q2 2027. Initial investment estimated at IDR 85 billion for equipment, digital platform development, and training.</p>
    `,
    category: "keberlanjutan",
    type: "artikel",
    image: mediaImage6,
    date: "October 14, 2026",
    author: "Corporate Communications Team",
    readTime: "4 min read",
    tags: ["Safety", "K3", "Technology", "Zero Harm"],
    featured: true,
  },
  {
    slug: "reclamation-initiatives-green-recovery",
    title: "Reclamation Initiatives Drive Green Recovery",
    excerpt: "NME's progressive reclamation program has reclaimed 1,800+ hectares of post-mining land in eastern Indonesia.",
    content: `
      <p><strong>Jayapura, October 3, 2026</strong> — NME's post-mining land reclamation efforts in Papua, Kalimantan, and Sulawesi show significant results. Since 2018, over 1,800 hectares have been reclaimed using a <em>landscape approach</em>.</p>
      
      <h3>Integrated Approach</h3>
      <p>NME's reclamation goes beyond tree planting, creating multifunctional ecosystems combining:</p>
      <ul>
        <li>Sustainable production forests (FSC certified)</li>
        <li>Community agroforestry (coffee, durian, oil palm)</li>
        <li>Biodiversity conservation zones</li>
        <li>First Payment for Ecosystem Services (PES) in eastern Indonesia</li>
      </ul>
      
      <p>The program engages 800+ households from 12 farmer groups, with average income increasing 38% through non-timber forest products and forest honey.</p>
      
      <blockquote>"This reclamation model proves that mining and environment can coexist harmoniously," said NME Reclamation Program Head, Dr. Siti Rahayu.</blockquote>
    `,
    category: "keberlanjutan",
    type: "artikel",
    image: mediaImage7,
    date: "October 3, 2026",
    author: "Sustainability Division",
    readTime: "5 min read",
    tags: ["Reclamation", "Environment", "Community", "Papua"],
    featured: true,
  },
  {
    slug: "local-partnerships-skill-development",
    title: "Local Partnerships Create Skill Development Opportunities",
    excerpt: "NME partners with 15 local polytechnics and universities for internship and competency certification programs.",
    content: `
      <p><strong>Balikpapan, September 22, 2026</strong> — NME signed MoUs with 15 vocational institutions and universities in Kalimantan and Sulawesi for the <em>Talent Pipeline Program</em>.</p>
      
      <h3>Program Coverage</h3>
      <ul>
        <li>Structured 6–12 month internships for 200 students annually</li>
        <li>Competency certification: heavy equipment operator, electrical technician, instrumentation, OHS</li>
        <li>Industry-driven curriculum aligned with operational needs</li>
        <li>Employment guarantee for top graduates (min. 60% absorption)</li>
      </ul>
      
      <p>The program aims to bridge the skill gap in mining and energy sectors while expanding employment opportunities for local youth.</p>
      
      <p>"We don't just build mines, we build people," said NME VP Human Capital, Andi Wijaya.
    `,
    category: "berita",
    type: "artikel",
    image: mediaImage11,
    date: "September 22, 2026",
    author: "HR Division",
    readTime: "3 min read",
    tags: ["Education", "Internship", "Competency", "Kalimantan"],
    featured: false,
  },
  {
    slug: "annual-report-2025-available",
    title: "Annual Report 2025 and Sustainability Report 2025 Available",
    excerpt: "Integrated reports covering financial performance, ESG, and governance now available for download.",
    content: `
      <p><strong>Jakarta, August 15, 2026</strong> — NME's 2025 Annual Report and 2025 Sustainability Report are now available for download in the <a href="/hubungan-investor">Investor Relations</a> section.</p>
      
      <h3>Report Highlights</h3>
      <ul>
        <li>Consolidated Revenue: IDR 4.8 T (YoY +12%)</li>
        <li>EBITDA Margin: 18% (Stable)</li>
        <li>CapEx: IDR 850 B for expansion & decarbonization</li>
        <li>Emission intensity reduction: 18% from 2020 baseline</li>
        <li>Land reclaimed: 1,800+ Ha (72% of target)</li>
        <li>Zero fatalities: 1,840+ days without fatal incident</li>
      </ul>
      
      <p>Reports prepared per GRI, SASB, TCFD, and OJK POJK 51/2017 standards. Independent assurance by KAP Purwantono, Sungkoro & Surja.</p>
    `,
    category: "investor",
    type: "pengumuman",
    image: mediaImage10,
    date: "August 15, 2026",
    author: "Investor Relations",
    readTime: "2 min read",
    tags: ["Annual Report", "Financial", "ESG", "Transparency"],
    featured: false,
  },
  {
    slug: "video-kaltim-mine-operations",
    title: "Video: East Kalimantan Mine Operations",
    excerpt: "Aerial footage showcasing the scale and precision of NME's open-pit mining operations in East Kalimantan.",
    content: `
      <p>This video showcases NME's open-pit mining operations in East Kalimantan in 4K resolution. Featured: autonomous haulage fleet, in-pit crushing, and progressive reclamation areas.</p>
    `,
    category: "operasional",
    type: "video",
    image: mediaImage1,
    video: mineVideo,
    date: "September 10, 2026",
    author: "Media Team",
    readTime: "2 min (video)",
    tags: ["Video", "Operations", "Kalimantan", "Autonomous"],
    featured: true,
  },
  {
    slug: "papua-reclamation-photo-gallery",
    title: "Photo Gallery: Integrated Papua Reclamation",
    excerpt: "Collection of 24 photos documenting post-mining land reclamation in Papua: forests, agroforestry, and communities.",
    content: `
      <p>This gallery documents NME's integrated reclamation program in Papua (2018–2025). Includes: planting areas, coffee agroforestry, bioremediation ponds, community forest honey activities, and orangutan conservation zones.</p>
    `,
    category: "keberlanjutan",
    type: "foto",
    image: mediaImage7,
    date: "August 28, 2026",
    author: "Documentation Team",
    readTime: "3 min read",
    tags: ["Gallery", "Photo", "Reclamation", "Papua"],
    featured: false,
  },
  {
    slug: "annual-gms-2026-announcement",
    title: "Annual GMS 2026 Announcement",
    excerpt: "Annual GMS 2026 scheduled for June 15, 2026. Agenda: annual report approval, dividend, board remuneration.",
    content: `
      <p><strong>Jakarta, May 1, 2026</strong> — The Board of Directors of PT Nusantara Mineral Energi Tbk hereby invites Shareholders to attend the 2026 Annual General Meeting of Shareholders (GMS).</p>
      
      <h3>GMS Information</h3>
      <ul>
        <li><strong>Date:</strong> June 15, 2026, 10:00 WIB</li>
        <li><strong>Venue:</strong> Ballroom, Hotel Indonesia Kempinski, Jakarta / Hybrid (MS Teams)</li>
        <li><strong>Agenda:</strong> 2025 Annual Report Approval, Profit Allocation (Dividend IDR 42/share), Public Accountant Appointment, Board Remuneration</li>
      </ul>
      
      <p>Summons and full materials available at <a href="/hubungan-investor">Investor Relations Page</a>.</p>
    `,
    category: "pengumuman",
    type: "pengumuman",
    image: mediaImage10,
    date: "May 1, 2026",
    author: "Corporate Secretary",
    readTime: "2 min read",
    tags: ["GMS", "Shareholders", "Dividend", "Governance"],
    featured: false,
  },
  {
    slug: "north-maluku-solar-expansion",
    title: "North Maluku Solar Expansion: Additional 50 MW Capacity",
    excerpt: "NME adds 50 MW solar capacity in North Maluku supporting operational decarbonization.",
    content: `
      <p><strong>Ternate, July 18, 2026</strong> — NME announced expansion of North Maluku PLTS from 150 MWp to 200 MWp with additional 100 MW / 400 MWh BESS.</p>
      
      <p>This expansion supports NME's commitment to 40% renewable energy share by 2030 and net zero 2050. Additional investment: USD 85 million. Target COD: Q4 2027.</p>
    `,
    category: "investor",
    type: "artikel",
    image: mediaImage8,
    date: "July 18, 2026",
    author: "Energy Division",
    readTime: "3 min read",
    tags: ["Renewable Energy", "Solar", "Decarbonization", "Maluku"],
    featured: false,
  },
  {
    slug: "proper-green-award-2026",
    title: "NME Wins 2026 PROPER Green Award for 3 Operational Sites",
    excerpt: "Three NME operational sites receive PROPER Green award from Ministry of Environment for environmental management performance.",
    content: `
      <p><strong>Jakarta, June 5, 2026</strong> — Three NME operational sites (Kaltim Mine, Sultra Processing, Maluku PLTS) received 2026 PROPER Green rating from the Ministry of Environment and Forestry.</p>
      
      <p>PROPER (Company Environmental Performance Rating Program) is a government program assessing environmental management compliance. Green rating is the second highest after Gold.</p>
      
      <p>"This is evidence of our commitment to responsible environmental management," said NME VP HSE.</p>
    `,
    category: "berita",
    type: "artikel",
    image: mediaImage7,
    date: "June 5, 2026",
    author: "HSE Division",
    readTime: "2 min read",
    tags: ["PROPER", "Environment", "Award", "KLHK"],
    featured: false,
  },
  {
    slug: "operational-dashboard-v2-release",
    title: "Integrated Operational Dashboard v2.0 Released",
    excerpt: "NME's digital platform update brings ML-based predictive maintenance and real-time ESG data integration.",
    content: `
      <p><strong>Jakarta, March 12, 2026</strong> — NME launched version 2.0 of the Integrated Operational Dashboard with new features:</p>
      
      <ul>
        <li>ML-based predictive maintenance for 1,200+ critical assets</li>
        <li>Real-time ESG data integration for automated OJK reporting</li>
        <li>Mobile app for field supervisors (offline-first)</li>
        <li>Open API for vendor & partner integration</li>
      </ul>
      
      <p>The platform now serves 1,200+ active users from operators to directors across 6 operational sites.</p>
    `,
    category: "operasional",
    type: "artikel",
    image: mediaImage5,
    date: "March 12, 2026",
    author: "Technology Division",
    readTime: "4 min read",
    tags: ["Technology", "Digital", "ML", "Dashboard", "ESG"],
    featured: false,
  },
];

export const mediaPageCopy: Record<Locale, MediaPageCopy> = {
  id: {
    eyebrow: "Media & Informasi",
    title: "Ruang berita, pengumuman, dan galeri visual NME.",
    description: "Ikuti perkembangan terbaru operasional, keberlanjutan, hubungan investor, dan inovasi teknologi kami.",
    image: mediaImage9,
    categories: {
      semua: "Semua",
      berita: "Berita",
      pengumuman: "Pengumuman",
      keberlanjutan: "Keberlanjutan",
      investor: "Investor",
      operasional: "Operasional",
    },
    items: mediaItemsId,
    detail: {
      eyebrow: "Detail Media",
      relatedTitle: "Berita Terkait",
      shareTitle: "Bagikan Artikel",
      shareLabel: "Salin Tautan",
      backToMedia: "Kembali ke Media & Informasi",
    },
    gallery: {
      eyebrow: "Galeri Visual",
      title: "Koleksi Foto & Video Operasional",
      description: "Jelajahi dokumentasi visual kegiatan tambang, pengolahan, reklamasi, energi, dan teknologi kami.",
      filterLabel: "Filter Kategori",
      items: [
        { id: "gal-1", title: "Armada Autonomous Haulage", type: "foto", image: mediaImage1, category: "operasional" },
        { id: "gal-2", title: "Area Reklamasi Kaltim", type: "foto", image: mediaImage7, category: "keberlanjutan" },
        { id: "gal-3", title: "Fasilitas Pengolahan Sultra", type: "foto", image: mediaImage3, category: "operasional" },
        { id: "gal-4", title: "PLTS Maluku Utara", type: "foto", image: mediaImage8, category: "investor" },
        { id: "gal-5", title: "Tim Lapangan K3", type: "foto", image: mediaImage6, category: "keberlanjutan" },
        { id: "gal-6", title: "Infrastruktur Jalan Akses", type: "foto", image: mediaImage4, category: "operasional" },
        { id: "gal-7", title: "Operasi Tambang (Video)", type: "video", image: mediaImage1, video: mineVideo, category: "operasional" },
        { id: "gal-8", title: "Komunitas Agroforestri", type: "foto", image: mediaImage11, category: "keberlanjutan" },
        { id: "gal-9", title: "Dashboard Operasional", type: "foto", image: mediaImage5, category: "operasional" },
        { id: "gal-10", title: "Kolam Bioremediasi", type: "foto", image: mediaImage7, category: "keberlanjutan" },
        { id: "gal-11", title: "Konservasi Orangutan", type: "foto", image: mediaImage9, category: "keberlanjutan" },
        { id: "gal-12", title: "Pelatihan Kompetensi", type: "foto", image: mediaImage11, category: "berita" },
      ],
    },
    cta: {
      eyebrow: "Hubungi Kami",
      title: "Butuh informasi lebih lanjut?",
      description: "Tim Media Relations kami siap membantu kebutuhan wawancara, kunjungan site, atau permintaan data.",
      buttonText: "Hubungi Media Relations",
      buttonLink: "/kontak",
    },
  },
  en: {
    eyebrow: "Media & Information",
    title: "NME's newsroom, announcements, and visual gallery.",
    description: "Stay updated on our latest operational developments, sustainability initiatives, investor relations, and technology innovations.",
    image: mediaImage9,
    categories: {
      semua: "All",
      berita: "News",
      pengumuman: "Announcements",
      keberlanjutan: "Sustainability",
      investor: "Investor",
      operasional: "Operations",
    },
    items: mediaItemsEn,
    detail: {
      eyebrow: "Media Detail",
      relatedTitle: "Related News",
      shareTitle: "Share Article",
      shareLabel: "Copy Link",
      backToMedia: "Back to Media & Information",
    },
    gallery: {
      eyebrow: "Visual Gallery",
      title: "Operational Photo & Video Collection",
      description: "Explore visual documentation of our mining, processing, reclamation, energy, and technology activities.",
      filterLabel: "Filter Category",
      items: [
        { id: "gal-1", title: "Autonomous Haulage Fleet", type: "foto", image: mediaImage1, category: "operasional" },
        { id: "gal-2", title: "Kaltim Reclamation Area", type: "foto", image: mediaImage7, category: "keberlanjutan" },
        { id: "gal-3", title: "Sultra Processing Facility", type: "foto", image: mediaImage3, category: "operasional" },
        { id: "gal-4", title: "North Maluku PLTS", type: "foto", image: mediaImage8, category: "investor" },
        { id: "gal-5", title: "Field Safety Team", type: "foto", image: mediaImage6, category: "keberlanjutan" },
        { id: "gal-6", title: "Access Road Infrastructure", type: "foto", image: mediaImage4, category: "operasional" },
        { id: "gal-7", title: "Mining Operations (Video)", type: "video", image: mediaImage1, video: mineVideo, category: "operasional" },
        { id: "gal-8", title: "Agroforestry Community", type: "foto", image: mediaImage11, category: "keberlanjutan" },
        { id: "gal-9", title: "Operational Dashboard", type: "foto", image: mediaImage5, category: "operasional" },
        { id: "gal-10", title: "Bioremediation Ponds", type: "foto", image: mediaImage7, category: "keberlanjutan" },
        { id: "gal-11", title: "Orangutan Conservation", type: "foto", image: mediaImage9, category: "keberlanjutan" },
        { id: "gal-12", title: "Competency Training", type: "foto", image: mediaImage11, category: "berita" },
      ],
    },
    cta: {
      eyebrow: "Contact Us",
      title: "Need more information?",
      description: "Our Media Relations team is ready to assist with interview requests, site visits, or data inquiries.",
      buttonText: "Contact Media Relations",
      buttonLink: "/kontak",
    },
  },
};

export function getMediaSlugs() {
  return mediaItemsId.map(item => item.slug);
}

export function isMediaSlug(slug: string): slug is MediaItem["slug"] {
  return mediaItemsId.some(item => item.slug === slug);
}