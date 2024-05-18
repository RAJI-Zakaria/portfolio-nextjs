"use client";
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

interface PropsType {
  fill?: string;
}

const ColorCard = ({ fill = "white" }: PropsType) => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setHidden(true);
  }, [fill]);
  return (
    <div
      className="w-full h-40 text-3xl font-bold leading-normal rounded-xl border flex items-center justify-center"
      style={{
        backgroundColor: `${fill}`,
      }}
    >
      {hidden ? (
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
