"use client";
import ColorCard from "./ColorCard";
import ColorActions from "./ColorActions";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const ColorGuesser = () => {
  // const [selectedColor, setSelectedColor] = useState();
  const [cardColor, setCardColor] = useState<string>();
  const [colors, setColors] = useState<string[]>([]);

  const generateColors = () => {
    // Create a new array with random colors
    const newColors: string[] = [];
    for (let i = 0; i < 3; i++) {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      newColors.push(randomColor);
    }
    // Update the state with the new array of colors
    setColors(newColors);

    // Set the card color to one of the colors in the array
    const selectedHexColor =
      newColors[Math.floor(Math.random() * newColors.length)];
    setCardColor(selectedHexColor);
  };

  useEffect(() => {
    generateColors();
  }, []);

  return (
    <>
      <ColorCard fill={cardColor} />
      <ColorActions
        colors={colors}
        correctColor={cardColor}
        // setSelectedColor={setSelectedColor}
        generateColors={generateColors}
      />
    </>
  );
};

export default ColorGuesser;
