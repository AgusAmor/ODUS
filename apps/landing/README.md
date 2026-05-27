# ODUS - Landing Page

Esta es la aplicación Next.js (App Router) encargada de la landing page del Centro Médico ODUS. Presenta las especialidades, sedes, información institucional y el acceso para solicitar turnos en línea de forma moderna, rápida y optimizada para SEO.

## Características y Estado Actual

La landing page se encuentra actualmente en desarrollo activo (**Fase 1**). Se han implementado los siguientes componentes y características:

- **Configuración del Sistema de Diseño (Tailwind CSS v4)**: Definición en [globals.css](file:///c:/Users/Elmo/Desktop/ODUS/apps/landing/app/globals.css) de la paleta estricta de 4 colores de la marca, fuentes (`Inter` y `Manrope`) y tokens de espaciado/tipografía.
- **Header & MobileNav Globales**: Barra de navegación superior responsiva para pantallas grandes y una barra inferior fija (`BottomNavBar` / `MobileNav.jsx`) optimizada para dispositivos móviles con detección de rutas activas.
- **Hero Section**: Sección de cabecera con fondos orgánicos sutiles, tarjetas de cristal flotantes ("Diagnóstico de Precisión", "Atención Sin Demoras") y llamadas a la acción rápidas para agendar turnos y contactar por WhatsApp.
- **Especialidades Médicas**: Rejilla de tarjetas interactivas que detallan las especialidades de ODUS. Integra un sistema de diálogos modales animados y estilizados (`SpecialtyModal.jsx`) con detalles procedimentales y descripciones específicas (incluyendo Eco Doppler).
- **Nuestras Sedes (Sección Home)**: Exposición resumida de los centros médicos físicos en el Home con geolocalización.
- **Identidad Institucional**: Secciones de Misión y Visión dispuestas en un diseño asimétrico/espejado en el Home, junto a una rejilla de 6 Valores institucionales, adaptados a la estética _Warm Minimalism_.
- **Página de Especialidades (`/specialties`)**: Página específica estructurada en componentes modulares. Cuenta con secciones de Hero con badges de excelencia, filas alternadas con iconos circulares clínicos para especialidades clave, flujo del "Circuito de Salud" en 3 pasos y la sección de "Instalaciones" que integra la tecnología de vanguardia y enlace dinámico de sedes.
- **Página de Sedes (`/centers`)**: Página completa e independiente estructurada en subcomponentes locales modulares (`CentersHero.jsx`, `CentersPellegrini.jsx`, `CentersLavalle.jsx`). Detalla los centros activos, exponiendo en la Sede Pellegrini la dirección y horarios oficiales de atención (`Lunes a Viernes 9:00 a 18:00hs`) acompañados de iconos informativos, listado de especialidades y estudios diagnósticos que señalan las próximas incorporaciones de servicios (como Densitometría con su badge `"Próximamente"` sin desajustes de línea). Incluye desplazamiento por anclas, geolocalización real conectada a Google Maps y un coordinador inteligente de redirección y scroll suave (*scroll-to*) para anclas externas e internas.
- **Página de Nosotros (`/about`)**: Página completa e independiente estructurada en subcomponentes locales modulares (`AboutHero.jsx`, `AboutFacilities.jsx`, `AboutWhyChooseUs.jsx`) que describe la identidad corporativa de ODUS. Ofrece una sección de Quiénes Somos, un bloque extendido de Instalaciones clínicas e indicadores interactivos de Por Qué Elegirnos.
- **Sistema de Scroll Reveal (Animaciones Once-off)**: Animaciones de entrada en scroll de alto rendimiento que se disparan **exactamente una vez** la primera vez que un elemento entra al viewport. Implementado de forma nativa a través de un React Hook (`useScrollReveal.js`) que encapsula la API `IntersectionObserver`, evitando el uso de librerías externas pesadas.
- **Footer Global**: Pie de página responsivo con accesos directos, datos de contacto, enlaces legales y redes sociales.

## Estructura de Carpetas Clave

- `app/`: Contiene el App Router de Next.js (rutas principales, layouts, fuentes y estilos globales).
- `app/specialties/`: Página de especialidades médicas.
- `app/specialties/components/`: Componentes específicos y exclusivos de la sección de especialidades (`SpecialtiesHero.jsx`, `SpecialtiesEditorial.jsx`, `SpecialtiesCircuit.jsx`, `SpecialtiesFacilities.jsx`).
- `app/centers/`: Página de sedes médicas.
- `app/centers/components/`: Componentes específicos y exclusivos de la sección de sedes (`CentersHero.jsx`, `CentersPellegrini.jsx`, `CentersLavalle.jsx`).
- `app/about/`: Página institucional de la clínica (Nosotros).
- `app/about/components/`: Componentes específicos y exclusivos de la sección institucional (`AboutHero.jsx`, `AboutFacilities.jsx`, `AboutWhyChooseUs.jsx`).
- `components/`: Componentes modulares y reutilizables globales de la aplicación (ej. `Header.jsx`, `MobileNav.jsx`, `Hero.jsx`, `Specialties.jsx`, `SpecialtyModal.jsx`, `Centers.jsx`, `Institutional.jsx`).
- `components/useScrollReveal.js`: Hook reutilizable de Intersection Observer para animaciones nativas al scroll.
- `public/`: Archivos estáticos como imágenes y logos.
