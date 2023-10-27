"use client";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { HomeScreen } from "@/Utility/Style";
import LandingPage from "./HomeComponents/LandingPage";
import Knowledge from "./HomeComponents/Knowledge";
import Templates from "./knowledgeComponents/Templates";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});
function Homepage() {
  return (
    <div className={`w-full   ${HomeScreen.Main} ${poppins.className}`}>
      <LandingPage />
      <Templates />
      <Knowledge />
    </div>
  );
}

export default Homepage;
