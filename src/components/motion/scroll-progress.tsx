"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="scroll-progress"
      style={shouldReduceMotion ? { scaleX: 1 } : { scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
