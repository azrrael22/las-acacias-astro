// robots.txt: todo el sitio es rastreable y apunta al sitemap (usa `site` de astro.config.mjs)
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? `\nSitemap: ${new URL('/sitemap.xml', site).href}\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
