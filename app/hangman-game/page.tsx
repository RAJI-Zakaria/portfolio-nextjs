import React from "react";
import HangmanGame from "./HangmanGame";

const HangmanGamePage = () => {
  return (
    <div className="w-full min-h-unit-9xl h-auto bg-gradient-to-tr from-[#FFB457] to-[#FF705B] justify-center relative flex flex-col items-center border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden  space-y-3">
      <h1 className="text-2xl text-left font-semibold text-neutral-100  ">
        Daily Quotes
      </h1>
      <div className="flex justify-between items-center">
        <HangmanGame />
      </div>
    </div>
  );
};

export default HangmanGamePage;
