"use client";

import { useState, useEffect } from "react";

const GridDebugTool = ({ columns = 12 }) => {
  const [showGrid, setShowGrid] = useState(false);

  const toggleGrid = () => {
    setShowGrid((prevShowGrid) => !prevShowGrid);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === "G") {
        toggleGrid();
        console.log("Grid toggled");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {showGrid && (
        <div className="pointer-events-none fixed inset-0 z-[999] px-space-md 2xl:px-space-xl">
          <div className="grid h-screen grid-cols-4 gap-x-fluid md:grid-cols-8 xl:grid-cols-12">
            {[...Array(columns)].map((_, index) => (
              <div
                key={index}
                className="text-xs font-mono col-span-1 flex h-screen items-end justify-center bg-[#AD1A1A] bg-opacity-15 pb-space-sm text-[#AD1A1A] text-opacity-50"
              >
                <span>{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GridDebugTool;
