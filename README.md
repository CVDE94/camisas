# 👕 Proyecto de Camisas - Landing Page

Este es un proyecto de **Landing Page y Catálogo Dinámico** diseñado para una marca de ropa deportiva. La aplicación permite a los usuarios visualizar diseños exclusivos, personalizar sus opciones (color, corte, detalles reflejantes) y realizar pedidos directos a través de **WhatsApp**.

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-green)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?logo=vite)

## 🚀 Características Principales

- **Diseño Ultra-Responsivo:** Optimizado para celulares, tablets y computadoras.
- **Catálogo Dinámico:** Los productos se cargan desde un archivo de datos centralizado, facilitando las actualizaciones de stock y precios.
- **Interactividad Avanzada:**
  - Galería de fotos con efectos de zoom.
  - Modales de producto con cambio de imagen en tiempo real según el color seleccionado.
  - Botón flotante de WhatsApp y Call to Action (CTA) persistentes.
- **Optimización Visual:** Uso de gradientes de fondo, efectos de desenfoque (glassmorphism) y animaciones de entrada.

## 🛠️ Tecnologías Utilizadas

- **React 18 / TypeScript:** Estructura lógica y tipado seguro.
- **Vite:** Herramienta de construcción rápida para el servidor de desarrollo.
- **Tailwind CSS:** Framework de diseño basado en utilidades para un estilo moderno y rápido.
- **Lucide React:** Set de iconos minimalistas y ligeros.
- **Framer Motion / Tailwind Animate:** Para las transiciones y efectos visuales.

## 📦 Instalación y Configuración

Sigue estos pasos para correr el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/proyecto-camisas.git](https://github.com/tu-usuario/proyecto-camisas.git)
   cd proyecto-camisas
   ```
2. **Instalar dependencias:**

```Bash

npm install
```

3. **Iniciar el servidor de desarrollo:**

```Bash
npm run dev
La aplicación estará disponible en http://localhost:5173.
```

4. **📂 Estructura del Proyecto**

```bash
src/
 ├── components/     # Componentes visuales (Navbar, Hero, Catalog, etc.)
 ├── data/           # Archivos de configuración y constantes (constants.ts)
 ├── lib/            # Lógica de utilidad (Generador de URLs de WhatsApp)
 ├── assets/         # Imágenes locales y estilos globales
 └── App.tsx         # Componente principal
```

5. **⚙️ Personalización**

```bash
Para cambiar los productos, precios o el nombre de la marca, edita el archivo:
src/data/constants.ts

(Próximamente: Integración con Backend en Node.js para administración automática).
```

**🤝 Contacto**

```bash
Si tienes dudas sobre el desarrollo o quieres colaborar en el proyecto:

Desarrollador: https://github.com/CVDE94

Instagram: https://www.instagram.com/victorcruvz

WhatsApp: +52 1 33 3466 5465

Desarrollado con ❤️.

```
