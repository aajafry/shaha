/* eslint-disable react/prop-types */
import Image from "../atom/Image";

import LightGallery from "lightgallery/react";

// import LightGallery styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import LightGallery plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function GalleryFigures({ images }) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map((item) => (
          <a key={item.id} href={item.image}>
            <figure
              id="messonary-gallery"
              className="block break-inside-avoid mb-10"
            >
              <Image
                src={item.image}
                alt=""
                classes="h-auto max-w-full rounded"
              />
            </figure>{" "}
          </a>
        ))}
      </LightGallery>
    </>
  );
}
