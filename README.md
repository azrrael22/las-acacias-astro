# Las Acacias Coffee Farm — Sitio Web

Sitio estático construido con [Astro](https://astro.build) para **Las Acacias Coffee Farm**, una finca cafetera familiar en Salento, Quindío (Colombia).

El sitio es bilingüe: español en la raíz e inglés bajo `/en/`. Cada página se genera en los dos idiomas.

## 🗺️ Páginas

| Página         | Español        | Inglés            | Contenido                                                                            |
| :------------- | :------------- | :---------------- | :----------------------------------------------------------------------------------- |
| Inicio         | `/`            | `/en/`            | Hero, datos de la finca, proceso, Coffee Tour, adelanto de la tienda y cómo llegar   |
| Café de origen | `/cafe-origen` | `/en/cafe-origen` | Tienda: catálogo, carrito y pedido por WhatsApp                                      |

## 🧞 Comandos

Requiere **Node 22.12.0 o superior**. Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando               | Acción                                                    |
| :-------------------- | :-------------------------------------------------------- |
| `npm install`         | Instala las dependencias                                  |
| `npm run dev`         | Inicia el servidor de desarrollo en `localhost:4321`      |
| `npm run build`       | Genera el build de producción en `./dist/`                |
| `npm run preview`     | Sirve el build de producción localmente para revisarlo    |
| `npm run astro check` | Revisa los tipos y las traducciones que faltan en inglés  |
| `npm run astro ...`   | Ejecuta otros comandos del CLI de Astro                   |

No hay suite de tests ni linter configurado: `npm run astro check` es la única verificación automática.

## 📁 Estructura del proyecto

```text
las-acacias-astro/
├── public/
│   ├── favicon.ico, favicon.svg
│   └── Imagenes/               # logo, fotos de la finca (Carrucel1/), Llegada/ y Productos/
├── src/
│   ├── components/             # Header, Footer, Icon y los de la tienda: ProductCard,
│   │                           # FloatingCartButton, CartModal, WhatsAppModal
│   ├── data/                   # products.ts (catálogo y precios), contacto.ts (WhatsApp)
│   ├── i18n/                   # index.ts (utilidades de idioma), ui.ts (textos compartidos),
│   │                           # inicio.ts y cafe-origen.ts (textos de cada página)
│   ├── layouts/                # BaseLayout.astro (layout único del sitio)
│   ├── pages/
│   │   └── [...lang]/          # index.astro, cafe-origen.astro
│   ├── scripts/                # cart.ts (carrito), icons.ts (íconos SVG)
│   └── styles/                 # tokens.css, atoms.css, molecules.css, organisms.css, global.css
├── GUIA-IMAGENES-PRODUCTOS.md
├── astro.config.mjs
└── package.json
```

Cada página de `src/pages/[...lang]/` se genera dos veces con `langStaticPaths()`: `cafe-origen.astro` produce `/cafe-origen` y `/en/cafe-origen`. Los assets estáticos (imágenes, favicon) viven en `public/` y se enlazan con rutas absolutas (`/Imagenes/...`).

## 🎨 Arquitectura

- **Astro puro**, sin frameworks de UI (React/Vue/etc.). La interactividad del lado del cliente vive en bloques `<script>` dentro de los componentes `.astro`.
- **Layout único** (`BaseLayout.astro`) que define el `<head>`, envuelve el contenido con `Header` + `Footer` e importa los estilos globales.
- **Bilingüe**: todo texto visible (también `alt`, `aria-label` y metadatos) vive en los diccionarios de `src/i18n/`, nunca escrito directamente en el marcado. El inglés tiene el mismo tipo que el español, así que `npm run astro check` falla si falta una traducción.
- **Tienda sin backend**: el carrito se guarda en el navegador (`localStorage`) y el pedido se envía como mensaje prellenado de WhatsApp, en el idioma de la página. No hay pagos en línea. Los componentes de la tienda no se importan entre sí: se comunican con eventos `cart:*` en `window`.
- **CSS con Atomic Design**: los estilos siguen una cascada estricta `tokens.css → atoms.css → molecules.css → organisms.css`, donde `tokens.css` es la única fuente de verdad para colores, tipografías, espaciados y demás valores de diseño.

Para el detalle completo de convenciones y patrones del proyecto, consulta [CLAUDE.md](CLAUDE.md).

## ✏️ Tareas frecuentes

- **Cambiar precios o productos**: edita `src/data/products.ts`. El precio va en pesos colombianos sin puntos (`38000` = $38.000) y `nombre` y `descripcion` llevan las dos versiones, `{ es: '...', en: '...' }`. Cada `id` debe ser único; si cambias el `id` de un producto, desaparece de los carritos ya guardados.
- **Cambiar el número de WhatsApp**: `WHATSAPP_NUMBER` en `src/data/contacto.ts`, con el indicativo del país y sin `+` ni espacios.
- **Cambiar textos**: edita el archivo de `src/i18n/` que corresponda (`ui.ts` para cabecera, footer, tienda y carrito; `inicio.ts` y `cafe-origen.ts` para cada página), siempre en los dos idiomas, y corre `npm run astro check`.
- **Fotos de producto**: sigue [GUIA-IMAGENES-PRODUCTOS.md](GUIA-IMAGENES-PRODUCTOS.md) (900 × 1200 px, WebP con fondo transparente, menos de 150 KB).

> **El Coffee Tour no se reserva.** Los visitantes llegan dentro del horario (todos los días, 9:00 a. m. – 4:00 p. m.). En textos, botones y mensajes de WhatsApp no se ofrece "reservar" ni "agendar" el tour: el WhatsApp de la finca es para información y preguntas.

## 📚 Más documentación

- [CLAUDE.md](CLAUDE.md): convenciones de código, dirección visual y patrones del proyecto.
- [GUIA-IMAGENES-PRODUCTOS.md](GUIA-IMAGENES-PRODUCTOS.md): cómo preparar las fotos de las bolsas de café.
- [TIENDA-README.md](TIENDA-README.md): notas históricas de la tienda. Sus precios y nombres de imagen están desfasados; la fuente de verdad es `src/data/products.ts`.
- [Documentación oficial de Astro](https://docs.astro.build).
