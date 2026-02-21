'use client';

import { useEffect } from 'react';

/**
 * useScrollReveal
 * Observes all .reveal elements and adds .visible
 * when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
