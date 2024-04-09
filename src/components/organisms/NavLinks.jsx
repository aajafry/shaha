/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { navLists } from "../../constants";
import Link from "../atom/Link";

export default function NavLinks({ classes }) {
  return (
    <ul className={`flex ${classes}`}>
      {navLists.map((item) => (
        <li key={item.id}>
          <Link
            href={item.path}
            text={item.title}
            classes="hover:text-[#309b90] transition duration-300 ease-in-out"
          />
        </li>
      ))}
    </ul>
  );
}
