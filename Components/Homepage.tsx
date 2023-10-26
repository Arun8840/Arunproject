"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { HomeScreen } from "@/Utility/Style";
import LandingPage from "./HomeComponents/LandingPage";
import Knowledge from "./HomeComponents/Knowledge";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});
function Homepage() {
  const [Position, setposition] = useState<any>({
    clientX: null,
    clientY: null,
  });
  // todo pointer
  const handleCursormove = (e: any) => {
    if (e) {
      setposition((prev: any) => ({
        ...prev,
        clientX: e.clientX + "px",
        clientY: e.clientY + "px",
      }));
    } else {
      setposition((prev: any) => ({
        ...prev,
        clientX: null,
        clientY: null,
      }));
    }
  };
  return (
    <div
      onMouseMove={handleCursormove}
      className={`w-full cursor-none  ${HomeScreen.Main} ${poppins.className}`}
    >
      <LandingPage />
      <Knowledge />

      {/* pointer */}
      <div
        style={{ left: Position.clientX, top: Position.clientY }}
        className="bg-gradient-to-br from-[#adfa1d] to-yellow-200 fixed rounded-full w-[200px] h-[200px] mix-blend-difference shadow-2xl"
      ></div>
    </div>
  );
}

export default Homepage;
