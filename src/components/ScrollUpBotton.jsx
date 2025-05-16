import React, { useEffect, useState } from "react";

function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight; // 100vh
      setVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scroll_up"
      className={`scroll_up-icon ${visible ? "active" : ""}`}
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "var(--secendary-bg-color)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        fontSize: "1.5rem",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease",
        zIndex: 1000,
      }}
    >
      <i className="wgl-svg-icon">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
        </svg>
      </i>
    </button>
  );
}

export default ScrollUpButton;
