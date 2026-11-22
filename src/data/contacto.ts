// ============================================
// CONTACTO — Las Acacias Coffee Farm
// ============================================
// Módulo puro (sin acceso al DOM): se puede importar tanto en el
// frontmatter de las páginas como en los scripts del cliente.
// Los datos del negocio alimentan el footer y el JSON-LD (src/data/schema.ts):
// si cambian, cambian en los dos sitios a la vez.

export const WHATSAPP_NUMBER = '573175336091'; // ← EDITAR NÚMERO DE WHATSAPP AQUÍ

/**
 * Construir URL de WhatsApp para un mensaje dado
 */
export function buildWhatsAppURL(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Datos del negocio. Usa siempre el mismo nombre que en Google, Instagram y Facebook */
export const NEGOCIO = {
  nombre: 'Las Acacias Coffee Farm',
  nombreAlterno: 'Finca Las Acacias',
  direccion: {
    finca: 'Finca Las Acacias',
    vereda: 'Vereda Palestina',
    municipio: 'Salento',
    departamento: 'Quindío',
    pais: 'Colombia',
    codigoPais: 'CO',
  },
  /** Teléfonos con WhatsApp, sin '+' ni espacios; el primero es el de pedidos y preguntas */
  telefonos: [WHATSAPP_NUMBER, '573104638585'],
  /** Coffee Tour: todos los días, sin reserva */
  horario: { abre: '09:00', cierra: '16:00' },
  instagram: { url: 'https://instagram.com/las_acacias_coffee_farm', usuario: '@las_acacias_coffee_farm' },
  facebook: { url: 'https://facebook.com/LasAcaciasCoffee', nombre: 'Las Acacias Coffee' },
  // TODO: cuando se confirme la ficha de Google Business Profile, añadir aquí sus
  // coordenadas y su enlace de Google Maps, y usarlos en src/data/schema.ts
  // (`geo`, `hasMap` y `sameAs`).
} as const;

/** '573175336091' → '+57 317 533 6091' (móviles de Colombia) */
export function formatTelefono(numero: string): string {
  return `+${numero.slice(0, 2)} ${numero.slice(2, 5)} ${numero.slice(5, 8)} ${numero.slice(8)}`;
}

/** Chat de WhatsApp sin mensaje prellenado */
export function whatsAppChatURL(numero: string): string {
  return `https://wa.me/${numero}`;
}
