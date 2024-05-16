import { Skeleton } from "@nextui-org/react";
import React from "react";

const loadingQuote = () => {
  return (
    <div className="w-full min-h-unit-9xl h-auto bg-gradient-to-tr from-[#FFB457] to-[#FF705B] justify-center relative flex flex-col items-center border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg overflow-hidden  space-y-3">
      <div className="w-[610px] flex justify-between items-center">
        <h1 className="text-2xl text-left font-semibold text-neutral-100  ">
          Daily Quotes
        </h1>

        <Skeleton className="border-none w-3/12 rounded-large  px-5 py-2  bg-background/60 dark:bg-default-100/50 self-stretch flex items-center justify-center text-sm " />
      </div>

      <Skeleton className="border-none  rounded-large h-[320px] bg-background/60 dark:bg-default-100/50 w-[610px] p-10" />
    </div>
  );
};

export default loadingQuote;
