# Portfolio de Sergio Forés

Portfolio personal minimalista y moderno desarrollado con HTML, CSS y JavaScript vanilla.

## Desarrollo Local

Para ejecutar el proyecto localmente, necesitas servir los archivos a través de un servidor HTTP. Hay varias opciones:

### 1. Usando Python (recomendado)

```bash
# Si tienes Python 3 instalado:
python -m http.server 8000

# Si tienes Python 2 instalado:
python -m SimpleHTTPServer 8000
```

### 2. Usando Node.js

```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar el servidor
http-server
```

### 3. Usando VS Code

1. Instala la extensión "Live Server"
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

## Estructura del Proyecto

```
portfolio/
├── index.html          # Estructura principal
├── styles.css         # Estilos
├── script.js         # Lógica de la aplicación
└── images/          # Imágenes del proyecto
```

## Características

- Diseño minimalista y moderno
- Totalmente responsive
- Carga dinámica de contenido
- Optimizado para rendimiento
- Sistema de iconos Remix Icons

## Personalización

El contenido del portfolio se puede modificar de dos maneras:

1. Directamente en el archivo `script.js` (actual)
2. Creando un archivo `data.json` separado (requiere servidor)

## 📋 Características

- 🎨 Diseño brutalista-minimalista
- 📱 Totalmente responsive
- ⚡ Animaciones y efectos optimizados
- 🖼️ Integración con Unsplash para imágenes
- 📝 Formulario de contacto funcional (Formspree)
- 🎯 SEO optimizado

## 🛠️ Tecnologías

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript (Vanilla)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Space Mono](https://fonts.google.com/specimen/Space+Mono) (Google Fonts)
- [Formspree](https://formspree.io) para el formulario de contacto
- [Unsplash](https://unsplash.com) para imágenes

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/portfolio.git
   ```

2. Abre el proyecto:
   ```bash
   cd portfolio
   ```

3. Abre `index.html` en tu navegador o usa un servidor local:
   ```bash
   python -m http.server 8000
   ```

## 📂 Estructura del Proyecto

```
portfolio/
├── index.html          # Estructura principal
├── styles.css          # Estilos y diseño
├── script.js           # Interactividad y animaciones
├── CHANGELOG.md        # Registro de cambios
└── README.md           # Documentación
```

## 🎨 Personalización

### Colores
Modifica las variables CSS en `styles.css`:
```css
:root {
    --color-primary: #FF6B6B;
    --color-secondary: #4ECDC4;
    --color-accent: #FFE66D;
    --color-dark: #2C363F;
    --color-light: #F7F7F7;
}
```

### Imágenes
Actualiza las URLs de Unsplash en `index.html`:
```html
<img src="https://images.unsplash.com/photo-..." alt="...">
```

### Formulario de Contacto
Actualiza el endpoint de Formspree en `index.html`:
```html
<form action="https://formspree.io/f/tuID" method="POST">
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles

## 📬 Contacto

Sergio Forés - [@tutwitter](https://twitter.com/tutwitter) - contacto@sergiofores.dev

Project Link: [https://github.com/tuusuario/portfolio](https://github.com/tuusuario/portfolio)
