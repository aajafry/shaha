/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";
import { galleryData } from "../constants/index";
import SectionHeading from "./molecules/SectionHeading";
import GalleryCategories from "./organisms/GalleryCategories";
import GalleryFigures from "./organisms/GalleryFigures";

gsap.registerPlugin(ScrollTrigger);

export default function ImageGallery() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".gallery-g-grow", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".gallery-g-grow",
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
      },
    });

    tl.from("#messonary-gallery", {
      opacity: 0,
      scale: 0,
      ease: "power2.inOut",
      stagger: {
        from: "random",
        each: 3,
      },
      scrollTrigger: {
        trigger: "#messonary-gallery",
        start: "top 90%",
        end: "top 60%",
        scrub: 5.5,
      },
    });
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fetchCategories, setFetchCategories] = useState([]);

  useEffect(() => {
    setFetchCategories(galleryData);
  }, []);

  const categories = [
    { id: 0, title: "All", link: "all" },
    ...new Set(
      fetchCategories.map((item) => ({
        id: item.id,
        title: item.title,
        link: item.link,
      }))
    ),
  ];

  const filteredImages =
    selectedCategory === "All"
      ? fetchCategories.flatMap((item) => item.items)
      : fetchCategories.find((item) => item.title === selectedCategory)
          ?.items ?? [];

  return (
    <section className="w-full overflow-hidden section-padding light-bg-alt dark:dark-bg-alt">
      <div className="screen-max-width">
        <div className="image-gallery-wrapper">
          <div className="image-gallery-header text-center flex-center flex-col gap-6">
            <SectionHeading
              heading="Shaha Gallery"
              subheading={
                <>
                  Connecting Hearts, Building Bridges: <br />
                  Discovering Islam at Shaha
                </>
              }
              animationClasses="gallery-g-grow"
            />

            <GalleryCategories
              categories={categories}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          <div className="image-gallery-content mt-20 sm:mt-24">
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>Image:not(:first-child)]:mt-8">
              <GalleryFigures images={filteredImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
