// analytics.ts - Analytics tracking utilities

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

/**
 * Track page view
 */
export function trackPageView(path: string): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path
    });
  }
}

/**
 * Track custom event
 */
export function trackEvent({ category, action, label, value }: AnalyticsEvent): void {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }

  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', { category, action, label, value });
  }
}

/**
 * Track 3D visualization interaction
 */
export function trackVisualizationInteraction(action: string, details?: any): void {
  trackEvent({
    category: 'ParticlesWay Visualization',
    action: action,
    label: JSON.stringify(details)
  });
}

/**
 * Track performance metrics
 */
export function trackPerformance(): void {
  if (typeof window !== 'undefined' && window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    trackEvent({
      category: 'Performance',
      action: 'Page Load Time',
      value: pageLoadTime
    });
  }
}
