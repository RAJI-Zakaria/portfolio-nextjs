"use client";
import React, { useCallback, useEffect, useState } from "react";
import wordsData from "./data.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanWord from "./HangmanWord";
import toast from "react-hot-toast";
import Confetti from "react-confetti";
import { Slider } from "@nextui-org/react";

interface IHangmanWords {
  [difficulty: string]: string[];
}

const words: IHangmanWords = wordsData.words;

// Get a random word based on the current difficulty level
const getRandomWord = (words: string[], length: number) => {
  const filteredWords = words.filter((word) => word.length === length);
  return filteredWords[
    Math.floor(Math.random() * filteredWords.length)
  ].toLowerCase();
};

const HangmanGame = () => {
  const [difficulty, setDifficulty] = useState(4);
  const [wordToGuess, setWordToGuess] = useState(() =>
    getRandomWord(words[`difficulty_${difficulty}`], difficulty)
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
      if (guessedLetters.includes(letter) || isLoser || isWinner) {
        if (letter == "help")
          toast.success("No way you are gonna use this option again :)", {
            style: {
              background: "#333",
              color: "#fff",
            },
            icon: "🤣",
            position: "top-center",
          });
        return;
      }

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
      switch (
        letter // only for special buttons
      ) {
        case "help":
          //guess one of the remaining letters
          const remainingLetters = wordToGuess
            .split("")
            .filter((letter) => !guessedLetters.includes(letter));
          const randomLetter =
            remainingLetters[
              Math.floor(Math.random() * remainingLetters.length)
            ];
          addGuessedLetter(randomLetter);

          break;

        default:
          break;
      }
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
        setWordToGuess(
          getRandomWord(words[`difficulty_${difficulty}`], difficulty)
        );
      }
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter, difficulty]);

  return (
    <div className="flex max-w-[800px] flex-col gap-4 m-auto items-center">
      {isWinner && <Confetti />}
      {isWinner && "Winner! - Refresh to try again"}
      {isLoser && "Nice Try - Refresh to try again"}
      {isWinner || isLoser ? (
        <button
          onClick={() => {
            setGuessedLetters([]);
            setWordToGuess(
              getRandomWord(words[`difficulty_${difficulty}`], difficulty)
            );
          }}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          New Game - Press Enter
        </button>
      ) : null}

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      {/* Difficulty Slider */}
      <div className="  w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Slider
          size="md"
          step={1}
          color="foreground"
          label="Difficulty Level"
          showSteps={true}
          maxValue={10}
          minValue={3}
          defaultValue={4}
          className="w-full"
          onChange={(val) => {
            const length = val as number;
            setDifficulty(length);
            setWordToGuess(
              getRandomWord(words[`difficulty_${length}`], length)
            );
            setGuessedLetters([]);
          }}
        />
      </div>
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
