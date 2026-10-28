"use client";

import { motion, useReducedMotion } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
  wordDelay?: number;
};

export function SplitText({
  text,
  className,
  wordDelay = 0.07,
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.trim().split(/\s+/);

  return (
    <span className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="mr-[0.25em] inline-block"
            initial={shouldReduceMotion ? false : { opacity: 0, y: "0.65em" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : index * wordDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </span>
  );
}
