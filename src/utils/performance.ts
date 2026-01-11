// performance.ts - Performance optimization utilities

/**
 * Debounce function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function calls
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Lazy load images
 */
export function lazyLoadImage(imageUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(imageUrl);
    img.onerror = reject;
    img.src = imageUrl;
  });
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Get optimal particle count based on device
 */
export function getOptimalParticleCount(): number {
  // Check device capabilities
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const hasGoodGPU = navigator.hardwareConcurrency > 4;

  if (isMobile) {
    return 500; // Low for mobile
  } else if (hasGoodGPU) {
    return 2000; // High for powerful desktops
  } else {
    return 1000; // Medium for average devices
  }
}

/**
 * Preload critical assets
 */
export async function preloadAssets(urls: string[]): Promise<void> {
  const promises = urls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'fetch';
      link.href = url;
      link.onload = () => resolve();
      link.onerror = () => reject();
      document.head.appendChild(link);
    });
  });

  await Promise.all(promises);
}
