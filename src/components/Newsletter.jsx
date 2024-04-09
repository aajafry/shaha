/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Button from "./atom/Button";
import Input from "./atom/Input";
import SectionHeading from "./molecules/SectionHeading";

export default function Newsletter() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".newsletter-g-grow", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".newsletter-g-grow",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });

  return (
    <section className="w-full overflow-hidden relative parallax-newsletter">
      <div className="absolute inset-0 bg-[#17202a]/70"></div>
      <div className="section-padding text-center">
        <div className="screen-max-width">
          <div className="newsletter-wrapper">
            <SectionHeading
              heading="Newsletter"
              subheading="Subscribe to our newsletter to get the latest news and updates."
              animationClasses="newsletter-g-grow"
            />

            <div className="mt-12 flex-center gap-4 flex-col sm:flex-row">
              <Input
                type="text"
                name="newsletter"
                placeholder=""
                classes="py-2 px-4 w-full flex-1 bg-transparent text-[#bfc8d1] outline-none border-2 border-[#309b90] rounded shadow drop-shadow backdrop-blur newsletter-g-grow"
              />
              <Button
                type="submit"
                text="subscribe"
                classes="newsletter-g-grow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
