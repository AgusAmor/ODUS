"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  // Set up native once-off scroll reveal observers for all visual blocks
  const [heroRef, heroRevealed] = useScrollReveal(0, "0px");
  const [formRef, formRevealed] = useScrollReveal(0.15, "0px 0px -100px 0px");

  return (
    <main className="w-full flex flex-col overflow-hidden select-none cursor-default bg-white">
      {/* 1. Cabecera y Detalle de Contacto */}
      <ContactHero heroRef={heroRef} heroRevealed={heroRevealed} />

      {/* 2. Formulario de Mensaje */}
      <section className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <ContactForm formRef={formRef} formRevealed={formRevealed} />
      </section>
    </main>
  );
}
