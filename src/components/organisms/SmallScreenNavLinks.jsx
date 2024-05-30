/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import NavLinks from "./NavLinks";

export default function SmallScreenNavLinks() {
  const [collapsible, setCollapsible] = useState(false);
  return (
    <>
      <button
        className="text-[#309b90] text-4xl"
        onClick={() => {
          setCollapsible(!collapsible);
        }}
      >
        <MdMenu />
      </button>
      {collapsible && (
        <div
          id="nav-screen"
          className="light-bg-alt dark:dark-bg-alt text-[#309b90] fixed left-0 top-0 w-screen h-screen flex justify-center items-center text-4xl transition-all duration-1000 ease-in-out"
        >
          <button
            className="text-[#309b90] text-4xl absolute top-4 right-4"
            onClick={() => {
              setCollapsible(!collapsible);
            }}
          >
            <MdClose />
          </button>
          <NavLinks classes="flex-col items-center gap-4" />
        </div>
      )}
    </>
  );
}
