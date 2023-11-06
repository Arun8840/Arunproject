"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { HomeScreen } from "@/Utility/Style";
import LandingPage from "./HomeComponents/LandingPage";
import AboutMe from "./HomeComponents/AboutMe";
import Skills from "./knowledgeComponents/Skills";
import DetailPage1 from "./knowledgeComponents/DetailPage1";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});
function Homepage() {
  return (
    <div className={`w-full   ${HomeScreen.Main} ${poppins.className}`}>
      <LandingPage />
      <AboutMe />
      <Skills />
      <DetailPage1 />
    </div>
  );
}

export default Homepage;
