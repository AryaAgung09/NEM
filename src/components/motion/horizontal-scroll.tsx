"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type HorizontalScrollProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
};

export function HorizontalScroll({
  children,
  className,
  trackClassName,
}: HorizontalScrollProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !viewport.current || !track.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add("(min-width: 801px)", () => {
        gsap.to(track.current, {
          x: () =>
            Math.min(
              0,
              viewport.current!.clientWidth - track.current!.scrollWidth,
            ),
          ease: "none",
          scrollTrigger: {
            trigger: viewport.current,
            start: "top top",
            end: () =>
              `+=${Math.max(
                0,
                track.current!.scrollWidth - viewport.current!.clientWidth,
              )}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => media.revert();
    },
    { scope: viewport, dependencies: [shouldReduceMotion] },
  );

  return (
    <section
      ref={viewport}
      className={`horizontal-scroll ${className ?? ""}`}
      style={shouldReduceMotion ? { overflowX: "auto" } : undefined}
    >
      <div
        ref={track}
        className={`horizontal-scroll__track ${trackClassName ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
}
