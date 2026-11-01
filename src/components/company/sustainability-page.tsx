"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, Shield, Users, TrendingUp, Sun, Droplet, Trees, UserCheck, Award, ChevronRight, Zap, Recycle, Globe, HandHeart, BookOpen, Gavel, ArrowUpRight, Target, Sparkles, ExternalLink, ChevronLeft } from "lucide-react";
import { HorizontalScroll, Reveal, Counter } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { investorSustainabilityData } from "@/data/investor-sustainability";
import { PageHero } from "./page-hero";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./company.module.css";

const iconMap: Record<string, React.ReactNode> = {
  tree: <Trees aria-hidden="true" size={24} />,
  leaf: <Leaf aria-hidden="true" size={24} />,
  droplet: <Droplet aria-hidden="true" size={24} />,
  sun: <Sun aria-hidden="true" size={24} />,
  users: <Users aria-hidden="true" size={24} />,
  "user-check": <UserCheck aria-hidden="true" size={24} />,
  shield: <Shield aria-hidden="true" size={24} />,
  "trending-up": <TrendingUp aria-hidden="true" size={24} />,
};

const programIcons: Record<string, React.ReactNode> = {
  decarbon: <Zap aria-hidden="true" size={28} />,
  circular: <Recycle aria-hidden="true" size={28} />,
  biodiversity: <Globe aria-hidden="true" size={28} />,
  community: <HandHeart aria-hidden="true" size={28} />,
  education: <BookOpen aria-hidden="true" size={28} />,
  governance: <Gavel aria-hidden="true" size={28} />,
};

const pillarLabels = {
  id: { E: "Lingkungan", S: "Sosial", G: "Tata Kelola" },
  en: { E: "Environment", S: "Social", G: "Governance" },
};

const pillarColors = {
  E: { bg: "rgb(34 197 94 / 15%)", text: "#16a34a", border: "rgb(34 197 94 / 30%)", gradient: "linear-gradient(135deg, rgb(34 197 94 / 20%), rgb(34 197 94 / 5%))" },
  S: { bg: "rgb(59 130 246 / 15%)", text: "#3b82f6", border: "rgb(59 130 246 / 30%)", gradient: "linear-gradient(135deg, rgb(59 130 246 / 20%), rgb(59 130 246 / 5%))" },
  G: { bg: "rgb(168 85 247 / 15%)", text: "#a855f7", border: "rgb(168 85 247 / 30%)", gradient: "linear-gradient(135deg, rgb(168 85 247 / 20%), rgb(168 85 247 / 5%))" },
};

const statusLabels = {
  id: { "on-track": "Sesuai Rencana", "at-risk": "Perlu Perhatian", achieved: "Tercapai" },
  en: { "on-track": "On Track", "at-risk": "At Risk", achieved: "Achieved" },
};

const statusColors = {
  "on-track": { bg: "rgb(34 197 94 / 15%)", text: "#16a34a" },
  "at-risk": { bg: "rgb(245 166 35 / 15%)", text: "#f5a623" },
  achieved: { bg: "rgb(59 130 246 / 15%)", text: "#3b82f6" },
};

function ImpactCounterCard({ counter, index }: { counter: typeof investorSustainabilityData.id.sustainability.impactCounters[0]; index: number }) {
  return (
    <Reveal className={styles.impactCard} delay={index * 0.06} key={counter.id}>
      <div className={styles.impactIcon}>
        {iconMap[counter.icon] || <Award aria-hidden="true" size={24} />}
      </div>
      <div className={styles.impactValue}>
        <Counter end={counter.value} suffix={counter.suffix} duration={2.2} />
      </div>
      <p className={styles.impactLabel}>{counter.label}</p>
      <p className={styles.impactDesc}>{counter.description}</p>
    </Reveal>
  );
}

import React from "react";

