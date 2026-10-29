"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className,
  strength = 0.2,
}: MagneticProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 250, damping: 18, mass: 0.25 });
  const y = useSpring(pointerY, { stiffness: 250, damping: 18, mass: 0.25 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left - bounds.width / 2) * strength);
    pointerY.set((event.clientY - bounds.top - bounds.height / 2) * strength);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      className={className}
      style={shouldReduceMotion ? undefined : { x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {children}
    </motion.div>
  );
}
