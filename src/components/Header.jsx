/* eslint-disable no-unused-vars */
import React from "react";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative">
      <HeroBanner />
      <Navbar />
    </header>
  );
}
