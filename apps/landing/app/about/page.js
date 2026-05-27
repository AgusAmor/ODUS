"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import AboutHero from "./components/AboutHero";
import AboutFacilities from "./components/AboutFacilities";
import AboutWhyChooseUs from "./components/AboutWhyChooseUs";

export default function About() {
  // Set up native once-off scroll reveal observers for all visual blocks
  const [heroRef, heroRevealed] = useScrollReveal(0, "0px");
  const [facilitiesRef, facilitiesRevealed] = useScrollReveal(
    0.15,
    "0px 0px -150px 0px",
  );
  const [chooseRef, chooseRevealed] = useScrollReveal(
    0.15,
    "0px 0px -150px 0px",
  );

  return (
    <main className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-24 overflow-hidden select-none cursor-default">
      {/* 1. Quiénes Somos (Hero) */}
      <AboutHero heroRef={heroRef} heroRevealed={heroRevealed} />

      {/* 2. Por Qué Elegirnos */}
      <AboutWhyChooseUs chooseRef={chooseRef} chooseRevealed={chooseRevealed} />

      {/* 3. Nuestras Instalaciones */}
      <AboutFacilities
        facilitiesRef={facilitiesRef}
        facilitiesRevealed={facilitiesRevealed}
      />
    </main>
  );
}
