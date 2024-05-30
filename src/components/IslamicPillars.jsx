/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import SubHeading from "./atom/SubHeading";
import SectionHeading from "./molecules/SectionHeading";

export default function IslamicPillars() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".pillarsOfIslam-g-grow", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".pillarsOfIslam-g-grow",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
    tl.from(".pillarsOfIslam-fedIn", {
      // yPercent: -100,
      opacity: 0,
      scale: 0.8,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".pillarsOfIslam-fedIn",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });
  return (
    <section className="w-full overflow-hidden relative parallaxs-ilamic-pillar">
      <div className="absolute inset-0 bg-[#17202a]/70"></div>
      <div className="section-padding">
        <div className="screen-max-width">
          <div className="PillarsOfIslam-wrapper">
            <div className="PillarsOfIslam-header-wrapper text-center">
              <SectionHeading
                heading="Pillars Of Islam"
                subheading="A Foundation for Faith and Practice."
                animationClasses="pillarsOfIslam-g-grow"
              />
            </div>
          </div>

          <div className="mt-12 text-white flex  flex-wrap justify-around gap-6">
            <div className="flex-1 h-48 flex flex-col justify-center items-center border-2 border-[#309b90] rounded-full shadow backdrop-blur pillarsOfIslam-fedIn">
              <span className="text-6xl">K</span>
              <SubHeading subheading="Kalma" />
            </div>
            <div className="flex-1 h-48 flex flex-col justify-center items-center border-2 border-[#309b90] rounded-full shadow backdrop-blur pillarsOfIslam-fedIn">
              <span className="text-6xl">S</span>
              <SubHeading subheading="Salat" />
            </div>
            <div className="flex-1 h-48 flex flex-col justify-center items-center border-2 border-[#309b90] rounded-full shadow backdrop-blur pillarsOfIslam-fedIn">
              <span className="text-6xl">F</span>
              <SubHeading subheading="Fasting" />
            </div>
            <div className="flex-1 h-48 flex flex-col justify-center items-center border-2 border-[#309b90] rounded-full shadow backdrop-blur pillarsOfIslam-fedIn">
              <span className="text-6xl">Z</span>
              <SubHeading subheading="Zakaat" />
            </div>
            <div className="flex-1 h-48 flex flex-col justify-center items-center border-2 border-[#309b90] rounded-full shadow backdrop-blur pillarsOfIslam-fedIn">
              <span className="text-6xl">H</span>
              <SubHeading subheading="Hajj" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
