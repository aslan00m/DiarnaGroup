export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const w = window as unknown as { gtag: (type: string, name: string, params?: Record<string, unknown>) => void }
    w.gtag('event', name, params)
  }
}
