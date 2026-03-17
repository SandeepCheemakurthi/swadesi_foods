import React, { useState, useEffect, useRef } from "react";

const withPublicUrl = (path) => `${process.env.PUBLIC_URL || ""}${path}`;

const images = [
  withPublicUrl("/images/broucher.jpeg"),
  withPublicUrl("/images/bellam-sunndalu.jpeg"),
  withPublicUrl("/images/bellam-gavalu.jpeg"),
  withPublicUrl("/images/hot-cashew.jpeg"),
];

export default function AdvancedCarousel() {

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStart = useRef(0);

  const length = images.length;

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

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