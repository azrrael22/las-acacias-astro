# 🛒 Tienda de Café Las Acacias - Documentación

## 📋 Descripción

La tienda de café permite a los visitantes de la finca:
- Ver 9 productos de café con diferentes presentaciones
- Agregar productos al carrito
- Enviar su pedido por WhatsApp al número +57 3175336091
- Persistencia del carrito usando localStorage

---

## 🎯 Cómo Editar la Tienda

### 1️⃣ **Cambiar Precios de los Productos**

📂 Archivo: `src/data/products.ts`

Los precios están en pesos colombianos (COP) sin puntos ni comas.

```typescript
{
  id: 'cafe-lavado-500g-molido',
  nombre: 'Café Lavado 500g',
  precio: 35000, // ← EDITAR AQUÍ (representa $35.000 COP)
  ...
}
```

**Ejemplo:** Para cambiar el precio de $35.000 a $40.000:
```typescript
precio: 40000,
```

---

### 2️⃣ **Agregar o Quitar Productos**

📂 Archivo: `src/data/products.ts`

**Para agregar un producto:**
1. Copia uno de los objetos existentes en el array `products`
2. Modifica las propiedades:
   - `id`: debe ser único (ejemplo: `'cafe-natural-500g-molido'`)
   - `nombre`: nombre visible del producto
   - `peso`: peso de la presentación
   - `tipo`: `'molido'` o `'grano'`
   - `proceso`: `'lavado'` o `'natural'`
   - `precio`: precio en COP (sin puntos)
   - `imagen`: ruta de la imagen (ejemplo: `'/Imagenes/Productos/500g.jpg'`)
   - `descripcion`: descripción breve del producto

**Para quitar un producto:**
1. Elimina el objeto completo del array `products` (desde `{` hasta `},`)

---

### 3️⃣ **Cambiar el Número de WhatsApp**

📂 Archivo: `src/scripts/cart.ts`

En la línea ~30, busca:
```typescript
const WHATSAPP_NUMBER = '573175336091'; // ← EDITAR NÚMERO AQUÍ
```

**Importante:** El número debe estar en formato internacional sin el `+`:
- ✅ Correcto: `'573175336091'`
- ❌ Incorrecto: `'+57 317 533 6091'`

---

### 4️⃣ **Cambiar Imágenes de los Productos**

📂 Carpeta: `public/Imagenes/Productos/`

Actualmente hay 4 imágenes placeholder:
- `125g.jpg` - Para productos de 125g
- `250g.jpg` - Para productos de 250g
- `500g.jpg` - Para productos de 500g
- `5libras.jpg` - Para productos de 5 libras

#### **📐 Tamaño Ideal de Imágenes:**

**Dimensiones recomendadas:**
- **Ancho:** 500px
- **Alto:** 500px
- **Formato:** Cuadrado (1:1)

**Especificaciones técnicas:**
```
Tamaño:  500px × 500px (o 400px × 400px mínimo)
Formato: JPG o WebP
Peso:    50KB - 150KB máximo
Fondo:   Beige (#f4ebdd) o blanco
Producto: Centrado, ocupando 70-80% del espacio
```

#### **¿Por qué estas dimensiones?**
- El contenedor de imagen mide 240px de altura
- Con padding interno, el área útil es ~200px
- Una imagen cuadrada de 500×500px se escala perfectamente
- `object-fit: contain` muestra la imagen completa sin recortes

