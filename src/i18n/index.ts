// ============================================
// IDIOMAS — Las Acacias Coffee Farm
// ============================================
// Español en la raíz (/, /cafe-origen/) e inglés bajo /en/.
// Módulo puro: se usa en el frontmatter (con Astro.url) y en los
// scripts del cliente (con getDocumentLang()).

export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'es';

/** Rutas para getStaticPaths de las páginas en src/pages/[...lang]/ */
export function langStaticPaths() {
  return [
    { params: { lang: undefined } }, // español, sin prefijo
    { params: { lang: 'en' } },
  ];
}

function isEnglishPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/');
}

/** Idioma de la página actual a partir de su URL */
export function getLangFromUrl(url: URL): Lang {
  return isEnglishPath(url.pathname) ? 'en' : DEFAULT_LANG;
}

/** Idioma de la página en el cliente (lo fija BaseLayout en <html lang>) */
export function getDocumentLang(): Lang {
  return document.documentElement.lang === 'en' ? 'en' : DEFAULT_LANG;
}

/** '/cafe-origen/' → '/en/cafe-origen/' · '/' → '/en/' · '/#tour' → '/en/#tour'
 *  Las rutas llevan siempre la barra final (trailingSlash: 'always' en astro.config.mjs) */
export function localizePath(path: string, lang: Lang): string {
  return lang === DEFAULT_LANG ? path : `/en${path}`;
}

/** La misma página en el otro idioma */
export function alternatePath(pathname: string, lang: Lang): string {
  const base = isEnglishPath(pathname) ? pathname.slice(3) || '/' : pathname;
  return localizePath(base.startsWith('/') ? base : `/${base}`, lang);
}
