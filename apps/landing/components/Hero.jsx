import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center py-section-gap overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 w-full">
        <div className="absolute top-1/4 right-0 w-3/4 h-3/4 bg-surface-container-high rounded-l-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-1/2 h-1/2 bg-surface-container-highest rounded-t-full opacity-50 blur-3xl"></div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto w-full">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center w-full">
          <div className="max-w-2xl">
            <h1 className="font-headline-display text-headline-display text-primary mb-6">
              Cuidar tu salud integral
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Evolucionamos de la excelencia odontológica a una visión
              completa de tu bienestar. Tecnología avanzada, precisión humana
              y cuidado en cada detalle de tu salud.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded-2xl hover:scale-95 transition-transform duration-200 shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_month</span>
                Solicitar Turno
              </button>
              <button className="bg-secondary text-on-secondary font-label-md text-label-md px-8 py-4 rounded-2xl hover:scale-95 transition-transform duration-200 shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </button>
            </div>
          </div>
          <div className="relative hidden md:block h-[600px]">
            {/* Next.js Image doesn't let us use generic external domains without config. 
                For now we use standard img for remote prototyping or configure remotePatterns in next.config.mjs */}
            <img
              alt="Modern clean clinic interior"
              className="w-full h-full object-cover rounded-[32px] shadow-sm border border-outline-variant/30 z-10 relative"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj-nHBJbNyNwc78KZFekAocIxDHoKmwJRpPqxvm-9HAeUHmphelRovq1EQNAzaYHtRfAZc3gWdsYwMY42OQoQ0RfD_mLzhuLeXH4mtx_WbGiozW9H8UKMwlzof-iF17aYaAqbnHYfGFMaSpu_IbcbDDnQDc3YHhBSWBe61BTIvc3ZNcBP7m8DPRj6Z4w2Zhq8Iay1So_Ehp_jepVXNAcAIa1SY2Za1K7HCuFomadmGlOdGNow-frj9xWDFhXL5VbDzC-6vzdRbejEM"
            />
            {/* Glassmorphic Card 1 */}
            <div className="absolute -left-10 top-20 bg-surface/80 backdrop-blur-xl p-4 rounded-2xl border border-outline-variant/30 shadow-sm z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">vital_signs</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Diagnóstico
                </p>
                <p className="font-headline-md text-headline-md text-primary">
                  Precisión
                </p>
              </div>
            </div>
            {/* Glassmorphic Card 2 */}
            <div className="absolute -right-10 bottom-20 bg-surface/80 backdrop-blur-xl p-4 rounded-2xl border border-outline-variant/30 shadow-sm z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Atención
                </p>
                <p className="font-headline-md text-headline-md text-primary">
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
