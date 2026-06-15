"use client";

import { MdOutlineMedicalServices } from "react-icons/md";

export default function AboutHero({ heroRef, heroRevealed }) {
  return (
    <section
      ref={heroRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative py-8 reveal-fade-up ${heroRevealed ? "revealed" : ""}`}
    >
      {/* Decorative background clinical cross symbol */}
      <div className="absolute -left-8 top-12 text-primary/5 hidden lg:block select-none pointer-events-none">
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
          En ODUS Centro Médico evolucionamos de nuestra reconocida trayectoria odontológica hacia un modelo de atención médica ambulatoria integral. Brindamos una cobertura de salud eficiente y centrada en el paciente, unificando especialidades y diagnóstico avanzado en un circuito único. Con tecnología innovadora y calidez humana, buscamos consolidarnos como el centro médico de referencia en Quilmes y zona sur.
        </p>
      </div>
    </section>
  );
}
