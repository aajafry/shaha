/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Heading from "./atom/Heading";
import Link from "./atom/Link";
import Peragraph from "./atom/Peragraph";
import NavLinks from "./organisms/NavLinks";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".footer-g-grow", {
      yPercent: -100,
      opacity: 0.8,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".footer-g-grow",
        scrub: 3,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });

  return (
    <footer className="w-full overflow-hidden section-padding light-bg-main dark:dark-bg-main">
      <div className="screen-max-width">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-baseline gap-8">
            <div>
              <Heading
                heading="Shaha Center"
                classes="text-4xl mb-6 footer-g-grow"
              />
              <Peragraph
                classes="text-sm footer-g-grow"
                content="The Dirham is a community center open to anyone, not merely a
                mosque for worship. The Islamic Center is dedicated to upholding
                an Islamic identity."
              />
            </div>

            <div>
              <Heading
                heading="Quick Links"
                classes="text-2xl mb-4 footer-g-grow"
              />
              <NavLinks classes="text-neutral-500 dark-text-alt flex-col gap-0" />
            </div>

            <div>
              <Heading
                heading="Contracts"
                classes="text-2xl mb-4 footer-g-grow"
              />
              <div className="text-sm text-neutral-500 dark-text-alt flex flex-col gap-1">
                <Link
                  href="tel:+18881234567"
                  text="1 888 123 4567"
                  classes="footer-g-grow hover:text-[#309b90]"
                />
                <Link
                  href="mailto:info@yousite.com"
                  text="info@yousite.com"
                  classes="footer-g-grow hover:text-[#309b90]"
                />
                <Peragraph
                  classes="footer-g-grow"
                  content={
                    <>
                      1122 Potter Rd, Antelope, <br />
                      CA 32802
                    </>
                  }
                />
              </div>
            </div>

            <div>
              <Heading heading="Social" classes="text-2xl mb-4 footer-g-grow" />
              <ul className="text-neutral-500 dark-text-alt">
                <li>
                  <Link
                    href="#"
                    text="Facebook"
                    classes="footer-g-grow hover:text-[#309b90]"
                  />
                </li>
                <li>
                  <Link
                    href="#"
                    text="Instagram"
                    classes="footer-g-grow hover:text-[#309b90]"
                  />
                </li>
                <li>
                  <Link
                    href="#"
                    text="Pinterest"
                    classes="footer-g-grow hover:text-[#309b90]"
                  />
                </li>
                <li>
                  <Link
                    href="#"
                    text="X"
                    classes="footer-g-grow hover:text-[#309b90]"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="border divide-zinc-800 opacity-100 dark:opacity-30 my-6"></div>
          <div>
            <Peragraph
              classes="text-sm footer-g-grow"
              content={
                <>
                  {" "}
                  Copyright © 2024 by @aajafry
                  <br />
                  All rights reserved.
                </>
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
