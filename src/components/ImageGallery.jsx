/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { galleryData } from "../constants/index";
import SectionHeading from "./molecules/SectionHeading";
import GalleryCategories from "./organisms/GalleryCategories";
import GalleryFigures from "./organisms/GalleryFigures";

gsap.registerPlugin(ScrollTrigger);

export default function ImageGallery() {
  useGSAP(() => {
    gsap.from(".gallery-g-grow", {
      yPercent: -100,
      opacity: 0.6,
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
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fetchCategories, setFetchCategories] = useState([]);
  const massonaryGalleryRef = useRef(null);

  useEffect(() => {
    setFetchCategories(galleryData);
  }, []);

  const categories = useMemo(
    () => [
      { id: 0, title: "All", link: "all" },
      ...new Set(
        fetchCategories.map((item) => ({
          id: item.id,
          title: item.title,
          link: item.link,
        }))
      ),
    ],
    [fetchCategories]
  );

  useEffect(() => {
    const galleryElement = massonaryGalleryRef.current;
    if (categories.length > 1 && galleryElement) {
      const tl = gsap.timeline();

      tl.from(".gallery-cat-grow", {
        yPercent: -100,
        opacity: 0.6,
        ease: "power2.inOut",
        stagger: {
          each: 0.3,
          from: "start",
        },
        scrollTrigger: {
          trigger: ".gallery-cat-grow",
          start: "top 90%",
          end: "top 60%",
          scrub: 3,
        },
      });

      tl.from(".gallery-item", {
        opacity: 0,
        scale: 0,
        ease: "power2.inOut",
        stagger: {
          from: "start",
          each: 3,
        },
        scrollTrigger: {
          trigger: galleryElement,
          start: "top 90%",
          end: "top 60%",
          scrub: 5.5,
        },
      });
    }
  }, [categories, fetchCategories]);

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
              <GalleryFigures
                images={filteredImages}
                ref={massonaryGalleryRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
