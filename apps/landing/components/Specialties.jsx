"use client";

import { useState } from "react";
import {
  MdOutlineMonitorHeart,
  MdOutlinePregnantWoman,
  MdOutlineHearing,
  MdOutlineFavoriteBorder,
  MdOutlineFemale,
  MdOutlineRadar,
} from "react-icons/md";
import SpecialtyModal from "./SpecialtyModal";
import useScrollReveal from "../app/hooks/useScrollReveal";

export default function Specialties() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [sectionRef, isRevealed] = useScrollReveal();

  const specialties = [
    {
      title: "Cardiología",
      description:
        "Evaluación integral del sistema cardiovascular para prevenir, diagnosticar y tratar afecciones del corazón.",
      icon: MdOutlineMonitorHeart,
      hasModal: true,
      procedures: [
        "Consulta cardiológica",
        "Holter cardíaco 24hs",
        "Holter de presión 24hs (Presurometría / M.A.P.A.)",
        "Ergometría",
      ],
    },
    {
      title: "Ginecología",
      description:
        "Atención especializada y cuidado integral de las necesidades unicas de la salud femenina.",
      icon: MdOutlinePregnantWoman,
      hasModal: true,
      procedures: [
        "Consulta ginecológica",
        "PAP (Papanicolaou)",
        "Colposcopía",
      ],
    },
    {
      title: "Otorrinolaringología",
      description:
        "Diagnóstico y tratamiento de patologías de oído, nariz y garganta.",
      icon: MdOutlineHearing,
      hasModal: true,
      procedures: [
        "Consulta general",
        "Otomicroscopía",
        "Extracción de cerumen",
        "Rinofibrolaringoscopía",
        "Endoscopía simple nasal",
        "Taponamiento nasal anterior",
        "Extracción de cuerpo extraño de conducto auditivo externo (CAE)",
      ],
    },
    {
      title: "Eco Doppler",
      description:
        "Estudios de alta precisión para evaluar el sistema cardiovascular y el flujo sanguíneo de arterias y venas.",
      substudies: [
        {
          title: "Cardíaco Color",
          description:
            "Evaluación del flujo sanguíneo y de la estructura del corazón con tecnología de ultrasonido.",
        },
        {
          title: "Vascular Periférico",
          description:
            "Estudio circulatorio para diagnosticar patologías arteriales y venosas.",
        },
      ],
      icon: MdOutlineFavoriteBorder,
      hasModal: true,
      procedures: [
        "Cardíaco Color",
        "Vasos de cuello",
        "Aorta abdominal",
        "Aorta toracica",
        "Arterial de miembos inferiores",
        "Arterial de miembos superiores",
        "Venoso de miembos superiores",
        "Renal arterial",
        "Otros estudios Doppler especializados",
      ],
    },
    {
      title: "Mamografía",
      description:
        "Estudios de alta precisión para la detección temprana y prevención de afecciones mamarias.",
      icon: MdOutlineFemale,
      hasModal: false,
    },
    {
      title: "Ecografía General",
      description:
        "Exploración detallada y no invasiva de órganos internos y tejidos blandos mediante tecnología de ultrasonido.",
      icon: MdOutlineRadar,
      hasModal: true,
      procedures: [
        "Se realizan todo tipo de ecografías diagnósticas y de control.",
      ],
    },
  ];

  const delayClasses = [
    "transition-delay-75",
    "transition-delay-150",
    "transition-delay-225",
    "transition-delay-300",
    "transition-delay-375",
    "transition-delay-450",
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-tertiary/50 py-12 md:py-16"
      id="especialidades"
    >
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div
          className={`text-center mb-12 reveal-fade-up ${isRevealed ? "revealed" : ""}`}
        >
          <h2 className="font-headline-display text-2xl font-bold text-primary mb-4">
            Especialidades Médicas
          </h2>
          <p className="font-body-lg text-body-lg text-neutral max-w-2xl mx-auto">
            Cobertura integral con profesionales de primer nivel, enfocados en
            un diagnóstico preciso y un tratamiento compasivo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {specialties.map((specialty, idx) => {
            const Icon = specialty.icon;
            const CardComponent = specialty.hasModal ? "div" : "div";
            const delayClass = delayClasses[idx % delayClasses.length];

            return (
              <CardComponent
                key={idx}
                onClick={() => {
                  if (specialty.hasModal) setSelectedSpecialty(specialty);
                }}
                className={`bg-white rounded-3xl p-6 border border-neutral/20 shadow-[0_4px_12px_rgba(11,59,140,0.04)] flex flex-col items-start gap-4 translate-y-0 transition-all duration-300 group reveal-fade-up ${delayClass} ${isRevealed ? "revealed" : ""} ${
                  specialty.hasModal
                    ? "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,59_140,0.08)] cursor-pointer"
                    : "cursor-default select-none"
                }`}
              >
                <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  {specialty.title}
                </h3>
                {specialty.substudies ? (
                  <div className="flex flex-col gap-4 w-full mt-1">
                    {specialty.substudies.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="border-t border-neutral/10 pt-3 first:border-0 first:pt-0"
                      >
                        <h4 className="font-bold text-sm text-primary mb-1 uppercase tracking-wide">
                          {sub.title}
                        </h4>
                        <p className="font-body-md text-body-md text-neutral">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-body-md text-body-md text-neutral">
                    {specialty.description}
                  </p>
                )}

                {/* Click for info indicator */}
                {specialty.hasModal && (
                  <div className="mt-auto w-full pt-4 border-t border-dashed border-neutral/10 flex justify-center items-center text-xs font-bold text-neutral/60 group-hover:text-secondary transition-colors uppercase tracking-wider">
                    Click para más información
                  </div>
                )}
              </CardComponent>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog */}
      <SpecialtyModal
        specialty={selectedSpecialty}
        onClose={() => setSelectedSpecialty(null)}
      />
    </section>
  );
}
