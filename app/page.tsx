import type { Metadata } from "next";
import { Certification, Contact } from "./_components";
import About from "./About";
import HeroSection from "./HeroSection";
import ProficiencySpectrum from "./ProficiencySpectrum";
import Projects from "./Projects";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
