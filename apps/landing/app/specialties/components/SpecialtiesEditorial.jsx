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
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center reveal-fade-up ${cardioRevealed ? "revealed" : ""}`}
        >
          {/* Image Wrapper */}
          <div className="relative h-64 sm:h-80 lg:h-100 group mb-6 md:mb-0">
            {/* Cropped Image Container */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(11,59,140,0.03)] border border-neutral/10 hover:scale-[1.01] transition-transform duration-300">
              <img
                alt="Cardiología ecógrafo monitoreo cardíaco ODUS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/cardiology.png"
              />
            </div>
            {/* Mobile Glassmorphic Overlay (Hero Style - Pop-out) */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 md:hidden bg-white/95 backdrop-blur-xl p-3 pr-6 rounded-2xl border border-neutral/20 shadow-md flex items-center gap-4 z-30">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MdOutlineMonitorHeart size={24} />
              </div>
              <h2 className="font-headline-md text-lg text-primary font-extrabold leading-tight tracking-tight">
                Cardiología
              </h2>
            </div>
          </div>
          {/* Text Wrapper */}
          <div className="flex flex-col items-start">
            {/* Desktop Icon & Title */}
            <div className="hidden md:flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shadow-sm shrink-0">
                <MdOutlineMonitorHeart size={32} />
              </div>
              <h2 className="font-headline-display text-xl lg:text-3xl text-primary font-extrabold tracking-tight">
                Cardiología
              </h2>
            </div>
            {/* Description */}
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
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center reveal-fade-up ${gineaRevealed ? "revealed" : ""}`}
        >
          {/* Text Wrapper (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="order-2 md:order-1 flex flex-col items-start">
            {/* Desktop Icon & Title */}
            <div className="hidden md:flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-sm shrink-0">
                <MdOutlinePregnantWoman size={32} />
              </div>
              <h2 className="font-headline-display text-xl lg:text-3xl text-primary font-extrabold tracking-tight">
                Ginecología
              </h2>
            </div>
            {/* Description */}
            <p className="font-body-md text-body-md text-neutral mb-6 leading-relaxed">
              Entendemos las necesidades unicas de la salud femenina. Nuestro
              equipo te acompaña con calidez, respeto y profesionalismo desde
              las primeras consultas. Brindamos un espacio seguro donde escuchar
              tu cuerpo es nuestra prioridad.
            </p>
          </div>
          {/* Image Wrapper (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="relative h-64 sm:h-80 lg:h-100 group order-1 md:order-2 mb-6 md:mb-0">
            {/* Cropped Image Container */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(11,59,140,0.03)] border border-neutral/10 hover:scale-[1.01] transition-transform duration-300">
              <img
                alt="Ginecología transductor ecógrafo ODUS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/gynecology.png"
              />
            </div>
            {/* Mobile Glassmorphic Overlay (Hero Style - Pop-out) */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 md:hidden bg-white/95 backdrop-blur-xl p-3 pr-6 rounded-2xl border border-neutral/20 shadow-md flex items-center gap-4 z-30">
              <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                <MdOutlinePregnantWoman size={24} />
              </div>
              <h2 className="font-headline-md text-lg text-primary font-extrabold leading-tight tracking-tight">
                Ginecología
              </h2>
            </div>
          </div>
        </div>

        {/* Otorrinolaringología Row */}
        <div
          ref={otoriRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center reveal-fade-up ${otoriRevealed ? "revealed" : ""}`}
        >
          {/* Image Wrapper */}
          <div className="relative h-64 sm:h-80 lg:h-100 group mb-6 md:mb-0">
            {/* Cropped Image Container */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(11,59,140,0.03)] border border-neutral/10 hover:scale-[1.01] transition-transform duration-300">
              <img
                alt="Otorrinolaringología instrumental otoscopio ODUS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/ent.png"
              />
            </div>
            {/* Mobile Glassmorphic Overlay (Hero Style - Pop-out) */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 md:hidden bg-white/95 backdrop-blur-xl p-3 pr-6 rounded-2xl border border-neutral/20 shadow-md flex items-center gap-4 z-30">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MdOutlineHearing size={24} />
              </div>
              <h2 className="font-headline-md text-lg text-primary font-extrabold leading-tight tracking-tight">
                Otorrinolaringología
              </h2>
            </div>
          </div>
          {/* Text Wrapper */}
          <div className="flex flex-col items-start">
            {/* Desktop Icon & Title */}
            <div className="hidden md:flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shadow-sm shrink-0">
                <MdOutlineHearing size={32} />
              </div>
              <h2 className="font-headline-display text-xl lg:text-3xl text-primary font-extrabold tracking-tight">
                Otorrinolaringología
              </h2>
            </div>
            {/* Description */}
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
