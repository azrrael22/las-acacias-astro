# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Sitio estático en Astro para **Las Acacias Coffee Farm**, una finca cafetera familiar en Salento, Quindío (Colombia). El sitio es bilingüe: español (idioma por defecto, en la raíz) e inglés (bajo `/en/`). Todo texto visible nuevo (textos, `alt`, `aria-label`, metadatos) se escribe en los dos idiomas, en los diccionarios de `src/i18n/` (ver abajo), nunca como literal en el marcado.

## Commands

```sh
npm run dev       # servidor de desarrollo en localhost:4321
npm run build     # build de producción a ./dist/
npm run preview   # sirve el build de producción localmente
npm run astro ...  # CLI de Astro, p. ej. `npm run astro check` para chequeo de tipos
```

No hay suite de tests ni linter configurado en este proyecto. La única verificación automática es `npm run astro check` (tipos y traducciones faltantes en `en`). Node `>=22.12.0`.

### Despliegue

GitHub Pages con dominio propio `www.acaciascoffeefarm.com`: cada push a `master` dispara `.github/workflows/deploy.yml` (`withastro/action` → `actions/deploy-pages`). El dominio vive en dos sitios que deben coincidir: `site` en `astro.config.mjs` y `public/CNAME`. El sitio se sirve en la raíz del dominio, por eso no hay `base` y las rutas absolutas (`/Imagenes/...`, `localizePath()`) funcionan tal cual. `package-lock.json` se versiona: el CI lo necesita.

## Architecture

- **Astro puro**, sin framework de UI (React/Vue/etc.) y sin integraciones en `astro.config.mjs`. Toda la interactividad del lado del cliente vive en bloques `<script>` dentro de los `.astro` (ver `src/components/CartModal.astro`), tipados con TypeScript inline.
- `src/layouts/BaseLayout.astro` es el layout único: define `<head>` (título, meta descripción, canonical, `hreflang`, Open Graph, fuentes con `<Font />` y el JSON-LD que llega por la prop `jsonLd`), envuelve el contenido con `Header` + `<main class="contenido">` + `Footer`, e importa `styles/global.css`. Con la prop `noindex` no emite canonical ni `hreflang` (la usa `404.astro`). También activa el revelado al hacer scroll (ver abajo).
- Las páginas viven en `src/pages/[...lang]/*.astro`: cada una exporta `getStaticPaths() { return langStaticPaths(); }` y se genera dos veces (`/cafe-origen/` y `/en/cafe-origen/`). Cada página envuelve su contenido en `<BaseLayout title="..." description="...">`. **Al crear una página nueva, añade su ruta a `RUTAS` en `src/pages/sitemap.xml.ts`.**
- Fuera de `[...lang]/`: `404.astro` (GitHub Pages sirve el mismo `404.html` para todo, así que muestra el aviso en los dos idiomas), `robots.txt.ts` y `sitemap.xml.ts` (endpoints estáticos que usan `site`; el sitemap lleva los `hreflang` de cada página).
- `trailingSlash: 'always'` en `astro.config.mjs`: GitHub Pages sirve cada página como carpeta y redirige con un 301 si falta la barra, así que todo enlace interno lleva la barra final (`localizePath('/cafe-origen/', lang)`).
- Las secciones dentro de cada página están marcadas con comentarios `<!-- ORGANISMO: Nombre -->`, siguiendo la nomenclatura de Atomic Design usada en el CSS (ver abajo). Al añadir una sección nueva a una página, sigue este mismo patrón de comentario.
- Los componentes reutilizables están en `src/components/` (`Header.astro`, `Footer.astro`, `Icon.astro` y los de la tienda: `ProductCard`, `FloatingCartButton`, `CartModal`, `WhatsAppModal`); no hay carpeta de "atoms" en componentes, solo en CSS.
- Datos en `src/data/`: `products.ts` (catálogo; `nombre` y `descripcion` son `{ es, en }`), `contacto.ts` (número de WhatsApp, `buildWhatsAppURL()` y `NEGOCIO`: nombre, dirección, teléfonos, horario y redes; es un módulo puro que se usa tanto en el frontmatter como en `scripts/cart.ts`), `schema.ts` (JSON-LD `LocalBusiness` + `TouristAttraction` + `WebSite` de la portada, construido a partir de `NEGOCIO`; el footer lee los mismos datos, así que se cambian en un solo sitio) y `fotos.ts` (`srcsetFoto()` y los `sizes` de las fotos de la finca).

### Idiomas (`src/i18n/`)

