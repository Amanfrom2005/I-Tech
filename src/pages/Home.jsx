import { useEffect, useRef, useState } from 'react';
import '../styles/Home.css';

import image1 from "../assets/images/h-scroll-img-1.png";
import image2 from "../assets/images/h-scroll-img-1.png";
import image3 from "../assets/images/h-scroll-img-1.png";
import image4 from "../assets/images/h-scroll-img-1.png";

function Home() {
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
    { src: image4, alt: "" }
  ];

  // Initialize carousel with cloned slides
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone first and last images for seamless looping
    const firstClone = carousel.children[0].cloneNode(true);
    const lastClone = carousel.children[images.length - 1].cloneNode(true);
    
    carousel.insertBefore(lastClone, carousel.firstChild);
    carousel.appendChild(firstClone.cloneNode(true));

    // Set initial position
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Start auto-slide
    autoSlide();

    return () => {
      clearInterval(intervalRef.current);
      carousel.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, );

  const autoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        slideToIndex(newIndex);
        return newIndex;
      });
    }, 2000);
  };

  const handleTransitionEnd = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = carousel.children;
    if (currentIndex >= slides.length - 1) {
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(-${1 * 100}%)`;
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(-${slides.length - 2 * 100}%)`;
      setCurrentIndex(slides.length - 2);
    }
  };

  const slideToIndex = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${index * 100}%)`;
    carousel.addEventListener('transitionend', handleTransitionEnd, { once: true });
  };

  const updateClick = (direction) => {
    clearInterval(intervalRef.current);
    const newIndex = currentIndex + (direction === 'next' ? 1 : -1);
    setCurrentIndex(newIndex);
    slideToIndex(newIndex);
    autoSlide();
  };

  const startDrag = (e) => {
    clearInterval(intervalRef.current);
    setIsDragging(true);
    setStartPosX(e.clientX || e.touches[0].clientX);
    carouselRef.current.style.transition = 'none';
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    const currentPosX = e.clientX || e.touches[0].clientX;
    const translate = (currentPosX - startPosX) / 5;
    setCurrentTranslate(translate);
    carouselRef.current.style.transform = `translateX(calc(-${currentIndex * 100}% + ${translate}px))`;
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = wrapperRef.current?.offsetWidth / 10 || 0;
    if (currentTranslate < -threshold) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      slideToIndex(newIndex);
    } else if (currentTranslate > threshold) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      slideToIndex(newIndex);
    } else {
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setCurrentTranslate(0);
    autoSlide();
  };

  return (
    <main>
      <section className="main-1">
        <div className="main-1-detail">
          <div className="detail-1">
            <h6 className="main-subtile">I-TECH</h6>
            <h3 className="main-title-1">Evolve faster than tech itself</h3>
            <p className="main-p">
              Tech skills only have a 2.5 year lifespan, leaving 85 million jobs
              unfilled due to massive skills gaps. Don't get left in the
              dust—elevate your tech learning today.
            </p>
          </div>
          <div className="detail-2">
            <section 
              className="wrapper" 
              ref={wrapperRef}
              onMouseOver={() => clearInterval(intervalRef.current)}
              onMouseLeave={autoSlide}
            >
              <i 
                className="bx bx-left-arrow button" 
                id="prev" 
                onClick={() => updateClick('prev')} 
              />
              <div className="image-container">
                <div 
                  className="carousel" 
                  ref={carouselRef}
                  onMouseDown={startDrag}
                  onTouchStart={startDrag}
                >
                  {images.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} />
                  ))}
                </div>
                <i 
                  className="bx bx-right-arrow button" 
                  id="next" 
                  onClick={() => updateClick('next')} 
                />
              </div>
            </section>
          </div>
        </div>
        <div className="main-2-detail">
          <h1 className="m-2-d-h1">I-TECH EDUCATION</h1>
        </div>
      </section>
    </main>
  );
}

export default Home;