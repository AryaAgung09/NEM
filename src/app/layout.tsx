import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/motion";
import { LocaleProvider } from "@/components/locale-provider";
import { SiteShell } from "@/components/site-shell";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PT Nusantara Mineral Energi",
    template: "%s | PT Nusantara Mineral Energi",
  },
  description:
    "Mitra pertumbuhan Indonesia melalui pertambangan yang bertanggung jawab, teknologi, dan energi masa depan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <LocaleProvider>
            <SiteShell>{children}</SiteShell>
            <ScrollToTop />
          </LocaleProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
