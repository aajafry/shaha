/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ text, type, classes, animationId, onClick }) {
  return (
    <button
      className={`common-btn text-[#309b90] bg-[#D9EDEB] ${classes}`}
      type={type}
      id={animationId}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
