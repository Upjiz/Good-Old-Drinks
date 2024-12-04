import React from 'react';
import { Camera } from 'lucide-react';

export default function GalleryHero() {
  return (
    <div className="relative h-[40vh] bg-[#1D0808]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112B2A]/90 to-[#1D0808]"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          {/* Art Deco Title Container */}
          <div className="relative inline-block">
            {/* Top Decorative Elements */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="hidden md:flex items-center flex-1">
                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-[#c7b79c]"></div>
                <div className="w-4 h-4 rotate-45 bg-[#c7b79c] mx-3"></div>
                <div className="w-16 h-[1px] bg-[#c7b79c]"></div>
              </div>

              <Camera className="w-8 h-8 text-[#c7b79c]" />

              <div className="hidden md:flex items-center flex-1">
                <div className="w-16 h-[1px] bg-[#c7b79c]"></div>
                <div className="w-4 h-4 rotate-45 bg-[#c7b79c] mx-3"></div>
                <div className="w-32 h-[1px] bg-gradient-to-l from-transparent to-[#c7b79c]"></div>
              </div>
            </div>

            {/* Title with Frame */}
            <div className="relative px-12 py-8">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c7b79c]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c7b79c]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c7b79c]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c7b79c]"></div>

              <h1 className="text-4xl md:text-5xl font-serif">
                Notre Galerie
                <span className="block mt-2 text-xl text-[#c7b79c]/80">
                  Une Collection de Moments Inoubliables
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}