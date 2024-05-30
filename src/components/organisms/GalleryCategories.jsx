/* eslint-disable react/prop-types */
import Link from "../atom/Link";

export default function GalleryCategoryLists({ categories, onSelectCategory }) {
  return (
    <ul className="flex-center flex-wrap gap-4">
      {categories?.map((item, index) => (
        <li
          key={index}
          className="gallery-cat-grow text-neutral-500 dark-text-alt light-bg-main dark:dark-bg-main px-3 py-1 rounded shadow hover:text-[#309b90] hover:dark-btn"
        >
          <Link
            href={`#${item?.link}`}
            text={item?.title}
            classes="cursor-pointer"
            onClick={() => onSelectCategory(item.title)}
          />
        </li>
      ))}
    </ul>
  );
}
