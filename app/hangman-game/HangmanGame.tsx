"use client";
import React from "react";
import { words } from "./data.json";
const HangmanGame = () => {
  const [wordToGuess, setWordToGuess] = React.useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guessedWords, setGuessedWords] = React.useState<string[]>([]);

  return <div>HangmanGame</div>;
};

export default HangmanGame;
