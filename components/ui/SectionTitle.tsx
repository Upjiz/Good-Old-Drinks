import React from "react";
import { GlassWater } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  icon = true,
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      {/* Main Container */}
      <div className="relative inline-block max-w-4xl w-full">
        {/* Top Decorative Elements */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="hidden md:flex items-center flex-1">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-[#c7b79c]"></div>
            <div className="w-4 h-4 rotate-45 bg-[#c7b79c] mx-3 flex-shrink-0"></div>
            <div className="w-32 h-[1px] bg-[#c7b79c]"></div>
          </div>

          {icon && (
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-[#c7b79c] opacity-20 rotate-45"></div>
              <div className="relative transform transition-transform hover:rotate-45 duration-300">
                <GlassWater className="text-[#c7b79c]" size={40} />
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center flex-1">
            <div className="w-32 h-[1px] bg-[#c7b79c]"></div>
            <div className="w-4 h-4 rotate-45 bg-[#c7b79c] mx-3 flex-shrink-0"></div>
            <div className="w-full h-[1px] bg-gradient-to-l from-transparent to-[#c7b79c]"></div>
          </div>
        </div>

        {/* Title Container with Enhanced Frame */}
        <div className="relative px-16 py-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 art-deco-pattern"></div>
          </div>

          {/* Decorative Frame */}
          <div className="absolute inset-0">
            {/* Corner Pieces */}
            <div className="absolute -top-2 -left-2 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c7b79c] opacity-50"></div>
              <div className="absolute top-0 left-0 h-full w-[2px] bg-[#c7b79c] opacity-50"></div>
              <div className="absolute top-3 left-3 w-3 h-3 rotate-45 bg-[#c7b79c] opacity-30"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-[#c7b79c] opacity-50"></div>
              <div className="absolute top-0 right-0 h-full w-[2px] bg-[#c7b79c] opacity-50"></div>
              <div className="absolute top-3 right-3 w-3 h-3 rotate-45 bg-[#c7b79c] opacity-30"></div>
            </div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c7b79c] opacity-50"></div>
              <div className="absolute bottom-0 left-0 h-full w-[2px] bg-[#c7b79c] opacity-50"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 rotate-45 bg-[#c7b79c] opacity-30"></div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#c7b79c] opacity-50"></div>
              <div className="absolute bottom-0 right-0 h-full w-[2px] bg-[#c7b79c] opacity-50"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 rotate-45 bg-[#c7b79c] opacity-30"></div>
            </div>

            {/* Side Decorations */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-3 h-3 rotate-45 bg-[#c7b79c] opacity-30"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-3 h-3 rotate-45 bg-[#c7b79c] opacity-30"></div>

            {/* Additional Corner Decorations */}
            <div className="absolute top-0 left-1/4 w-4 h-[2px] bg-[#c7b79c] opacity-30"></div>
            <div className="absolute top-0 right-1/4 w-4 h-[2px] bg-[#c7b79c] opacity-30"></div>
            <div className="absolute bottom-0 left-1/4 w-4 h-[2px] bg-[#c7b79c] opacity-30"></div>
            <div className="absolute bottom-0 right-1/4 w-4 h-[2px] bg-[#c7b79c] opacity-30"></div>
          </div>

          {/* Title */}
          <h2
            className={`relative text-3xl md:text-5xl font-serif tracking-wider uppercase ${
              light ? "text-white" : "text-[#c7b79c]"
            }`}
          >
            {title}
          </h2>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c7b79c] opacity-30"></div>
            <div className="w-3 h-3 rotate-45 bg-[#c7b79c] opacity-50"></div>
            <div className="w-3 h-3 rotate-45 bg-[#c7b79c] opacity-70"></div>
            <div className="w-3 h-3 rotate-45 bg-[#c7b79c] opacity-50"></div>
            <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c7b79c] opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Subtitle with Enhanced Styling */}
      {subtitle && (
        <div className="mt-12 max-w-4xl mx-auto relative">
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#c7b79c] to-transparent opacity-10"></div>
          <p
            className={`md:text-lg font-light leading-relaxed px-4 pt-8 ${
              light ? "text-gray-100" : "text-gray-100"
            }`}
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
