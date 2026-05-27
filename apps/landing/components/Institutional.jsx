"use client";

import {
  MdOutlineTrackChanges,
  MdOutlineVisibility,
  MdOutlineWorkspacePremium,
  MdOutlineFavoriteBorder,
  MdOutlineSettings,
  MdOutlineGroups,
  MdOutlineLightbulb,
  MdOutlineTrendingUp,
} from "react-icons/md";
import useScrollReveal from "../app/hooks/useScrollReveal";

export default function Institutional() {
  const [headerRef, headerRevealed] = useScrollReveal(
    0.1,
    "0px 0px -100px 0px",
  );
  const [misionRef, misionRevealed] = useScrollReveal(
    0.15,
    "0px 0px -150px 0px",
  );
  const [visionRef, visionRevealed] = useScrollReveal(
    0.15,
    "0px 0px -150px 0px",
  );
  const [valuesHeaderRef, valuesHeaderRevealed] = useScrollReveal(
    0.1,
    "0px 0px -100px 0px",
  );
  const [valuesGridRef, valuesGridRevealed] = useScrollReveal(
    0.1,
    "0px 0px -120px 0px",
  );

  const values = [
    {
      title: "Calidad Asistencial",
      description:
        "Búsqueda incansable de la excelencia clínica y precisión diagnóstica para tu total tranquilidad y seguridad.",
      icon: MdOutlineWorkspacePremium,
    },
    {
      title: "Centralidad en el Paciente",
      description:
        "Priorizamos tu bienestar y comodidad con un trato humano, empático, cercano y completamente personalizado.",
      icon: MdOutlineFavoriteBorder,
    },
    {
      title: "Eficiencia Operativa",
      description:
        "Circuitos ágiles e integrados diseñados para optimizar tu tiempo, unificando consultas y estudios sin demoras.",
      icon: MdOutlineSettings,
    },
    {
      title: "Trabajo en Equipo",
      description:
        "Especialistas coordinados de manera interdisciplinaria enfocados en ofrecerte la mejor solución médica.",
      icon: MdOutlineGroups,
    },
    {
      title: "Innovación y Tecnología",
      description:
        "Inversión continua en equipamiento médico de última generación para brindarte diagnósticos con el más alto estándar.",
      icon: MdOutlineLightbulb,
    },
    {
      title: "Transparencia y Gestión",
      description:
        "Prácticas transparentes y una administración médica honesta que genera la máxima confianza en nuestra comunidad.",
      icon: MdOutlineTrendingUp,
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
      className="bg-linear-to-b from-tertiary/30 via-white to-tertiary/20 py-12 md:py-16 border-t border-neutral/10 relative overflow-hidden"
      id="institucional"
    >
      {/* Subtle organic background blobs for depth */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl translate-x-1/3 pointer-events-none" />

      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-10 md:gap-12 relative z-10">
        {/* Header Block */}
        <div
          ref={headerRef}
          className={`text-center flex flex-col items-center gap-4 reveal-fade-up ${headerRevealed ? "revealed" : ""}`}
        >
          <h2 className="font-headline-lg text-headline-lg text-2xl font-bold text-primary tracking-tight">
            Identidad Institucional
          </h2>
          <p className="font-body-lg text-body-lg text-neutral max-w-2xl mx-auto">
            Los pilares fundamentales que guían nuestro compromiso profesional,
            operativo y humano con cada uno de nuestros pacientes.
          </p>
        </div>

        {/* Mission and Vision Stack (Offset and Mirrored / Espejo) */}
        <div className="flex flex-col gap-8 w-full">
          {/* Misión Card (Left aligned, standard order) */}
          <div
            ref={misionRef}
            className={`w-full lg:max-w-3xl self-start bg-white/80 backdrop-blur-md border border-neutral/10 border-l-4 border-l-primary p-8 rounded-3xl shadow-[0_4px_20px_rgba(11,59,140,0.015)] flex flex-col sm:flex-row gap-6 items-start translate-x-0 transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_12px_30px_rgba(11,59,140,0.04)] group reveal-fade-up ${misionRevealed ? "revealed" : ""}`}
          >
            <div className="bg-primary/5 text-primary w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MdOutlineTrackChanges size={28} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Misión
              </h3>
              <p className="font-body-md text-body-md text-neutral leading-relaxed">
                Brindar atención médica ambulatoria de calidad, accesible y
                centrada en el paciente, con foco en la resolución rápida, la
                excelencia diagnóstica y un trato humanizado, integrando
                consulta médica y diagnóstico en un mismo circuito eficiente.
              </p>
            </div>
          </div>

          {/* Visión Card (Right aligned, mirrored order) */}
          <div
            ref={visionRef}
            className={`w-full lg:max-w-3xl self-end bg-white/80 backdrop-blur-md border border-neutral/10 border-r-4 border-r-secondary p-8 rounded-3xl shadow-[0_4px_20px_rgba(11,59,140,0.015)] flex flex-col sm:flex-row-reverse gap-6 items-start translate-x-0 transition-all duration-300 hover:-translate-x-1.5 hover:shadow-[0_12px_30px_rgba(11,59,140,0.04)] group text-left sm:text-right reveal-fade-up ${visionRevealed ? "revealed" : ""}`}
          >
            <div className="bg-secondary/10 text-secondary w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <MdOutlineVisibility size={28} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Visión
              </h3>
              <p className="font-body-md text-body-md text-neutral leading-relaxed">
                Consolidarnos como el centro médico de referencia en la zona sur
                para el diagnóstico integral ambulatorio, proyectando una
                evolución constante mediante innovación tecnológica, expansión
                de servicios y reconocimiento por eficiencia operativa, calidad
                médica y bienestar integral del paciente.
              </p>
            </div>
          </div>
        </div>

        {/* Values Block */}
        <div className="flex flex-col gap-8 w-full border-t border-neutral/10 pt-10 md:pt-12">
          <div
            ref={valuesHeaderRef}
            className={`text-center flex flex-col items-center gap-3 reveal-fade-up ${valuesHeaderRevealed ? "revealed" : ""}`}
          >
            <h2 className="font-headline-lg text-headline-lg text-2xl font-bold text-primary tracking-tight">
              Nuestros Valores
            </h2>
          </div>

          {/* Values Grid */}
          <div
            ref={valuesGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              const delayClass = delayClasses[idx % delayClasses.length];
              return (
                <div
                  key={idx}
                  className={`bg-white border border-neutral/10 p-6 rounded-3xl shadow-[0_4px_12px_rgba(11,59,140,0.01)] flex flex-col gap-5 translate-y-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(11,59,140,0.04)] group reveal-fade-up ${delayClass} ${valuesGridRevealed ? "revealed" : ""}`}
                >
                  <div className="text-secondary bg-secondary/5 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-primary font-bold text-base md:text-lg tracking-tight font-headline-md">
                      {val.title}
                    </h4>
                    <p className="text-neutral font-body-md text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