- `index.ts`: `Lang` (`'es' | 'en'`), `langStaticPaths()`, `getLangFromUrl(Astro.url)` (en layout, páginas y componentes; no se pasa `lang` por props), `getDocumentLang()` (en los `<script>` del cliente, lee `<html lang>`), `localizePath()` para enlaces internos y `alternatePath()` para el selector ES · EN de la cabecera.
- `ui.ts`: textos compartidos (cabecera, footer, metadatos, tienda, carrito, mensaje de WhatsApp). `en` tiene el tipo de `es`, así que `npm run astro check` falla si falta una traducción.
- Un archivo por página (`inicio.ts`, `cafe-origen.ts`) con `satisfies Record<Lang, ...>`. Los titulares guardan el énfasis como `<em>` y se pintan con `set:html`.
- Los mensajes prellenados de WhatsApp siguen el idioma de la página. Precios: `$38.000` en español, `$38,000 COP` en inglés (`formatPrice(precio, lang)`).
- `site` en `astro.config.mjs` (`https://www.acaciascoffeefarm.com`) activa los `hreflang` y vuelve absolutos `og:image` y `og:url` en `BaseLayout.astro`.
- Íconos: solo SVG de línea de Lucide (24×24, trazo 1.5, `currentColor`) definidos en `src/scripts/icons.ts`. En `.astro` se usa `<Icon name="..." />`; en HTML generado en el cliente, `iconSvg()`. No usar emojis en la interfaz.

### Tienda y carrito

- `src/scripts/cart.ts` guarda en `localStorage` (`las-acacias-cart`) solo `{ productId, quantity }` y `customerName`. Al leer, rehidrata cada ítem con `getProductById()` de `products.ts` y descarta los ids que ya no existen: cambiar el `id` de un producto lo saca de los carritos guardados.
- Los componentes de la tienda no se importan entre sí; se comunican con `CustomEvent` en `window`: `cart:updated` (`CART_UPDATED_EVENT`, lo emite cada escritura del carrito; repintan `FloatingCartButton` y `CartModal`), `cart:open` (botón flotante → `CartModal`) y `cart:checkout` (`CartModal` → `WhatsAppModal`, con `{ customerName }`). `WhatsAppModal` cierra el panel del carrito emitiendo `cart:close`, que él mismo escucha para cerrar `#cart-modal` por id.
- No hay backend ni pagos: el pedido es un mensaje prellenado (`generateWhatsAppMessage(nombre, lang)`) que se abre con `buildWhatsAppURL()`.

### Contenido: Coffee Tour sin reservas

El Coffee Tour no se reserva: los visitantes llegan dentro del horario (todos los días, 9:00 a. m. – 4:00 p. m.). En textos, CTA, `aria-label` y mensajes prellenados de WhatsApp nunca ofrecer "reservar" o "agendar" el tour; el WhatsApp de la finca es para información y preguntas ("Escríbenos", "Pregúntanos"). Para la tienda de café, WhatsApp sí se usa para enviar el pedido.

### Dirección visual: editorial de finca

- Tipografía: **Fraunces** para titulares (su itálica marca el énfasis: `<em>` dentro de `.titulo-seccion` o `.hero-titular`), **Figtree** para interfaz y texto, y **Great Vibes** solo en el logotipo y la firma del footer. Se declaran en `fonts` de `astro.config.mjs` (API de fuentes de Astro: se descargan de Google en el build y se sirven desde el sitio; Fraunces pide el eje `opsz`) y `tokens.css` las usa como `var(--font-*)`. No vuelvas a enlazar `fonts.googleapis.com`.
- Cada sección de contenido abre con `.rotulo` (`<span class="rotulo-num">01</span>Nombre`, sin mayúsculas) + `h2.titulo-seccion`, agrupados en `.encabezado-seccion` con una `p.entrada` opcional.
- `.section-inner` centra el contenido y aplica el margen lateral `--gutter` (40px, 16px en móvil). `.hero` y `.coffee-tour` usan una rejilla con líneas nombradas (`full`, `content`, `mitad`) para que la foto sangre hasta el borde del viewport; las fotos de la finca son verticales de 1080×1440, por eso nunca van a todo el ancho en escritorio.
- Revelado al hacer scroll: añade `data-revelar` (y `style="--i: n"` para escalonar hermanos). Es mejora progresiva: sin JS o con `prefers-reduced-motion` todo se ve en su estado final. No lo pongas en el hero.
- Controles táctiles de al menos 44px (`--alto-control`); `--alto-control-sm` (40px) solo en controles compactos.

