import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

import SectionTitle from "./ui/SectionTitle";
const events = [
  {
    title: "Mariage de John & Lily",
    date: "20 Janvier 2024",
    location: "Pezenas",
    description: "Un moment unique pour sceller leur histoire.",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&auto=format&fit=crop&q=80",
    path: "/evenement/mariage-john-lily",
  },
  {
    title: "Séminaire IBM",
    date: "17 Avril 2024",
    location: "Montpellier",
    description: "Un rendez-vous stratégique pour façonner demain.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80",
    path: "@/app/Mariage/page",
  },
  {
    title: "Soirée privée",
    date: "13 Aout 2024",
    location: "Gruissan",
    description: "Un espace intime pour partager l'instant.",
    image:
      "https://images.unsplash.com/photo-1704564872119-0e6b4ff0d7e7?w=500&auto=format&fit=crop&q=80",
    path: "@/app/Mariage/page",
  },
];

export default function Events() {
  return (
    <section className="py-32 bg-[#1D0808]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4"></div>
          <SectionTitle
            title="Nos derniers évenements"
            subtitle="Découvrez nos dernières prestations et laissez-vous inspirer par
            l'ambiance unique que nous avons créée pour chaque événement.
            Mariages, soirées privées, célébrations d'entreprise… chaque
            occasion est pour nous l'opportunité de sublimer vos moments
            avec style et élégance."
          />
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
