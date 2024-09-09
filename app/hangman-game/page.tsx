import React from "react";
import HangmanGame from "./HangmanGame";

const HangmanGamePage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl text-center font-semibold text-neutral-100">
        Hangman Game
      </h1>
      <div
        className="w-full
      bg-gradient-to-tr from-[#FFB457] to-[#FF705B]
      justify-center
      flex flex-col items-center border border-default-200 dark:border-default-100  !px-0 md:px-2 py-16 rounded-lg space-y-3"
      >
        <div className="flex justify-between items-center   px-0">
          <HangmanGame />
        </div>
      </div>
    </div>
  );
};

export default HangmanGamePage;
