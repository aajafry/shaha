/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Button from "./atom/Button";
import NewsCard from "./molecules/NewsCard";
import SectionHeading from "./molecules/SectionHeading";
import NewsFeatures from "./organisms/NewsFeatures";
import Ramadhan from "/assets/images/ramadan-kareem-and-iftar-muslim-food-holiday-conce-3MTV85E.jpg";

export default function News() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".news-g-grow", {
      yPercent: 100,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".news-g-grow",
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
      },
    });

    tl.from("#news-content img", {
      xPercent: 0,
      scale: 0.8,
      opacity: 0.6,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#news-content img",
        scrub: 5.5,
        start: "top 90%",
        end: "top 60%",
      },
    });


    tl.from("#news-content", {
      xPercent: 100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#news-content",
        scrub: 5.5,
        start: "top 90%",
        end: "top 60%",
      },
    });

    tl.from("#news-features", {
      xPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#news-features",
        scrub: 5.5,
        start: "top 90%",
        end: "top 60%",
      },
    });
  });
  return (
    <section className="w-full overflow-hidden section-padding light-bg-alt dark:dark-bg-alt">
      <div className="screen-max-width">
        <div className="events-wrapper">
          <div className="events-header-wrapper">
            <div className="flex-center flex-col gap-6 text-center">
              <SectionHeading
                heading="Shaha News"
                subheading="Read Our Latest News"
                animationClasses="news-g-grow"
              />
            </div>
          </div>

          <div className="events-content-wrapper mt-10">
            <div className="flex flex-col md:flex-row-reverse justify-between">
              <div className="flex-1 p-6">
                <NewsCard
                  imgSrc={Ramadhan}
                  date="May 12, 2023"
                  interaction="0 Comments"
                  title="Thanking the Graces of Allah"
                  link="#"
                  animationId="news-content"
                  except="Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae."
                />
              </div>

              <div className="flex-1 mt-6 ">
                <div className="light-bg-main dark:dark-bg-main px-6 py-10 ">
                  <div>
                    <NewsFeatures />
                  </div>

                  <div id="news-features" className="w-fit mt-12 mb-6">
                    <Button text="All News" />
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
