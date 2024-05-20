import React from "react";
import { useCounterStore } from "./store";
import { Button } from "@nextui-org/react";
import { Icons } from "@/app/_components";

const Counter = () => {
  const { ArrowChevronLeftIcon, ArrowChevronRightIcon } = Icons;
  const { count, increment, decrement } = useCounterStore();
  return (
    <div className="flex gap-4 items-center min-h-64 ">
      <Button
        onClick={() => {
          if (count > 0) decrement();
        }}
        isIconOnly
        color="danger"
        variant={count === 0 ? "faded" : "solid"}
        size="lg"
        aria-label="decrement"
      >
        <ArrowChevronLeftIcon />
      </Button>
      <h2 className="text-6xl">{count}</h2>
      <Button
        onClick={increment}
        isIconOnly
        color="danger"
        size="lg"
        aria-label="increment"
      >
        <ArrowChevronRightIcon />
      </Button>
    </div>
  );
};

export default Counter;
