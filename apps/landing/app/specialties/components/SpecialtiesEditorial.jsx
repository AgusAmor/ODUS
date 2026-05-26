"use client";

import {
  MdOutlineMonitorHeart,
  MdOutlinePregnantWoman,
  MdOutlineHearing,
} from "react-icons/md";

export default function SpecialtiesEditorial({
  cardioRef,
  cardioRevealed,
  gineaRef,
  gineaRevealed,
  otoriRef,
  otoriRevealed,
}) {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-white">
      <div className="max-w-container-max-width mx-auto flex flex-col gap-24">
        {/* Cardiología Row */}
        <div
          ref={cardioRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-fade-up ${cardioRevealed ? "revealed" : ""}`}
        >
          <div className="rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(11,59,140,0.03)] border border-neutral/10 h-100 hover:scale-[1.01] transition-transform duration-300 group">
            <img
              alt="Cardiología ecógrafo monitoreo cardíaco ODUS"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/images/cardiology.png"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 shadow-sm">
              <MdOutlineMonitorHeart size={28} />
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
              Cardiología: Prevención y atención de patologías complejas
            </h2>
            <p className="font-body-md text-body-md text-neutral mb-6 leading-relaxed">
              Tu corazón es el motor de tu bienestar. En ODUS, no solo tratamos
              afecciones, sino que nos enfocamos en la prevención activa y el
              seguimiento riguroso de tu salud cardiovascular. Evaluamos tus
              factores de riesgo y diseñamos un plan a medida, apoyados en
              tecnología de última generación para garantizar tranquilidad en
              cada latido.
            </p>
          </div>
        </div>

        {/* Ginecología Row */}
        <div
          ref={gineaRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-fade-up ${gineaRevealed ? "revealed" : ""}`}
        >
          <div className="order-2 md:order-1 flex flex-col items-start">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 shadow-sm">
              <MdOutlinePregnantWoman size={28} />
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
              Ginecología
            </h2>
            <p className="font-body-md text-body-md text-neutral mb-6 leading-relaxed">
              Entendemos las necesidades unicas de la salud femenina. Nuestro
              equipo te acompaña con calidez, respeto y profesionalismo desde
              las primeras consultas. Brindamos un espacio seguro donde escuchar
              tu cuerpo es nuestra prioridad.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(11,59,140,0.03)] border border-neutral/10 h-100 order-1 md:order-2 hover:scale-[1.01] transition-transform duration-300 group">
            <img
              alt="Ginecología transductor ecógrafo ODUS"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/images/gynecology.png"
            />
          </div>
        </div>

        {/* Otorrinolaringología Row */}
        <div
          ref={otoriRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-fade-up ${otoriRevealed ? "revealed" : ""}`}
        >
          <div className="rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(11,59,140,0.03)] border border-neutral/10 h-100 hover:scale-[1.01] transition-transform duration-300 group">
            <img
              alt="Otorrinolaringología instrumental otoscopio ODUS"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/images/ent.png"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 shadow-sm">
              <MdOutlineHearing size={28} />
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">
              Otorrinolaringología
            </h2>
            <p className="font-body-md text-body-md text-neutral mb-6 leading-relaxed">
              Respirar bien, escuchar con claridad y comunicarte sin barreras es
              fundamental. Abordamos patologías de oído, nariz y garganta con
              diagnósticos precisos y tratamientos efectivos, devolviéndote el
              confort diario que mereces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
