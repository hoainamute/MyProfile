import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  name: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        let next = prev + direction;
        if (next >= images.length) {
          setDirection(-1);
          next = images.length - 2;
        } else if (next < 0) {
          setDirection(1);
          next = 1;
        }
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, direction, isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex justify-center no-print">
      <div className="relative w-80 h-80 md:w-80 md:h-80">
        {/* Main Image */}
        <div className="relative w-full h-full overflow-hidden rounded-[3rem] border-4 border-white dark:border-slate-800 shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={`${name} portfolio image ${currentIndex + 1} of ${images.length}`}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-600 blur-3xl rounded-full opacity-30 dark:opacity-20 animate-pulse"></div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          onFocus={() => setIsAutoplay(false)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all z-10 focus-visible:outline-2 focus-visible:outline-indigo-600"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          onFocus={() => setIsAutoplay(false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all z-10 focus-visible:outline-2 focus-visible:outline-indigo-600"
          aria-label="Next image"
        >
          <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Image selection">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-indigo-600 ${
                index === currentIndex
                  ? 'bg-indigo-600 w-8'
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold" aria-live="polite">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;