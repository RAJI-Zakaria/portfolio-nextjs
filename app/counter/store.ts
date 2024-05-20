import { create } from "zustand";

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
