"use client";

import { useState } from "react";
import { MdOutlineSend } from "react-icons/md";

export default function ContactForm({ formRef, formRevealed }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple verification/alert for demonstration purposes
    alert(
      `Mensaje enviado con éxito por ${formData.name}. Nos comunicaremos a la brevedad.`,
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      ref={formRef}
      className={`w-full max-w-2xl mx-auto reveal-fade-up ${formRevealed ? "revealed" : ""}`}
    >
      <div className="bg-white/80 backdrop-blur-md border border-neutral/10 p-8 md:p-12 rounded-4xl shadow-[0_8px_30px_rgba(11,59,140,0.02)] relative overflow-hidden text-left">
        {/* Subtle decorative background glows */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        {/* Header Form */}
        <div className="flex flex-col items-center gap-2 mb-8 text-center">
          <h2 className="font-headline-lg text-2xl md:text-headline-lg text-primary font-bold">
            Envianos tu mensaje
          </h2>
          <p className="font-body-md text-body-md text-neutral max-w-md">
            Completá el formulario y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          {/* Row 1: Nombre and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Nombre Completo */}
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="name"
                className="font-bold text-xs text-primary mb-2 uppercase tracking-wider"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez"
                required
                className="w-full bg-primary/1.5 border border-neutral/20 rounded-2xl px-5 py-4 text-sm text-neutral placeholder-neutral/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-body-md cursor-text"
              />
            </div>

            {/* Correo Electrónico */}
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="email"
                className="font-bold text-xs text-primary mb-2 uppercase tracking-wider"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tuemail@ejemplo.com"
                required
                className="w-full bg-primary/1.5 border border-neutral/20 rounded-2xl px-5 py-4 text-sm text-neutral placeholder-neutral/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-body-md cursor-text"
              />
            </div>
          </div>

          {/* Row 2: Asunto */}
          <div className="flex flex-col items-start w-full">
            <label
              htmlFor="subject"
              className="font-bold text-xs text-primary mb-2 uppercase tracking-wider"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Motivo de tu consulta"
              required
              className="w-full bg-primary/1.5 border border-neutral/20 rounded-2xl px-5 py-4 text-sm text-neutral placeholder-neutral/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-body-md cursor-text"
            />
          </div>

          {/* Row 3: Mensaje */}
          <div className="flex flex-col items-start w-full">
            <label
              htmlFor="message"
              className="font-bold text-xs text-primary mb-2 uppercase tracking-wider"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribí tu mensaje aquí..."
              required
              rows={4}
              className="w-full bg-primary/1.5 border border-neutral/20 rounded-2xl px-5 py-4 text-sm text-neutral placeholder-neutral/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-body-md cursor-text resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary/95 text-white font-label-md text-label-md font-bold px-8 py-4 rounded-2xl hover:scale-95 transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2 w-full md:w-auto md:self-start"
          >
            <span>Enviar Mensaje</span>
            <MdOutlineSend size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
