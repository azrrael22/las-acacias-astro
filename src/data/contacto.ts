// ============================================
// CONTACTO — Las Acacias Coffee Farm
// ============================================
// Módulo puro (sin acceso al DOM): se puede importar tanto en el
// frontmatter de las páginas como en los scripts del cliente.

export const WHATSAPP_NUMBER = '573175336091'; // ← EDITAR NÚMERO DE WHATSAPP AQUÍ

/**
 * Construir URL de WhatsApp para un mensaje dado
 */
export function buildWhatsAppURL(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
