/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Heading from "./atom/Heading";
import BannerImages from "./organisms/BannerImages";

gsap.registerPlugin(ScrollTrigger);

export default function HeroBanner() {
  useGSAP(() => {
    gsap.from("#text", {
      yPercent: 100,
      // scale: 0.8,
      ease: "power2.inOut",
      scrollTrigger: {
        scrub: 5.5,
        trigger: "#text",
      },
    });
    gsap.fromTo(
      "#bg1",
      { y: 0 },
      {
        y: 50,
        duration: 0.7,
        ease: "power2.inOut",
        scrollTrigger: {
          scrub: 1.5,
          trigger: "#text",
        },
      }
    );
    gsap.fromTo(
      "#bg2",
      { y: 0 },
      {
        y: 50,
        duration: 0.9,
        ease: "power2.inOut",
        scrollTrigger: {
          scrub: 1.5,
          trigger: "#text",
        },
      }
    );
    gsap.fromTo(
      "#bg3",
      { y: 0 },
      {
        y: 50,
        duration: 1.1,
        ease: "power2.inOut",
        scrollTrigger: {
          scrub: 1.5,
          trigger: "#text",
        },
      }
    );
  });

  return (
    <section
      id="hero-banner"
      className="relative  h-[100dvh] w-full flex-center text-center overflow-hidden parallax-before"
    >
      <Heading
        heading="assalamu alaikum"
        animationId="text"
        classes="absolute capitalize text-[6dvw] text-[#309b90] tracking-wider -translate-y-full text-nowrap"
      />
      <BannerImages />
    </section>
  );
}

// ref: https://www.youtube.com/watch?v=gZUoDADIm1A
