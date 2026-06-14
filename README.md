# Cáscara Archivi

Archivo digital de Cáscara. Construido con HTML/CSS/JS puro, hosteado en GitHub Pages.

---

## Estructura de archivos

```
cascara-archivo/
├── index.html          ← Página principal con grilla de proyectos
├── isa-aladro.html     ← Página del proyecto (duplicar para cada uno)
├── css/
│   └── style.css       ← Todo el diseño
├── js/
│   └── main.js         ← Animaciones de scroll
└── README.md
```

---

## Cómo agregar un nuevo proyecto

### 1. Crear la página del proyecto
Duplicar `isa-aladro.html` y renombrar, ej: `nombre-proyecto.html`

Editar dentro del nuevo archivo:
- El `<title>` en el `<head>`
- El número (`001` → siguiente número)
- El nombre del proyecto (`<h1 class="project-name">`)
- Las URLs de las imágenes (reemplazar los `REEMPLAZAR_CON_URL_X.jpg`)
- La ficha (modelo, pieza, año, fotografía)

### 2. Agregar la tarjeta en index.html
Copiar el bloque `.project-card` y actualizar:
- URL de la imagen de portada
- Número, título y año

---

## Cómo subir las imágenes

### Opción A: Cloudinary (recomendado para imágenes propias)
1. Crear cuenta gratis en cloudinary.com
2. Subir las fotos
3. Copiar la URL que da Cloudinary y pegarla en el `src` de cada `<img>`

### Opción B: Instagram/YouTube embeds
Para videos, reemplazar el bloque `.img-block` con un `<iframe>` de Instagram o YouTube.

---

## GitHub Pages

1. Crear repo en github.com (ej: `cascara-archivo`)
2. Subir todos estos archivos
3. Ir a Settings → Pages → Source: main branch
4. Configurar `archivo.cascara.com.ar` en Settings → Pages → Custom domain

---

## Tipografías usadas
- **Cormorant Garamond** (Google Fonts) — display, títulos
- **DM Mono** (Google Fonts) — metadata, navegación, etiquetas
