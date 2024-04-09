/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Link({ text, href, classes, animationId, onClick }) {
  return (
    <a id={animationId} href={href} className={classes} onClick={onClick}>
      {text}
    </a>
  );
}
