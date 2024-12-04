"use client";

import React, { useState } from "react";
import { CarouselNavigation } from ".././CarouselNavigation";
import { CarouselDots } from ".././CarouselDots";
import { classicCocktails } from "./ClasicCocktail";
import Image from "next/image";

const ClassicCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (newIndex: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const nextSlide = () => {
    handleTransition((currentIndex + 1) % classicCocktails.length);
  };

  const prevSlide = () => {
    handleTransition(
      (currentIndex - 1 + classicCocktails.length) % classicCocktails.length
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[500px] art-deco-border-2 p-3">
      <div className="absolute inset-3 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            isTransitioning ? "scale-105" : "scale-100"
          }`}
        >
          <Image
            src={classicCocktails[currentIndex].image}
            alt={classicCocktails[currentIndex].name}
            className="w-full h-full object-cover"
            width={400}
            height={300}
          />
        </div>

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
          <div className="text-center">
            <p className="font-italiana text-xs tracking-[0.3em] mb-2">
              {classicCocktails[currentIndex].year}
            </p>
            <h2 className="text-4xl font-playfair mb-3 tracking-wide">
              {classicCocktails[currentIndex].name}
            </h2>
            <div className="w-16 h-[1px] bg-[#E2C488] mx-auto mb-4" />
            <p className="text-base mb-8 opacity-90 max-w-xl mx-auto font-light">
              {classicCocktails[currentIndex].description}
            </p>

            <CarouselDots
              total={classicCocktails.length}
              current={currentIndex}
              onSelect={handleTransition}
            />
          </div>
        </div>

        <CarouselNavigation onPrevious={prevSlide} onNext={nextSlide} />
      </div>
    </div>
  );
};

export default ClassicCarousel;
