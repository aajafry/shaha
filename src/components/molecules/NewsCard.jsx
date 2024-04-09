/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../atom/Heading";
import Image from "../atom/Image";
import Link from "../atom/Link";
import Peragraph from "../atom/Peragraph";

export default function NewsCard({
  imgSrc,
  date,
  interaction,
  title,
  except,
  link,
  animationId,
}) {
  return (
    <div>
      <div id={animationId}>
        <Image src={imgSrc} alt="ramadhan" />
      </div>

      <div>
        <div className="flex gap-4 my-4 text-neutral-500 dark-text-alt">
          <span id={animationId}>{date}</span>
          <span id={animationId}>{interaction}</span>
        </div>

        <div className="flex flex-col gap-6">
          <Heading
            animationId={animationId}
            heading={title}
            classes="text-2xl"
          />

          <Peragraph
            animationId={animationId}
            content={except}
            classes="text-sm"
          />

          <Link
            text="Event Details"
            href={link}
            classes="common-btn text-[#309b90] bg-[#D9EDEB]"
            animationId={animationId}
          />
        </div>
      </div>
    </div>
  );
}
