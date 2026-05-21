# ODUS Centro Médico - Repositorio Principal

Este repositorio contiene la solución tecnológica integral para el **Centro Médico ODUS**. Está diseñado para brindar una experiencia digital moderna y fluida a los pacientes, al mismo tiempo que optimiza la gestión clínica y operativa para los profesionales médicos y el personal administrativo.

## De qué trata el Proyecto

El desarrollo del proyecto se divide en dos fases estratégicas:

1.  **Fase 1 - Landing Page pública (En curso)**: Un portal web de alto rendimiento y optimización SEO orientado a presentar las especialidades médicas, sedes, profesionales y la información institucional del centro.
2.  **Fase 2 - Sistema de Gestión de Clínica (Planificado)**: Una reconstrucción integral desde cero del sistema heredado en PHP, compuesto por:
    *   **Portal del Paciente**: Autogestión de turnos médicos y consulta de resultados de estudios.
    *   **Intranet Administrativa**: Panel de control interactivo para la gestión diaria de agendas médicas, recepcionistas e historial clínico digital.

## Stack Tecnológico

El proyecto está diseñado bajo una arquitectura de **Monorepo** moderna para facilitar la reutilización de código y mantener la consistencia entre los diferentes servicios:

*   **Gestión del Monorepo**: [Turborepo](https://turbo.build/) en conjunto con `pnpm workspaces`.
*   **Frontend (Landing Page y Portal)**: [Next.js](https://nextjs.org/) (App Router), configurado exclusivamente en **JavaScript (ES6+)** (sin TypeScript).
*   **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/), utilizando un sistema de diseño propio basado en "Minimalismo Cálido".
*   **Backend (API de Gestión)**: [NestJS](https://nestjs.com/) (Planificado).
*   **Contenedores e Infraestructura**: Docker.

## Cómo está Hecho (Estructura del Proyecto)

El monorepo organiza las aplicaciones y los paquetes de configuración compartidos en directorios específicos:

```text
odus/
├── apps/
│   ├── landing/       # Sitio web público en Next.js (En Progreso)
│   ├── portal/        # Aplicación de autogestión para pacientes (Planeado)
│   └── api/           # Servicios backend en NestJS (Planeado)
├── packages/          # Librerías y configuraciones compartidas (Planeado)
│   ├── ui/            # Biblioteca de componentes React comunes
│   └── config/        # Módulos comunes de configuración (ESLint, Tailwind, etc.)
```

### Directrices de Consistencia Visual y Código
*   **Sistema de Diseño**: La interfaz de usuario se adhiere de forma estricta a una paleta de 4 colores específicos de marca (`primary` `#0B3B8C`, `secondary` `#52C7B8`, `tertiary` `#F8FAFC` y `neutral` `#64748B`) y tipografías (`Inter` para lectura y `Manrope` para títulos).

## Licencia

Este proyecto es propiedad intelectual privada y exclusiva de **Agustín Amor (AgusAmor)**. Todos los derechos reservados. Para más detalles, consulta el archivo [LICENSE](file:///c:/Users/Elmo/Desktop/ODUS/LICENSE) en la raíz de este repositorio.
