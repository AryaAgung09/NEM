export type ImageAsset = {
  src: string;
  alt: string;
  blurDataURL: string;
};

const blurDataURL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%23201f1c'/%3E%3C/svg%3E";

export const images = {
  // Source: Pexels, https://www.pexels.com/photo/a-construction-truck-in-a-barren-landscape-5125104/
  // License: Pexels License (free for commercial use).
  miningTruck: {
    src: "https://images.pexels.com/photos/5125104/pexels-photo-5125104.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Truk tambang berwarna kuning di area tambang terbuka",
    blurDataURL,
  },
  // Source: Pexels, https://www.pexels.com/photo/silver-steel-mining-crane-on-black-rocky-soil-during-daytime-60008/
  // License: Pexels License (free for commercial use).
  openPitMine: {
    src: "https://images.pexels.com/photos/60008/brown-coal-energy-garzweiler-bucket-wheel-excavators-60008.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Ekskavator tambang terbuka di bentang alam berlapis",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1516937941344-00b4e0337589).
  // License: Unsplash License (free for commercial use).
  industrialFacility: {
    src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1800&q=85",
    alt: "Fasilitas industri dan energi",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1581092160562-40aa08e78837).
  // License: Unsplash License (free for commercial use).
  engineering: {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&q=85",
    alt: "Teknisi bekerja pada peralatan industri",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1581091226825-a6a2a5aee158).
  // License: Unsplash License (free for commercial use).
  fieldTeam: {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=85",
    alt: "Tim teknis melakukan pekerjaan lapangan",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1497435334941-8c899ee9e8e9).
  // License: Unsplash License (free for commercial use).
  reclamation: {
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1800&q=85",
    alt: "Ruang hijau dengan pepohonan dan vegetasi",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1473341304170-971dccb5ac1e).
  // License: Unsplash License (free for commercial use).
  powerInfrastructure: {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=85",
    alt: "Infrastruktur jaringan energi",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1509391366360-2e959784a276).
  // License: Unsplash License (free for commercial use).
  solarEnergy: {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=85",
    alt: "Panel surya untuk pembangkit energi terbarukan",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1527489377706-5bf97e608852).
  // License: Unsplash License (free for commercial use).
  landscape: {
    src: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=1800&q=85",
    alt: "Bentang alam Indonesia yang hijau",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1497366754035-f200968a6e72).
  // License: Unsplash License (free for commercial use).
  modernOffice: {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=85",
    alt: "Ruang kerja kantor modern",
    blurDataURL,
  },
  // Source: Unsplash, https://unsplash.com/license (photo ID: 1521737711867-e3b97375f902).
  // License: Unsplash License (free for commercial use).
  collaboration: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=85",
    alt: "Kolaborasi tim dalam suasana kerja",
    blurDataURL,
  },
} satisfies Record<string, ImageAsset>;

export const videos = {
  // Source: Pexels, https://www.pexels.com/video/arc-shot-of-bucket-wheel-excavators-9310142/
  // License: Pexels License (free for commercial use); 1080p rendition verified accessible.
  mineOperations: {
    src: "https://videos.pexels.com/video-files/9310142/9310142-hd_1920_1080_30fps.mp4",
    poster: "https://images.pexels.com/videos/9310142/pexels-photo-9310142.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Ekskavator roda ember bekerja di area pertambangan",
  },
} as const;
