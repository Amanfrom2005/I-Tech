import React, { useEffect, useRef } from "react";
import "../styles/Cursour.css";

function Cursour() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const cDot = dotRef.current;
    const cOutline = outlineRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cDot) {
        cDot.style.left = `${x}px`;
        cDot.style.top = `${y}px`;
      }

      if (cOutline) {
        cOutline.animate(
          {
            left: `${x}px`,
            top: `${y}px`,
          },
          {
            duration: 500,
            fill: "forwards",
            easing: "ease-in-out",
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="c-dot" id="c-dot" ref={dotRef}></div>
      <div className="c-outline" id="c-outline" ref={outlineRef}></div>
    </>
  );
}

export default Cursour;
