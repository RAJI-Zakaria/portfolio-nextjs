import React from "react";

import Counter from "./Counter";
const CounterPage = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Counter />
      <div className=" text-center">
        <h1 className="text-4xl mb-5">
          What is so special about this counter ?
        </h1>
        <div className="space-y-4 mb-5">
          <p>
            Managing state can be challenging when working on heavy, complex
            projects. <br />
            As a result, the &quot;useState&quot; hook can be difficult to
            manage.
          </p>
          <p>
            That&apos;s why we have other systems/libraries to efficiently
            manage state, such as Redux. <br />
            However, this time I&apos;ve used Zustand, a small, fast, and
            scalable state-management solution.
          </p>
          <h2 className="text-2xl">First We need to create a store.ts</h2>
          <pre className="bg-neutral-800 p-5 text-start">{`import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    console.log("Incrementing count");
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    console.log("Decrementing count");
    set((state) => ({ count: state.count - 1 }));
  },
}));
`}</pre>

          <h2 className="text-2xl">How To use store.ts `useCounterStore`?</h2>
          <pre className="bg-neutral-800 p-5 text-start">{`const { count, increment, decrement } = useCounterStore();
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
);`}</pre>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
