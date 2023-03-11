import React from 'react';

const ImageWithSkeleton = ({ src, loading }) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      {loading ? (
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          <div className="h-full w-full bg-gray-400" />
        </div>
      ) : (
        <img className="absolute inset-0 w-full h-full" src={src} alt="image" />
      )}
    </div>
  );
};

export default ImageWithSkeleton;