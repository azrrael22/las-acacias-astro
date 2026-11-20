// ============================================
// PRODUCTOS DE CAFÉ - LAS ACACIAS COFFEE FARM
// ============================================
//
// INSTRUCCIONES PARA EDITAR:
//
// 1. CAMBIAR PRECIOS:
//    Modifica el valor de la propiedad 'precio' (número sin puntos ni comas)
//    Ejemplo: precio: 25000 (representa $25.000 COP)
//
// 2. AGREGAR/QUITAR PRODUCTOS:
//    - Para agregar: copia un objeto existente y modifica sus propiedades
//    - Para quitar: elimina el objeto completo del array
//    - IMPORTANTE: cada 'id' debe ser único
//
// 3. TEXTOS EN ESPAÑOL E INGLÉS:
//    'nombre' y 'descripcion' llevan las dos versiones: { es: '...', en: '...' }
//    La versión en inglés se muestra en /en/cafe-origen
//
// 4. CAMBIAR IMÁGENES:
//    Las imágenes están en /public/Imagenes/Productos/
//    Los nombres actuales son: 125g.jpg, 250g.jpg, 500g.jpg, 5libras.jpg
//    Puedes reemplazar estos archivos manteniendo los mismos nombres
//
// ============================================

import type { Lang } from '../i18n';

/** Texto en los dos idiomas del sitio */
export type Traducido = Record<Lang, string>;

export interface Product {
  id: string;
  nombre: Traducido;
  peso: string;
  tipo: 'molido' | 'grano';
  proceso: 'lavado' | 'natural';
  precio: number; // Precio en pesos colombianos (COP)
  imagen: string; // Ruta relativa desde /public
  descripcion?: Traducido;
}

// Array de productos disponibles en la tienda
export const products: Product[] = [
  {
    id: 'cafe-lavado-500g-molido',
    nombre: { es: 'Café Lavado 500g', en: 'Washed Coffee 500 g' },
    peso: '500g',
    tipo: 'molido',
    proceso: 'lavado',
    precio: 38000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/500.webp',
    descripcion: {
      es: 'Café lavado molido, ideal para métodos de filtrado y cafetera italiana.',
      en: 'Ground washed coffee, ideal for pour-over, drip and moka pot.',
    },
  },
  {
    id: 'cafe-lavado-500g-grano',
    nombre: { es: 'Café Lavado 500g', en: 'Washed Coffee 500 g' },
    peso: '500g',
    tipo: 'grano',
    proceso: 'lavado',
    precio: 38000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/500.webp',
    descripcion: {
      es: 'Café lavado en grano entero, perfecto para moler en casa y disfrutar fresco.',
      en: 'Whole bean washed coffee, perfect for grinding at home and enjoying fresh.',
    },
  },
  {
    id: 'cafe-lavado-250g-molido',
    nombre: { es: 'Café Lavado 250g', en: 'Washed Coffee 250 g' },
    peso: '250g',
    tipo: 'molido',
    proceso: 'lavado',
    precio: 23000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/250.webp',
    descripcion: {
      es: 'Presentación mediana ideal para probar nuestro café lavado molido.',
      en: 'A mid-size bag, ideal for trying our ground washed coffee.',
    },
  },
  {
    id: 'cafe-lavado-250g-grano',
    nombre: { es: 'Café Lavado 250g', en: 'Washed Coffee 250 g' },
    peso: '250g',
    tipo: 'grano',
    proceso: 'lavado',
    precio: 23000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/250.webp',
    descripcion: {
      es: 'Presentación mediana de café lavado en grano entero.',
      en: 'A mid-size bag of whole bean washed coffee.',
    },
  },
  {
    id: 'cafe-lavado-125g-molido',
    nombre: { es: 'Café Lavado 125g', en: 'Washed Coffee 125 g' },
    peso: '125g',
    tipo: 'molido',
    proceso: 'lavado',
    precio: 12000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/125.webp',
    descripcion: {
      es: 'Presentación pequeña perfecta como recuerdo o para probar por primera vez.',
      en: 'A small bag, perfect as a souvenir or for a first taste.',
    },
  },
  {
    id: 'cafe-lavado-125g-grano',
    nombre: { es: 'Café Lavado 125g', en: 'Washed Coffee 125 g' },
    peso: '125g',
    tipo: 'grano',
    proceso: 'lavado',
    precio: 12000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/125.webp',
    descripcion: {
      es: 'Muestra de café lavado en grano, ideal para llevar de recuerdo.',
      en: 'A sample of whole bean washed coffee, ideal to take home as a souvenir.',
    },
  },
  {
    id: 'cafe-natural-250g-grano',
    nombre: { es: 'Café Natural 250g', en: 'Natural Coffee 250 g' },
    peso: '250g',
    tipo: 'grano',
    proceso: 'natural',
    precio: 22000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/250.webp',
    descripcion: {
      es: 'Café de proceso natural con notas afrutadas y dulces, en grano entero.',
      en: 'Natural process coffee with fruity, sweet notes, whole bean.',
    },
  },
  {
    id: 'cafe-lavado-5lb-molido',
    nombre: { es: 'Café Lavado 5 Libras', en: 'Washed Coffee 5 lb' },
    peso: '5 libras',
    tipo: 'molido',
    proceso: 'lavado',
    precio: 120000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/5libras.webp',
    descripcion: {
      es: 'Presentación grande de café lavado molido, ideal para familias o negocios.',
      en: 'A large bag of ground washed coffee, ideal for families or businesses.',
    },
  },
  {
    id: 'cafe-lavado-5lb-grano',
    nombre: { es: 'Café Lavado 5 Libras', en: 'Washed Coffee 5 lb' },
    peso: '5 libras',
    tipo: 'grano',
    proceso: 'lavado',
    precio: 120000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/5libras.webp',
    descripcion: {
      es: 'Presentación grande de café lavado en grano, para los verdaderos amantes del café.',
      en: 'A large bag of whole bean washed coffee, for true coffee lovers.',
    },
  },
];

// Función auxiliar para obtener un producto por ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Función auxiliar para formatear precio en pesos colombianos
// En inglés se aclara la moneda para que no se lea como dólares: $38,000 COP
export function formatPrice(price: number, lang: Lang = 'es'): string {
  return lang === 'en'
    ? `$${price.toLocaleString('en-US')} COP`
    : `$${price.toLocaleString('es-CO')}`;
}
