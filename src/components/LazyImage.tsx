import React from 'react';
import { useLazyImage } from '../hooks/useLazyImage';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '',
  placeholderClassName = 'bg-slate-200 dark:bg-slate-700 animate-pulse'
}) => {
  const { ref, isLoaded } = useLazyImage();

  return (
    <img
      ref={ref}
      data-src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${!isLoaded ? placeholderClassName : ''} ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
};

export default LazyImage;