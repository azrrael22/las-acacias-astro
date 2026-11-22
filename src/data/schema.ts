// ============================================
// DATOS ESTRUCTURADOS (JSON-LD) — Las Acacias Coffee Farm
// ============================================
// Se pintan en <head> con la prop `jsonLd` de BaseLayout.astro.
// Los datos salen de src/data/contacto.ts para que coincidan con el footer.
// No usar Product en /cafe-origen/ (Google no lo usa en páginas de listado)
// ni FAQPage (ya no da resultados enriquecidos).

import { NEGOCIO, formatTelefono } from './contacto';
import { ui } from '../i18n/ui';
import type { Lang } from '../i18n';

const DIAS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/** Negocio (finca + atracción turística) y sitio web, para la portada en cada idioma */
export function negocioJsonLd(lang: Lang, site: URL) {
  const abs = (path: string) => new URL(path, site).href;
  const { direccion: d } = NEGOCIO;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'TouristAttraction'],
        '@id': abs('/#negocio'),
        name: NEGOCIO.nombre,
        alternateName: NEGOCIO.nombreAlterno,
        description: ui[lang].meta.description,
        url: abs('/'),
        logo: abs('/Imagenes/logo.png'),
        image: [
          abs('/Imagenes/og-las-acacias.jpg'),
          abs('/Imagenes/Carrucel1/1.webp'),
          abs('/Imagenes/Carrucel1/2.webp'),
        ],
        telephone: formatTelefono(NEGOCIO.telefonos[0]),
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${d.finca}, ${d.vereda}`,
          addressLocality: d.municipio,
          addressRegion: d.departamento,
          addressCountry: d.codigoPais,
        },
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: DIAS,
          opens: NEGOCIO.horario.abre,
          closes: NEGOCIO.horario.cierra,
        }],
        availableLanguage: ['es', 'en'],
        sameAs: [NEGOCIO.instagram.url, NEGOCIO.facebook.url],
      },
      {
        '@type': 'WebSite',
        '@id': abs('/#sitio'),
        name: NEGOCIO.nombre,
        url: abs('/'),
        inLanguage: ['es', 'en'],
        publisher: { '@id': abs('/#negocio') },
      },
    ],
  };
}
