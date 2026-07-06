"use client";

import { MdOutlineMedicalServices } from "react-icons/md";

export default function AboutHero({ heroRef, heroRevealed }) {
  return (
    <section
      ref={heroRef}
      className={`relative pt-10 pb-8 lg:pt-16 lg:pb-28 overflow-hidden reveal-fade-up ${heroRevealed ? "revealed" : ""}`}
    >
      {/* Decorative background elements (Full bleed mesh gradients) */}
      <div className="absolute inset-0 z-0 w-full pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-primary/10 rounded-bl-full opacity-80 blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-full h-3/4 bg-secondary/15 rounded-tr-full opacity-80 blur-[120px]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop z-10 relative">
        {/* Decorative background clinical cross symbol */}
        <div className="absolute -left-8 top-12 text-primary/5 hidden lg:block select-none pointer-events-none z-0">
          <span className="text-[64px] font-bold">+</span>
        </div>

        {/* Left Column: Clinic Exterior Image and Floating Badge */}
        <div className="relative order-2 lg:order-1">
          <div className="rounded-4xl overflow-hidden shadow-[0_8px_24px_rgba(11,59,140,0.02)] aspect-4/3 lg:aspect-4/3 border border-neutral/10 relative hover:scale-[1.01] transition-transform duration-300">
            <img
              alt="Fachada moderna del centro médico ODUS"
              className="w-full h-full object-cover"
              src="/images/centers_exterior.png"
            />
          </div>

          {/* Floating circular icon badge */}
          <div className="absolute -bottom-6 -right-6 bg-primary text-white w-16 h-16 rounded-full shadow-lg hidden md:flex items-center justify-center border-4 border-white hover:scale-110 transition-transform duration-300">
            <MdOutlineMedicalServices size={28} className="text-secondary" />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col gap-6 order-1 lg:order-2 items-start text-left">
          <h1 className="font-headline-display text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight">
            Quiénes Somos
          </h1>
          <p className="font-body-md text-base md:text-lg text-neutral leading-relaxed max-w-xl">
            En ODUS Centro Médico evolucionamos de nuestra reconocida
            trayectoria odontológica hacia un modelo de atención médica
            ambulatoria integral. Brindamos una cobertura de salud eficiente y
            centrada en el paciente, unificando especialidades y diagnóstico
            avanzado en un circuito único. Con tecnología innovadora y calidez
            humana, buscamos consolidarnos como el centro médico de referencia
            en Quilmes y zona sur.
          </p>
        </div>
      </div>
    </section>
  );
}
