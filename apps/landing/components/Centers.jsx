"use client";

import {
  MdOutlineDomain,
  MdOutlineLocationOn,
  MdOutlineLocalHospital,
  MdOutlineDirections,
  MdOutlineWatchLater,
} from "react-icons/md";
import useScrollReveal from "../app/hooks/useScrollReveal";

export default function Centers() {
  const [titleRef, titleRevealed] = useScrollReveal(0.1, "0px 0px -100px 0px");
  const [pellegriniRef, pellegriniRevealed] = useScrollReveal(
    0.15,
    "0px 0px -150px 0px",
  );
  const [lavalleRef, lavalleRevealed] = useScrollReveal(
    0.15,
    "0px 0px -150px 0px",
  );

  return (
    <section
      className="py-12 md:py-16 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-6 md:gap-8"
      id="sedes"
    >
      <div
        ref={titleRef}
        className={`text-center md:text-left reveal-fade-up ${titleRevealed ? "revealed" : ""}`}
      >
        <h2 className="font-headline-display text-2xl font-bold text-primary">
          Nuestras Sedes
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 w-full">
        {/* Sede Pellegrini */}
        <div
          ref={pellegriniRef}
          className={`flex flex-col lg:flex-row gap-4 lg:gap-16 items-center bg-white rounded-4xl p-6 lg:p-12 border border-neutral/10 shadow-[0_8px_30px_rgb(11,59,140,0.02)] reveal-fade-up ${pellegriniRevealed ? "revealed" : ""}`}
        >
          <div className="w-full lg:w-1/2 aspect-video lg:aspect-square rounded-3xl overflow-hidden relative">
            <img
              alt="Fachada moderna de la Sede Pellegrini"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9RhddcPLYeFH_Knis5A1ltnDjfcKxffNxvkSKiTCuakGGgXmFvBJNA2P0yLcQN8y5Th1IXIHR8Vbgoc4DWPShmBVEEMEh2NRJ5c2Mmyb-BbVPULTK8WRp_zNucTBvcd3UpNPyieJ_CD_-46yj-Zv_rz_n2zWDZzd847xDbALXnEkqJAefg7XtZq1-VwJsyiV0j4rMXqIU1sbyswb7j9f1uLrC_59uHJGzBqvsfJRkbE4bSz4eZILMkmudFOzYFn7FxPxJ8urqG8pu"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
              <MdOutlineDomain size={16} />
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Sede Principal
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
              Sede Pellegrini
            </h3>

            <div className="flex items-start gap-3 text-neutral">
              <MdOutlineLocationOn
                size={22}
                className="text-primary shrink-0 mt-0.5"
              />
              <p className="font-body-md text-body-md">
                Av. Pellegrini 1234, Centro
                <br />
                <span className="text-sm text-neutral/80">
                  Atención: Lunes a Viernes 9:00 a 18:00hs.
                </span>
              </p>
            </div>

            <div className="flex items-start gap-3 text-neutral">
              <MdOutlineLocalHospital
                size={22}
                className="text-primary shrink-0 mt-0.5"
              />
              <p className="font-body-md text-body-md">
                Especialidades médicas, estudios diagnósticos y diagnóstico por
                imágenes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-primary text-white font-label-md text-label-md px-6 py-3 rounded-2xl hover:scale-95 transition-transform duration-200 shadow-sm cursor-pointer">
                Agendar turno
              </button>
              <button className="border border-neutral/30 bg-white text-primary font-label-md text-label-md px-6 py-3 rounded-2xl hover:bg-neutral/5 hover:scale-95 transition-transform duration-200 flex items-center gap-2 cursor-pointer">
                <span>Cómo llegar</span>
                <MdOutlineDirections size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Sede Lavalle (Coming Soon) */}
        <div
          ref={lavalleRef}
          className={`bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-neutral/15 shadow-[0_10px_40px_rgba(11,59,140,0.04)] relative overflow-hidden w-full reveal-fade-up ${lavalleRevealed ? "revealed" : ""}`}
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
            <div className="flex flex-col gap-4 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-neutral/10 text-neutral px-4 py-1.5 rounded-full w-fit">
                <MdOutlineWatchLater size={16} />
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Próximamente
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary text-opacity-80 font-bold">
                Sede Lavalle
              </h3>
              <div className="flex items-start gap-3 text-neutral">
                <MdOutlineLocationOn
                  size={22}
                  className="text-primary shrink-0 mt-0.5"
                />
                <p className="font-body-md text-body-md">
                  Av. Lavalle 668, Quilmes
                </p>
              </div>
              <p className="font-body-md text-body-md text-neutral">
                Estamos trabajando en la expansión de nuestros servicios. La Sede
                Lavalle será inaugurada próximamente, ampliando nuestra capacidad
                para brindarte más especialidades y comodidad.
              </p>
            </div>
            <div className="hidden md:flex opacity-10 text-primary">
              <MdOutlineDomain size={120} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
