"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type PinnedStoryProps = {
  children: ReactNode;
  className?: string;
  scrollLength?: number;
};

export function PinnedStory({
  children,
  className,
  scrollLength = 2,
}: PinnedStoryProps) {
  const section = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !section.current) return;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: () => `+=${window.innerHeight * scrollLength}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    },
    { scope: section, dependencies: [scrollLength, shouldReduceMotion] },
  );

  return (
    <section ref={section} className={className}>
      {children}
    </section>
  );
}
