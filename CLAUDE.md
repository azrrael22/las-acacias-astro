# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Sitio estático en Astro para **Las Acacias Coffee Farm**, una finca cafetera familiar en Salento, Quindío (Colombia). Todo el contenido visible (textos, `alt`, metadatos) está en español; usa este idioma al escribir o editar contenido de cara al usuario.

## Commands

```sh
npm run dev       # servidor de desarrollo en localhost:4321
npm run build     # build de producción a ./dist/
npm run preview   # sirve el build de producción localmente
npm run astro ...  # CLI de Astro, p. ej. `npm run astro check` para chequeo de tipos
```

No hay suite de tests ni linter configurado en este proyecto.

## Architecture

- **Astro puro**, sin framework de UI (React/Vue/etc.) y sin integraciones en `astro.config.mjs`. Toda la interactividad del lado del cliente vive en bloques `<script>` dentro de los `.astro` (ver `src/components/Carousel.astro`), tipados con TypeScript inline.
- `src/layouts/BaseLayout.astro` es el layout único: define `<head>` (título, meta descripción/OG, fuentes de Google Fonts), envuelve el contenido con `Header` + `<main class="contenido">` + `Footer`, e importa `styles/global.css`.
- `src/pages/*.astro` son las rutas (enrutamiento basado en archivos de Astro). Cada página envuelve su contenido en `<BaseLayout title="..." description="...">`.
- Las secciones dentro de cada página están marcadas con comentarios `<!-- ORGANISMO: Nombre -->`, siguiendo la nomenclatura de Atomic Design usada en el CSS (ver abajo). Al añadir una sección nueva a una página, sigue este mismo patrón de comentario.
- Los componentes reutilizables están en `src/components/` (`Header.astro`, `Footer.astro`, `Carousel.astro`, `Icon.astro` y los de la tienda: `ProductCard`, `FloatingCartButton`, `CartModal`, `WhatsAppModal`); no hay carpeta de "atoms" en componentes, solo en CSS.
- Íconos: solo SVG de línea de Lucide (24×24, trazo 1.5, `currentColor`) definidos en `src/scripts/icons.ts`. En `.astro` se usa `<Icon name="..." />`; en HTML generado en el cliente, `iconSvg()`. No usar emojis en la interfaz.

### CSS: Atomic Design

Los estilos siguen una cascada estricta de Atomic Design importada en orden desde `src/styles/global.css`:

```
tokens.css → atoms.css → molecules.css → organisms.css
```

- **`tokens.css`**: única fuente de verdad para colores, tipografías, tamaños de fuente, espaciados, gaps, layout (`--max-width`, `--header-height`, etc.) y transiciones, todo como custom properties en `:root`. Nunca hardcodear un color, tamaño de fuente o espaciado en otro archivo: agrega o reutiliza un token.
- **`atoms.css`**: reset base, `:focus-visible` global + clases de un solo elemento reutilizadas entre componentes (`.img-circular`, `.nav-link`, `.badge-item`, `.btn` con `.btn-primario`/`.btn-secundario`, `.btn-icono`, `.social-link`, `.carousel-dot`, `.cafe-card`).
- Espaciado en rejilla de 4px (`--space-xs` 4 … `--space-6xl` 96). Pesos 400–600 como máximo. El verde (`--color-verde`) es el único acento de acción; el azul cielo se reserva para la cabecera, los rótulos del footer y la firma. Movimiento con `--ease` y las duraciones `--dur-*`.
- **`molecules.css`** / **`organisms.css`**: composiciones progresivamente más grandes; los nombres de clase de las secciones de página (`.hero`, `.como-llegar`, `.mision`, `.vision`, `.footer-grid`, etc.) viven aquí.
- **`global.css`**: solo imports, media queries responsive (breakpoints en 1100px tablet y 700px móvil) y un par de utilidades transversales (`.visually-hidden`, reset de `.footer-list`).
- Los media queries responsive se centralizan al final de `global.css`, no dispersos por archivo de componente.

### Imágenes y assets

- Imágenes estáticas de contenido (logo, carrusel) están en `public/Imagenes/` y se referencian con rutas absolutas (`/Imagenes/...`).
- Varios `<img>` usan `onerror` para hacer fallback a assets alojados en `figma.com/api/mcp/asset/...` (provenientes del diseño original en Figma) cuando el archivo local falta o no ha sido reemplazado aún — es un patrón intencional, no un error a "arreglar" quitando el fallback.
- El carrusel (`Carousel.astro`) implementa loop infinito duplicando las slides como clones `aria-hidden`, con soporte de arrastre por mouse y touch, y autoplay pausable en hover. Las constantes `cardW`/`gap` del script deben mantenerse sincronizadas con `--card-width`/`--gap-carousel` en `tokens.css` si se cambian los tamaños de tarjeta.
