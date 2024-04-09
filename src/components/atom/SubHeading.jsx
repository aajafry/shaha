/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function SubHeading({ subheading, animationId, classes }) {
  return (
    <h2
      id={animationId}
      className={`sub-heading text-[#309b90] dark:dark-text-main ${classes}`}
    >
      {subheading}
    </h2>
  );
}
