"use client";

import { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import CentersHero from "./components/CentersHero";
import CentersPellegrini from "./components/CentersPellegrini";
import CentersLavalle from "./components/CentersLavalle";
import CentersFacilities from "./components/CentersFacilities";

export default function Centers() {
  // Set up native once-off scroll reveal observers
  const [heroRef, heroRevealed] = useScrollReveal(0, "0px");
  const [pellegriniRef, pellegriniRevealed] = useScrollReveal(0.15, "0px 0px -150px 0px");
  const [lavalleRef, lavalleRevealed] = useScrollReveal(0.15, "0px 0px -150px 0px");
  const [facilitiesRef, facilitiesRevealed] = useScrollReveal(0.15, "0px 0px -150px 0px");

  // Multi-page hash scroll coordinator
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // 1. Run on initial page transition (wait for layout and entry transitions to stabilize)
    const timer = setTimeout(handleScrollToHash, 250);

    // 2. Listen for subsequent hash changes while on the same page
    window.addEventListener("hashchange", handleScrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, []);

  return (
    <main className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-12 flex flex-col gap-12 md:gap-16 overflow-hidden">
      {/* 1. Hero Section */}
      <CentersHero heroRef={heroRef} heroRevealed={heroRevealed} />

      {/* 2. Sede Pellegrini Section */}
      <CentersPellegrini pellegriniRef={pellegriniRef} pellegriniRevealed={pellegriniRevealed} />

      {/* 3. Sede Lavalle Section */}
      <CentersLavalle lavalleRef={lavalleRef} lavalleRevealed={lavalleRevealed} />

      {/* 4. Nuestras Instalaciones Section */}
      <CentersFacilities facilitiesRef={facilitiesRef} facilitiesRevealed={facilitiesRevealed} />
    </main>
  );
}
