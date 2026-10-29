"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type LoaderProps = {
  duration?: number;
};

export function Loader({ duration = 650 }: LoaderProps) {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setVisible(false),
      shouldReduceMotion ? 0 : duration,
    );

    return () => window.clearTimeout(timeout);
  }, [duration, shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="motion-loader"
          role="status"
          aria-label="Memuat halaman"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
        >
          <motion.span
            className="motion-loader__mark"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            aria-hidden="true"
          >
            NME
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
