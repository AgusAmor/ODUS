"use client";

import { MdChevronRight, MdOutlineLocalHospital } from "react-icons/md";

export default function AboutFacilities({ facilitiesRef, facilitiesRevealed }) {
  return (
    <section
      ref={facilitiesRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative py-12 reveal-fade-up ${facilitiesRevealed ? "revealed" : ""}`}
    >
      {/* Left Column: Overlapping Asymmetric Imagery Grid */}
      <div className="relative order-2 lg:order-1 h-150 w-full shrink-0">
        {/* Background Image: Reception desk */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-tr-4xl rounded-bl-4xl rounded-tl-xl rounded-br-xl overflow-hidden shadow-md border border-neutral/10 hover:scale-[1.01] transition-transform duration-300 z-0">
          <img
            alt="Recepción moderna y acogedora de la clínica ODUS"
            className="w-full h-full object-cover"
            src="/images/reception.png"
          />
        </div>

        {/* Foreground Overlapping Image: Diagnostic equipment */}
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-bl-4xl rounded-tr-4xl rounded-br-xl rounded-tl-xl overflow-hidden shadow-xl border-4 border-white hover:scale-[1.01] transition-transform duration-300 z-10">
          <img
            alt="Equipamiento clínico de precisión en ODUS"
            className="w-full h-full object-cover"
            src="/images/comfort.png"
          />
        </div>

        {/* Floating circular icon badge */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-16 h-16 rounded-full shadow-lg border-4 border-white flex items-center justify-center hover:scale-110 transition-transform duration-300 z-20">
          <MdOutlineLocalHospital size={26} className="text-secondary" />
        </div>
      </div>

      {/* Right Column: Text and descriptions */}
      <div className="flex flex-col gap-8 order-1 lg:order-2 text-left items-start">
        <div>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-primary font-bold mb-2">
            Nuestras Instalaciones
          </h2>
        </div>

        {/* Recepción */}
        <div className="flex gap-4 items-start group">
          <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <MdChevronRight
              size={22}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-md text-lg text-primary font-bold">
              Recepción Moderna y Acogedora
            </h3>
            <p className="font-body-md text-sm md:text-base text-neutral leading-relaxed">
              Espacios diseñados para tu comodidad desde el primer momento.
              Nuestra recepción combina calidez y profesionalismo para una
              experiencia agradable.
            </p>
          </div>
        </div>

        {/* Tecnología */}
        <div className="flex gap-4 items-start group">
          <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <MdChevronRight
              size={22}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-md text-lg text-primary font-bold">
              Tecnología y Confort
            </h3>
            <p className="font-body-md text-sm md:text-base text-neutral leading-relaxed">
              Salas de diagnóstico equipadas con tecnología de última generación
              y consultorios diseñados detalladamente para tu absoluto bienestar
              y tranquilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
