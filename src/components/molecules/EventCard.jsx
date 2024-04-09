/* eslint-disable react/prop-types */
import Heading from "../atom/Heading";
import Image from "../atom/Image";
import Link from "../atom/Link";
import Peragraph from "../atom/Peragraph";

export default function EventsCard({
  imgSrc,
  date,
  author,
  title,
  except,
  link,
  animationId,
}) {
  return (
    <div>
      <div id={animationId}>
        <Image src={imgSrc} alt={title} />
      </div>
      <div>
        <div className="flex gap-4 my-4 text-neutral-500 dark-text-alt">
          <span id={animationId}>{date}</span>
          <span id={animationId}>{author}</span>
        </div>
        <div className="flex flex-col gap-6">
          <Heading
            heading={title}
            animationId={animationId}
            classes="text-2xl"
          />

          <Peragraph
            content={except}
            animationId={animationId}
            classes="text-sm"
          />
          <Link
            animationId={animationId}
            href={link}
            text="Event Details"
            classes="common-btn text-[#309b90] bg-[#D9EDEB]"
          />
        </div>
      </div>
    </div>
  );
}
