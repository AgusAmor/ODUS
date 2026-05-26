"use client";

import { MdChevronRight, MdOutlineLocalHospital } from "react-icons/md";
import Link from "next/link";

export default function SpecialtiesFacilities({ tecRef, tecRevealed }) {
  return (
    <section
      ref={tecRef}
      className={`py-section-gap px-margin-mobile md:px-margin-desktop bg-tertiary/30 overflow-hidden relative reveal-fade-up ${tecRevealed ? "revealed" : ""}`}
    >
      {/* Decorative subtle background blob */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-60 -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-container-max-width mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start pr-lg-8">
            <h2 className="font-headline-display text-3xl md:text-headline-display text-primary font-extrabold mb-6 leading-tight tracking-tight">
              Nuestras Instalaciones
            </h2>

            {/* Opacity dots indicators */}
            <div className="flex gap-2.5 mb-8">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="w-3 h-3 rounded-full bg-primary/60"></span>
              <span className="w-3 h-3 rounded-full bg-primary/30"></span>
            </div>

            {/* Reception Block */}
            <div className="flex gap-4 items-start mb-6 group text-left">
              <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MdChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div>
                <h3 className="text-primary font-bold text-lg mb-2 font-headline-md">
                  Recepción Moderna y Acogedora
                </h3>
                <p className="text-neutral text-sm leading-relaxed">
                  Espacios diseñados para tu comodidad desde el primer momento. Nuestra recepción combina calidez y profesionalismo para una experiencia sumamente agradable.
                </p>
              </div>
            </div>

            {/* Technology & Comfort Block */}
            <div className="flex gap-4 items-start mb-8 group text-left">
              <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MdChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div>
                <h3 className="text-primary font-bold text-lg mb-2 font-headline-md">
                  Tecnología y Confort
                </h3>
                <p className="text-neutral text-sm leading-relaxed">
                  Salas de diagnóstico equipadas con tecnología de precisión y consultorios diseñados detalladamente para tu absoluto bienestar y tranquilidad.
                </p>
              </div>
            </div>

            <Link
              href="/centers"
              className="bg-primary text-white font-label-md text-label-md px-8 py-4 rounded-2xl hover:scale-95 transition-transform duration-200 shadow-sm inline-block cursor-pointer"
            >
              Ver Sedes
            </Link>
          </div>

          {/* Asymmetric Imagery Grid with overlapping slide circular badge */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-2 gap-6 items-center">
              
              {/* Image 1: Reception with absolute round hospital circle overlay */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden h-100 shadow-[0_8px_24px_rgba(11,59,140,0.02)] border border-neutral/10 hover:scale-[1.01] transition-transform duration-300">
                  <img
                    alt="Recepción moderna y acogedora de la clínica ODUS"
                    className="w-full h-full object-cover"
                    src="/images/reception.png"
                  />
                </div>
                {/* Visual Circle Badge from Slide */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center text-secondary z-20 hover:scale-110 transition-transform duration-300">
                  <MdOutlineLocalHospital size={20} />
                </div>
              </div>

              {/* Image 2: Comfort Equipment with offset spacing */}
              <div className="rounded-3xl overflow-hidden h-100 shadow-[0_8px_24px_rgba(11,59,140,0.02)] border border-neutral/10 mt-12 hover:scale-[1.01] transition-transform duration-300">
                <img
                  alt="Tecnología de diagnóstico y confort en consultorio ODUS"
                  className="w-full h-full object-cover"
                  src="/images/comfort.png"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
