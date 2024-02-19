import React, { useEffect, useRef } from "react";

const Carosal = () => {
  const sliderRef = useRef(null);
  const click = useRef(null);

  useEffect(() => {
    const activate = (e) => {
      const items = document.querySelectorAll(".item");
      if (e.target.matches(".next")) {
        sliderRef.current.append(items[0]);
      }
      if (e.target.matches(".prev")) {
        sliderRef.current.prepend(items[items.length - 1]);
      }
    };

    click.current.addEventListener("click", activate);

    return () => {
      document.removeEventListener("click", activate, false);
    };
  }, []); 

  return (
    <div className="carosal  ">
      <main ref={click}>
        <ul className="slider" ref={sliderRef}>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("/images/s1.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"Lossless Youths"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Book A Demo</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("/images/s2.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"Estrange Bond"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Book A Demo</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("/images/s3.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"The Gate Keeper"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("/images/s4.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"Last Trace Of Us"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("/images/s5.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"Urban Decay"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("/images/s6.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"The Migration"</h2>
              <p className="description">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
        </ul>
        <nav className="nav ">
          <ion-icon className="btn prev" name="arrow-back-outline" />
          <ion-icon className="btn next" name="arrow-forward-outline" />
        </nav>
      </main>
    </div>
  );
};

export default Carosal;
