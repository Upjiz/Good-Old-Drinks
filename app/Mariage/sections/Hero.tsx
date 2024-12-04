import React from "react";
import { GlassWater } from "lucide-react";

export default function WeddingHero() {
  return (
    <div className="relative h-[60vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#112B2A]/80"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          {/* Art Deco Title Container */}
          <div className="relative inline-block">
            {/* Top Decorative Elements */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="hidden md:flex items-center flex-1">
                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-[#c7b79c]"></div>
                <div className="w-4 h-4 rotate-45 bg-[#c7b79c] mx-3"></div>
                <div className="w-16 h-[1px] bg-[#c7b79c]"></div>
              </div>

              <GlassWater className="w-12 h-12 text-[#c7b79c]" />

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

              {/* Diamond Accents */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 rotate-45 bg-[#c7b79c]/20"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 rotate-45 bg-[#c7b79c]/20"></div>

              <h1 className="text-4xl md:text-5xl font-serif">
                L&apos;Art du Cocktail
                <span className="block mt-2">Pour Votre Mariage</span>
              </h1>
            </div>

            {/* Bottom Decorative Elements */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c7b79c]"></div>
              <div className="w-3 h-3 rotate-45 bg-[#c7b79c] opacity-50"></div>
              <div className="w-3 h-3 rotate-45 bg-[#c7b79c] opacity-70"></div>
              <div className="w-3 h-3 rotate-45 bg-[#c7b79c] opacity-50"></div>
              <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c7b79c]"></div>
            </div>
          </div>

          <p className="mt-8 text-lg md:text-xl text-[#c7b79c]/90 max-w-2xl mx-auto">
            Créez des moments inoubliables avec nos services de bar mobile et
            nos cocktails signatures personnalisés
          </p>
        </div>
      </div>
    </div>
  );
}
