"use client";

import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactHero({ heroRef, heroRevealed }) {
  return (
    <section
      ref={heroRef}
      className={`w-full bg-tertiary/40 border-b border-neutral/5 pt-28 pb-16 px-margin-mobile md:px-margin-desktop relative overflow-hidden reveal-fade-up ${heroRevealed ? "revealed" : ""}`}
    >
      {/* Decorative background blur blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl opacity-60 z-0 pointer-events-none"></div>

      {/* Centered grid container */}
      <div className="max-w-container-max-width mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Contact text and cards */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10 items-start text-left">
          <h1 className="font-headline-display text-3xl md:text-headline-display font-extrabold text-primary leading-tight tracking-tight">
            Contactanos
          </h1>

          <p className="font-body-lg text-body-lg text-neutral max-w-2xl leading-relaxed mb-4">
            Tu salud es lo más importante. Estamos para cuidarte. Escribinos a{" "}
            <a
              href="mailto:[EMAIL_ADDRESS]"
              className="font-semibold text-primary hover:text-secondary transition-colors"
            >
              info@odus.com.ar
            </a>{" "}
            o ponete en contacto con nosotros para más información y turnos.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
            {/* Card 1: WhatsApp */}
            <a
              href="https://wa.me/5491128331920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-neutral/10 rounded-3xl p-6 shadow-[0_4px_12px_rgba(11,59,140,0.015)] flex items-center gap-4 hover:scale-[1.01] hover:shadow-[0_8px_24px_rgba(11,59,140,0.04)] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FaWhatsapp size={24} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-xs uppercase tracking-wider text-primary opacity-80">
                  WhatsApp
                </span>
                <span className="font-headline-md text-base font-bold text-neutral mt-0.5">
                  +54 9 11 2833 1920
                </span>
              </div>
            </a>

            {/* Card 2: Ubicación */}
            <Link
              href="/centers"
              className="bg-white border border-neutral/10 rounded-3xl p-6 shadow-[0_4px_12px_rgba(11,59,140,0.015)] flex items-center gap-4 hover:scale-[1.01] hover:shadow-[0_8px_24px_rgba(11,59,140,0.04)] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <MdOutlineLocationOn size={24} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-xs uppercase tracking-wider text-primary opacity-80">
                  Ubicación
                </span>
                <span className="font-headline-md text-base font-bold text-neutral mt-0.5">
                  Quilmes, Zona Sur
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Premium Clinic Reception Image */}
        <div className="lg:col-span-5 relative z-10 w-full">
          <div className="rounded-4xl overflow-hidden aspect-4/3 lg:aspect-square shadow-md border border-neutral/10 hover:scale-[1.005] transition-transform duration-300 relative group">
            <img
              alt="Recepción moderna y cálida del Centro Médico ODUS"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              src="/images/reception.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
