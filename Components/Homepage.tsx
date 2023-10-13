"use client";
import React from "react";
import NavHeader from "./HomeComponents/NavHeader";

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
  return (
    <div
      className={`w-full  ${HomeScreen.Main} ${poppins.className}`}
    >
      
      <LandingPage />
      <Knowledge />
    </div>
  );
}

export default Homepage;
