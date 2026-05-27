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
      className={`flex flex-col items-center text-center gap-12 pt-8 reveal-fade-up ${chooseRevealed ? "revealed" : ""}`}
    >
      {/* Centered Heading */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-headline-display text-2xl md:text-3xl font-extrabold text-primary leading-tight tracking-tight">
          Por Qué Elegirnos
        </h2>
        <div className="flex gap-2 justify-center">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="w-2 h-2 rounded-full bg-primary/65"></span>
          <span className="w-2 h-2 rounded-full bg-primary/35"></span>
        </div>
      </div>

      {/* Grid of 3 Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto items-stretch">
        
        {/* Card 1: Circuito Único */}
        <div className="bg-linear-to-b from-primary/95 to-primary text-white p-8 rounded-3xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-6 group">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300">
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
        <div className="bg-white border border-neutral/10 text-primary p-8 rounded-3xl shadow-[0_8px_24px_rgba(11,59,140,0.01)] hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-6 group">
          <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
            <MdOutlineBiotech size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-md text-lg text-primary font-bold">
              Tecnología Avanzada
            </h3>
            <p className="font-body-md text-sm text-neutral leading-relaxed">
              Equipamiento tecnológico avanzado para diagnósticos sumamente precisos.
            </p>
          </div>
        </div>

        {/* Card 3: Equipo Comprometido */}
        <div className="bg-linear-to-b from-[#184293] to-[#0f2d66] text-white p-8 rounded-3xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-6 group">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300">
            <MdOutlineFavorite size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-md text-lg font-bold">
              Equipo Comprometido
            </h3>
            <p className="font-body-md text-sm text-white/80 leading-relaxed">
              Profesionales médicos con vocación de servicio y trato profundamente humanizado.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
