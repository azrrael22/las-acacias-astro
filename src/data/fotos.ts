// ============================================
// FOTOS DE LA FINCA — variantes responsive
// ============================================
// Las fotos de public/Imagenes/Carrucel1/ son verticales de 1080 px de ancho y
// cada una tiene dos variantes más pequeñas al lado: `1-540.webp` y `1-810.webp`.
// Si se añade o reemplaza una foto, hay que generar también sus dos variantes.

/** '/Imagenes/Carrucel1/1.webp' → srcset con las variantes de 540, 810 y 1080 px */
export function srcsetFoto(src: string): string {
  const base = src.replace(/\.webp$/, '');
  return `${base}-540.webp 540w, ${base}-810.webp 810w, ${src} 1080w`;
}

/** Foto a media pantalla en escritorio y a todo el ancho en tablet y móvil (hero, coffee tour) */
export const SIZES_MITAD = '(max-width: 1100px) 100vw, 50vw';

/** Tres fotos en fila; una por fila en móvil (pasos del proceso) */
export const SIZES_TERCIO = '(max-width: 700px) 100vw, 33vw';
