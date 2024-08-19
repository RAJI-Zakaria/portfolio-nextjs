"use client";
import React, { useCallback, useEffect, useState } from "react";
import { words } from "./data.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanWord from "./HangmanWord";
import toast from "react-hot-toast";

const HangmanGame = () => {
  const [wordToGuess, setWordToGuess] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  // Show toast messages when the game is over
  useEffect(() => {
    if (isLoser) {
      toast.error("You lose! The word was " + wordToGuess);
    }
    if (isWinner) {
      toast.success("You win! The word was " + wordToGuess);
    }
  }, [isLoser, isWinner, wordToGuess]);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key.match(/^[a-z]$/)) {
        e.preventDefault();
        addGuessedLetter(key);
      } else if (key === "Enter") {
        e.preventDefault();
        setGuessedLetters([]);
        setWordToGuess(words[Math.floor(Math.random() * words.length)]);
      }
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  return (
    <div className="flex max-w-[800px] flex-col gap-4 m-auto items-center">
      <div className="">HangmanGame</div>
      {isWinner && "Winner! - Refresh to try again"}
      {isLoser && "Nice Try - Refresh to try again"}
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <HangmanKeyboard
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={guessedLetters.filter(
          (letter) => !wordToGuess.includes(letter)
        )}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </div>
  );
};

export default HangmanGame;
