"use client";

import useScrollReveal from "../../hooks/useScrollReveal";
import { MdOutlineMonitorHeart, MdOutlinePregnantWoman } from "react-icons/md";

const workflows = {
  cardiology: {
    title: "Tu Circuito Cardiológico",
    icon: <MdOutlineMonitorHeart size={24} />,
    themeClass: "bg-white text-primary",
    borderClass: "border-white",
    textClass: "text-white",
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
    textClass: "text-white",
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
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden">
      {/* Dark mode background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-1/2 h-full bg-secondary rounded-full filter blur-[150px] -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade-up ${headerRevealed ? "revealed" : ""}`}
        >
          <h2 className="font-headline-display text-2xl md:text-3xl text-white font-bold mb-4">
            Tu Circuito de Salud
          </h2>
          <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Conocé cómo adaptamos nuestro modelo de atención integral a las necesidades específicas de cada área médica.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-fade-up transition-delay-150 ${contentRevealed ? "revealed" : ""}`}
        >
          {Object.entries(workflows).map(([key, workflow], colIndex) => (
            <div key={key} className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-10 shadow-lg hover:bg-white/10 transition-all duration-300">
              <div className="mb-10 flex items-center gap-4 border-b border-white/10 pb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shrink-0 ${workflow.themeClass}`}>
                  {workflow.icon}
                </div>
                <h3 className={`font-headline-md text-xl md:text-2xl font-bold ${workflow.textClass}`}>
                  {workflow.title}
                </h3>
              </div>

              <div className="relative pl-8 md:pl-10 space-y-10 border-l-2 border-white/10 ml-2">
                {workflow.steps.map((step, index) => (
                  <div key={`${key}-${index}`} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-11 md:-left-13 top-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-${workflow.themeClass.split(' ')[0].replace('bg-','')}/20 ${workflow.themeClass}`}>
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h4 className={`font-headline-md text-lg font-bold mb-2 ${workflow.textClass}`}>
                        {step.title}
                      </h4>
                      <p className="font-body-md text-white/70 leading-relaxed">
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
