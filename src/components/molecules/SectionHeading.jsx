/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../atom/Heading";
import Peragraph from "../atom/Peragraph";
import SubHeading from "../atom/SubHeading";

export default function SectionHeading({
  heading,
  subheading,
  peragraph,
  animationClasses,
}) {
  return (
    <>
      <Heading heading={heading} classes={animationClasses} />
      <SubHeading subheading={subheading} classes={animationClasses} />
      {peragraph && (
        <Peragraph content={peragraph} classes={animationClasses} />
      )}
    </>
  );
}
