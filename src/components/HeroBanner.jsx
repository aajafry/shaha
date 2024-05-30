/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Heading from "./atom/Heading";
import BannerImages from "./organisms/BannerImages";

export default function HeroBanner() {
  useEffect(() => {
    const [text, bg1, bg2, bg3] = [
      document.querySelector("#text"),
      document.querySelector("#bg1"),
      document.querySelector("#bg2"),
      document.querySelector("#bg3"),
    ];

    const scrollAnim = () => {
      let scrollValue = window.scrollY;
      text.style.marginTop = scrollValue * -1.5 + "px";
      bg1.style.top = scrollValue * 0.75 + "px";
      bg2.style.top = scrollValue * 0.5 + "px";
      bg3.style.top = scrollValue * 0.25 + "px";
    };

    window.addEventListener("scroll", scrollAnim);

    return () => {
      window.removeEventListener("scroll", scrollAnim);
    };
  }, []);

  return (
    <section
      id="hero-banner"
      className="relative h-[100dvh] w-full flex-center text-center overflow-hidden parallax-before"
    >
      <Heading
        heading="assalamu alaikum"
        animationId="text"
        classes="hero-text absolute capitalize text-[7dvw] translate-y-full tracking-wider text-nowrap transition-all ease-linear duration-700"
      />
      <BannerImages />
    </section>
  );
}

// ref: https://www.youtube.com/watch?v=gZUoDADIm1A
