import React from "react";
import { AnimatedLogo } from "./_components";

const loading = () => {
  return (
    <div className="flex flex-col flex-grow h-screen items-center justify-center space-y-4">
      <div className="">
        <AnimatedLogo className="w-48" />
        <div className=" text-center mt-5">
          <h3 className="text-4xl mb-5">Loading...</h3>
        </div>
      </div>
    </div>
  );
};

export default loading;
