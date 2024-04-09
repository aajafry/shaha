/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import Link from "./atom/Link";
import SectionHeading from "./molecules/SectionHeading";
import ServiceFeatures from "./organisms/ServiceFeatures";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#service-features", {
      // xPercent: -100,
      opacity: 0.6,
      scale: 0.8,
      ease: "power2.inOut",
      stagger: {
        each: 0.5,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#service-features",
        start: "top 90%",
        end: "top 60%",
        scrub: 5.5,
      },
    });

    tl.from(".service-g-grow", {
      xPercent: 100,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".service-g-grow",
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
      },
    });

    tl.to(".service-btn", {
      opacity: 1,
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".service-btn",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });
  return (
    <section className="w-full overflow-hidden section-padding light-bg-main dark:dark-bg-main">
      <div className="screen-max-width">
        <div className="flex justify-between flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-[60dvw] flex-initial p-5">
            <ServiceFeatures />
          </div>
          <div className="w-full sm:w-[40dvw] flex-auto p-6 flex flex-col gap-6">
            <SectionHeading
              heading="Shaha Services"
              subheading="Uniting hearts, serving humanity at the Islamic Center."
              peragraph="Shaha Islamic centers typically offer a range of services and
              activities to cater to the spiritual, social, and educational
              needs of the Muslim community."
              animationClasses="service-g-grow"
            />
            <Link
              text="More Services"
              href="#"
              classes="common-btn text-[#309b90] bg-[#D9EDEB] service-btn opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
