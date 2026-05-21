import { MdOutlineClose, MdCheckCircle } from "react-icons/md";
import { useEffect } from "react";

export default function SpecialtyModal({ specialty, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!specialty) return null;

  const Icon = specialty.icon;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-primary/30 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-overlay-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full relative border border-neutral/10 shadow-[0_20px_50px_rgba(11,59,140,0.15)] flex flex-col gap-6 animate-modal-in"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral hover:text-primary p-2 hover:bg-primary/5 rounded-full transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <MdOutlineClose size={24} />
        </button>

        {/* Header info */}
        <div className="flex items-center gap-4">
          <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
            <Icon size={24} />
          </div>
          <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
            {specialty.title}
          </h3>
        </div>

        {/* Main description */}
        <p className="font-body-md text-body-md text-neutral">
          {specialty.description}
        </p>

        <div className="border-t border-neutral/10 w-full" />

        {/* Services list */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wide">
            Estudios y Servicios que Realizamos:
          </h4>
          <ul className="flex flex-col gap-2.5">
            {specialty.procedures && specialty.procedures.map((proc, pIdx) => (
              <li key={pIdx} className="flex items-start gap-3 text-neutral font-medium">
                <MdCheckCircle className="text-secondary shrink-0 mt-0.5" size={18} />
                <span className="font-body-md text-body-md">{proc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
