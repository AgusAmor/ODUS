"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tertiary mt-section-gap border-t border-neutral/20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max-width mx-auto">
        <div className="flex flex-col gap-4">
          <Link
            className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2"
            href="/"
            onClick={(e) => {
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span className="bg-primary text-white px-2 py-1 rounded-md text-sm tracking-widest font-bold">
              ODUS
            </span>
          </Link>
          <p className="font-body-sm text-body-sm text-neutral">
            Humanized Precision in Healthcare.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-primary font-semibold">
            Sedes
          </h4>
          <Link
            className="font-body-md text-body-md text-neutral hover:text-primary underline-offset-4 hover:underline transition-all duration-300"
            href="/centers#sede-pellegrini"
          >
            Sede Pellegrini
          </Link>
          <Link
            className="font-body-md text-body-md text-neutral hover:text-primary underline-offset-4 hover:underline transition-all duration-300"
            href="/centers#sede-lavalle"
          >
            Sede Lavalle
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-primary font-semibold">
            Pacientes
          </h4>
          {/* <a
            className="font-body-md text-body-md text-neutral hover:text-primary underline-offset-4 hover:underline transition-all duration-300"
            href="#"
          >
            Portal del Paciente
          </a> */}
          <Link
            className="font-body-md text-body-md text-neutral hover:text-primary underline-offset-4 hover:underline transition-all duration-300"
            href="/contact"
          >
            Contacto
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-primary font-semibold">
            Legal
          </h4>
          <a
            className="font-body-md text-body-md text-neutral hover:text-primary underline-offset-4 hover:underline transition-all duration-300"
            href="#"
          >
            Términos y Condiciones
          </a>
        </div>
      </div>
      <div className="border-t border-neutral/20 py-6 text-center">
        <p className="font-body-md text-body-md text-neutral px-margin-mobile">
          © 2026 ODUS Centro Médico. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
