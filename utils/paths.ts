/**
 * Get the base URL for static assets
 * Works in both development and production (Vercel)
 */
export const getBaseUrl = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  // Fallback for SSR
  return '';
};

/**
 * Get the full path for a design asset
 */
export const getDesignPath = (path: string): string => {
  const base = getBaseUrl();
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

