import React from "react";
import { AnimatedLogo, ComposedLogo } from "../_components";

const LogoPage = () => {
  return (
    <div className="flex flex-col flex-grow h-full items-center justify-center space-y-4">
      <h1 className="text-4xl mb-14">Brand Logo</h1>
      <AnimatedLogo className="w-64" />
      <div className=" text-center">
        <h1 className="text-4xl mb-5">How did i create My Logo ?</h1>

        <div className="space-y-4 mb-5">
          <p>
            From my very young age, i&apos;ve always been fascinated by the idea
            of creating my own brand logo.
            <br />
            Through my humble experience in graphic design, I&apos;ve managed to
            use Adobe Illustrator to create my own logo.
            <br />
            It&apos;s a simple logo, but simplicity is always elegant.
          </p>
          <p>
            The Logo is composed of three letters, the first two letters are Z
            and Z collided together, and the third letter is a rotated K.
            <br />
            The logo is inspired from my full name, Zakaria.
          </p>
          <p>
            Note: the animation is created using css only, Although there are a
            loads of libraries that can do the same thing.
            <br />
            i&apos;ve found it more exiting to create the animation from crash
            using css. <br />
            Well its a little bit nostalgic because i&apos;ve done the same
            thing back in 2019.
          </p>
        </div>
        <div>
          <ComposedLogo />
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
