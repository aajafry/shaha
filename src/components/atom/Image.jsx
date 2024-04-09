/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Image({ src, alt, classes, animationId }) {
  return (
    <img
      id={animationId}
      src={src}
      alt={alt}
      className={`rounded shadow object-cover object-center ${classes}`}
    />
  );
}
