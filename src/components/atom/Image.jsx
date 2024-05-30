/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Image({ src, alt, classes,loading, animationId }) {
  return (
    <img
      id={animationId}
      src={src}
      alt={alt}
      loading={loading && "lazy"}
      className={`rounded shadow object-cover object-center ${classes}`}
    />
  );
}
