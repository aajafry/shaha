/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Image from "../atom/Image";

import LightGallery from "lightgallery/react";

// import LightGallery styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import LightGallery plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GalleryFigures = forwardRef(({ images }, ref) => {
  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };
  return (
    <div id="messonary-gallery" ref={ref}>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map((item) => (
          <a key={item.id} href={item.image}>
            <figure className="block break-inside-avoid mb-10 gallery-item">
              <Image
                src={item.image}
                alt=""
                classes="h-auto max-w-full rounded"
                loading={true}
              />
            </figure>{" "}
          </a>
        ))}
      </LightGallery>
    </div>
  );
});

export default GalleryFigures;
