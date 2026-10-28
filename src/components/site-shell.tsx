"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  ChevronDown,
  Mail,
  Menu,
  Play,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { dictionary, type Locale } from "@/data/dictionary";
import { images } from "@/data/media";
import { useLocale } from "@/components/locale-provider";
import {
  Loader,
  Marquee,
  PageTransition,
  ScrollProgress,
} from "@/components/motion";

const navigationKeys = [
  "about",
  "business",
  "investor",
  "media",
  "sustainability",
] as const;

const navigationTargets: Record<(typeof navigationKeys)[number], string> = {
  about: "/tentang-kami",
  business: "/bisnis-kami",
  investor: "/#investor",
  media: "/#media",
  sustainability: "/#keberlanjutan",
};

const businessTargets = [
  "/bisnis-kami/pertambangan-mineral",
  "/bisnis-kami/energi-infrastruktur",
  "/bisnis-kami/jasa-pertambangan",
  "/bisnis-kami/teknologi-inovasi",
];

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const copy = dictionary[locale];

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("mobile-menu-open");

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileOpen]);

  const toggleLocale = (nextLocale: Locale) => setLocale(nextLocale);

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Loader />
      <header
        className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
        onMouseLeave={() => setBusinessOpen(false)}
      >
        <div className="site-topbar">
          <p>{copy.topBar.label}</p>
          <div className="site-topbar__right">
            {copy.topBar.quickLinks.map((label, index) => (
              <Link
                href={[
                  "/#investor",
                  "/karir",
                  "mailto:info@nusantaramineral.co.id",
                ][index]}
                key={label}
              >
                {label}
              </Link>
            ))}
            <div className="locale-switch" aria-label="Pilih bahasa">
              {(["id", "en"] as const).map((option) => (
                <button
                  aria-pressed={locale === option}
                  className={locale === option ? "is-active" : ""}
                  key={option}
                  onClick={() => toggleLocale(option)}
                  type="button"
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="site-nav">
          <Link
            aria-label="PT Nusantara Mineral Energi, beranda"
            className="site-brand"
            href="/"
            onClick={() => setMobileOpen(false)}
          >
            <span className="site-brand__mark" aria-hidden="true">
              N
            </span>
            <span className="site-brand__name">
              <strong>NUSANTARA</strong>
              <small>MINERAL ENERGI</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navigationKeys.map((key) =>
              key === "business" ? (
                <div
                  className="business-nav-item"
                  key={key}
                  onMouseEnter={() => setBusinessOpen(true)}
                >
                  <button
                    aria-expanded={businessOpen}
                    className="nav-link nav-link--button"
                    onClick={() => setBusinessOpen((open) => !open)}
                    onFocus={() => setBusinessOpen(true)}
                    type="button"
                  >
                    {copy.navigation.business}
                    <ChevronDown
                      aria-hidden="true"
                      className={businessOpen ? "is-rotated" : ""}
                      size={15}
                    />
                  </button>
                  <AnimatePresence>
                    {businessOpen && (
                      <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        className="mega-menu"
                        exit={{ opacity: 0, y: -8 }}
                        initial={{ opacity: 0, y: -8 }}
                        transition={{ duration: reducedMotion ? 0 : 0.2 }}
                      >
                        <div className="mega-menu__image">
                          <Image
                            alt={images.openPitMine.alt}
                            blurDataURL={images.openPitMine.blurDataURL}
                            fill
                            placeholder="blur"
                            sizes="(max-width: 1200px) 40vw, 420px"
                            src={images.openPitMine.src}
                          />
                          <span>{copy.business.eyebrow}</span>
                        </div>
                        <div className="mega-menu__content">
                          <p>{copy.business.title}</p>
                          {copy.business.companies.map((company, index) => (
                            <Link
                              href={businessTargets[index]}
                              key={company}
                              onClick={() => setBusinessOpen(false)}
                            >
                              <span>{company}</span>
                              <ArrowUpRight aria-hidden="true" size={16} />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  className="nav-link"
                  href={navigationTargets[key]}
                  key={key}
                >
                  {copy.navigation[key]}
                </Link>
              ),
            )}
          </nav>

          <Link className="nav-contact" href="/#kontak">
            {copy.actions.contact}
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>

          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? copy.actions.closeMenu : copy.actions.openMenu}
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            type="button"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="mobile-menu"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
          >
            <div className="mobile-menu__top">
              <span>{copy.topBar.label}</span>
              <div className="locale-switch" aria-label="Pilih bahasa">
                {(["id", "en"] as const).map((option) => (
                  <button
                    aria-pressed={locale === option}
                    className={locale === option ? "is-active" : ""}
                    key={option}
                    onClick={() => toggleLocale(option)}
                    type="button"
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <motion.nav
              animate="visible"
              aria-label="Navigasi mobile"
              className="mobile-menu__links"
              initial="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: reducedMotion
                    ? { staggerChildren: 0 }
                    : { staggerChildren: 0.07, delayChildren: 0.08 },
                },
              }}
            >
              {navigationKeys.map((key) => (
                <motion.div
                  key={key}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: reducedMotion ? 0 : 0.3 }}
                >
                  <Link
                    href={navigationTargets[key]}
                    onClick={() => setMobileOpen(false)}
                  >
                    {copy.navigation[key]}
                    <ArrowUpRight aria-hidden="true" size={19} />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: reducedMotion ? 0 : 0.3 }}
              >
                <Link
                  className="mobile-menu__contact"
                  href="/#kontak"
                  onClick={() => setMobileOpen(false)}
                >
                  {copy.actions.contact}
                  <ArrowUpRight aria-hidden="true" size={19} />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <PageTransition>{children}</PageTransition>

      <footer className="site-footer">
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <Link aria-label="Nusantara Mineral Energi, beranda" className="site-brand" href="/">
              <span className="site-brand__mark" aria-hidden="true">
                N
              </span>
              <span className="site-brand__name">
                <strong>NUSANTARA</strong>
                <small>MINERAL ENERGI</small>
              </span>
            </Link>
            <p>{copy.footer.description}</p>
            <div className="site-footer__socials" aria-label="Media sosial">
              <a aria-label="LinkedIn" href="https://www.linkedin.com" rel="noreferrer" target="_blank">
                <BriefcaseBusiness size={18} />
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com" rel="noreferrer" target="_blank">
                <Camera size={18} />
              </a>
              <a aria-label="YouTube" href="https://www.youtube.com" rel="noreferrer" target="_blank">
                <Play size={18} />
              </a>
            </div>
          </div>

          <div className="site-footer__contact">
            <h2>{copy.footer.addressLabel}</h2>
            <p>{copy.footer.address}</p>
            <h2>{copy.footer.emailLabel}</h2>
            <a href="mailto:info@nusantaramineral.co.id">
              <Mail aria-hidden="true" size={15} />
              info@nusantaramineral.co.id
            </a>
          </div>

          {copy.footer.groups.map((group, groupIndex) => (
            <div className="site-footer__links" key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((label, index) => {
                const targetIndexes = groupIndex === 0 ? [0, 1, 4] : [2, 3, 0];

                return (
                  <Link
                    href={
                      groupIndex === 1 && index === 2
                        ? "/karir"
                        : navigationTargets[
                            navigationKeys[targetIndexes[index]]
                          ]
                    }
                    key={label}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="site-footer__marquee">
          <Marquee className="site-footer__marquee-track" duration={30}>
            {[0, 1, 2, 3].map((item) => (
              <span key={item}>
                {copy.footer.slogan}
                <i aria-hidden="true">✳</i>
              </span>
            ))}
          </Marquee>
        </div>

        <div className="site-footer__bottom">
          <span>© PT Nusantara Mineral Energi. {copy.footer.copyright}</span>
          <button
            aria-label={copy.actions.backToTop}
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
          >
            <ArrowUp aria-hidden="true" size={17} />
          </button>
          <span>Indonesia</span>
        </div>
      </footer>
    </div>
  );
}
