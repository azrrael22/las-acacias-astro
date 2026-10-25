# 📸 Guía de Imágenes para Productos - Las Acacias Coffee Farm

## 🎯 Dimensiones Recomendadas

### **Tamaño Ideal:**
```
Ancho:   400px - 600px
Alto:    400px - 600px
Formato: Cuadrado (1:1)
```

### **Por qué estas dimensiones:**
- El contenedor de imagen tiene **240px de altura**
- Con el padding interno (20px por lado), el área útil es ~**200px**
- El ancho de la tarjeta es **280px** (responsive)
- Una imagen cuadrada de **500px × 500px** se adapta perfectamente

---

## 📐 Especificaciones Técnicas

### **Dimensiones Óptimas:**

#### ✅ **Opción Recomendada (Alta Calidad):**
```
Tamaño:  600px × 600px
Formato: JPG o WebP
Peso:    50KB - 150KB
DPI:     72 (web)
```

#### ✅ **Opción Estándar (Buena Calidad):**
```
Tamaño:  400px × 400px
Formato: JPG o PNG
Peso:    30KB - 80KB
DPI:     72 (web)
```

#### ⚠️ **Mínimo Aceptable:**
```
Tamaño:  300px × 300px
Formato: JPG
Peso:    20KB - 50KB
DPI:     72 (web)
```

---

## 🎨 Recomendaciones de Diseño

### **Composición de la Imagen:**

