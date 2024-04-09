/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Link from "./atom/Link";
import EventCard from "./molecules/EventCard";
import SectionHeading from "./molecules/SectionHeading";
import EventFeatures from "./organisms/EventFeatures";
import Ramadhan from "/assets/images/ramadan-kareem-and-iftar-muslim-food-holiday-conce-3MTV85E.jpg";

export default function Events() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".event-g-grow", {
      yPercent: 100,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".event-g-grow",
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
      },
    });

    tl.from("#event-content img", {
      xPercent: 0,
      scale: 0.8,
      opacity: 0.6,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#event-content img",
        scrub: 5.5,
        start: "top 90%",
        end: "top 60%",
      },
    });

    tl.from("#event-content", {
      xPercent: -100,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#event-content",
        scrub: 5.5,
        start: "top 90%",
        end: "top 60%",
      },
    });

    tl.from("#event-features", {
      xPercent: 100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#event-features",
        scrub: 5.5,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });

  return (
    <section className="w-full overflow-hidden section-padding light-bg-main dark:dark-bg-main">
      <div className="screen-max-width">
        <div className="events-wrapper">
          <div className="events-header-wrapper">
            <div className="flex-center flex-col gap-6 text-center">
              <SectionHeading
                heading="Shaha Events"
                subheading="Unity in Diversity: Celebrating the Richness of Islamic Heritage"
                animationClasses="event-g-grow"
              />
            </div>
          </div>

          <div className="events-content-wrapper mt-10">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex-1 p-6">
                <EventCard
                  imgSrc={Ramadhan}
                  date="Jan 8, 2023"
                  author="Inam Ullah"
                  title="Ramadhan"
                  except=" This is the most significant event in the Islamic
                        calendar, and it occurs in the ninth month of the
                        Islamic lunar calendar. During Ramadan, Muslims fast
                        from dawn until sunset every day for a month. The fast
                        is broken at sunset with a meal called Iftar."
                  link="#"
                  animationId="event-content"
                />
              </div>
              <div className="flex-1 mt-6 ">
                <div className="light-bg-alt dark:dark-bg-alt px-6 py-10 ">
                  <div>
                    <EventFeatures />
                  </div>

                  <div id="event-features" className="w-fit mt-12 mb-6">
                    <Link
                      text="All Events"
                      href="#"
                      classes="common-btn text-[#309b90] bg-[#D9EDEB]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
