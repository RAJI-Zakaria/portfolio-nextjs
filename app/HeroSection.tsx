import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
import React from "react";

const HeroSection = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col content-center justify-center text-center space-y-4 md:space-y-12 my-40">
        <h1 className="font-bold text-4xl md:text-5xl leading-normal">
          <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Hi
          </span>
          &nbsp;i am&nbsp;
          <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Zakaria RAJI
          </span>
          <br />
          <span className="flex justify-center items-center h-[96px] md:h-20 lg:h-24 ">
            <Typewriter
              words={["IT Engineer", "Development experts", "Full-Stack"]}
              loop={50}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={60}
              delaySpeed={220}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </h1>

        <p className="text-xl md:text-2xl">
          Crafting digital solutions with innovative architecture
          <br />
          elevating web experiences to new heights.
        </p>
        <div className="space-x-4 !mt-10 md:mt-0">
          <Link
            href="#contact"
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default data-[hover=true]:opacity-hover bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Contact Me
          </Link>
          <Link
            color="danger"
            href="#projects"
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:opacity-hover hover:bg-gray-200 hover:text-gray-800 border-fuchsia-200 text-white shadow-lg"
            //add onclick go to #projects
          >
            My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
