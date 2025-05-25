"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


import image1 from "../assets/images/m-scroll-img/m-img-1.png";
import image2 from "../assets/images/m-scroll-img/m-img-2.png";
import image3 from "../assets/images/m-scroll-img/m-img-3.png";
import image4 from "../assets/images/m-scroll-img/m-img-4.png";
import image5 from "../assets/images/m-scroll-img/m-img-5.png";
import image6 from "../assets/images/m-scroll-img/m-img-6.png";
import image7 from "../assets/images/m-scroll-img/m-img-7.png";
import image8 from "../assets/images/m-scroll-img/m-img-8.png";

const slideImages = [
  {
    id: 1,
    imageUrl: image1,
    link: "https://example.com/slide1",
  },
  {
    id: 2,
    imageUrl: image2,
    link: "https://example.com/slide1",
  },
  {
    id: 3,
    imageUrl: image3,
    link: "https://example.com/slide1",
  },
  {
    id: 4,
    imageUrl: image4,
    link: "https://example.com/slide1",
  },
  {
    id: 5,
    imageUrl: image5,
    link: "https://example.com/slide1",
  },
  {
    id: 6,
    imageUrl: image6,
    link: "https://example.com/slide1",
  },
  {
    id: 7,
    imageUrl: image7,
    link: "https://example.com/slide1",
  },
  {
    id: 8,
    imageUrl: image8,
    link: "https://example.com/slide1",
  },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const sliderRef = useRef(null)
  const autoPlayRef = useRef()

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length)
      }, 4000)
    }

    return () => clearInterval(autoPlayRef.current)
  }, [isAutoPlaying, isDragging])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    setIsAutoPlaying(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    setDragOffset(e.clientX - dragStart)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    if (Math.abs(dragOffset) > 100) {
      dragOffset > 0 ? prevSlide() : nextSlide()
    }
    setIsDragging(false)
    setDragOffset(0)
    setIsAutoPlaying(true)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setDragStart(e.touches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    setDragOffset(e.touches[0].clientX - dragStart)
  }

  const handleTouchEnd = () => {
    handleMouseUp()
  }

  return (
    <div className="w-full md:w-[80%] lg:w-[80%] max-w-4xl mx-auto">
      <div className="clip-path w-full relative bg-primary  overflow-hidden shadow-2xl">

        {/* Slider */}
        <div
          ref={sliderRef}
          className="relative h-100 overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out h-full items-center"
            style={{
              transform: `translateX(${-currentSlide * 100 + (dragOffset / (sliderRef.current?.offsetWidth || 1)) * 100}%)`,
            }}
          >
            {slideImages.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-full h-full flex items-center justify-center cursor-none"
              >
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full bg-center bg-cover"
                />
              </a>
            ))}
          </div>

          {/* Arrows */}
          <div
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-secondary transition-all  p-2 flex items-center justify-center"
            onClick={prevSlide}
          >
            <i className="bx bx-left-arrow text-primary" />
          </div>
          <div
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-secondary transition-all p-2 flex items-center justify-center"
            onClick={nextSlide}
          >
            <i className="bx bx-right-arrow text-primary" />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 p-4 bg-secondary">
          {slideImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary scale-125" : "bg-white hover:bg-white/60"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Autoplay control */}
        <div className="absolute top-4 right-4">
          <div
            variant="ghost"
            size="sm"
            className="bg-secondary hover:bg-primary hover:text-secondary text-primary text-sm py-2 px-4 transition-all"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? "Pause" : "Play"}
          </div>
        </div>
      </div>
    </div>
  )
}
