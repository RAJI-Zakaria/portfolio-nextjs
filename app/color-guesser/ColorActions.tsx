"use client";

import { Button } from "@nextui-org/button";
import toast from "react-hot-toast";

const ColorActions = ({
  colors,
  verifyColor,
  generateColors,
}: {
  colors: string[];
  verifyColor: (color: string) => void;
  generateColors: () => void;
}) => {
  return (
    <>
      <div className="flex justify-center space-x-4">
        {colors.map((color) => (
          <Button
            key={color}
            variant="flat"
            className="h-10 rounded-full hover:bg-neutral-500"
            //   style={{ backgroundColor: color }}
            onClick={() => verifyColor(color)}
          >
            {color}
          </Button>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <Button
          variant="flat"
          className="rounded-full bg-orange-500 text-white"
          onClick={() => generateColors()}
        >
          regenerate the colors
        </Button>
      </div>
    </>
  );
};

export default ColorActions;
