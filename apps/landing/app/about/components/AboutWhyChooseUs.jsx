"use client";

import {
  MdOutlineAllInclusive,
  MdOutlineBiotech,
  MdOutlineFavorite,
} from "react-icons/md";

export default function AboutWhyChooseUs({ chooseRef, chooseRevealed }) {
  return (
    <section
      ref={chooseRef}
      className="w-full flex flex-col items-center text-center gap-12 py-16 md:py-20 relative bg-primary overflow-hidden"
    >
      {/* Decorative background orbs for 3D depth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-tertiary/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center gap-12 relative z-10">
      {/* Centered Heading */}
      <div
        className={`flex flex-col items-center gap-4 text-center reveal-fade-up ${chooseRevealed ? "revealed" : ""}`}
      >
        <h2 className="font-headline-display text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
          Por Qué Elegirnos
        </h2>
      </div>

      {/* Grid of 3 Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto items-stretch">
        {/* Card 1: Circuito Único */}
        <div
          className={`bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center gap-6 group reveal-fade-up transition-delay-75 ${chooseRevealed ? "revealed" : ""}`}
        >
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
            <MdOutlineAllInclusive size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-md text-lg font-bold">
              Circuito Único
            </h3>
            <p className="font-body-md text-sm text-white/80 leading-relaxed">
              Consulta y diagnóstico en un solo lugar, optimizando tu tiempo.
            </p>
          </div>
        </div>

        {/* Card 2: Tecnología Avanzada */}
        <div
          className={`bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center gap-6 group reveal-fade-up transition-delay-150 ${chooseRevealed ? "revealed" : ""}`}
        >
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
            <MdOutlineBiotech size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-md text-lg font-bold">
              Tecnología Avanzada
            </h3>
            <p className="font-body-md text-sm text-white/80 leading-relaxed">
              Equipamiento tecnológico avanzado para diagnósticos sumamente
              precisos.
            </p>
          </div>
        </div>

        {/* Card 3: Equipo Comprometido */}
        <div
          className={`bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center gap-6 group reveal-fade-up transition-delay-225 ${chooseRevealed ? "revealed" : ""}`}
        >
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
            <MdOutlineFavorite size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-md text-lg font-bold">
              Equipo Comprometido
            </h3>
            <p className="font-body-md text-sm text-white/80 leading-relaxed">
              Profesionales médicos con vocación de servicio y trato
              profundamente humanizado.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
