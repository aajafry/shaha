/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../atom/Heading";
import Link from "../atom/Link";

export default function NewsFeature({
  title,
  date,
  interaction,
  path,
  animationId,
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        <Heading animationId={animationId} heading={title} classes="text-2xl" />

        <div className="text-sm text-neutral-500 dark-text-alt text-nowrap flex gap-2">
          <span id={animationId}>{date}</span>
          <span id={animationId}> {interaction}</span>
        </div>

        <div id={animationId}>
          <Link
            text="Event Details"
            href={path}
            classes="text-sm dark:dark-text-main"
          />
        </div>
      </div>
    </div>
  );
}