**Para reemplazar una imagen:**
1. Prepara tu imagen en 500px × 500px (cuadrada)
2. Comprímela a menos de 150KB (usa [TinyPNG.com](https://tinypng.com))
3. Guárdala con el nombre correcto (ejemplo: `500g.jpg`)
4. Colócala en la carpeta `public/Imagenes/Productos/`
5. La imagen se actualizará automáticamente

**Para usar imágenes diferentes por producto:**
1. Agrega nuevas imágenes en `public/Imagenes/Productos/`
2. En `src/data/products.ts`, actualiza la propiedad `imagen` de cada producto:
```typescript
imagen: '/Imagenes/Productos/nombre-de-tu-imagen.jpg'
```

📖 **Para más detalles sobre imágenes, consulta:** `GUIA-IMAGENES-PRODUCTOS.md`

---

## 🎨 Personalización Avanzada

### Cambiar Colores de la Tienda

📂 Archivo: `src/styles/tokens.css`

Los colores principales están definidos como variables CSS:
```css
:root {
  --color-verde:  #385617;  /* Botones principales y acentos */
  --color-header: #8fbfcc;  /* Header y elementos secundarios */
  --color-fondo:  #f4ebdd;  /* Fondo de la página */
  --color-oscuro: #2a1a0d;  /* Textos oscuros */
}
```

---

### Cambiar Textos del Hero

📂 Archivo: `src/pages/cafe-origen.astro`

Busca la sección `tienda-hero` y edita:
```astro
<h1 class="tienda-titulo">
  <span class="tienda-bold">Café de Origen</span> <!-- ← Título principal -->
  <span class="tienda-italic">Las Acacias</span>  <!-- ← Subtítulo -->
</h1>
<p class="tienda-descripcion">
  Nuestro café es 100% artesanal... <!-- ← Descripción -->
</p>
```

---

## 🧪 Probar los Cambios

### Desarrollo Local
```bash
npm run dev
```
Abre: http://localhost:4321/cafe-origen

### Build de Producción
```bash
npm run build
```

---

## 📱 Flujo de Compra del Usuario

1. Usuario entra a `/cafe-origen`
2. Explora productos
3. Click en "Agregar" → producto se añade al carrito
4. Click en botón flotante del carrito (🛒)
5. Revisa productos, ajusta cantidades
6. Ingresa su nombre
7. Click en "Enviar pedido por WhatsApp"
8. Puede editar el mensaje
9. Click en "Abrir WhatsApp" o "Copiar mensaje"
10. Mensaje se envía al +57 3175336091

---

## 🔧 Solución de Problemas

### El carrito no guarda productos
- Verifica que localStorage esté habilitado en el navegador
- Prueba en modo incógnito (el carrito no persiste entre sesiones en incógnito)

### Las imágenes no se ven
- Verifica que las rutas en `products.ts` coincidan con los nombres de archivo
- Las rutas deben comenzar con `/Imagenes/Productos/`
- Nombres de archivo son case-sensitive (distinguen mayúsculas)

### El número de WhatsApp no funciona
- Verifica el formato: sin `+` ni espacios ni guiones
- Ejemplo correcto: `'573175336091'`

---

## 📚 Estructura de Archivos

```
src/
├── data/
│   └── products.ts          ← Productos y precios
├── scripts/
│   └── cart.ts              ← Lógica del carrito y WhatsApp
├── components/
│   ├── ProductCard.astro    ← Tarjeta de producto
│   ├── FloatingCartButton.astro ← Botón flotante
│   ├── CartModal.astro      ← Modal del carrito
│   └── WhatsAppModal.astro  ← Modal de WhatsApp
├── pages/
│   └── cafe-origen.astro    ← Página principal de la tienda
└── styles/
    ├── tokens.css           ← Variables de diseño
    ├── atoms.css            ← Estilos atómicos
    ├── molecules.css        ← Componentes pequeños
    └── organisms.css        ← Componentes grandes

public/
└── Imagenes/
    └── Productos/
        ├── 125g.jpg         ← Imágenes de productos
        ├── 250g.jpg
        ├── 500g.jpg
        └── 5libras.jpg
```

---

## ✅ Lista de Verificación Pre-Lanzamiento

- [ ] Verificar todos los precios están correctos
- [ ] Probar agregar productos al carrito
- [ ] Probar editar cantidades en el carrito
- [ ] Probar eliminar productos del carrito
- [ ] Verificar mensaje de WhatsApp se genera correctamente
- [ ] Probar abrir WhatsApp (desktop y mobile)
- [ ] Probar copiar mensaje al portapapeles
- [ ] Verificar que todas las imágenes cargan
- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Probar responsive en mobile, tablet y desktop
- [ ] Verificar el número de WhatsApp es correcto

---

## 💡 Consejos

- **Backup:** Antes de hacer cambios importantes, haz una copia de `products.ts`
- **Testing:** Prueba siempre los cambios en `npm run dev` antes de hacer build
- **Imágenes:** Optimiza las imágenes antes de subirlas (usa herramientas como TinyPNG)
- **Precios:** Mantén una consistencia en los precios entre presentaciones similares

---

## 🆘 Soporte

Si tienes dudas o problemas:
1. Revisa este README
2. Verifica los comentarios en el código (especialmente en `products.ts` y `cart.ts`)
3. Prueba revertir cambios recientes
4. Consulta la documentación de Astro: https://docs.astro.build

---

**Última actualización:** Octubre 2026
**Versión de la tienda:** 1.0.0
