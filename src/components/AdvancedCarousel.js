import React, { useState, useEffect, useRef } from "react";

const images = [
  "/images/broucher.jpeg",
  "/images/bellam-sunndalu.jpeg",
  "/images/bellam-gavalu.jpeg",
  "/images/hot-cashew.jpeg"
];

export default function AdvancedCarousel() {

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStart = useRef(0);

  const length = images.length;

  /* Auto slide */

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  /* Next / Prev */

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  /* Mobile swipe */

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {

    const touchEnd = e.changedTouches[0].clientX;

    if (touchStart.current - touchEnd > 50) nextSlide();
    if (touchEnd - touchStart.current > 50) prevSlide();
  };

  return (

    <div
      className="carousel"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <div
        className="carousel-track"
        style={{ transform: `translate3d(-${current * 100}%,0,0)` }}
      >

        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            loading="lazy"
            alt="banner"
            className="carousel-image"
          />

        ))}

      </div>

      {/* arrows */}

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {/* dots */}

      <div className="dots">

        {images.map((_, i) => (

          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />

        ))}

      </div>

    </div>
  );
}