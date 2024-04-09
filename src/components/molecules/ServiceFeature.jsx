/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../atom/Heading";
import Peragraph from "../atom/Peragraph";

export default function ServiceFeature({ icon, heading, description }) {
  return (
    <div className="relative light-bg-alt dark:dark-bg-alt p-6 rounded-md shadow">
      {/* <img src="" alt="icon" className="-translate-y-full scale-1" /> */}
      <Heading
        heading={icon}
        classes="absolute -translate-y-full scale-1 text-6xl"
      />

      <Heading heading={heading} classes="text-2xl" />

      <Peragraph classes="text-sm" content={description} />
    </div>
  );
}
