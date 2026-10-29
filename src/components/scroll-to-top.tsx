"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ScrollToTopInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Disable browser's native scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, searchParams]);

  return null;
}

export function ScrollToTop() {
  return (
    <Suspense fallback={null}>
      <ScrollToTopInner />
    </Suspense>
  );
}