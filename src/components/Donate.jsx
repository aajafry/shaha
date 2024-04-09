/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Button from "./atom/Button";
import SectionHeading from "./molecules/SectionHeading";

export default function Donate() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".donate-g-grow", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".donate-g-grow",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });
  return (
    <section className="w-full overflow-hidden relative parallax-donate">
      <div className="absolute inset-0 bg-[#17202a]/60"></div>
      <div className="section-padding">
        <div className="screen-max-width">
          <div className="donate-wrapper w-full sm:w-1/2 flex flex-col gap-6">
            <SectionHeading
              subheading={
                <>
                  Support us, <br />
                  we need your help.
                </>
              }
              peragraph="May Allah bless you! Thank you. Those who (in charity) spend of their goods by night and by day, in secret and in public, have their reward with their Lord"
              animationClasses="donate-g-grow"
            />
            <Button text="Donate" classes="donate-g-grow" />
          </div>
        </div>
      </div>
    </section>
  );
}
