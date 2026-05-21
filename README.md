# ODUS Centro Médico

Bienvenido al repositorio del proyecto ODUS. ODUS es una solución tecnológica integral para un centro médico moderno, diseñada para brindar una experiencia digital fluida a los pacientes y optimizar las operaciones clínicas para el personal médico y administrativo.

## Visión del Proyecto

El proyecto tiene como objetivo modernizar la infraestructura digital de la clínica a través de dos fases principales:
1.  **Fase 1 - Landing Page (Actual):** Un sitio web público de alto rendimiento y optimizado para SEO para mostrar las especialidades de la clínica, los centros médicos y la información institucional.
2.  **Fase 2 - Sistema de Gestión de Clínica (Futuro):** Una reconstrucción completa del sistema de gestión heredado en PHP. Esto incluirá:
    *   **Portal del Paciente:** Para la autogestión de turnos médicos y resultados de estudios.
    *   **Intranet (Dashboard):** Para que médicos y recepcionistas administren las operaciones diarias de la clínica.

## Arquitectura y Stack Tecnológico

El proyecto está estructurado como un **Monorepo** para maximizar la reutilización de código, garantizar la consistencia y simplificar la gestión de dependencias en múltiples aplicaciones.

*   **Herramientas de Monorepo:** [Turborepo](https://turbo.build/repo) y `pnpm workspaces`.
*   **Framework Frontend:** [Next.js](https://nextjs.org/) (App Router).
*   **Lenguaje:** JavaScript (ES6+).
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) con un sistema de diseño personalizado de "Minimalismo Cálido".
*   **Backend / API (Futuro):** NestJS.
*   **Contenedores:** Docker.

### Estructura del Proyecto
```text
odus/
├── apps/
│   ├── landing/       # Sitio web público en Next.js (En Progreso)
│   ├── portal/        # Aplicación de autogestión para pacientes (Planeado)
│   └── api/           # Servicios backend (Planeado)
├── packages/          # Librerías internas compartidas (Planeado)
│   ├── ui/            # Componentes React compartidos
│   └── config/        # Configuraciones compartidas de ESLint, Tailwind o Prettier
├── package.json
└── turbo.json
```

## Estado Actual de Desarrollo

**Estado: Desarrollo Temprano (Fase 1)**

Actualmente estamos construyendo la Landing Page pública (`apps/landing`). 
*   [x] Configuración del espacio de trabajo del monorepo (Turborepo + pnpm).
*   [x] Inicialización de Next.js para la app `landing`.
*   [x] Implementación del sistema de diseño Tailwind CSS v4 (Fuentes: Inter & Manrope, paleta estricta de 4 colores).
*   [x] Layouts globales y configuración de enrutamiento base (`/specialties`, `/centers`, `/about`).
*   [x] Construcción de componentes globales (ej. `Header` responsivo con enrutamiento activo).
*   [ ] Desarrollo de la sección `Hero` y páginas internas (Especialidades, Centros, Acerca de).

## Ejecutar el Proyecto Localmente

Asegúrate de tener instalados [Node.js](https://nodejs.org/) y [pnpm](https://pnpm.io/).

1.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    Este comando utilizará Turborepo para iniciar todas las aplicaciones de forma concurrente. Puedes ver la Landing page en el puerto que se haya configurado (por ejemplo, `http://localhost:51139`).

## Sistema de Diseño
La interfaz de usuario (UI) se adhiere estrictamente a una paleta personalizada de 4 colores:
*   **Primario:** `#0B3B8C`
*   **Secundario:** `#52C7B8`
*   **Terciario:** `#F8FAFC`
*   **Neutral:** `#64748B`

Todo el código está escrito en inglés, manteniendo patrones estrictos de co-localización de componentes basados en las mejores prácticas de Next.js App Router.
