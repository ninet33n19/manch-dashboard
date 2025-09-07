import React from "react";

interface ScrollItemProps {
  imageUrl: string;
  altText: string;
}

const ScrollItem: React.FC<ScrollItemProps> = ({ imageUrl, altText }) => {
  return (
    // Responsive width and height for the container
    // mx-2 adds horizontal spacing between items
    <div className="flex-shrink-0 w-64 h-36 md:w-80 md:h-48 bg-white rounded-lg shadow-md overflow-hidden mx-2 transform hover:scale-105 transition-transform duration-200 ease-in-out">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover" // object-cover ensures image fills the space without distortion
        loading="lazy" // Lazy load images for performance
      />
      {/* Optional: Add an overlay or text if needed */}
      {/*
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
        <p className="text-white text-sm font-medium">{altText}</p>
      </div>
      */}
    </div>
  );
};

export default ScrollItem;
