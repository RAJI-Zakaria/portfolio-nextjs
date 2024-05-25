import ColorGuesser from "./ColorGuesser";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Color Guesser - Zakaria RAJI",
  description:
    "Zakaria RAJI's Project, Color Guesser, NextJS, TailwindCSS, Random colors",
};
const ColorGuesserPage = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col text-center gap-4 my-40 px-5 pb-10 pt-20  xl:border bg-neutral-900 xl:border-neutral-700 rounded-2xl"
    >
      <div className="space-y-3 flex flex-col justify-center">
        <h2 className="font-bold text-4xl md:text-4xl leading-normal">
          Color&nbsp;
          <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Guesser
          </span>
        </h2>
        <ColorGuesser />
      </div>
    </section>
  );
};

export default ColorGuesserPage;
