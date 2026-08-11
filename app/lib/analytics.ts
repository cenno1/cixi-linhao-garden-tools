type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, parameters: AnalyticsParameters = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (command: string, event: string, params: AnalyticsParameters) => void }).gtag;
  gtag?.("event", name, parameters);
}
