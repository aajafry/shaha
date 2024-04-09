/* eslint-disable no-unused-vars */
import React from "react";
import { heroBanner } from "../../constants/index";
import Image from "../atom/Image";

export default function BannerImages() {
  const imageClasses = "absolute inset-0 w-full h-full object-cover";

  return (
    <>
      {heroBanner.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt={item.alt}
          classes={imageClasses}
          animationId={item.anim}
        />
      ))}
    </>
  );
}
