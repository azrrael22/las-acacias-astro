// sitemap.xml con las versiones de cada página en español e inglés (hreflang).
// Al crear una página nueva en src/pages/[...lang]/, añade su ruta a RUTAS.
import type { APIRoute } from 'astro';
import { LANGS, DEFAULT_LANG, localizePath } from '../i18n';

/** Rutas en español, con la barra final */
const RUTAS = ['/', '/cafe-origen/'];

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Define `site` en astro.config.mjs para generar el sitemap');
  const abs = (ruta: string) => new URL(ruta, site).href;

  const urls = RUTAS.flatMap(ruta => {
    const alternas = [
      ...LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(localizePath(ruta, l))}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(localizePath(ruta, DEFAULT_LANG))}"/>`,
    ].join('\n');
    return LANGS.map(lang => `  <url>\n    <loc>${abs(localizePath(ruta, lang))}</loc>\n${alternas}\n  </url>`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
