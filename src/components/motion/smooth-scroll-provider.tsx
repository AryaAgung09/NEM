"use client";

import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion !== false) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ autoRaf: false, smoothWheel: true });
    const updateScrollTrigger = () => ScrollTrigger.update();
    const animateScroll = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(animateScroll);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(animateScroll);
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  return children;
}
