# Las Acacias Coffee Farm — Sitio Web

Sitio estático construido con [Astro](https://astro.build) para **Las Acacias Coffee Farm**, una finca cafetera familiar en Salento, Quindío (Colombia).

## 📁 Estructura del proyecto

```text
las-acacias-astro/
├── public/
│   ├── favicon.ico, favicon.svg
│   └── Imagenes/           # logo, carrusel y fotos de la finca
├── src/
│   ├── components/         # Header.astro, Footer.astro, Carousel.astro
│   ├── layouts/             # BaseLayout.astro (layout único del sitio)
│   ├── pages/                # index.astro, nuestra-finca.astro
│   └── styles/                # tokens.css, atoms.css, molecules.css, organisms.css, global.css
├── astro.config.mjs
└── package.json
```

Astro expone cada archivo `.astro` de `src/pages/` como una ruta, según el nombre del archivo. Los componentes reutilizables viven en `src/components/`, y todos los assets estáticos (imágenes, favicon) en `public/`.

## 🎨 Arquitectura

- **Astro puro**, sin frameworks de UI (React/Vue/etc.). La interactividad del lado del cliente vive en bloques `<script>` dentro de los componentes `.astro`.
- **Layout único** (`BaseLayout.astro`) que define el `<head>`, envuelve el contenido con `Header` + `Footer` e importa los estilos globales.
- **CSS con Atomic Design**: los estilos siguen una cascada estricta `tokens.css → atoms.css → molecules.css → organisms.css`, donde `tokens.css` es la única fuente de verdad para colores, tipografías, espaciados y demás valores de diseño.

Para el detalle completo de convenciones y patrones del proyecto, consulta [CLAUDE.md](CLAUDE.md).

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                                |
| :------------------------ | :----------------------------------------------------- |
| `npm install`              | Instala las dependencias                               |
| `npm run dev`              | Inicia el servidor de desarrollo en `localhost:4321`     |
| `npm run build`            | Genera el build de producción en `./dist/`               |
| `npm run preview`          | Sirve el build de producción localmente para revisarlo   |
| `npm run astro ...`         | Ejecuta comandos del CLI de Astro, p. ej. `astro check`  |

No hay suite de tests ni linter configurado en este proyecto.

## 👀 ¿Quieres aprender más sobre Astro?

Consulta la [documentación oficial](https://docs.astro.build) o únete al [servidor de Discord](https://astro.build/chat).
