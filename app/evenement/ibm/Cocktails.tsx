import React from "react";
import SectionTitle from "../../../components/ui/SectionTitle";
import Image from "next/image";

const cocktails = [
  {
    name: "Quantum Cloud",
    description:
      "Un cocktail spectaculaire à base de gin infusé au papillon bleu, liqueur de litchi et tonic, changeant de couleur au contact du citron",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Neural Network",
    description:
      "Vodka premium, liqueur de violette et champagne, servi dans une brume d'azote liquide créant un effet de réseau neuronal",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Data Stream",
    description:
      "Un long drink rafraîchissant composé de rhum blanc, purée de fruits exotiques et gelée de code binaire comestible",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Cocktails() {
  return (
    <section className="py-20 px-4 bg-[#112B2A]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Les Cocktails Signatures"
          subtitle="Des créations uniques inspirées par l'innovation technologique"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cocktails.map((cocktail, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c7b79c]/20 to-transparent opacity-50"></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c7b79c]"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c7b79c]"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c7b79c]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c7b79c]"></div>
              </div>

              <div className="relative bg-[#1D0808] p-6">
                <div className="aspect-square mb-4 overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif text-[#c7b79c] mb-2">
                  {cocktail.name}
                </h3>
                <p className="text-[#c7b79c]/80 text-sm">
                  {cocktail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}