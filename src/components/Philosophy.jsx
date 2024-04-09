/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import Link from "./atom/Link";
import SectionHeading from "./molecules/SectionHeading";
import PhilosophyFeatures from "./organisms/PhilosophyFeatures";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".philosophy-g-grow", {
      y: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".philosophy-g-grow",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });

    tl.from("#philosophy-features", {
      yPercent: 100,
      ease: "power2.inOut",
      stagger: {
        from: "start",
        each: 0.3,
      },
      scrollTrigger: {
        trigger: "#philosophy-features",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
    tl.to(".philosophy-btn", {
      opacity: 1,
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".philosophy-btn",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });
  return (
    <section className="w-full overflow-hidden section-padding light-bg-alt dark:dark-bg-alt">
      <div className="screen-max-width">
        <div className="philosophy-wrapper">
          <div className="philosophy-header-wrapper">
            <div className="text-center flex-center flex-col gap-6">
              <SectionHeading
                heading="Shaha Philosophy"
                subheading="Discover the beauty of Islam, find peace in our center."
                animationClasses="philosophy-g-grow"
              />
            </div>
          </div>

          <div className="philosophy-content-wrapper">
            <div className="mt-20 sm:mt-24">
              <PhilosophyFeatures />
            </div>
            <div className="w-fit mt-20 sm:mt-24 mx-auto">
              <Link
                text="Read More"
                href="#"
                classes="common-btn text-[#309b90] bg-[#D9EDEB] philosophy-btn opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
