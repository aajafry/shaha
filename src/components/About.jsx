/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "./atom/Image";
import Link from "./atom/Link";
import SectionHeading from "./molecules/SectionHeading";
import aboutbg from "/assets/images/aboutbg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".about-content", {
      xPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".about-content",
        scrub: 5.5,
        start: "top 90%",
        end: "top 60%",
      },
    });
    tl.from("#about-image", {
      // xPercent: 100,
      scale: 0.8,
      opacity: 0.6,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#about-image",
        scrub: 5.5,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });
  return (
    <section className="w-full overflow-hidden section-padding light-bg-main dark:dark-bg-main">
      <div className="screen-max-width">
        <div className="about-shaha-wrapper mt-0 sm:mt-0">
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="flex-1 flex flex-col gap-6 p-6">
              <SectionHeading
                heading="About Shaha"
                subheading="Welcome to the Islamic Center"
                peragraph={
                  <>
                    The Shaha is not just a mosque for prayers rather it is a
                    community center for all. <br /> <br /> The Center is
                    committed to preserving an Islamic identity, building and
                    supporting a viable Muslim community, promoting a
                    comprehensive Islamic way of life based on the Holy Quran
                    and the Sunnah of Prophet Muhammad.
                  </>
                }
                animationClasses="about-content"
              />
              <Link
                text="Read More"
                href="#"
                classes="about-content common-btn text-[#309b90] bg-[#D9EDEB]"
              />
            </div>
            <div id="about-image" className="flex-1 p-6">
              <Image
                src={aboutbg}
                alt="about shaha"
                classes="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
