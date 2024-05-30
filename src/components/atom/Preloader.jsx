import { useEffect } from "react";
import Heading from "./Heading";

export default function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");

    window.addEventListener("load", () => {
      preloader.style.display = "none";
    });

    return () => {
      window.removeEventListener("load", () => {
        preloader.style.display = "none";
      });
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex-center overflow-hidden light-bg-main preloader">
      <Heading
        heading="SHAHA"
        classes="text-[15dvw] text-[#309b90] cursor-pointer animate-pulse"
      />
    </div>
  );
}
