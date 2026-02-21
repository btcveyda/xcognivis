'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <>{children}</>;
}
