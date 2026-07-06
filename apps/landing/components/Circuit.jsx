"use client";

import useScrollReveal from "../app/hooks/useScrollReveal";

export default function SpecialtiesCircuit() {
  const [circuitoHeaderRef, circuitoHeaderRevealed] = useScrollReveal(0.1, "0px 0px -100px 0px");
  const [circuitoCardsRef, circuitoCardsRevealed] = useScrollReveal(0.15, "0px 0px -120px 0px");

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden">
      {/* Dark mode background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-1/2 h-full bg-secondary rounded-full filter blur-[150px] -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-container-max-width mx-auto relative z-10">
        <div
          ref={circuitoHeaderRef}
          className={`text-center mb-16 reveal-fade-up ${circuitoHeaderRevealed ? "revealed" : ""}`}
        >
          <h2 className="font-headline-display text-2xl md:text-headline-display text-white font-bold mb-4">
            Nuestro Modelo de Atención
          </h2>
          <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Acompañamos a cada paciente en un proceso integral diseñado para identificar su problema y brindarle la solución en un mismo lugar.
          </p>
        </div>

        <div
          ref={circuitoCardsRef}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {/* Step 1 */}
          <div
            className={`bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-lg flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 reveal-fade-up transition-delay-150 ${circuitoCardsRevealed ? "revealed" : ""}`}
          >
            <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-headline-md text-xl font-extrabold shadow-lg shadow-secondary/20 shrink-0">
              1
            </div>
            <h3 className="font-headline-md text-lg font-bold text-white">
              Consulta Especializada
            </h3>
            <p className="font-body-md text-sm text-white/70 leading-relaxed">
              Evaluación detallada con médicos referentes en su área de
              especialidad.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className={`bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-lg flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 reveal-fade-up transition-delay-225 ${circuitoCardsRevealed ? "revealed" : ""}`}
          >
            <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-headline-md text-xl font-extrabold shadow-lg shadow-secondary/20 shrink-0">
              2
            </div>
            <h3 className="font-headline-md text-lg font-bold text-white">
              Diagnóstico Integrado
            </h3>
            <p className="font-body-md text-sm text-white/70 leading-relaxed">
              Realización de estudios en el mismo centro, con resultados
              compartidos internamente.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className={`bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-lg flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 reveal-fade-up transition-delay-300 ${circuitoCardsRevealed ? "revealed" : ""}`}
          >
            <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-headline-md text-xl font-extrabold shadow-lg shadow-secondary/20 shrink-0">
              3
            </div>
            <h3 className="font-headline-md text-lg font-bold text-white">
              Seguimiento Continuo
            </h3>
            <p className="font-body-md text-sm text-white/70 leading-relaxed">
              Control evolutivo y coordinación entre distintas disciplinas si el
              caso lo requiere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
