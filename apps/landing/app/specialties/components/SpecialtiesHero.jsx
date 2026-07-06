"use client";

import { MdOutlineVerified, MdOutlineFavorite, MdOutlineScience } from "react-icons/md";

export default function SpecialtiesHero({ heroRef, heroRevealed }) {
  return (
    <section 
      ref={heroRef}
      className="relative py-12 md:py-16 px-margin-mobile md:px-margin-desktop overflow-hidden bg-tertiary/40 border-b border-neutral/5"
    >
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/5 to-transparent opacity-60 rounded-bl-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-linear-to-tr from-secondary/5 to-transparent opacity-60 rounded-tr-full filter blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center flex flex-col items-center">
        <h1 className={`font-headline-display text-3xl md:text-headline-display font-extrabold text-primary mb-6 leading-tight tracking-tight reveal-fade-up ${heroRevealed ? "revealed" : ""}`}>
          Especialidades diseñadas para tu bienestar integral
        </h1>
        <p className={`font-body-lg text-body-lg text-neutral mb-10 max-w-2xl mx-auto leading-relaxed reveal-fade-up transition-delay-75 ${heroRevealed ? "revealed" : ""}`}>
          Nuestro enfoque multidisciplinario asegura que cada aspecto de tu salud sea atendido por profesionales de excelencia, trabajando en perfecta coordinación para brindarte soluciones precisas y un cuidado profundamente humano.
        </p>

        {/* Social Proof / Trust Badges */}
        <div className={`flex flex-wrap justify-center gap-4 mt-4 reveal-fade-up transition-delay-150 ${heroRevealed ? "revealed" : ""}`}>
          <div className="flex items-center gap-2 bg-white py-2.5 px-5 rounded-full shadow-[0_4px_12px_rgba(11,59,140,0.02)] border border-neutral/10 hover:border-secondary/35 hover:scale-95 transition-all duration-300">
            <MdOutlineVerified className="text-secondary text-xl" />
            <span className="font-label-md text-sm text-primary font-bold">
              Staff de Excelencia
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white py-2.5 px-5 rounded-full shadow-[0_4px_12px_rgba(11,59,140,0.02)] border border-neutral/10 hover:border-secondary/35 hover:scale-95 transition-all duration-300">
            <MdOutlineFavorite className="text-secondary text-xl" />
            <span className="font-label-md text-sm text-primary font-bold">
              Calidez Humana
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white py-2.5 px-5 rounded-full shadow-[0_4px_12px_rgba(11,59,140,0.02)] border border-neutral/10 hover:border-secondary/35 hover:scale-95 transition-all duration-300">
            <MdOutlineScience className="text-secondary text-xl" />
            <span className="font-label-md text-sm text-primary font-bold">
              Tecnología de Vanguardia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
