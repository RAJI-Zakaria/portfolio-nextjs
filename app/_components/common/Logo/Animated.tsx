// "use client";
import React, { useState } from "react";
import "./logo.style.css";

const LogoAnimation = () => {
  // const [isBoucing, setIsBoucing] = useState(false);
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 114.73 130.32"
      fill="#fff"
      className={"w-10"}
      // + (isBoucing ? "gelatine" : "")
      // onClick={() => {
      //   setIsBoucing(true);
      //   setTimeout(() => {
      //     setIsBoucing(false);
      //   }, 500);
      // }}
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <polygon
            className="cls-1 bounce-in-left "
            points="58.75 53.3 58.75 66.32 0 66.32 0 57.19 36.09 13.02 .04 13.02 .04 0 55.77 0 55.77 12.83 22.7 53.3 58.75 53.3"
          />
          <polygon
            className="cls-1 bounce-in-right"
            points="114.53 9.13 78.44 53.3 114.49 53.3 114.49 66.32 58.75 66.32 58.75 53.5 91.82 13.02 55.77 13.02 55.77 0 114.53 0 114.53 9.13"
          />
        </g>
        <polygon
          className="cls-1 hithere"
          points="114.73 88.22 114.73 72.19 0 72.19 0 88.22 31.09 88.22 45.1 94.63 0 111.15 0 130.32 63.53 106.39 114.73 129.9 114.73 111.02 66.22 89.09 66.22 88.22 114.73 88.22"
        />
      </g>
    </svg>
  );
};

export default LogoAnimation;
