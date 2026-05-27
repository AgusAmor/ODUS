"use client";

export default function CentersHero({ heroRef, heroRevealed }) {
  return (
    <section
      ref={heroRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative py-8 reveal-fade-up ${heroRevealed ? "revealed" : ""}`}
    >
      {/* Decorative background blur blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl opacity-60 z-0 pointer-events-none"></div>

      {/* Left Content */}
      <div className="flex flex-col gap-6 z-10 items-start text-left">
        <h1 className="font-headline-display text-3xl md:text-headline-display font-extrabold text-primary leading-tight tracking-tight">
          Nuestras Sedes
        </h1>
        <p className="font-body-lg text-body-lg text-neutral max-w-xl leading-relaxed">
          Centro Médico ODUS cuenta con dos sedes ubicadas en Quilmes, diseñadas
          para brindarte atención médica de calidad cerca tuyo. Equipadas con
          tecnología de última generación y un equipo profesional comprometido
          con tu bienestar.
        </p>
        <div className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto">
          <a
            className="bg-primary text-white font-label-md text-label-md px-8 py-3.5 rounded-2xl hover:scale-95 transition-transform duration-200 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer min-w-44"
            href="#sede-pellegrini"
          >
            <span className="font-bold">Sede Pellegrini</span>
            <span className="text-xs font-normal opacity-85 mt-1">
              Sede Principal
            </span>
          </a>
          <a
            className="bg-transparent border-2 border-primary text-primary font-label-md text-label-md px-8 py-3.5 rounded-2xl hover:bg-primary/5 transition-colors duration-200 flex flex-col items-center justify-center text-center font-bold cursor-pointer min-w-44"
            href="#sede-lavalle"
          >
            <span>Sede Lavalle</span>
            <span className="text-xs font-normal opacity-80 mt-1">
              Próximamente
            </span>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_8px_24px_rgba(11,59,140,0.02)] border border-neutral/10 aspect-4/3 hover:scale-[1.01] transition-transform duration-300">
        <img
          alt="Exterior moderno de la clínica ODUS"
          className="w-full h-full object-cover"
          src="/images/centers_exterior.png"
        />
      </div>
    </section>
  );
}
