// components/ScrollButton.js

import React from "react";

const ScrollButton = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
    >
      Scroll Down
    </button>
  );
};

export default ScrollButton;
