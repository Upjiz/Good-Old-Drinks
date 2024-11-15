import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrevious,
  onNext,
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 border border-[#E2C488] hover:bg-[#E2C488]/10 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-[#E2C488]" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 border border-[#E2C488] hover:bg-[#E2C488]/10 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-[#E2C488]" />
      </button>
    </>
  );
};
