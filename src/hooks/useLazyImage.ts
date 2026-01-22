import { useEffect, useRef, useState } from 'react';

export const useLazyImage = (threshold = 0.1) => {
  const ref = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          const img = ref.current;
          img.src = img.dataset.src || '';
          img.onload = () => setIsLoaded(true);
          observer.unobserve(img);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isLoaded };
};