import React from "react";
import SectionTitle from "../../../components/ui/SectionTitle";
import Image from "next/image";

const images = [
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Espace Innovation",
  },
  {
    url: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Bar Moléculaire",
  },
  {
    url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Démonstrations",
  },
  {
    url: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Expériences Sensorielles",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-[#1D0808]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="La Soirée en Images"
          subtitle="Retour sur les moments forts de l'événement"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <div className="aspect-video">
                <Image
                  width={400}
                  height={300}
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-[#112B2A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-lg font-serif text-[#c7b79c]">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
