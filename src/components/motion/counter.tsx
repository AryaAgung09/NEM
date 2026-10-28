"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "framer-motion";

type CounterProps = {
  end: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export function Counter({
  end,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
}: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <span ref={ref} className={className}>
      <CountUp
        start={0}
        end={inView ? end : 0}
        duration={shouldReduceMotion ? 0 : duration}
        decimals={decimals}
        decimal=","
        separator="."
        prefix={prefix}
        suffix={suffix}
      />
    </span>
  );
}
