"use client";
import React from "react";

const HEAD = () => {
  return (
    <div className="w-[50px] h-[50px] rounded-full border-[10px] border-black absolute top-[48px] right-[-20px]"></div>
  );
};
const BODY = () => {
  return (
    <div className="w-[10px] h-[120px] absolute top-[90px] right-0 bg-black"></div>
  );
};
const RIGHT_ARM = () => {
  return (
    <div className="w-[100px] h-[10px] absolute bg-black top-[120px] right-[-100px] rotate-[-30deg] origin-bottom-left "></div>
  );
};
const LEFT_ARM = () => {
  return (
    <div className="w-[100px] h-[10px] absolute bg-black top-[120px] right-[10px] rotate-[30deg] origin-bottom-right "></div>
  );
};
const RIGHT_LEG = () => {
  return (
    <div className="w-[100px] h-[10px] absolute bg-black top-[200px] right-[-90px] rotate-[60deg] origin-bottom-left "></div>
  );
};
const LEFT_LEG = () => {
  return (
    <div className="w-[100px] h-[10px] absolute bg-black top-[200px] right-0 rotate-[-60deg] origin-bottom-right "></div>
  );
};
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};
const HangmanDrawing = ({ numberOfGuesses }: { numberOfGuesses: number }) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses).map((BodyPart, index) => (
        <BodyPart key={index} />
      ))}
      <div className="h-[50px] w-[10px] bg-black top-0 right-0 absolute"></div>
      <div className="h-[10px] w-[200px] bg-black ml-[120px]"></div>
      <div className="h-[400px] w-[10px] bg-black ml-[120px]"></div>
      <div className="h-[10px] w-[250px] bg-black"></div>
    </div>
  );
};
export default HangmanDrawing;
