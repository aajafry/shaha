/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Heading({ heading, animationId, classes }) {
  return (
    <h2
      id={animationId}
      className={`text-[#309b90] dark:dark-text-main ${classes}`}
    >
      {heading}
    </h2>
  );
}
