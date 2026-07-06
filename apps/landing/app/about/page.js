"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import AboutHero from "./components/AboutHero";
import AboutWhyChooseUs from "./components/AboutWhyChooseUs";
import AboutProfessionals from "./components/AboutProfessionals";

export default function About() {
  // Set up native once-off scroll reveal observers for all visual blocks
  const [heroRef, heroRevealed] = useScrollReveal(0, "0px");
  const [chooseRef, chooseRevealed] = useScrollReveal(
    0.15,
    "0px 0px -150px 0px",
  );

  return (
    <main className="w-full flex flex-col overflow-hidden select-none cursor-default">
      {/* 1. Quiénes Somos (Hero) */}
      <AboutHero heroRef={heroRef} heroRevealed={heroRevealed} />

      {/* 2. Por Qué Elegirnos */}
      <AboutWhyChooseUs chooseRef={chooseRef} chooseRevealed={chooseRevealed} />

      {/* 3. Nuestros Profesionales */}
      <AboutProfessionals />
    </main>
  );
}
