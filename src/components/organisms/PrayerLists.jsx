/* eslint-disable no-unused-vars */
import React from "react";
import { prayersTime } from "../../constants/index";
import Heading from "../atom/Heading";
import SubHeading from "../atom/SubHeading";

export default function PrayerLists() {
  return (
    <ul className="text-center flex justify-between flex-wrap flex-col gap-8 sm:flex-row sm:gap-0">
      {prayersTime.map((item) => (
        <div key={item.id} className="contents">
          <li id="prayers-time">
            <div>
              <Heading heading={item.name} />
              <SubHeading
                subheading={item.time}
                classes="text-neutral-500 dark:dark-text-alt"
              />
            </div>
          </li>
          {item.id !== prayersTime.length && (
            <li className="hidden sm:block border divide-zinc-800 opacity-30"></li>
          )}
        </div>
      ))}
    </ul>
  );
}
