# ODUS - Landing Page

Esta es la aplicación Next.js (App Router) encargada de la landing page del Centro Médico ODUS. Presenta las especialidades, sedes, información institucional y el acceso para solicitar turnos en línea de forma moderna, rápida y optimizada para SEO.

## Características y Estado Actual

 La landing page se encuentra completamente desarrollada en su **Fase 1**. Se han implementado los siguientes componentes y características:

*   **Configuración del Sistema de Diseño (Tailwind CSS v4)**: Definición en [globals.css](file:///c:/Users/Elmo/Desktop/ODUS/apps/landing/app/globals.css) de la paleta estricta de 4 colores de la marca, fuentes (`Inter` y `Manrope`) y tokens de espaciado/tipografía.
*   **Header & MobileNav Globales**: Barra de navegación superior responsiva para pantallas grandes y una barra inferior fija (`BottomNavBar` / `MobileNav.jsx`) optimizada para dispositivos móviles con detección de rutas activas.
*   **Hero Section**: Sección de cabecera con fondos orgánicos sutiles, tarjetas de cristal flotantes ("Diagnóstico de Precisión", "Atención Sin Demoras") y llamadas a la acción rápidas para agendar turnos y contactar por WhatsApp.
*   **Especialidades Médicas**: Rejilla de tarjetas interactivas que detallan las especialidades de ODUS. Integra un sistema de diálogos modales animados y estilizados (`SpecialtyModal.jsx`) con detalles procedimentales y descripciones específicas (incluyendo Eco Doppler).
*   **Nuestras Sedes**: Exposición de los centros médicos físicos (Sede Principal Pellegrini y próxima Sede Lavalle) con direcciones y accesos interactivos de geolocalización.
*   **Identidad Institucional**: Secciones de Misión y Visión dispuestas en un diseño asimétrico/espejado, junto a una rejilla de 6 Valores institucionales, adaptados a la estética *Warm Minimalism*.
*   **Sistema de Scroll Reveal (Animaciones Once-off)**: Animaciones de entrada en scroll de alto rendimiento que se disparan **exactamente una vez** la primera vez que un elemento entra al viewport. Implementado de forma nativa a través de un React Hook (`useScrollReveal.js`) que encapsula la API `IntersectionObserver`, evitando el uso de librerías externas pesadas.
*   **Footer Global**: Pie de página responsivo con accesos directos, datos de contacto, enlaces legales y redes sociales.

## Estructura de Carpetas Clave

*   `app/`: Contiene el App Router de Next.js (rutas principales, layouts, fuentes y estilos globales).
*   `components/`: Componentes modulares y reutilizables de la aplicación (ej. `Header.jsx`, `MobileNav.jsx`, `Hero.jsx`, `Specialties.jsx`, `SpecialtyModal.jsx`, `Centers.jsx`, `Institutional.jsx`).
*   `components/useScrollReveal.js`: Hook reutilizable de Intersection Observer para animaciones nativas al scroll.
*   `public/`: Archivos estáticos como imágenes y logos.
