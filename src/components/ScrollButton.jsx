// components/GoToTop.js

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    console.log("scroll");
    const heightToHide = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHide) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-10 right-10 w-16 h-16 bg-blue-500 text-white flex justify-center items-center rounded-full cursor-pointer"
          onClick={goToTop}
        >
          <FaArrowUp className="text-2xl" />
        </div>
      )}
    </>
  );
};

export default GoToTop;