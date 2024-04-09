/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import PrayersTime from "./PrayersTime";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".prayer-g-grow", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".prayer-g-grow",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
    tl.from("#prayers-time", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#prayers-time",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });
  return (
    <section className="w-full overflow-hidden section-padding light-bg-alt dark:dark-bg-alt">
      <div className="screen-max-width">
        <PrayersTime />
      </div>
    </section>
  );
}
