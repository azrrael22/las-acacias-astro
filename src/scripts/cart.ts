// ============================================
// CARRITO DE COMPRAS - LAS ACACIAS COFFEE FARM
// ============================================
// Sistema de carrito con persistencia en localStorage
// y eventos personalizados para actualizar la UI

import type { Product } from '../data/products';
import { products, getProductById } from '../data/products';

// ============================================
// TYPES
// ============================================

export interface CartItem {
  productId: string;
  quantity: number;
  product?: Product; // Información del producto (se hidrata al leer)
}

export interface Cart {
  items: CartItem[];
  customerName?: string;
}

// ============================================
// CONSTANTES
// ============================================

const CART_STORAGE_KEY = 'las-acacias-cart';
const WHATSAPP_NUMBER = '573175336091'; // ← EDITAR NÚMERO DE WHATSAPP AQUÍ

// Evento personalizado para notificar cambios en el carrito
export const CART_UPDATED_EVENT = 'cart:updated';

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Formatear precio en pesos colombianos
 */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-CO')}`;
}

/**
 * Obtener el carrito actual desde localStorage
 */
export function getCart(): Cart {
  if (typeof window === 'undefined') {
    return { items: [] };
  }

  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (!storedCart) {
      return { items: [] };
    }

    const cart: Cart = JSON.parse(storedCart);
    
    // Hidratar los items con la información del producto
    cart.items = cart.items.map(item => ({
      ...item,
      product: getProductById(item.productId)
    })).filter(item => item.product !== undefined); // Filtrar productos que ya no existen

    return cart;
  } catch (error) {
    console.error('Error al leer el carrito:', error);
    return { items: [] };
  }
}

/**
 * Guardar el carrito en localStorage
 */
function saveCart(cart: Cart): void {
  if (typeof window === 'undefined') return;

  try {
    // Guardar solo los datos necesarios (sin la referencia completa al producto)
    const cartToSave: Cart = {
      items: cart.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity
      })),
      customerName: cart.customerName
    };

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartToSave));
    
    // Disparar evento personalizado
    window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT, { 
      detail: getCart() 
    }));
  } catch (error) {
    console.error('Error al guardar el carrito:', error);
  }
}

/**
 * Agregar un producto al carrito o actualizar su cantidad
 */
export function addToCart(productId: string, quantity: number = 1): void {
  const cart = getCart();
  const existingItem = cart.items.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  saveCart(cart);
}

/**
 * Actualizar la cantidad de un producto en el carrito
 */
export function updateCartItemQuantity(productId: string, quantity: number): void {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const cart = getCart();
  const item = cart.items.find(item => item.productId === productId);

  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

/**
 * Eliminar un producto del carrito
 */
export function removeFromCart(productId: string): void {
  const cart = getCart();
  cart.items = cart.items.filter(item => item.productId !== productId);
  saveCart(cart);
}

/**
 * Vaciar completamente el carrito
 */
export function clearCart(): void {
  saveCart({ items: [] });
}

/**
 * Obtener el número total de items en el carrito
 */
export function getCartCount(): number {
  const cart = getCart();
  return cart.items.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Calcular el total del carrito
 */
export function getCartTotal(): number {
  const cart = getCart();
  return cart.items.reduce((total, item) => {
    const product = getProductById(item.productId);
    return total + (product ? product.precio * item.quantity : 0);
  }, 0);
}

/**
 * Guardar el nombre del cliente
 */
export function setCustomerName(name: string): void {
  const cart = getCart();
  cart.customerName = name.trim();
  saveCart(cart);
}

/**
 * Obtener el nombre del cliente
 */
export function getCustomerName(): string {
  const cart = getCart();
  return cart.customerName || '';
}

// ============================================
// FUNCIONES DE WHATSAPP
// ============================================

/**
 * Generar mensaje formateado para WhatsApp
 */
export function generateWhatsAppMessage(customerName?: string): string {
  const cart = getCart();
  const name = customerName || cart.customerName || 'Cliente';
  
  if (cart.items.length === 0) {
    return '';
  }

  let message = `¡Hola! Soy *${name}* y quiero hacer este pedido:\n\n`;

  // Agregar cada producto
  cart.items.forEach(item => {
    const product = getProductById(item.productId);
    if (product) {
      const subtotal = product.precio * item.quantity;
      message += `• ${product.nombre} (${product.tipo}) x${item.quantity} - ${formatPrice(subtotal)}\n`;
    }
  });

  // Agregar total
  const total = getCartTotal();
  message += `\n*Total: ${formatPrice(total)}*\n\n`;
  message += `¡Gracias!`;

  return message;
}

/**
 * Obtener URL de WhatsApp con mensaje pre-formateado
 */
export function getWhatsAppURL(customerName?: string): string {
  const message = generateWhatsAppMessage(customerName);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Abrir WhatsApp en nueva ventana
 */
export function openWhatsApp(customerName?: string): void {
  const url = getWhatsAppURL(customerName);
  window.open(url, '_blank');
}

/**
 * Copiar mensaje al portapapeles
 */
export async function copyMessageToClipboard(customerName?: string): Promise<boolean> {
  try {
    const message = generateWhatsAppMessage(customerName);
    await navigator.clipboard.writeText(message);
    return true;
  } catch (error) {
    console.error('Error al copiar al portapapeles:', error);
    return false;
  }
}

// ============================================
// VALIDACIÓN
// ============================================

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validar que el carrito y los datos estén completos para enviar
 */
export function validateCheckout(customerName: string): ValidationResult {
  const errors: string[] = [];
  const cart = getCart();

  // Validar nombre del cliente
  if (!customerName || customerName.trim().length === 0) {
    errors.push('Por favor ingresa tu nombre');
  }

  // Validar que haya productos en el carrito
  if (cart.items.length === 0) {
    errors.push('Tu carrito está vacío. Agrega productos antes de continuar');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
