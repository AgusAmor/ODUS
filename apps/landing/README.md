# ODUS - Landing Page

Esta es la aplicación Next.js (App Router) encargada de la landing page del Centro Médico ODUS. Presenta las especialidades, sedes, información institucional y el acceso para solicitar turnos en línea de forma moderna, rápida y optimizada para SEO.

## Características y Estado Actual

La landing page se encuentra actualmente en desarrollo activo (**Fase 1**). Se han implementado los siguientes componentes y configuraciones:

*   **Configuración del Sistema de Diseño (Tailwind CSS v4)**: Definición en [globals.css](file:///c:/Users/Elmo/Desktop/ODUS/apps/landing/app/globals.css) de la paleta estricta de 4 colores de la marca, fuentes (`Inter` y `Manrope`) y los tokens de espaciado/tipografía.
*   **Header Global**: Barra de navegación superior responsiva con comportamiento activo de rutas y botones de acción.
*   **Hero Section**: Sección de cabecera con tarjetas flotantes estilo glassmorphic ("Diagnóstico de Precisión", "Atención Sin Demoras") y botones de acción rápida para solicitud de turnos y contacto por WhatsApp.
*   **Footer Global**: Pie de página con enlaces y estructura para sedes, portal de paciente, contacto y avisos legales.
*   **Biblioteca de Iconos**: Uso unificado y exclusivo de `react-icons`.

## Estructura de Carpetas Clave

*   `app/`: Contiene el App Router de Next.js (páginas, layouts y estilos globales).
*   `components/`: Componentes modulares y reutilizables de la aplicación (ej. `Header.jsx`, `Hero.jsx`, `Footer.jsx`).
*   `public/`: Archivos estáticos como imágenes y logos.
