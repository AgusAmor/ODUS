"use client";

import {
  MdCalendarMonth,
  MdOutlineMap,
  MdOutlineLocalHospital,
  MdOutlineAssignment,
  MdCheckCircle,
} from "react-icons/md";

export default function CentersPellegrini({ pellegriniRef, pellegriniRevealed }) {
  return (
    <section
      ref={pellegriniRef}
      id="sede-pellegrini"
      className={`flex flex-col gap-12 pt-16 reveal-fade-up ${pellegriniRevealed ? "revealed" : ""}`}
    >
      {/* Header Info */}
      <div className="flex flex-col gap-4 items-start text-left">
        <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
            Inicio de Operaciones
          </span>
        </div>
        <h2 className="font-headline-lg text-2xl md:text-3xl text-primary font-bold">
          Sede Pellegrini: <span className="font-normal text-neutral">Diagnóstico y Especialidades</span>
        </h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Side: Main Hallway Image */}
        <div className="rounded-4xl overflow-hidden shadow-[0_8px_24px_rgba(11,59,140,0.02)] border border-neutral/10 relative hover:scale-[1.01] transition-transform duration-300 min-h-112.5">
          <img
            alt="Pasillo moderno e iluminado de Sede Pellegrini ODUS"
            className="w-full h-full object-cover"
            src="/images/centers_hallway.png"
          />
        </div>

        {/* Right Side: Specialties & Booking details */}
        <div className="flex flex-col gap-8 justify-between">
          
          {/* Booking Card */}
          <div className="bg-primary text-white rounded-4xl p-8 lg:p-10 flex flex-col justify-center items-start gap-6 shadow-xl relative overflow-hidden ring-4 ring-primary/5 grow group text-left">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            
            <div className="z-10 w-full">
              <div className="flex items-center gap-4 mb-4">
                <MdCalendarMonth size={40} className="text-secondary shrink-0" />
                <h4 className="font-headline-md text-xl lg:text-2xl leading-tight font-extrabold">
                  Agenda tu visita
                </h4>
              </div>
              <p className="font-body-md text-white/80 mb-8 max-w-md leading-relaxed">
                Reserva hoy mismo tu turno en Sede Pellegrini para diagnóstico o consulta con nuestros especialistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button className="bg-white text-primary py-4 px-8 rounded-2xl font-label-md text-label-md font-bold hover:bg-tertiary hover:scale-95 transition-all shadow-md active:scale-95 grow cursor-pointer text-center">
                  Reservar Turno
                </button>
                <a
                  href="https://maps.google.com/?q=Pellegrini+Quilmes+ODUS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 border border-white/20 text-white py-4 px-8 rounded-2xl font-label-md text-label-md font-bold hover:bg-white/20 hover:scale-95 transition-all flex justify-center items-center gap-2 grow cursor-pointer text-center"
                >
                  <MdOutlineMap size={20} />
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>

          {/* Specialties and Diagnostics details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Especialidades Card */}
            <div className="bg-white rounded-3xl p-6 border border-neutral/10 shadow-[0_8px_24px_rgba(11,59,140,0.01)] flex flex-col gap-4 text-left hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MdOutlineLocalHospital size={22} />
                </div>
                <h3 className="font-headline-md text-lg text-primary font-bold">
                  Especialidades
                </h3>
              </div>
              <ul className="flex flex-col gap-3 font-body-md text-sm text-neutral">
                <li className="flex items-center gap-2.5">
                  <MdCheckCircle size={16} className="text-secondary shrink-0" />
                  Otorrinolaringología
                </li>
                <li className="flex items-center gap-2.5">
                  <MdCheckCircle size={16} className="text-secondary shrink-0" />
                  Cardiología
                </li>
                <li className="flex items-center gap-2.5">
                  <MdCheckCircle size={16} className="text-secondary shrink-0" />
                  Ginecología
                </li>
              </ul>
            </div>

            {/* Diagnóstico Card */}
            <div className="bg-white rounded-3xl p-6 border border-neutral/10 shadow-[0_8px_24px_rgba(11,59,140,0.01)] flex flex-col gap-4 text-left hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MdOutlineAssignment size={22} />
                </div>
                <h3 className="font-headline-md text-lg text-primary font-bold">
                  Diagnóstico
                </h3>
              </div>
              <ul className="flex flex-col gap-3 font-body-md text-sm text-neutral">
                <li className="flex items-center gap-2.5">
                  <MdCheckCircle size={16} className="text-secondary shrink-0" />
                  Ecografías
                </li>
                <li className="flex items-center gap-2.5">
                  <MdCheckCircle size={16} className="text-secondary shrink-0" />
                  Estudios Cardiovasculares
                </li>
                <li className="flex items-center gap-2.5">
                  <MdCheckCircle size={16} className="text-secondary shrink-0" />
                  Densitometría
                </li>
                <li className="flex items-center gap-2.5">
                  <MdCheckCircle size={16} className="text-secondary shrink-0" />
                  Mamografías
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
