import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { GlassWater } from "lucide-react";
const events = [
  {
    title: "Mariage de John & Lily",
    date: "20 février 2024",
    location: "The Grand Palace",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&auto=format&fit=crop&q=80",
  },
  {
    title: "Séminaire IBM",
    date: "20 février 2024",
    location: "Metropolitan Club",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80",
  },
  {
    title: "Soirée privée",
    date: "20 février 2024",
    location: "Rose Garden Estate",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1704564872119-0e6b4ff0d7e7?w=500&auto=format&fit=crop&q=80",
  },
];

export default function Events() {
  return (
    <section className="py-32 bg-[#1D0808]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
            <GlassWater className="w-6 h-6 lg:w-20 lg:h-10 text-[#E2C488]" />
            <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
          </div>
          <h2 className="text-5xl font-serif text-[#c7b79c] mb-6">
            Nos derniers évenements
          </h2>

          <p className="text-center md:text-xl xl:text-2xl">
            Découvrez nos dernières prestations et laissez-vous inspirer par
            l&apos;ambiance unique que nous avons créée pour chaque événement.
            Mariages, soirées privées, célébrations d&apos;entreprise… chaque
            occasion est pour nous l&apos;opportunité de sublimer vos moments
            avec style et élégance.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group relative overflow-hidden">
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
                    width={400}
                    height={300}
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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