export function SustainabilityPage() {
  const { locale } = useLocale();
  const copy = investorSustainabilityData[locale].sustainability;
  const labels = pillarLabels[locale];
  const sLabels = statusLabels[locale];
  const reducedMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Peek Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; translateX: number } | null>(null);
  
  const cardWidth = 400; // Card width + gap
  const totalCards = copy.programs.length;
  
  // Calculate translateX based on currentIndex
  useEffect(() => {
    const containerWidth = 1200; // Approximate container width
    const centerOffset = (containerWidth - cardWidth) / 2;
    setTranslateX(centerOffset - currentIndex * cardWidth);
  }, [currentIndex]);
  
  const getAdjacentIndex = (index: number, direction: number) => {
    const newIndex = index + direction;
    if (newIndex < 0) return totalCards - 1;
    if (newIndex >= totalCards) return 0;
    return newIndex;
  };
  
  const goToPrev = () => {
    setCurrentIndex(prev => getAdjacentIndex(prev, -1));
  };
  
  const goToNext = () => {
    setCurrentIndex(prev => getAdjacentIndex(prev, 1));
  };
  
  const goToPage = (index: number) => {
    setCurrentIndex(index);
  };
  
  // Auto-advance carousel
  useEffect(() => {
    if (reducedMotion || isHovered || isDragging) return;
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered, isDragging]);
  
  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, translateX };
    e.preventDefault();
  };
  
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.touches[0].clientX, translateX };
  };
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !dragStartRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    setTranslateX(dragStartRef.current.translateX + deltaX);
  }, [isDragging]);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !dragStartRef.current) return;
    const deltaX = e.touches[0].clientX - dragStartRef.current.x;
    setTranslateX(dragStartRef.current.translateX + deltaX);
  }, [isDragging]);
  
  const handleMouseUp = () => {
    if (!isDragging || !dragStartRef.current) return;
    const deltaX = dragStartRef.current.translateX - translateX;
    const threshold = cardWidth * 0.25;
    
    if (deltaX > threshold) {
      goToPrev();
    } else if (deltaX < -threshold) {
      goToNext();
    } else {
      // Snap back to current
      const containerWidth = 1200;
      const centerOffset = (containerWidth - cardWidth) / 2;
      setTranslateX(centerOffset - currentIndex * cardWidth);
    }
    
    setIsDragging(false);
    dragStartRef.current = null;
  };
  
  // Attach move listeners when dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (rect.height + windowHeight)));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <PageHero
        description={copy.description}
        eyebrow={copy.eyebrow}
        image={copy.image}
        title={copy.title}
      />

      <section aria-labelledby="esg-targets-heading" className={styles.esgTargets}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.esgEyebrow}</p>
          <h2 id="esg-targets-heading">{copy.esgTitle}</h2>
          <p className={styles.contentNote}>{copy.esgDescription}</p>
        </div>
        <div className={styles.esgGrid}>
          {copy.esgTargets.map((target, index) => {
            const colors = pillarColors[target.pillar];
            const statusColor = statusColors[target.status];
            return (
              <Reveal className={styles.esgCard} delay={index * 0.05} key={target.title}>
                <div style={{ "--pillar-color": colors.text, "--pillar-bg": colors.bg, "--pillar-border": colors.border } as React.CSSProperties}>
                  <div className={styles.esgPillar} style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}>
                    {target.pillar}
                  </div>
                  <h3>{target.title}</h3>
                  <p>{target.description}</p>
                  <div className={styles.esgProgress}>
                    <div className={styles.esgProgressBar}>
                      <div
                        className={styles.esgProgressFill}
                        style={{ width: `${Math.min(100, (parseFloat(target.current.replace("%", "")) / parseFloat(target.target.replace("%", "")) * 100) || 0)}%`, backgroundColor: colors.text }}
                      />
                    </div>
                    <div className={styles.esgProgressLabels}>
                      <span>{locale === "id" ? "Baseline" : "Baseline"} ({target.baseline}): {target.current} {target.unit}</span>
                      <span>{locale === "id" ? "Target" : "Target"} ({target.targetYear}): {target.target} {target.unit}</span>
                    </div>
                  </div>
                  <span className={styles.esgStatus} style={{ backgroundColor: statusColor.bg, color: statusColor.text }}>
                    {sLabels[target.status]}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="impact-heading" className={styles.impact}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.impactEyebrow}</p>
          <h2 id="impact-heading">{copy.impactTitle}</h2>
          <p className={styles.contentNote}>{copy.impactDescription}</p>
        </div>
        <div className={styles.impactGrid}>
          {copy.impactCounters.map((counter, index) => (
            <ImpactCounterCard key={counter.id} counter={counter} index={index} />
          ))}
        </div>
      </section>

      <section aria-labelledby="reclamation-heading" className={styles.reclamation}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.reclamationEyebrow}</p>
          <h2 id="reclamation-heading">{copy.reclamationTitle}</h2>
          <p className={styles.contentNote}>{copy.reclamationDescription}</p>
        </div>
        <HorizontalScroll
          className={styles.reclamationScroll}
          trackClassName={styles.reclamationTrack}
        >
          {copy.reclamationPrograms.map((program, index) => (
            <Reveal className={styles.reclamationCard} delay={index * 0.08} key={program.id}>
              <div className={styles.reclamationImage}>
                <Image
                  alt={program.image.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  src={program.image.src}
                />
                <span className={`${styles.reclamationStatus} ${styles[program.status]}`}>
                  {program.status === "planning" && locale === "id" && "Perencanaan"}
                  {program.status === "planning" && locale === "en" && "Planning"}
                  {program.status === "active" && locale === "id" && "Berjalan"}
                  {program.status === "active" && locale === "en" && "Active"}
                  {program.status === "completed" && locale === "id" && "Selesai"}
                  {program.status === "completed" && locale === "en" && "Completed"}
                  {program.status === "monitoring" && locale === "id" && "Pemantauan"}
                  {program.status === "monitoring" && locale === "en" && "Monitoring"}
                </span>
              </div>
              <div className={styles.reclamationContent}>
                <div className={styles.reclamationMeta}>
                  <span>{program.region}</span>
                  <span>{program.area}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className={styles.reclamationStats}>
                  <div><strong>{program.species}</strong> <span>{locale === "id" ? "Spesies" : "Species"}</span></div>
                  <div><strong>{program.communities}</strong> <span>{locale === "id" ? "Komunitas" : "Communities"}</span></div>
                  <div><strong>{program.carbonSequestered}</strong> <span>CO2e</span></div>
                </div>
                <ul className={styles.reclamationHighlights}>
                  {program.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </HorizontalScroll>
      </section>

      <section aria-labelledby="programs-heading" className={styles.programs} ref={sectionRef}>
        <div className={styles.sectionHeadingWrapper}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{copy.programsEyebrow}</p>
            <h2 id="programs-heading">{copy.programsTitle}</h2>
          </div>
          <p className={styles.sectionSubtext}>
            {locale === "id" 
              ? "Inisiatif terintegrasi yang menghubungkan nilai di seluruh rantai bisnis kami." 
              : "Integrated initiatives connecting value across our entire business value chain."}
          </p>
        </div>

        {/* Peek Carousel */}
        <div 
          className={styles.peekCarousel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Track Container */}
          <div className={styles.peekTrackContainer}>
            <div 
              className={styles.peekTrack}
              ref={trackRef}
              style={{ transform: `translateX(${translateX}px)` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
              onTouchEnd={handleMouseUp}
            >
              {copy.programs.map((program, index) => {
                const colors = pillarColors[program.pillar];
                const ProgramIcon = programIcons[program.id] || <Award aria-hidden="true" size={28} />;
                const isActive = index === currentIndex;
                const isAdjacent = index === getAdjacentIndex(currentIndex, -1) || index === getAdjacentIndex(currentIndex, 1);
                
                return (
                  <div 
                    key={program.id}
                    className={`${styles.peekCard} ${isActive ? styles.peekCardActive : ''} ${isAdjacent ? styles.peekCardPeek : ''}`}
                    style={{ '--pillar-color': colors.text, '--pillar-gradient': colors.gradient } as React.CSSProperties}
                  >
                    <div className={styles.peekCardInner}>
                      {/* Image */}
                      <div className={styles.peekImageWrapper}>
                        <Image
                          alt={program.image.alt}
                          fill
                          sizes="(max-width: 1200px) 80vw, 500px"
                          src={program.image.src}
                          className={styles.peekImage}
                          priority={index === 0 || index === copy.programs.length - 1}
                        />
                        <div className={styles.peekOverlay} style={{ background: colors.gradient }} />
                        
                        {/* Pillar badge */}
                        <span className={styles.peekPillar} style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}>
                          {labels[program.pillar]}
                        </span>
                        
                        {/* Region tag */}
                        <span className={styles.peekRegion}>
                          {program.region}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className={styles.peekContent}>
                        <div className={styles.peekHeader}>
                          <div className={styles.peekIconWrapper} style={{ backgroundColor: colors.bg, borderColor: colors.border, boxShadow: `0 4px 20px ${colors.text}30` }}>
                            {ProgramIcon}
                          </div>
                          {program.link && (
                            <Link href={program.link.href} className={styles.peekExternalLink} aria-label={program.link.label}>
                              <ExternalLink size={16} />
                            </Link>
                          )}
                        </div>
                        
                        <h3 className={styles.peekTitle}>{program.title}</h3>
                        <p className={styles.peekDescription}>{program.description}</p>
                        
                        {/* Metrics */}
                        <div className={styles.peekMetrics}>
                          {program.metrics.slice(0, 2).map((m, i) => (
                            <div key={i} className={styles.peekMetric}>
                              <div className={styles.peekMetricValue}>
                                <Counter 
                                  end={parseFloat(m.value.replace(/[^\d.]/g, "")) || 0} 
                                  suffix={m.value.replace(/[\d.]/g, "").replace(m.label, "")} 
                                  duration={1.5}
                                  className={styles.peekMetricCounter}
                                />
                              </div>
                              <span className={styles.peekMetricLabel}>{m.label}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        {program.link && (
                          <Link href={program.link.href} className={styles.peekCTA}>
                            <span>{locale === "id" ? "Selengkapnya" : "Learn more"}</span>
                            <ChevronRight size={14} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className={`${styles.peekArrow} ${styles.peekArrowPrev}`}
            onClick={goToPrev}
            aria-label={locale === "id" ? "Program sebelumnya" : "Previous program"}
            disabled={isDragging}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className={`${styles.peekArrow} ${styles.peekArrowNext}`}
            onClick={goToNext}
            aria-label={locale === "id" ? "Program selanjutnya" : "Next program"}
            disabled={isDragging}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dot Indicators */}
          <div className={styles.peekDots} role="tablist" aria-label={locale === "id" ? "Navigasi program" : "Program navigation"}>
            {copy.programs.map((_, i) => (
              <button
                key={i}
                className={`${styles.peekDot} ${i === currentIndex ? styles.peekDotActive : ''}`}
                onClick={() => goToPage(i)}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`${locale === "id" ? "Program" : "Program"} ${i + 1} ${locale === "id" ? "dari" : "of"} ${copy.programs.length}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="commitment-heading" className={styles.commitment}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{copy.commitmentEyebrow}</p>
          <h2 id="commitment-heading">{copy.commitmentTitle}</h2>
          <p className={styles.contentNote}>{copy.commitmentDescription}</p>
        </div>
        <div className={styles.commitmentGrid}>
          {copy.commitments.map((commitment, index) => (
            <Reveal className={styles.commitmentCard} delay={index * 0.06} key={commitment.title}>
              <h3>{commitment.title}</h3>
              <p>{commitment.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {copy.disclaimer && (
        <section className={styles.disclaimer}>
          <p>{copy.disclaimer}</p>
        </section>
      )}
    </main>
  );
}