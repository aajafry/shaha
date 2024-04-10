/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../atom/Heading";
import Link from "../atom/Link";

export default function EventFeature({
  date,
  title,
  location,
  time,
  path,
  animationId,
}) {
  return (
    <div className="flex items-baseline justify-start md:items-center md:justify-evenly gap-4">
      <div>
        <span
          id={animationId}
          className="text-3xl text-[#309b90] text-opacity-70"
          dangerouslySetInnerHTML={{ __html: date }}
        ></span>
      </div>

      <div className="flex flex-col gap-2">
        <Heading
          heading={title}
          animationId={animationId}
          classes="text-2xl text-neutral-800"
        />

        <div className="text-sm text-neutral-500 dark-text-alt flex-wrap flex gap-2">
          <span id={animationId}>{location}</span>
          <span id={animationId}> {time}</span>
        </div>

        <div id={animationId}>
          <Link
            text="Events Details"
            href={path}
            // common-btn
            // light-bg-main
            // dark:dark-bg-main
            classes="text-sm dark:dark-text-main"
          />
        </div>
      </div>
    </div>
  );
}
