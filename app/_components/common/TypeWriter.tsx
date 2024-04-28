"use client";
import { useEffect, useState } from "react";

//create propstype interface
interface PropsType {
  text: string;
  delay: number;
  infinite: boolean;
}

const TypeWriter = ({ text, delay, infinite }: PropsType) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlash, setShowSlash] = useState(true); // State to control the visibility of the slash

  useEffect(() => {
    let timeout: any;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText("");
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  // Toggle the visibility of the slash every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSlash((prevState) => !prevState);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Add a blinking slash at the end of the currentText
  const displayText = currentText + (showSlash ? "|" : "");

  return <span>{displayText}</span>;
};

export default TypeWriter;
