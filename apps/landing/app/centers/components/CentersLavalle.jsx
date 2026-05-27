"use client";

import { MdOutlineWatchLater, MdOutlineDomainAdd } from "react-icons/md";

export default function CentersLavalle({ lavalleRef, lavalleRevealed }) {
  return (
    <section
      ref={lavalleRef}
      id="sede-lavalle"
      className={`mt-16 reveal-fade-up ${lavalleRevealed ? "revealed" : ""}`}
    >
      <div className="bg-white/70 backdrop-blur-md rounded-4xl p-8 md:p-12 border border-neutral/10 shadow-[0_8px_24px_rgba(11,59,140,0.02)] relative overflow-hidden group hover:scale-[1.005] transition-transform duration-300">
        
        {/* Decorative background radial glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/5 rounded-full filter blur-3xl opacity-60 -translate-x-1/2 translate-y-1/2 pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>

        {/* Content Structure */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10 text-left">
          
          {/* Text and Badges */}
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-neutral/10 text-neutral px-4 py-1.5 rounded-full w-fit">
              <MdOutlineWatchLater size={18} className="shrink-0" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Próximamente
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl md:text-3xl text-primary font-bold opacity-90">
              Sede Lavalle
            </h2>
            <p className="font-body-md text-body-md text-neutral leading-relaxed">
              Estamos trabajando en la expansión de nuestros servicios. La Sede Lavalle será inaugurada próximamente, ampliando nuestra capacidad para brindarte más especialidades y comodidad.
            </p>
          </div>

          {/* Large Faded Background Icon Decals */}
          <div className="hidden md:flex text-primary/10 select-none group-hover:scale-110 transition-transform duration-500 shrink-0">
            <MdOutlineDomainAdd size={120} />
          </div>

        </div>

      </div>
    </section>
  );
}
