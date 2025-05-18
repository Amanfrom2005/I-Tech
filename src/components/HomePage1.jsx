import { useEffect, useRef, useState } from "react";
import "../styles/Home.css";

import image1 from "../assets/images/m-scroll-img/m-img-1.png";
import image2 from "../assets/images/m-scroll-img/m-img-2.png";
import image3 from "../assets/images/m-scroll-img/m-img-3.png";
import image4 from "../assets/images/m-scroll-img/m-img-4.png";
import image5 from "../assets/images/m-scroll-img/m-img-5.png";
import image6 from "../assets/images/m-scroll-img/m-img-6.png";
import image7 from "../assets/images/m-scroll-img/m-img-7.png";
import image8 from "../assets/images/m-scroll-img/m-img-8.png";
import mDetail2 from "../assets/images/logo-outline.png";

function HomePage1() {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosX, setStartPosX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const intervalRef = useRef(null);

  const images = [
    { src: image1, alt: "" },
    { src: image2, alt: "" },
    { src: image3, alt: "" },
    { src: image4, alt: "" },
    { src: image5, alt: "" },
    { src: image6, alt: "" },
    { src: image7, alt: "" },
    { src: image8, alt: "" },
  ];

  // Create cloned images array for seamless loop
  const clonedImages = [
    { ...images[images.length - 1] }, // Clone last image
    ...images,
    { ...images[0] }, // Clone first image
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Set initial position
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Start auto-slide
    autoSlide();

    return () => clearInterval(intervalRef.current);
  }, []);

  const autoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        slideToIndex(newIndex);
        return newIndex;
      });
    }, 3000); // Increased interval for better UX
  };

  const handleTransitionEnd = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Jump to the opposite end if we're at a boundary
    if (currentIndex >= clonedImages.length - 1) {
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${1 * 100}%)`;
      // Force reflow to ensure the transition is applied
      carousel.offsetHeight;
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${
        (clonedImages.length - 2) * 100
      }%)`;
      // Force reflow
      carousel.offsetHeight;
      setCurrentIndex(clonedImages.length - 2);
    }
  };

  const slideToIndex = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Remove previous transitionend listener to avoid duplicates
    carousel.removeEventListener("transitionend", handleTransitionEnd);

    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${index * 100}%)`;
    carousel.addEventListener("transitionend", handleTransitionEnd, {
      once: true,
    });
  };

  const updateClick = (direction) => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + (direction === "next" ? 1 : -1);
      slideToIndex(newIndex);
      return newIndex;
    });
    autoSlide();
  };

  const startDrag = (e) => {
    clearInterval(intervalRef.current);
    setIsDragging(true);
    setStartPosX(e.clientX || e.touches[0].clientX);
    carouselRef.current.style.transition = "none";
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    const currentPosX = e.clientX || e.touches[0].clientX;
    const translate = (currentPosX - startPosX) / 5;
    setCurrentTranslate(translate);
    carouselRef.current.style.transform = `translateX(calc(-${
      currentIndex * 100
    }% + ${translate}px))`;
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = wrapperRef.current?.offsetWidth / 10 || 0;
    if (currentTranslate < -threshold) {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        slideToIndex(newIndex);
        return newIndex;
      });
    } else if (currentTranslate > threshold) {
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;
        slideToIndex(newIndex);
        return newIndex;
      });
    } else {
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }

    setCurrentTranslate(0);
    autoSlide();
  };

  return (
    <main>
      <section className="main-1">
        <div className="main-1-detail">
          <div className="detail-1 m-detail">
            <h6 className="main-subtile">I-TECH</h6>
            <h3 className="main-title-1">Evolve faster than tech itself</h3>
            <p className="main-p">
              Tech skills only have a 2.5 year lifespan, leaving 85 million jobs
              unfilled due to massive skills gaps. Don't get left in the
              dust—elevate your tech learning today.
            </p>
          </div>
          <div className="detail-2 m-detail">
            <section
              className="wrapper"
              ref={wrapperRef}
              onMouseOver={() => clearInterval(intervalRef.current)}
              onMouseLeave={autoSlide}
            >
              <i
                className="bx bx-left-arrow button"
                id="prev"
                onClick={() => updateClick("prev")}
              />
              <div className="image-container">
                <div
                  className="carousel"
                  ref={carouselRef}
                  onMouseDown={startDrag}
                  onTouchStart={startDrag}
                  onMouseMove={duringDrag}
                  onTouchMove={duringDrag}
                  onMouseUp={endDrag}
                  onTouchEnd={endDrag}
                >
                  {clonedImages.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} />
                  ))}
                </div>
                <i
                  className="bx bx-right-arrow button"
                  id="next"
                  onClick={() => updateClick("next")}
                />
              </div>
            </section>
          </div>
        </div>
        <div className="main-2-detail">
          <img src={mDetail2} alt="" />
        </div>
      </section>

      <section className="main-2">
        
      </section>
    </main>
  );
}

export default HomePage1;
