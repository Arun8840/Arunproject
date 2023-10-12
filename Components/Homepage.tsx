"use client";
import React from "react";
import NavHeader from "./HomeComponents/NavHeader";

import { Poppins } from "next/font/google";
import { HomeScreen } from "@/Utility/Style";
import LandingPage from "./HomeComponents/LandingPage";


function Homepage() {
  return (
    <div
      className={`w-full h-[100vh] ${HomeScreen.Main} flex flex-col`}
    >
      <NavHeader />
      <LandingPage />
    </div>
  );
}

export default Homepage;
