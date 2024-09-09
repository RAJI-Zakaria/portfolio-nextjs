"use client";
import styles from "./style.module.css";
import React from "react";

const HangmanKeyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}) => {
  //TODO : adapt the game display to mobile screens
  //TODO : add button to guess one letter only once.
  //TODO : add difficulty levels {number of letters}
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center">
        {letters.map((letter) => {
          const isActive = activeLetters.includes(letter);
          const isInactive = inactiveLetters.includes(letter);
          return (
            <button
              key={letter}
              onClick={() => addGuessedLetter(letter)}
              disabled={isInactive || isActive || disabled}
              className={`hover:bg-neutral-600 active:bg-neutral-600 pointer transition-all ease-soft-spring w-10 h-10 border border-black rounded-lg flex items-center justify-center  ${
                styles.btn
              } ${isActive ? styles.active : ""} ${
                isInactive ? styles.inactive : ""
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {/* first hint yellowish colored button */}
        <button
          onClick={() => addGuessedLetter("help")}
          disabled={disabled}
          className={`bg-white text-black !px-5 py-1 hover:!bg-black hover:text-white pointer transition-all ease-soft-spring border !border-black rounded-lg  `}
        >
          Help 🆘
        </button>
      </div>
    </>
  );
};

export default HangmanKeyboard;
