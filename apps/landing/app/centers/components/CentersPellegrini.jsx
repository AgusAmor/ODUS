"use client";

import {
  MdCalendarMonth,
  MdOutlineMap,
  MdOutlineLocalHospital,
  MdOutlineAssignment,
  MdCheckCircle,
  MdOutlineLocationOn,
  MdOutlineAccessTime,
} from "react-icons/md";

export default function CentersPellegrini({
  pellegriniRef,
  pellegriniRevealed,
}) {
  return (
    <section
      ref={pellegriniRef}
      id="sede-pellegrini"
      className={`flex flex-col gap-8 pt-0 scroll-mt-24 md:scroll-mt-28 select-none cursor-default reveal-fade-up ${pellegriniRevealed ? "revealed" : ""}`}
    >
      {/* Header Info */}
      <div className="flex flex-col gap-2 items-start text-left">
        <h2 className="font-headline-lg text-2xl text-primary font-bold">
          Sede Pellegrini
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral font-body-md mt-1 items-center">
          <p className="flex items-center gap-1.5">
            <MdOutlineLocationOn size={18} className="text-primary shrink-0" />
            <span>Av. Pellegrini 1234, Centro</span>
          </p>
          <span className="hidden md:inline text-neutral/45">|</span>
          <p className="flex items-center gap-1.5">
            <MdOutlineAccessTime size={18} className="text-primary shrink-0" />
            <span>Lunes a Viernes 9:00 a 18:00hs</span>
          </p>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Left Side: Main Hallway Image */}
        <div className="rounded-4xl overflow-hidden shadow-[0_8px_24px_rgba(11,59,140,0.02)] border border-neutral/10 relative hover:scale-[1.01] transition-transform duration-300 min-h-64 md:min-h-80 lg:min-h-112.5">
          <img
            alt="Pasillo moderno e iluminado de Sede Pellegrini ODUS"
            className="w-full h-full object-cover"
            src="/images/centers_hallway.png"
          />
        </div>

        {/* Right Side: Specialties & Booking details */}
        <div className="flex flex-col gap-4 md:gap-8 justify-between">
          {/* Booking Card */}
          <div className="bg-primary text-white rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start gap-4 md:gap-6 shadow-xl relative overflow-hidden ring-4 ring-primary/5 grow group text-left">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>

            <div className="z-10 w-full">
              <div className="flex items-center gap-4 mb-4">
                <MdCalendarMonth
                  size={40}
                  className="text-secondary shrink-0"
                />
                <h4 className="font-headline-md text-lg md:text-xl lg:text-xl leading-tight font-extrabold">
                  Agenda tu visita
                </h4>
              </div>
              <p className="font-body-md text-sm md:text-base text-white/80 mb-5 md:mb-8 max-w-md leading-relaxed">
                Reserva hoy mismo tu turno en Sede Pellegrini para diagnóstico o
                consulta con nuestros especialistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a
                  href="https://wa.me/5491128331920"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary py-4 px-8 rounded-2xl font-label-md text-label-md font-bold hover:bg-tertiary hover:scale-95 transition-all shadow-md active:scale-95 grow cursor-pointer text-center inline-block"
                >
                  Agendar turno
                </a>
                {/* <a
                  href="https://maps.google.com/?q=Pellegrini+Quilmes+ODUS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 border border-white/20 text-white py-4 px-8 rounded-2xl font-label-md text-label-md font-bold hover:bg-white/20 hover:scale-95 transition-all flex justify-center items-center gap-2 grow cursor-pointer text-center"
                >
                  <MdOutlineMap size={20} />
                  Cómo llegar
                </a> */}
              </div>
            </div>
          </div>

          {/* Specialties and Diagnostics details */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Especialidades Card */}
            <div className="bg-white rounded-3xl p-4 md:p-6 border border-neutral/10 shadow-[0_8px_24px_rgba(11,59,140,0.01)] flex flex-col gap-3 md:gap-4 text-left hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MdOutlineLocalHospital size={20} className="md:w-[22px] md:h-[22px]" />
                </div>
                <h3 className="font-headline-md text-sm sm:text-base md:text-lg text-primary font-bold">
                  Especialidades
                </h3>
              </div>
              <ul className="flex flex-col gap-2 md:gap-3 font-body-md text-[11px] sm:text-xs md:text-sm text-neutral">
                <li className="flex items-start gap-1.5 md:gap-2.5">
                  <MdCheckCircle
                    size={14}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <span>Otorrinolaringología</span>
                </li>
                <li className="flex items-start gap-1.5 md:gap-2.5">
                  <MdCheckCircle
                    size={14}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <span>Cardiología</span>
                </li>
                <li className="flex items-start gap-1.5 md:gap-2.5">
                  <MdCheckCircle
                    size={14}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <span>Ginecología</span>
                </li>
              </ul>
            </div>

            {/* Diagnóstico Card */}
            <div className="bg-white rounded-3xl p-4 md:p-6 border border-neutral/10 shadow-[0_8px_24px_rgba(11,59,140,0.01)] flex flex-col gap-3 md:gap-4 text-left hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MdOutlineAssignment size={20} className="md:w-[22px] md:h-[22px]" />
                </div>
                <h3 className="font-headline-md text-sm sm:text-base md:text-lg text-primary font-bold">
                  Diagnóstico
                </h3>
              </div>
              <ul className="flex flex-col gap-2 md:gap-3 font-body-md text-[11px] sm:text-xs md:text-sm text-neutral">
                <li className="flex items-start gap-1.5 md:gap-2.5">
                  <MdCheckCircle
                    size={14}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <span>Ecografías</span>
                </li>
                <li className="flex items-start gap-1.5 md:gap-2.5">
                  <MdCheckCircle
                    size={14}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <span>Estudios Cardiovasculares</span>
                </li>
                <li className="flex items-start gap-1.5 md:gap-2.5">
                  <MdCheckCircle
                    size={14}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <span>Mamografías</span>
                </li>
                <li className="flex items-start gap-1.5 md:gap-2 flex-wrap xl:flex-nowrap">
                  <MdCheckCircle
                    size={14}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <span className="shrink-0">Densitometría</span>
                  <span className="text-[9px] font-bold bg-primary/5 text-primary/70 px-1.5 py-0.5 rounded-md uppercase tracking-wider shrink-0 inline-block mt-1 xl:mt-0">
                    Próximamente
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
