"use client";
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface PropsType {
  fill?: string;
  isRegenerating: boolean;
}

const ColorCard = ({ fill = "white", isRegenerating = false }: PropsType) => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setHidden(true);
  }, [fill]);
  return (
    <div
      className="w-unit-7xl md:w-unit-9xl h-40 text-3xl font-bold leading-normal rounded-xl border flex items-center justify-center self-center"
      style={{
        backgroundColor: `${fill}`,
      }}
    >
      {isRegenerating ? (
        <CountdownCircleTimer
          isPlaying
          size={140}
          duration={3}
          colors={["#004ff7", "#F7Bf0f", "#Af0000"]}
          colorsTime={[3, 2, 1]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      ) : hidden ? (
        <Button
          onClick={() => setHidden(!hidden)}
          variant="flat"
          className={classNames(
            "absolute text-2xl font-bold",
            hidden ? "text-white" : "text-black"
          )}
        >
          {hidden ? "Give Hint!" : "Hide"}
        </Button>
      ) : (
        <span
          className={classNames(hidden ? "text-transparent" : "text-black")}
        >
          {fill}
        </span>
      )}
    </div>
  );
};

export default ColorCard;
