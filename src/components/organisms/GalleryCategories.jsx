/* eslint-disable react/prop-types */
import Link from "../atom/Link";

export default function GalleryCategoryLists({ categories, onSelectCategory }) {
  return (
    <ul className="flex-center flex-wrap gap-4">
      {categories.map((item) => (
        <li
          key={item.id}
          className="gallery-g-grow text-neutral-500 dark-text-alt light-bg-main dark:dark-bg-main px-3 py-1 rounded shadow hover:text-[#309b90] hover:dark-btn transition duration-300 ease-in-out"
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
