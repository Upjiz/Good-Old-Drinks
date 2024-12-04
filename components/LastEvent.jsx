import React from "react";
import { Calendar, MapPin } from "lucide-react";

import { events } from "../data/events";
import Image from "next/image";

export default function LastEvents() {
  return (
    <section className="py-32 bg-[#1D0808]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-[#c7b79c] mb-6">
            Our Last Events
          </h2>
          <div className="w-24 h-[1px] bg-[#c7b79c] mx-auto"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index}>
              {/* Art Deco Border */}
              <div
                className="absolute -inset-px border-[1px] border-[#c7b79c]"
                style={{
                  background: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  #c7b79c 10px,
                  #c7b79c 12px
                )`,
                }}
              ></div>

              {/* Content Container */}
              <div className="relative bg-[#2a1414] transform transition-transform duration-500 group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-[#c7b79c] mb-4">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#c7b79c]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#c7b79c]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="flex items-center gap-2 mt-6">
                    <div className="w-2 h-2 rotate-45 bg-[#c7b79c]"></div>
                    <div className="flex-1 h-[1px] bg-[#c7b79c] opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
