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
// 3. CAMBIAR IMÁGENES:
//    Las imágenes están en /public/Imagenes/Productos/
//    Los nombres actuales son: 125g.jpg, 250g.jpg, 500g.jpg, 5libras.jpg
//    Puedes reemplazar estos archivos manteniendo los mismos nombres
//
// ============================================

export interface Product {
  id: string;
  nombre: string;
  peso: string;
  tipo: 'molido' | 'grano';
  proceso: 'lavado' | 'natural';
  precio: number; // Precio en pesos colombianos (COP)
  imagen: string; // Ruta relativa desde /public
  descripcion?: string;
}

// Array de productos disponibles en la tienda
export const products: Product[] = [
  {
    id: 'cafe-lavado-500g-molido',
    nombre: 'Café Lavado 500g',
    peso: '500g',
    tipo: 'molido',
    proceso: 'lavado',
    precio: 38000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/500.webp',
    descripcion: 'Café lavado molido, ideal para métodos de filtrado y cafetera italiana.'
  },
  {
    id: 'cafe-lavado-500g-grano',
    nombre: 'Café Lavado 500g',
    peso: '500g',
    tipo: 'grano',
    proceso: 'lavado',
    precio: 38000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/500.webp',
    descripcion: 'Café lavado en grano entero, perfecto para moler en casa y disfrutar fresco.'
  },
  {
    id: 'cafe-lavado-250g-molido',
    nombre: 'Café Lavado 250g',
    peso: '250g',
    tipo: 'molido',
    proceso: 'lavado',
    precio: 23000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/250.webp',
    descripcion: 'Presentación mediana ideal para probar nuestro café lavado molido.'
  },
  {
    id: 'cafe-lavado-250g-grano',
    nombre: 'Café Lavado 250g',
    peso: '250g',
    tipo: 'grano',
    proceso: 'lavado',
    precio: 23000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/250.webp',
    descripcion: 'Presentación mediana de café lavado en grano entero.'
  },
  {
    id: 'cafe-lavado-125g-molido',
    nombre: 'Café Lavado 125g',
    peso: '125g',
    tipo: 'molido',
    proceso: 'lavado',
    precio: 12000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/125.webp',
    descripcion: 'Presentación pequeña perfecta como recuerdo o para probar por primera vez.'
  },
  {
    id: 'cafe-lavado-125g-grano',
    nombre: 'Café Lavado 125g',
    peso: '125g',
    tipo: 'grano',
    proceso: 'lavado',
    precio: 12000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/125.webp',
    descripcion: 'Muestra de café lavado en grano, ideal para llevar de recuerdo.'
  },
  {
    id: 'cafe-natural-250g-grano',
    nombre: 'Café Natural 250g',
    peso: '250g',
    tipo: 'grano',
    proceso: 'natural',
    precio: 22000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/250.webp',
    descripcion: 'Café de proceso natural con notas afrutadas y dulces, en grano entero.'
  },
  {
    id: 'cafe-lavado-5lb-molido',
    nombre: 'Café Lavado 5 Libras',
    peso: '5 libras',
    tipo: 'molido',
    proceso: 'lavado',
    precio: 120000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/5libras.webp',
    descripcion: 'Presentación grande de café lavado molido, ideal para familias o negocios.'
  },
  {
    id: 'cafe-lavado-5lb-grano',
    nombre: 'Café Lavado 5 Libras',
    peso: '5 libras',
    tipo: 'grano',
    proceso: 'lavado',
    precio: 120000, // ← EDITAR PRECIO AQUÍ
    imagen: '/Imagenes/Productos/5libras.webp',
    descripcion: 'Presentación grande de café lavado en grano, para los verdaderos amantes del café.'
  },
];

// Función auxiliar para obtener un producto por ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Función auxiliar para formatear precio en pesos colombianos
export function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-CO')}`;
}
