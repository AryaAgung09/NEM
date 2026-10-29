"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion";
import { useLocale } from "@/components/locale-provider";
import { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

export function Journey() {
  const { locale } = useLocale();
  const copy = homepageCopy[locale].journey;
  const section = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!section.current || reducedMotion !== false) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();

      media.add(
        "(min-width: 801px) and (min-height: 701px) and (prefers-reduced-motion: no-preference)",
        () => {
          let previousIndex = -1;
          const trigger = ScrollTrigger.create({
            trigger: section.current,
            start: "top top",
            end: () => `+=${window.innerHeight * (copy.steps.length - 1)}`,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const nextIndex = Math.min(
                copy.steps.length - 1,
                Math.floor(
                  self.progress * (copy.steps.length - 1) + 0.0001,
                ),
              );
              if (nextIndex !== previousIndex) {
                previousIndex = nextIndex;
                setActiveIndex(nextIndex);
              }
            },
            onRefresh: (self) => {
              const nextIndex = Math.min(
                copy.steps.length - 1,
                Math.floor(
                  self.progress * (copy.steps.length - 1) + 0.0001,
                ),
              );
              previousIndex = nextIndex;
              setActiveIndex(nextIndex);
            },
          });

          return () => trigger.kill();
        },
      );

      return () => media.revert();
    },
    { scope: section, dependencies: [copy.steps.length, reducedMotion] },
  );

  return (
    <section
      aria-labelledby="journey-heading"
      className={styles.journey}
      id="perjalanan"
      ref={section}
    >
      <div className={styles.journeyInner}>
        <div className={styles.journeyHeading}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="journey-heading">{copy.title}</h2>
          <p className={styles.journeyIntro}>{copy.intro}</p>
        </div>

        <div className={styles.journeyDesktop}>
          <div className={styles.journeyVisual}>
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                className={styles.journeyImage}
                exit={{ opacity: 0, clipPath: "inset(0% 0% 0% 100%)" }}
                initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
                key={copy.steps[activeIndex].title}
                transition={{
                  duration: reducedMotion ? 0 : 0.55,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <Image
                  alt={copy.steps[activeIndex].image.alt}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 1000px) 100vw, 52vw"
                  src={copy.steps[activeIndex].image.src}
                />
              </motion.div>
            </AnimatePresence>
            <span className={styles.journeyVisualIndex}>
              0{activeIndex + 1} <i>/ 0{copy.steps.length}</i>
            </span>
          </div>

          <div className={styles.journeyContent}>
            <ol className={styles.journeySteps} aria-label={copy.title}>
              {copy.steps.map((step, index) => (
                <li
                  aria-current={index === activeIndex ? "step" : undefined}
                  className={
                    index === activeIndex
                      ? styles.journeyStepActive
                      : styles.journeyStep
                  }
                  key={step.title}
                >
                  <span className={styles.journeyStepNumber}>
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <AnimatePresence initial={false}>
                      {index === activeIndex && (
                        <motion.p
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          initial={{ opacity: 0, height: 0, y: 4 }}
                          transition={{ duration: reducedMotion ? 0 : 0.25 }}
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <span
                    className={styles.journeyStepProgress}
                    style={
                      index === activeIndex
                        ? { transform: "scaleX(1)" }
                        : undefined
                    }
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ol className={styles.journeyMobile} aria-label={copy.title}>
          {copy.steps.map((step, index) => (
            <li key={step.title}>
              <Reveal className={styles.journeyMobileContent} delay={index * 0.06}>
                <span className={styles.journeyStepNumber}>
                  0{index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
