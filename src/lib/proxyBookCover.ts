/**
 * Converts an Aladin CDN image URL to a server-side proxy URL.
 *
 * Why: Aladin's image CDN blocks direct browser requests (hotlinking).
 * Admin (Streamlit) works because st.image() fetches images server-side.
 * This proxy replicates that exact behavior in the Vite dev server.
 *
 * @param url - Original Aladin image URL (https://image.aladin.co.kr/...)
 * @returns Proxied URL (/api/book-cover?url=...)
 */
export function proxyBookCover(url: string): string {
  if (!url) return "";
  // Only proxy Aladin CDN URLs; pass through other URLs as-is
  if (url.includes("image.aladin.co.kr")) {
    const clean = url.replace("http://", "https://");
    return `/api/book-cover?url=${encodeURIComponent(clean)}`;
  }
  return url;
}
