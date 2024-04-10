/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Heading from "./atom/Heading";
import BannerImages from "./organisms/BannerImages";

gsap.registerPlugin(ScrollTrigger);

export default function HeroBanner() {
  useGSAP(() => {
    gsap.to("#text", {
      yPercent: -50,
      scale: 1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        scrub: 5.5,
        trigger: "#hero-banner",
      },
    });
    gsap.fromTo(
      "#bg1",
      { y: 50 },
      {
        y: 150,
        duration: 0.7,
        ease: "power2.inOut",
        scrollTrigger: {
          scrub: 1.5,
          trigger: "#hero-banner",
        },
      }
    );
    gsap.fromTo(
      "#bg2",
      { y: 0 },
      {
        y: 100,
        duration: 0.9,
        ease: "power2.inOut",
        scrollTrigger: {
          scrub: 1.5,
          trigger: "#hero-banner",
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
          trigger: "#hero-banner",
        },
      }
    );
  });

  return (
    <section
      id="hero-banner"
      className="relative h-[100dvh] w-full flex-center text-center overflow-hidden parallax-before"
    >
      <Heading
        heading="assalamu alaikum"
        animationId="text"
        classes="hero-text absolute capitalize text-[6dvw] tracking-wider -translate-y-full text-nowrap"
      />
      <BannerImages />
    </section>
  );
}

// ref: https://www.youtube.com/watch?v=gZUoDADIm1A
