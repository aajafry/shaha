import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const customCursor = document.querySelector(".customSursor"),
      cursorWidth = customCursor.offsetWidth,
      cursorHeight = customCursor.offsetHeight;

    const mouseMove = (e) => {
      customCursor.style.left = `${e.clientX - cursorWidth / 2}px`;
      customCursor.style.top = `${e.clientY - cursorHeight / 2}px`;
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return <div className="customSursor"></div>;
}
