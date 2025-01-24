"use client";
import { useState } from "react";
import { Card } from "@nextui-org/card";
import LogoAnimation from "./Logo/Animated";
import HangmanGame from "@/app/hangman-game/HangmanGame";

const ConstructionPage = () => {
  const [opened, setOpened] = useState(true);

  const openGame = () => {
    setOpened(true);
  };

  const closeGame = () => {
    setOpened(false);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100 bg-skull-pattern">
        <Card className="shadow-xl bg-white p-8 border border-gray-200 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center w-full">
              <LogoAnimation className="invert m-auto" />
            </div>
            <h1 className="text-gray-700 font-bold text-3xl">
              🚧 Site on Standby 🚧
            </h1>
            <p className="text-gray-600">
              We&apos;re currently working on something awesome! Stay tuned for
              updates.
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                onClick={openGame}
              >
                Want to play a game?
              </button>
            </div>
          </div>
        </Card>
      </div>
      {/* Pop-up overlay */}
      {opened && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
          <div className="bg-slate-700 p-8 rounded-lg shadow-lg text-center max-w-3xl w-full overflow-y-auto max-h-[90vh]">
            <h1 className=" mb-4 text-2xl">
              Think Fast: Hangman or Shame-man? 😅
            </h1>
            <HangmanGame />
            <hr className="border-neutral-400 my-3 w-10 m-auto" />
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeGame}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConstructionPage;
