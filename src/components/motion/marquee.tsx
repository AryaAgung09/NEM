"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  label?: string;
};

export function Marquee({
  children,
  className,
  duration = 24,
  label,
}: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className} aria-label={label} role={label ? "group" : undefined}>
      <motion.div
        className="flex w-max"
        animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration, ease: "linear", repeat: Infinity }
        }
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
