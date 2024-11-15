import React from "react";

interface CarouselDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  total,
  current,
  onSelect,
}) => {
  return (
    <div className="flex justify-center space-x-3 mb-4">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2.5 h-2.5 border-2 border-[#E2C488] rotate-45 transition-all duration-300 ${
            index === current ? "bg-[#E2C488]" : "bg-transparent"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
