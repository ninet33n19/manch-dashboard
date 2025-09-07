"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect, useCallback, useRef } from "react";

interface ImageCarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay) return;

    resetTimeout();
    timeoutRef.current = setInterval(goToNext, autoPlayInterval);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, autoPlay, autoPlayInterval, goToNext, resetTimeout]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Define slide width and gap for calculation. Using Tailwind's w-5/6 and gap-x-6.
  // w-5/6 is approx 83.333%
  // gap-x-6 is 1.5rem
  const slideWidthPercent = 100 * (5 / 6);
  const gapRem = 1.5;
  // The initial offset is to center the first slide. (100% - slideWidth) / 2
  const initialOffsetPercent = (100 - slideWidthPercent) / 2;

  // Smart preview logic: show previews of previous and next slides
  // We create a virtual index that includes cloned slides for seamless wrapping
  const virtualIndex = currentIndex + 1; // Shift by 1 to account for cloned first slide

  const transformStyle = {
    // We move the track left by the combined width of preceding slides and gaps,
    // starting from an initial offset that centers the first slide.
    transform: `translateX(calc(${initialOffsetPercent}% - ${virtualIndex * slideWidthPercent}% - ${virtualIndex * gapRem}rem))`,
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-4 bg-gray-100">
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-x-6 transition-transform duration-500 ease-in-out"
          style={transformStyle}
        >
          {/* Clone last slide to show as preview on the left of the first slide */}
          <div className="w-5/6 flex-shrink-0">
            <img
              src={images[images.length - 1]}
              alt={`Slide ${images.length}`}
              className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[16/9]"
            />
          </div>

          {/* Original slides */}
          {images.map((image, index) => (
            <div key={index} className="w-5/6 flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[16/9]"
              />
            </div>
          ))}

          {/* Clone first slide to show as preview on the right of the last slide */}
          <div className="w-5/6 flex-shrink-0">
            <img
              src={images[0]}
              alt="Slide 1"
              className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[16/9]"
            />
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-10"
        aria-label="Previous image"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-10"
        aria-label="Next image"
      >
        <ChevronRightIcon />
      </button>

      {/* Dot indicators */}
      {showDots && (
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                index === currentIndex
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
