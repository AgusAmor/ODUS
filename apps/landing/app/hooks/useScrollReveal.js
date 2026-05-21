"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A lightweight, highly performant React hook that utilizes the native Intersection Observer API
 * to trigger scroll entrance animations exactly once as elements enter the viewport.
 */
export default function useScrollReveal(threshold = 0.1, rootMargin = "0px 0px -100px 0px") {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Graceful fallback for SSR or environments without IntersectionObserver
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect(); // Disconnect immediately to run exactly once and free up resources
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return [elementRef, isRevealed];
}
