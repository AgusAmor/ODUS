"use client";

import {
  MdCalendarMonth,
  MdOutlineMonitorHeart,
  MdOutlineAccessTime,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import useScrollReveal from "../app/hooks/useScrollReveal";

export default function Hero() {
  const [heroRef, isRevealed] = useScrollReveal(0, "0px");

  return (
    <section
      ref={heroRef}
      className="relative min-h-fit lg:min-h-175 flex items-center justify-center py-12 md:py-16 overflow-hidden bg-tertiary"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 w-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-3/4 h-3/4 bg-primary/5 rounded-l-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-1/2 h-1/2 bg-secondary/5 rounded-t-full opacity-50 blur-3xl"></div>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center w-full">
          <div className="max-w-2xl">
            <h1
              className={`font-headline-display text-3xl font-bold text-secondary mb-6 reveal-fade-up ${isRevealed ? "revealed" : ""}`}
            >
              <span className="text-primary">CUIDAR</span> TU SALUD
              <span className="text-primary"> ES NUESTRA </span>PRIORIDAD
            </h1>
            <p
              className={`font-body-lg text-body-lg text-neutral mb-10 reveal-fade-up transition-delay-75 ${isRevealed ? "revealed" : ""}`}
            >
              Con años de trayectoria, evolucionamos hacia un centro de atención
              medica ambulatoria de excelencia. Con tecnología de precisión,
              manteniendo los valores que nos distinguen: calidad, cercanía y
              profesionalismo.
            </p>
            <div
              className={`flex flex-wrap gap-4 reveal-fade-up transition-delay-150 ${isRevealed ? "revealed" : ""}`}
            >
              <button className="bg-primary text-white font-label-md text-label-md px-8 py-4 rounded-2xl hover:scale-95 transition-transform duration-200 shadow-sm flex items-center gap-2 cursor-pointer">
                <MdCalendarMonth size={20} />
                Solicitar Turno
              </button>
              <button className="bg-secondary text-primary font-label-md text-label-md px-8 py-4 rounded-2xl hover:scale-95 transition-transform duration-200 shadow-sm flex items-center gap-2 cursor-pointer">
                <FaWhatsapp size={20} />
                WhatsApp
              </button>
            </div>
          </div>

          <div
            className={`relative hidden md:block h-150 reveal-fade-up transition-delay-150 ${isRevealed ? "revealed" : ""}`}
          >
            <img
              alt="Interior de clínica moderno y limpio"
              className="w-full h-full object-cover rounded-3xl shadow-sm border border-neutral/20 z-10 relative"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj-nHBJbNyNwc78KZFekAocIxDHoKmwJRpPqxvm-9HAeUHmphelRovq1EQNAzaYHtRfAZc3gWdsYwMY42OQoQ0RfD_mLzhuLeXH4mtx_WbGiozW9H8UKMwlzof-iF17aYaAqbnHYfGFMaSpu_IbcbDDnQDc3YHhBSWBe61BTIvc3ZNcBP7m8DPRj6Z4w2Zhq8Iay1So_Ehp_jepVXNAcAIa1SY2Za1K7HCuFomadmGlOdGNow-frj9xWDFhXL5VbDzC-6vzdRbejEM"
            />

            {/* Glassmorphic Card 1 */}
            <div
              className={`absolute -left-10 top-20 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-neutral/20 shadow-sm z-20 flex items-center gap-4 reveal-fade-up transition-delay-225 ${isRevealed ? "revealed" : ""}`}
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <MdOutlineMonitorHeart size={24} />
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-neutral">
                  Diagnóstico
                </p>
                <p className="font-headline-md text-headline-md text-primary font-extrabold">
                  Precisión
                </p>
              </div>
            </div>

            {/* Glassmorphic Card 2 */}
            <div
              className={`absolute -right-10 bottom-20 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-neutral/20 shadow-sm z-20 flex items-center gap-4 reveal-fade-up transition-delay-300 ${isRevealed ? "revealed" : ""}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MdOutlineAccessTime size={24} />
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-neutral">
                  Atención
                </p>
                <p className="font-headline-md text-headline-md text-primary font-extrabold">
                  Sin Demoras
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
