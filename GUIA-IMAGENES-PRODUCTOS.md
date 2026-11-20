# Guía de imágenes de productos

Cómo preparar las fotos de las bolsas de café para la tienda (`/cafe-origen`), para que las cuatro se vean iguales en la grilla.

## Especificación

| | |
|---|---|
| Lienzo | Vertical 3:4, **900 × 1200 px** |
| Fondo | **Transparente** (WebP o PNG con transparencia) |
| Encuadre | Bolsa centrada y de frente. Ocupa el **80 % del alto**, con la base al **8 % del borde inferior** |
| Sombra | Ninguna, ni reflejo ni suelo. La sombra la pone el sitio |
| Peso | Menos de **150 KB** por archivo (WebP con calidad 80–85) |
| Nitidez | Etiqueta legible, foco en el logo, sin filtros ni viñeteado |

Las cuatro fotos usan el mismo encuadre aunque las bolsas sean de tamaños distintos: el peso ya aparece en el nombre del producto. Lo que hace que la grilla se vea ordenada es que todas compartan la misma línea de base y la misma altura.

```
900 px
┌───────────────────────┐
│                       │  12 % libre arriba
│     ┌───────────┐     │
│     │           │     │
│     │   BOLSA   │     │  80 % del alto
│     │ (centrada)│     │
│     │           │     │
│     └───────────┘     │  ← línea de base, igual en las cuatro
│                       │  8 % libre abajo
└───────────────────────┘  1200 px
     (fondo transparente)
```

## Archivos

Van en `public/Imagenes/Productos/` y conservan estos nombres, así no hay que tocar `src/data/products.ts`:

| Archivo | Producto |
|---|---|
| `125.webp` | Bolsa de 125 g |
| `250.webp` | Bolsa de 250 g |
| `500.webp` | Bolsa de 500 g |
| `5libras.webp` | Empaque de 5 libras |

Molido y en grano usan hoy la misma foto. Si quieres diferenciarlos, por ejemplo con un puñado de grano o de molido delante de la bolsa, crea archivos aparte (`250-grano.webp`) y cambia la ruta `imagen` del producto en `products.ts`.

## Cómo prepararlas

1. **Fotografía** cada bolsa real de frente y a la altura de la cámara, con luz suave lateral: una ventana y una cartulina blanca de rebote al otro lado bastan. Usa la misma luz para las cuatro.
2. **Quita el fondo** con cualquiera de estas herramientas gratuitas:
   - Canva: Editar foto → Quitar fondo
   - Photopea: Seleccionar → Sujeto, luego Capa → Nueva desde selección
   - remove.bg
3. **Colócala en la plantilla.** Crea un lienzo transparente de 900 × 1200, ajusta la bolsa al 80 % del alto y apoya su base al 8 % del borde inferior. Guarda la plantilla y reemplaza solo la imagen para las otras tres.
4. **Exporta** como WebP con transparencia, calidad 80–85. Si la herramienta no exporta WebP, exporta PNG con transparencia y conviértelo en [Squoosh](https://squoosh.app).

## Checklist

- [ ] 900 × 1200 px, vertical
- [ ] Fondo transparente, sin sombra ni suelo
- [ ] Bolsa al 80 % del alto, base al 8 % del borde inferior
- [ ] Mismo encuadre y misma luz que las otras tres
- [ ] Etiqueta nítida y legible
- [ ] Menos de 150 KB
- [ ] Mismo nombre de archivo que la foto que reemplaza

## Cómo las muestra el sitio

La tarjeta de producto (`src/components/ProductCard.astro`, estilos en `src/styles/molecules.css`) reserva un área de 280 px de alto con el fondo de estudio `--color-foto` y centra la foto en ella:

```css
.product-image {
  display: flex;
  justify-content: center;
  height: 280px;
  background-color: var(--color-foto);
}
.product-image img {
  height: 100%;
  width: auto;
  aspect-ratio: 3 / 4;
  object-fit: contain;
  filter: drop-shadow(var(--sombra-producto));
}
```

El lienzo 3:4 se ve a unos 210 × 280 px. Los 900 × 1200 px de la especificación cubren con margen las pantallas de alta densidad (3x). La sombra (`--sombra-producto` en `tokens.css`) sigue la silueta de la bolsa gracias a la transparencia.

## Al reemplazar una foto

Basta con sobrescribir el `.webp` con el mismo nombre; no hay que tocar código. Si la foto llega en PNG, conviértela a WebP con transparencia y respeta el encuadre: la bolsa al 80 % del alto y la base al 8 %.
