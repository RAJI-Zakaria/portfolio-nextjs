import type { Metadata } from "next";
import { Certification, Contact } from "./_components";
import About from "./About";
import HeroSection from "./HeroSection";
import ProficiencySpectrum from "./ProficiencySpectrum";
import Projects from "./Projects";

export const metadata: Metadata = {
  title: "Portfolio - Zakaria RAJI",
  description:
    "Zakaria RAJI's Portfolio, IT Engineer ENSSAT, Development experts, Full-Stack",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* --------------------------------------------------------------------------------------- */}
      <ProficiencySpectrum />
      {/* --------------------------------------------------------------------------------------- */}
      <About />
      {/* --------------------------------------------------------------------------------------- */}
      <Certification />
      {/* --------------------------------------------------------------------------------------- */}
      <Projects />
      {/* --------------------------------------------------------------------------------------- */}
      <Contact />
      {/* --------------------------------------------------------------------------------------- */}
    </>
  );
}
