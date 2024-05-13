"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Floating photos component
const FloatingPhotos = ({ activeBlock }: { activeBlock: string }) => {
  return (
    <div className="floating-photos fixed">
      {activeBlock === "block1" && (
        <Image
          width={200}
          height={200}
          src="/cog.jpg"
          alt="Photo 1"
          className="floating-photo transition-all"
        />
      )}
      {activeBlock === "block2" && (
        <Image
          width={200}
          height={200}
          src="/cogs.jpg"
          alt="Photo 2"
          className="floating-photo transition-all"
        />
      )}
      {/* Add more photos as needed */}
    </div>
  );
};

// Layout component
const Layout = () => {
  const [activeBlock, setActiveBlock] = useState("block1"); // Initial block

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const block1 = document.getElementById("block1")?.offsetTop || 0;
      const block2 = document.getElementById("block2")?.offsetTop || 0;
      // Add more blocks as needed

      if (scrollPosition < block1) {
        setActiveBlock("block1");
      } else if (scrollPosition >= block1 && scrollPosition < block2) {
        setActiveBlock("block2");
      }
      // Add more conditions as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <FloatingPhotos activeBlock={activeBlock} />
      <div className="content">
        <div id="block1" className="w-full h-screen bg-red-700">
          <h2>Block 1</h2>
          {/* Your content for block 1 */}
        </div>
        <div id="block2" className="w-full h-screen bg-green-700">
          <h2>Block 2</h2>
          {/* Your content for block 2 */}
        </div>
        {/* Add more blocks as needed */}
      </div>
    </div>
  );
};

export default Layout;
