"use client";

import { Button } from "@nextui-org/button";
import toast from "react-hot-toast";

const ColorActions = ({
  correctColor,
  colors,
  //   setSelectedColor,
  generateColors,
}: {
  correctColor?: string;
  colors: string[];
  //   setSelectedColor: any;
  generateColors: () => void;
}) => {
  return (
    <>
      <div className="flex justify-center space-x-4">
        {colors.map((color) => (
          <Button
            key={color}
            variant="flat"
            className="w-16 h-16 rounded-full"
            //   style={{ backgroundColor: color }}
            onClick={() => {
              if (color === correctColor) {
                // setSelectedColor(color);
                toast.success("Huraayyyy! Correct color!!!");
              } else {
                toast.error("Wrong color try again!!!");
              }
            }}
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
