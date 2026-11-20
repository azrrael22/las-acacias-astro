// ============================================
// CAFÉ DE ORIGEN (tienda) — textos en español e inglés
// ============================================
// Los titulares admiten <em> para el énfasis en itálica (se pintan con set:html).
// Los nombres y descripciones de cada café viven en src/data/products.ts.

import type { Lang } from './index';

interface ContenidoCafeOrigen {
  title: string;
  description: string;
  hero: {
    rotulo: string;
    titular: string[]; // una línea por <span>
    descripcion: string;
    nota: string;
  };
  productos: { rotulo: string; titulo: string };
}

export const cafeOrigen = {
  es: {
    title: 'Café de origen · Las Acacias Coffee Farm · Salento',
    description: 'Compra nuestro café 100% artesanal cultivado en Salento, Quindío. Disponible en grano y molido, diferentes presentaciones. Envíos a toda Colombia.',
    hero: {
      rotulo: 'Tienda · Salento · Quindío',
      titular: ['Café de origen', '<em>Las Acacias</em>'],
      descripcion: 'Nuestro café es 100% artesanal, cultivado y procesado a mano en nuestra finca familiar en Salento, Quindío. Cada bolsa representa el trabajo dedicado de varias generaciones y el amor por el café colombiano de altura.',
      nota: 'Coordinamos la entrega por WhatsApp',
    },
    productos: {
      rotulo: 'Presentaciones',
      titulo: 'Nuestros <em>cafés</em>',
    },
  },

  en: {
    title: 'Single-origin coffee · Las Acacias Coffee Farm · Salento',
    description: 'Buy our 100% handcrafted coffee, grown in Salento, Quindío. Available whole bean or ground, in several sizes. Shipping across Colombia.',
    hero: {
      rotulo: 'Shop · Salento · Quindío',
      titular: ['Single-origin', 'coffee', '<em>from Las Acacias</em>'],
      descripcion: 'Our coffee is 100% handcrafted, grown and processed by hand on our family farm in Salento, Quindío. Every bag carries the dedicated work of several generations and a love for Colombian high-altitude coffee.',
      nota: 'We arrange delivery over WhatsApp',
    },
    productos: {
      rotulo: 'Sizes',
      titulo: 'Our <em>coffees</em>',
    },
  },
} satisfies Record<Lang, ContenidoCafeOrigen>;
