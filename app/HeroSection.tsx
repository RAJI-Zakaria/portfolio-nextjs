import { Button } from "@nextui-org/button";
import { Typewriter } from "nextjs-simple-typewriter";
import React from "react";

const HeroSection = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col content-center justify-center text-center space-y-12">
        <h1 className="font-bold text-4xl md:text-5xl leading-normal">
          <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Hi
          </span>
          &nbsp;i am&nbsp;
          <span className="bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
            Zakaria RAJI
          </span>
          <br />
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
        </h1>

        <p className="text-lg md:text-2xl">
          Crafting digital solutions with innovative architecture
          <br />
          elevating web experiences to new heights.
        </p>
        <div className="space-x-4">
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Contact Me
          </Button>
          <Button
            color="danger"
            variant="bordered"
            radius="full"
            className="hover:bg-gray-200 hover:text-gray-800 border-fuchsia-200  text-white shadow-lg"
          >
            My Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
