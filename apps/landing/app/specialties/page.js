"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SpecialtiesHero from "./components/SpecialtiesHero";
import SpecialtiesEditorial from "./components/SpecialtiesEditorial";
import SpecialtiesCircuit from "./components/SpecialtiesCircuit";

export default function Specialties() {
  // Setup native scroll reveal hooks for each visual block
  const [heroRef, heroRevealed] = useScrollReveal(0, "0px");
  const [cardioRef, cardioRevealed] = useScrollReveal(0.15, "0px 0px -150px 0px");
  const [gineaRef, gineaRevealed] = useScrollReveal(0.15, "0px 0px -150px 0px");
  const [otoriRef, otoriRevealed] = useScrollReveal(0.15, "0px 0px -150px 0px");
  const [circuitoHeaderRef, circuitoHeaderRevealed] = useScrollReveal(0.1, "0px 0px -100px 0px");
  const [circuitoCardsRef, circuitoCardsRevealed] = useScrollReveal(0.15, "0px 0px -120px 0px");

  return (
    <main className="overflow-hidden select-none cursor-default">
      {/* 1. Hero Section */}
      <SpecialtiesHero heroRef={heroRef} heroRevealed={heroRevealed} />

      {/* 2. Editorial Specialties Section */}
      <SpecialtiesEditorial
        cardioRef={cardioRef}
        cardioRevealed={cardioRevealed}
        gineaRef={gineaRef}
        gineaRevealed={gineaRevealed}
        otoriRef={otoriRef}
        otoriRevealed={otoriRevealed}
      />

      {/* 3. Tu Circuito de Salud Section */}
      <SpecialtiesCircuit
        circuitoHeaderRef={circuitoHeaderRef}
        circuitoHeaderRevealed={circuitoHeaderRevealed}
        circuitoCardsRef={circuitoCardsRef}
        circuitoCardsRevealed={circuitoCardsRevealed}
      />
    </main>
  );
}
