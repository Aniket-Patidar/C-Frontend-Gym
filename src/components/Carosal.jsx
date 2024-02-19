import React from "react";

const Carosal = () => {
  return (
    <div>
      <div class="cont">
        <div class="slider"></div>
        <ul class="nav"></ul>
        <div data-target="right" class="side-nav side-nav--right"></div>
        <div data-target="left" class="side-nav side-nav--left"></div>
      </div>
    </div>
  );
};

export default Carosal;