1. **Centrada:** El producto debe estar centrado en la imagen
2. **Fondo:** Usar fondo blanco, beige claro (#f4ebdd) o transparente
3. **Márgenes:** Dejar 10-15% de espacio alrededor del producto
4. **Enfoque:** El empaque o producto debe ser el elemento principal

### **Ejemplo Visual:**
```
┌─────────────────────────┐
│    (margen 10%)         │
│  ┌─────────────────┐    │
│  │                 │    │
│  │   TU PRODUCTO   │    │
│  │   (centrado)    │    │
│  │                 │    │
│  └─────────────────┘    │
│    (margen 10%)         │
└─────────────────────────┘
```

---

## 📦 Casos de Uso por Presentación

### **Para productos de 125g:**
- **Tamaño imagen:** 400px × 400px
- **Orientación:** Vertical u horizontal centrada
- **Ejemplo:** Bolsa pequeña de café

### **Para productos de 250g:**
- **Tamaño imagen:** 500px × 500px
- **Orientación:** Vertical preferiblemente
- **Ejemplo:** Bolsa mediana de café

### **Para productos de 500g:**
- **Tamaño imagen:** 600px × 600px
- **Orientación:** Vertical
- **Ejemplo:** Bolsa grande de café

### **Para productos de 5 libras:**
- **Tamaño imagen:** 600px × 600px
- **Orientación:** Vertical o cuadrada
- **Ejemplo:** Empaque grande o saco de café

---

## 🔧 Herramientas Recomendadas

### **Para Redimensionar:**
- **Online:** [TinyPNG.com](https://tinypng.com) (comprime y optimiza)
- **Online:** [Squoosh.app](https://squoosh.app) (Google)
- **Desktop:** GIMP (gratis), Photoshop, Canva

### **Para Crear Mockups:**
- **Canva** (gratis, plantillas de empaques)
- **Photopea** (online, similar a Photoshop)
- **Figma** (gratis para uso personal)

---

## 💡 Consejos de Optimización

### **1. Formato de Archivo:**
```
✅ MEJOR:    .webp  (mejor compresión, soportado en navegadores modernos)
✅ BUENO:    .jpg   (universal, buen balance calidad/peso)
⚠️  OK:      .png   (si necesitas transparencia, pero pesa más)
❌ EVITAR:   .gif   (baja calidad)
```

### **2. Compresión:**
- Usa compresión de **70-85%** para JPG
- Nunca subas imágenes sin comprimir (pesarían >1MB)
- Objetivo: **cada imagen debe pesar menos de 150KB**

### **3. Nombres de Archivo:**
```
✅ BIEN:     cafe-125g.jpg, cafe-lavado-250g.webp
❌ MAL:      IMG_1234.JPG, foto final 2.png
```

---

## 📋 Checklist de Calidad

Antes de subir una imagen, verifica:

- [ ] Tamaño: 400px × 400px o mayor (hasta 600px × 600px)
- [ ] Formato cuadrado (1:1)
- [ ] Peso del archivo: < 150KB
- [ ] Fondo limpio (blanco, beige o transparente)
- [ ] Producto centrado
- [ ] Buena iluminación
- [ ] Enfoque nítido (no borrosa)
- [ ] Formato: .jpg, .webp o .png
- [ ] Nombre descriptivo sin espacios ni caracteres especiales

---

## 🖼️ Ejemplo de Imagen Ideal

### **Configuración:**
```yaml
Dimensiones: 500px × 500px
Formato: JPG
Calidad: 80%
Peso: 75KB
Fondo: Beige (#f4ebdd) o blanco
Producto: Centrado, ocupa 70-80% del espacio
Iluminación: Frontal suave
Sombras: Mínimas o ninguna
```

### **Ubicación en el proyecto:**
```
/public/Imagenes/Productos/
├── 125g.jpg     ← 400px × 400px
├── 250g.jpg     ← 500px × 500px
├── 500g.jpg     ← 600px × 600px
└── 5libras.jpg  ← 600px × 600px
```

---

## 🎬 Cómo Preparar tus Imágenes

### **Opción 1: Usando Canva (Gratis)**
1. Crear diseño → Dimensiones personalizadas: 600px × 600px
2. Agregar fondo color beige (#f4ebdd)
3. Subir foto de tu producto
4. Centrar y ajustar tamaño
5. Descargar como JPG (calidad media-alta)

### **Opción 2: Usando Photoshop/GIMP**
1. Abrir imagen original
2. Image → Canvas Size → 600px × 600px (centrar)
3. Layer → Flatten Image
4. File → Export As → JPG (Quality: 80%)
5. Guardar

### **Opción 3: Usando Herramienta Online**
1. Ir a [Squoosh.app](https://squoosh.app)
2. Subir tu imagen
3. Resize: 600 × 600
4. Compress: MozJPEG (Quality: 80)
5. Descargar

---

## ⚙️ Configuración Actual del Sitio

El código actual usa estas reglas para las imágenes:

```css
.product-image {
  height: 240px;           /* Altura del contenedor */
  padding: 20px;           /* Espacio alrededor */
  background: #f4ebdd;     /* Fondo beige */
}

.product-image img {
  object-fit: contain;     /* Muestra imagen completa sin cortar */
  object-position: center; /* Centrada */
}
```

Esto significa que:
- ✅ La imagen se mostrará **completa** (sin recortes)
- ✅ Estará **centrada** vertical y horizontalmente
- ✅ Mantendrá sus **proporciones originales**
- ✅ Se **adaptará** al tamaño disponible (200px útiles)

---

## 🆘 Problemas Comunes

### **"Mi imagen se ve pixelada"**
→ Sube una imagen más grande (mínimo 400px)

### **"Mi imagen tiene mucho espacio en blanco"**
→ Recorta la imagen para que el producto ocupe más espacio

### **"El archivo pesa mucho"**
→ Usa TinyPNG.com o reduce la calidad al 70-80%

### **"La imagen se ve distorsionada"**
→ Asegúrate de que sea cuadrada (mismo ancho y alto)

### **"El fondo de mi imagen choca con el diseño"**
→ Usa fondo beige (#f4ebdd) o blanco (#ffffff)

---

## 📞 Resumen Rápido

Para que tus imágenes se vean perfectas:

```
✓ Tamaño: 500px × 500px (cuadrado)
✓ Formato: JPG o WebP
✓ Peso: < 150KB
✓ Fondo: Beige (#f4ebdd) o blanco
✓ Producto: Centrado, bien iluminado
✓ Nombre: descriptivo (cafe-250g.jpg)
```

---

**¡Listo para crear tus imágenes de productos profesionales! 📸**