### CSS: Atomic Design

Los estilos siguen una cascada estricta de Atomic Design importada en orden desde `src/styles/global.css`:

```
tokens.css → atoms.css → molecules.css → organisms.css
```

- **`tokens.css`**: única fuente de verdad para colores, tipografías, tamaños de fuente, espaciados, gaps, layout (`--max-width`, `--header-height`, etc.) y transiciones, todo como custom properties en `:root`. Nunca hardcodear un color, tamaño de fuente o espaciado en otro archivo: agrega o reutiliza un token.
- **`atoms.css`**: reset base, `:focus-visible` global + clases de un solo elemento reutilizadas entre componentes (`.img-circular`, `.rotulo`, `.titulo-seccion`, `.nav-link`, `.enlace-flecha`, `.ornamento`, `.badge-item`, `.btn` con `.btn-primario`/`.btn-secundario`, `.btn-icono`, `.social-link`).
- Espaciado en rejilla de 4px (`--space-xs` 4 … `--space-6xl` 96). Pesos 400–600 como máximo. El verde (`--color-verde`) es el único acento de acción; el azul cielo se reserva para la cabecera, los rótulos del footer y la firma. Movimiento con `--ease` y las duraciones `--dur-*`.
- **`molecules.css`** / **`organisms.css`**: composiciones progresivamente más grandes; los nombres de clase de las secciones de página (`.hero`, `.datos-finca`, `.proceso`, `.coffee-tour`, `.adelanto-tienda`, `.como-llegar`, `.mision`, `.vision`, `.footer-grid`, etc.) viven aquí.
- **`global.css`**: solo imports, media queries responsive (breakpoints en 1100px tablet y 700px móvil) y un par de utilidades transversales (revelado `[data-revelar]`, `.visually-hidden`, reset de `.footer-list`).
- Los media queries responsive se centralizan al final de `global.css`, no dispersos por archivo de componente.

### Imágenes y assets

- Imágenes estáticas de contenido (logo, fotos de la finca en `Carrucel1/`, productos) están en `public/Imagenes/` y se referencian con rutas absolutas (`/Imagenes/...`). Declara siempre `width`/`height` reales y usa `loading="lazy"` en todo lo que no sea el hero.
- Cada foto de `Carrucel1/` tiene al lado sus variantes `-540.webp` y `-810.webp` para el `srcset` (`srcsetFoto()` en `src/data/fotos.ts`): si se añade o reemplaza una foto, hay que generar también las dos variantes (con `sharp`, que ya viene con Astro). La cabecera y el footer usan `logo-144.webp`, no `logo.png` (840 KB); los iconos de `Llegada/` son WebP de 96×96.
- `og-las-acacias.jpg` (1200×630, menos de 300 KB para que WhatsApp la muestre) es la imagen al compartir cualquier página; su `alt` está en `ui.ts` (`meta.ogImagenAlt`).
- Las fotos de producto (`public/Imagenes/Productos/`) siguen `GUIA-IMAGENES-PRODUCTOS.md`: lienzo 3:4 de 900×1200, WebP con fondo transparente, menos de 150 KB y el mismo encuadre en todas.
- El favicon (`public/favicon.ico`, capas de 16/32/48) y `public/apple-touch-icon.png` (180×180) salen de `public/Imagenes/logo.png`, pero solo con la rama de café y la orquídea (sin el anillo ni el texto, que no se leen a 16 px), sobre crema `#fbf7f0`: un círculo en el `.ico` y un cuadrado completo en el de Apple, porque iOS redondea las esquinas por su cuenta. Se declaran en el `<head>` de `BaseLayout.astro`. Si cambia el logo, hay que regenerarlos.
- Algunos `<img>` (hoy, el logo de `Footer.astro`) usan `onerror` para hacer fallback a assets alojados en `figma.com/api/mcp/asset/...` (provenientes del diseño original en Figma) cuando el archivo local falta o no ha sido reemplazado aún — es un patrón intencional, no un error a "arreglar" quitando el fallback.

## Otros archivos del repo

- `TIENDA-README.md` e `IMPLEMENTACION-COMPLETA.md` son notas históricas con datos desfasados (precios, número de productos); la fuente de verdad es `src/data/products.ts`.
- `unslop-story/` y `unslop-story.mp4` son material de presentación del rediseño: no forman parte del sitio ni del build y no se tocan al cambiar estilos.
- `recursos/Imagenes/` guarda originales que no se usan en el sitio (PNG de producto y de iconos, fotos sin usar). Están fuera de `public/` para que no se publiquen.
