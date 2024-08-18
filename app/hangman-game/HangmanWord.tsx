"use client";

import React from "react";

type HangmanGameProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};
const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanGameProps) => {
  return (
    <div className="flex gap-3 text-4xl font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <div
          key={index}
          className="border-b-2 border-black w-10 h-10 flex items-center justify-center"
        >
          <span
            className={`${
              guessedLetters.includes(letter) || reveal ? "visible" : "hidden"
            } ${
              !guessedLetters.includes(letter) && reveal
                ? "color-red-500"
                : "black"
            }`}
          >
            {" "}
            {guessedLetters.includes(letter) ? letter : ""}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HangmanWord;
