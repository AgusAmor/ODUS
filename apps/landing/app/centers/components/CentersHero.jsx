"use client";

export default function CentersHero({ heroRef, heroRevealed }) {
  return (
    <section
      ref={heroRef}
      className={`relative pt-10 pb-6 lg:py-16 overflow-hidden reveal-fade-up ${heroRevealed ? "revealed" : ""}`}
    >
      {/* Decorative background elements (Full bleed) */}
      <div className="absolute inset-0 z-0 w-full pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-primary/10 rounded-bl-full opacity-80 blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-full h-3/4 bg-secondary/15 rounded-tr-full opacity-80 blur-[120px]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop z-10 relative">
        {/* Left Content */}
        <div className="flex flex-col gap-4 lg:gap-6 items-start text-left order-2 lg:order-1">
        <h1 className="font-headline-display text-3xl md:text-headline-display font-extrabold text-primary leading-tight tracking-tight">
          Nuestras Sedes
        </h1>
        <p className="font-body-lg text-body-lg text-neutral max-w-xl leading-relaxed">
          Centro Médico ODUS cuenta con dos sedes ubicadas en Quilmes, diseñadas
          para brindarte atención médica de calidad cerca tuyo. Equipadas con
          tecnología de última generación y un equipo profesional comprometido
          con tu bienestar.
        </p>
        <div className="flex flex-row justify-center lg:justify-start gap-2 sm:gap-4 mt-2 lg:mt-4 w-full">
          <a
            className="bg-primary text-white font-label-md text-label-md px-2 sm:px-8 py-3.5 rounded-2xl hover:scale-95 transition-transform duration-200 flex flex-col items-center justify-center text-center shadow-sm cursor-pointer flex-1 sm:flex-none sm:min-w-44"
            href="#sede-pellegrini"
          >
            <span className="font-bold text-[13px] sm:text-base">Sede Pellegrini</span>
            <span className="text-[10px] sm:text-xs font-normal opacity-85 mt-1">
              Sede Principal
            </span>
          </a>
          <a
            className="bg-transparent border-2 border-primary text-primary font-label-md text-label-md px-2 sm:px-8 py-3.5 rounded-2xl hover:bg-primary/5 transition-colors duration-200 flex flex-col items-center justify-center text-center font-bold cursor-pointer flex-1 sm:flex-none sm:min-w-44"
            href="#sede-lavalle"
          >
            <span className="text-[13px] sm:text-base">Sede Lavalle</span>
            <span className="text-[10px] sm:text-xs font-normal opacity-80 mt-1">
              Próximamente
            </span>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 rounded-4xl overflow-hidden shadow-[0_8px_24px_rgba(11,59,140,0.02)] border border-neutral/10 aspect-video lg:aspect-4/3 hover:scale-[1.01] transition-transform duration-300 order-1 lg:order-2">
        <img
          alt="Exterior moderno de la clínica ODUS"
          className="w-full h-full object-cover"
          src="/images/centers_exterior.png"
        />
      </div>
      </div>
    </section>
  );
}
