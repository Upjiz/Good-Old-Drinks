import React from "react";
import { ClipboardList, Palette, GlassWater, Calendar } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Consultation Initiale",
    description:
      "Nous commençons par une rencontre pour comprendre votre vision, vos goûts et vos attentes. C'est le moment de partager vos inspirations et de définir ensemble le style de votre bar à cocktails.",
  },
  {
    icon: Palette,
    title: "Création Sur Mesure",
    description:
      "Notre équipe crée une carte de cocktails personnalisée qui reflète votre histoire. Nous sélectionnons soigneusement chaque ingrédient et développons des recettes uniques pour votre événement.",
  },
  {
    icon: GlassWater,
    title: "Dégustation Privée",
    description:
      "Nous organisons une séance de dégustation où vous découvrez vos cocktails signatures. C'est l'occasion d'affiner les recettes selon vos préférences et de finaliser les détails.",
  },
  {
    icon: Calendar,
    title: "Planification Détaillée",
    description:
      "Nous établissons un planning précis, coordonnons avec vos autres prestataires et gérons tous les aspects logistiques pour assurer un service impeccable le jour J.",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#112B2A] via-[#1D0808] via-90% to-[#1D0808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Notre Processus
          </h2>
          <p className="text-[#c7b79c]/80 max-w-2xl mx-auto">
            Une approche méticuleuse pour créer une expérience cocktail unique
            et personnalisée pour votre mariage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c7b79c]/20 to-transparent opacity-50"></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c7b79c]"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c7b79c]"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c7b79c]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c7b79c]"></div>
              </div>

              <div className="relative p-8 bg-[#1D0808] h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#112B2A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-[#c7b79c]" />
                  </div>
                  <span className="inline-block w-8 h-[1px] bg-[#c7b79c]/30 mb-4"></span>
                  <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                  <p className="text-[#c7b79c]/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-[#c7b79c]/30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex items-center justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c7b79c]/50"></div>
          <div className="w-3 h-3 rotate-45 bg-[#c7b79c]/50 mx-3"></div>
          <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c7b79c]/50"></div>
        </div>
      </div>
    </section>
  );
}
