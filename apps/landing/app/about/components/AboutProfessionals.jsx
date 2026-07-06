"use client";

import useScrollReveal from "./../../hooks/useScrollReveal";

const topProfessionals = [
  {
    name: "Dr. Nombre Apellido",
    specialty: "Director Médico",
    description: "Con más de 20 años de experiencia, lidera nuestra visión de excelencia médica, priorizando siempre la calidad asistencial y el trato humano con los pacientes.",
  },
  {
    name: "Dra. Nombre Apellido",
    specialty: "Jefa de Especialidades",
    description: "Coordinadora principal de nuestro modelo de atención integral, enfocada en garantizar que cada paciente encuentre la solución exacta a sus necesidades de salud.",
  }
];

const teamProfessionals = [
  {
    name: "Dr. Nombre Apellido",
    specialty: "Cardiología",
    description: "Especialista en medicina preventiva cardiovascular y diagnóstico de alta complejidad.",
  },
  {
    name: "Dra. Nombre Apellido",
    specialty: "Ginecología",
    description: "Dedicada al seguimiento integral de la mujer, promoviendo espacios de consulta cálidos y seguros.",
  },
  {
    name: "Dr. Nombre Apellido",
    specialty: "Otorrinolaringología",
    description: "Experto en resolución de patologías de oído, nariz y garganta con un abordaje clínico avanzado.",
  }
];

export default function AboutProfessionals() {
  const [headerRef, headerRevealed] = useScrollReveal(0.1, "0px 0px -50px 0px");
  const [topGridRef, topGridRevealed] = useScrollReveal(0.15, "0px 0px -100px 0px");
  const [bottomGridRef, bottomGridRevealed] = useScrollReveal(0.15, "0px 0px -100px 0px");

  return (
    <section className="w-full py-section-gap relative z-20 bg-tertiary/30">
      <div className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-12 lg:gap-16">
      <div 
        ref={headerRef} 
        className={`text-center reveal-fade-up ${headerRevealed ? "revealed" : ""}`}
      >
        <h2 className="font-headline-display text-3xl md:text-4xl text-primary font-bold mb-4">
          Nuestros Profesionales
        </h2>
        <p className="font-body-lg text-lg text-neutral max-w-2xl mx-auto">
          Conocé al equipo médico altamente capacitado que respalda nuestra visión y excelencia en cada consulta.
        </p>
      </div>

      {/* Top Row: 2 Main Professionals */}
      <div 
        ref={topGridRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 reveal-fade-up transition-delay-150 ${topGridRevealed ? "revealed" : ""}`}
      >
        {topProfessionals.map((prof, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/10 border border-neutral/5 flex flex-col items-center text-center group hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(11,59,140,0.15)] transition-all duration-500 relative z-30">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 bg-neutral/5 border-[6px] border-tertiary shadow-sm relative">
              {/* Fallback avatar icon representing the photo */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral/30">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
            </div>
            <h3 className="font-headline-lg text-2xl font-extrabold text-primary mb-1">{prof.name}</h3>
            <span className="font-label-md text-secondary font-bold uppercase tracking-widest mb-4">{prof.specialty}</span>
            <p className="font-body-md text-neutral leading-relaxed max-w-md">{prof.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row: 3 Professionals */}
      <div 
        ref={bottomGridRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 reveal-fade-up transition-delay-300 ${bottomGridRevealed ? "revealed" : ""}`}
      >
        {teamProfessionals.map((prof, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary/5 border border-neutral/5 flex flex-col items-center text-center group hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(11,59,140,0.12)] transition-all duration-500">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-5 bg-neutral/5 border-4 border-tertiary shadow-sm relative">
              {/* Fallback avatar icon representing the photo */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral/30">
                <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-primary mb-1">{prof.name}</h3>
            <span className="font-label-sm text-secondary font-bold uppercase tracking-wider text-[11px] mb-3">{prof.specialty}</span>
            <p className="font-body-md text-sm text-neutral leading-relaxed">{prof.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
