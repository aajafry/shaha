/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";
import Heading from "./atom/Heading";
import ThemeSwitch from "./atom/ThemeSwitch";
import NavLinks from "./organisms/NavLinks";
import SmallScreenNavLinks from "./organisms/SmallScreenNavLinks";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    gsap.fromTo(
      "#nav",
      { yPercent: 100, opacity: 0, display: "none" },
      {
        yPercent: 0,
        opacity: 1,
        zIndex: 40,
        display: "flex",
        ease: "power2.inOut",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "16px auto",
        scrollTrigger: {
          trigger: "#nav",
          scrub: 3,
          start: "top 50%",
          end: "top 10%",
        },
      }
    );
  });

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let onResize = () => {
      if (window.innerWidth > 900) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };

    onResize();

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    });

    return window.removeEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    });
  }, []);

  return (
    <nav className="relative">
      <div
        id="nav"
        className="w-full bg-transparent shadow backdrop-blur flex items-center px-10 sm:px-12 py-8 sm:py-10 opacity-0"
      >
        <div className="logo">
          <Heading
            heading="SHAHA"
            classes="text-4xl text-[#309b90] cursor-pointer"
          />
        </div>
        <div className="flex-1 flex justify-center">
          {menu ? (
            <SmallScreenNavLinks />
          ) : (
            <NavLinks classes="gap-4 dark:dark-text-main font-medium" />
          )}
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
