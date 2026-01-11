// useScrollAnimation.ts - Scroll-based animations
import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrollProgress: number;
  isScrollingDown: boolean;
}

export function useScrollAnimation(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollProgress: 0,
    isScrollingDown: false
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = currentScrollY / documentHeight;

      setScrollState({
        scrollY: currentScrollY,
        scrollProgress: progress,
        isScrollingDown: currentScrollY > lastScrollY
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}
