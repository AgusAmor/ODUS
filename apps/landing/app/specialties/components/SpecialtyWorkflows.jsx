"use client";

import useScrollReveal from "../../hooks/useScrollReveal";
import { MdOutlineMonitorHeart, MdOutlinePregnantWoman } from "react-icons/md";

const workflows = {
  cardiology: {
    title: "Tu Circuito Cardiológico",
    icon: <MdOutlineMonitorHeart size={24} />,
    themeClass: "bg-primary text-white",
    borderClass: "border-primary",
    textClass: "text-primary",
    steps: [
      {
        title: "Consulta Inicial",
        description: "Evaluación detallada de factores de riesgo y síntomas con nuestros especialistas en un primer contacto.",
      },
      {
        title: "Estudios Específicos",
        description: "Realización in-situ de Electrocardiograma, Eco Doppler y Ergometría, según la necesidad clínica.",
      },
      {
        title: "Plan de Tratamiento",
        description: "Análisis de resultados en el mismo día y trazado de un plan de cuidado cardiovascular continuo.",
      }
    ]
  },
  gynecology: {
    title: "Tu Circuito Ginecológico",
    icon: <MdOutlinePregnantWoman size={24} />,
    themeClass: "bg-secondary text-primary",
    borderClass: "border-secondary",
    textClass: "text-secondary",
    steps: [
      {
        title: "Control y Consulta",
        description: "Entrevista médica en un ambiente seguro para tu control anual o seguimiento de síntomas.",
      },
      {
        title: "Estudios Complementarios",
        description: "Realización de Papanicolau, Colposcopía y Ecografías con equipamiento de alta definición.",
      },
      {
        title: "Diagnóstico y Prevención",
        description: "Entrega de resultados, diagnóstico preciso y pautas de prevención personalizadas.",
      }
    ]
  }
};

export default function SpecialtyWorkflows() {
  const [headerRef, headerRevealed] = useScrollReveal(0.1, "0px 0px -100px 0px");
  const [contentRef, contentRevealed] = useScrollReveal(0.15, "0px 0px -100px 0px");

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-tertiary">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade-up ${headerRevealed ? "revealed" : ""}`}
        >
          <h2 className="font-headline-display text-2xl md:text-3xl text-primary font-bold mb-4">
            Flujos de Atención por Especialidad
          </h2>
          <p className="font-body-lg text-body-lg text-neutral max-w-2xl mx-auto leading-relaxed">
            Conocé cómo adaptamos nuestro modelo de atención integral a las necesidades específicas de cada área médica.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-fade-up transition-delay-150 ${contentRevealed ? "revealed" : ""}`}
        >
          {Object.entries(workflows).map(([key, workflow], colIndex) => (
            <div key={key} className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(11,59,140,0.04)] border border-neutral/5 p-8 md:p-10 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-10 flex items-center gap-4 border-b border-neutral/10 pb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${workflow.themeClass}`}>
                  {workflow.icon}
                </div>
                <h3 className={`font-headline-md text-xl md:text-2xl font-bold ${workflow.textClass}`}>
                  {workflow.title}
                </h3>
              </div>

              <div className="relative pl-8 md:pl-10 space-y-10 border-l-2 border-neutral/10 ml-2">
                {workflow.steps.map((step, index) => (
                  <div key={`${key}-${index}`} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-11 md:-left-13 top-0 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center text-sm font-bold shadow-sm ${workflow.themeClass}`}>
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h4 className={`font-headline-md text-lg font-bold mb-2 ${workflow.textClass}`}>
                        {step.title}
                      </h4>
                      <p className="font-body-md text-neutral leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
