import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Button from "./Button";

export default function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Button
      text={
        isDarkMode ? (
          <MdDarkMode className="w-8 h-8" />
        ) : (
          <MdLightMode className="w-8 h-8" />
        )
      }
      type="button"
      classes="text-[#309b90] toggleThemeBtn"
      onClick={toggleTheme}
    />
  );
}
