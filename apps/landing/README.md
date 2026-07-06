# ODUS - Landing Page

Esta es la aplicación Next.js (App Router) encargada de la landing page del Centro Médico ODUS. Presenta las especialidades, sedes, información institucional y el acceso para solicitar turnos en línea de forma moderna, rápida y optimizada para SEO.

## Características y Estado Actual

La landing page se encuentra actualmente en desarrollo activo (**Fase 1**). Se han implementado los siguientes componentes y características:

- **Configuración del Sistema de Diseño (Tailwind CSS v4)**: Definición en [globals.css](file:///c:/Users/Elmo/Desktop/ODUS/apps/landing/app/globals.css) de la paleta estricta de 4 colores de la marca, fuentes (`Inter` y `Manrope`) y un robusto sistema de **diseño fluido** basado en variables matemáticas (`clamp()`), garantizando que tanto la tipografía como los espaciados estéticos escalen de forma nativa y elástica en cualquier dispositivo (Mobile-First). El proyecto adopta una filosofía estética de "Lienzo Claro con Acentos Intensos", maximizando la limpieza clínica y utilizando bloques oscuros (`bg-primary`) únicamente de forma estratégica e inmersiva.
- **Header & MobileNav Globales**: Barra de navegación superior responsiva para pantallas grandes y una barra inferior fija (`BottomNavBar` / `MobileNav.jsx`) optimizada para dispositivos móviles con detección de rutas activas.
- **Hero Section**: Sección de cabecera con fondos orgánicos sutiles, tarjetas de cristal flotantes ("Diagnóstico de Precisión", "Atención Sin Demoras") y llamadas a la acción rápidas para agendar turnos y contactar por WhatsApp. Todo el sistema de cabeceras (*Heroes*) del sitio comparte una alineación y espaciado superior estrictamente consistente.
- **Especialidades Médicas**: Rejilla de tarjetas interactivas que detallan las especialidades de ODUS. Integra un sistema de diálogos modales animados y estilizados (`SpecialtyModal.jsx`) con detalles procedimentales y descripciones específicas (incluyendo Eco Doppler).
- **Nuestro Modelo de Atención (`Circuit.jsx`)**: Circuito modular en 3 pasos que describe el flujo de trabajo integral (de la consulta a la solución), reutilizado en la página de inicio y especialidades.
- **Identidad Institucional**: Secciones de Misión y Visión dispuestas en un diseño asimétrico/espejado en el Home, junto a una rejilla de 6 Valores institucionales, adaptados a la estética _Warm Minimalism_.
- **Página de Especialidades (`/specialties`)**: Página específica estructurada en componentes modulares. Cuenta con secciones de Hero con badges de excelencia, filas alternadas con iconos circulares clínicos para especialidades clave y un componente de cuadrícula (`SpecialtyWorkflows.jsx`) que detalla el flujo de atención específico para Cardiología y Ginecología en 3 pasos.
- **Página de Sedes (`/centers`)**: Página completa e independiente estructurada en subcomponentes locales modulares (`CentersHero.jsx`, `CentersPellegrini.jsx`, `CentersLavalle.jsx`, `CentersFacilities.jsx`) con un diseño altamente responsivo. Detalla los centros activos con un diseño unificado y luminoso que separa cada sede mediante sutiles variaciones cromáticas (`bg-secondary/5`, `bg-tertiary/30`) y acentos intensos en tarjetas clave de acción. Incluye desplazamiento por anclas, geolocalización real conectada a Google Maps, un coordinador inteligente de redirección y scroll suave (*scroll-to*), y la sección final de "Instalaciones".
- **Página de Nosotros (`/about`)**: Página institucional estructurada en subcomponentes locales (`AboutHero.jsx`, `AboutWhyChooseUs.jsx`, `AboutProfessionals.jsx`) que describe la identidad corporativa de ODUS. Ofrece una sección "Quiénes Somos" con fondos panorámicos expansivos, el bloque "Por Qué Elegirnos" construido como una zona inmersiva de alto contraste y profundidad 3D (con tarjetas glassmorphism), y una grilla interactiva de "Nuestros Profesionales" conectada armónicamente al resto del flujo visual.
- **Página de Contacto (`/contact`)**: Página completa e independiente estructurada en subcomponentes locales modulares (`ContactHero.jsx`, `ContactForm.jsx`) que facilita la comunicación directa con el Centro Médico. Presenta una sección con 2 tarjetas de contacto interactivas (WhatsApp enlazado directamente para comunicación instantánea, y Ubicación enlazada dinámicamente a la página de sedes), la imagen de recepción en alta resolución, y un formulario de mensajería premium glassmorphic con controles estáticos de cursores y diseño responsivo.
- **Sistema de Scroll Reveal (Animaciones Once-off)**: Animaciones de entrada en scroll de alto rendimiento que se disparan **exactamente una vez** la primera vez que un elemento entra al viewport. Implementado de forma nativa a través de un React Hook (`useScrollReveal.js`) que encapsula la API `IntersectionObserver`, evitando el uso de librerías externas pesadas.
- **Configuración de Favicon**: Implementación de favicon moderno y escalable mediante `app/icon.svg` (utilizando el isotipo corporativo outline), inyectado explícitamente en los metadatos de `app/layout.js` para asegurar su correcta resolución visual.
- **Footer Global**: Pie de página responsivo con accesos directos, datos de contacto, enlaces legales y redes sociales.

## Estructura de Carpetas Clave

- `app/`: Contiene el App Router de Next.js (rutas principales, layouts, fuentes y estilos globales).
- `app/specialties/`: Página de especialidades médicas.
- `app/specialties/components/`: Componentes específicos y exclusivos de la sección de especialidades (`SpecialtiesHero.jsx`, `SpecialtiesEditorial.jsx`, `SpecialtyWorkflows.jsx`).
- `app/centers/`: Página de sedes médicas.
- `app/centers/components/`: Componentes específicos y exclusivos de la sección de sedes (`CentersHero.jsx`, `CentersPellegrini.jsx`, `CentersLavalle.jsx`, `CentersFacilities.jsx`).
- `app/about/`: Página institucional de la clínica (Nosotros).
- `app/about/components/`: Componentes específicos y exclusivos de la sección institucional (`AboutHero.jsx`, `AboutFacilities.jsx`, `AboutWhyChooseUs.jsx`, `AboutProfessionals.jsx`).
- `app/contact/`: Página de contacto.
- `app/contact/components/`: Componentes específicos y exclusivos de la sección de contacto (`ContactHero.jsx`, `ContactForm.jsx`).
- `components/`: Componentes modulares y reutilizables globales de la aplicación (ej. `Logo.jsx`, `Header.jsx`, `MobileNav.jsx`, `Hero.jsx`, `Specialties.jsx`, `SpecialtyModal.jsx`, `Centers.jsx`, `Institutional.jsx`, `Circuit.jsx`).
- `components/useScrollReveal.js`: Hook reutilizable de Intersection Observer para animaciones nativas al scroll.
- `public/`: Archivos estáticos del sitio. Incluye la carpeta `public/assets/` para albergar recursos corporativos de la marca (como el logo oficial en formato SVG) e `images/` para fotografías generales.
