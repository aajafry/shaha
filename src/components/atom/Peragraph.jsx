/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Peragraph({ content, classes, animationId }) {
  return (
    <p
      id={animationId}
      className={`common-pera text-neutral-500 dark:dark-text-alt ${classes}`}
    >
      {content}
    </p>
  );
}
