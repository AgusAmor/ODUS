"use client";

export default function SpecialtiesCircuit({
  circuitoHeaderRef,
  circuitoHeaderRevealed,
  circuitoCardsRef,
  circuitoCardsRevealed,
}) {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-tertiary">
      <div className="max-w-container-max-width mx-auto">
        <div
          ref={circuitoHeaderRef}
          className={`text-center mb-16 reveal-fade-up ${circuitoHeaderRevealed ? "revealed" : ""}`}
        >
          <h2 className="font-headline-display text-2xl md:text-headline-display text-primary font-bold mb-4">
            Tu Circuito de Salud
          </h2>
          <p className="font-body-lg text-body-lg text-neutral max-w-2xl mx-auto leading-relaxed">
            Así es como coordinamos nuestras especialidades para ofrecerte una
            atención fluida y sin interrupciones.
          </p>
        </div>

        <div
          ref={circuitoCardsRef}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {/* Step 1 */}
          <div
            className={`bg-white rounded-3xl p-6 border border-neutral/10 shadow-[0_4px_12px_rgba(11,59,140,0.01)] flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-all duration-300 reveal-fade-up transition-delay-150 ${circuitoCardsRevealed ? "revealed" : ""}`}
          >
            <div className="w-14 h-14 rounded-full bg-primary/80 text-white flex items-center justify-center font-headline-md text-xl font-bold shadow-md shadow-primary/10 shrink-0">
              1
            </div>
            <h3 className="font-headline-md text-lg font-bold text-primary">
              Consulta Especializada
            </h3>
            <p className="font-body-md text-sm text-neutral leading-relaxed">
              Evaluación detallada con médicos referentes en su área de
              especialidad.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className={`bg-white rounded-3xl p-6 border border-neutral/10 shadow-[0_4px_12px_rgba(11,59,140,0.01)] flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-all duration-300 reveal-fade-up transition-delay-225 ${circuitoCardsRevealed ? "revealed" : ""}`}
          >
            <div className="w-14 h-14 rounded-full bg-primary/60 text-white flex items-center justify-center font-headline-md text-xl font-bold shadow-md shadow-primary/5 shrink-0">
              2
            </div>
            <h3 className="font-headline-md text-lg font-bold text-primary">
              Diagnóstico Integrado
            </h3>
            <p className="font-body-md text-sm text-neutral leading-relaxed">
              Realización de estudios en el mismo centro, con resultados
              compartidos internamente.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className={`bg-white rounded-3xl p-6 border border-neutral/10 shadow-[0_4px_12px_rgba(11,59,140,0.01)] flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-all duration-300 reveal-fade-up transition-delay-300 ${circuitoCardsRevealed ? "revealed" : ""}`}
          >
            <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-headline-md text-xl font-bold shadow-md shadow-secondary/20 shrink-0">
              3
            </div>
            <h3 className="font-headline-md text-lg font-bold text-primary">
              Seguimiento Continuo
            </h3>
            <p className="font-body-md text-sm text-neutral leading-relaxed">
              Control evolutivo y coordinación entre distintas disciplinas si el
              caso lo requiere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
