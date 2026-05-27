"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import CentersHero from "./components/CentersHero";
import CentersPellegrini from "./components/CentersPellegrini";
import CentersLavalle from "./components/CentersLavalle";

export default function Centers() {
  // Set up native once-off scroll reveal observers
  const [heroRef, heroRevealed] = useScrollReveal(0, "0px");
  const [pellegriniRef, pellegriniRevealed] = useScrollReveal(0.15, "0px 0px -150px 0px");
  const [lavalleRef, lavalleRevealed] = useScrollReveal(0.15, "0px 0px -150px 0px");

  return (
    <main className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-24 overflow-hidden">
      {/* 1. Hero Section */}
      <CentersHero heroRef={heroRef} heroRevealed={heroRevealed} />

      {/* 2. Sede Pellegrini Section */}
      <CentersPellegrini pellegriniRef={pellegriniRef} pellegriniRevealed={pellegriniRevealed} />

      {/* 3. Sede Lavalle Section */}
      <CentersLavalle lavalleRef={lavalleRef} lavalleRevealed={lavalleRevealed} />
    </main>
  );
}
