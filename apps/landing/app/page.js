import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Centers from "../components/Centers";
import Institutional from "../components/Institutional";
import SpecialtiesCircuit from "../components/Circuit";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <SpecialtiesCircuit />
      <Institutional />
      <Centers />
    </>
  );
}
