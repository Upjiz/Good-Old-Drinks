import React from "react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Élégance",
    price: "À partir de 1500€",
    features: [
      "Bar mobile Art Déco",
      "2 mixologues professionnels",
      "4 heures de service",
      "3 cocktails signature",
      "Verrerie premium",
      "Glaçons artisanaux",
    ],
  },
  {
    name: "Prestige",
    price: "À partir de 2500€",
    featured: true,
    features: [
      "Bar mobile Art Déco premium",
      "3 mixologues professionnels",
      "6 heures de service",
      "5 cocktails signature",
      "Verrerie cristal",
      "Glaçons artisanaux",
      "Décoration personnalisée",
      "Animation cocktail",
    ],
  },
  {
    name: "Excellence",
    price: "Sur mesure",
    features: [
      "Bar mobile Art Déco luxe",
      "Équipe complète",
      "Service illimité",
      "Carte cocktails personnalisée",
      "Verrerie cristal",
      "Glaçons artisanaux",
      "Décoration sur mesure",
      "Animations exclusives",
    ],
  },
];

export default function WeddingPackages() {
  return (
    <section className="py-20 px-4 bg-[#112B2A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-[#c7b79c]">
          Nos Formules Mariage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative ${
                pkg.featured ? "transform -translate-y-4" : ""
              }`}
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-0.5">
                <div className="absolute inset-0 bg-gradient-to-b from-[#c7b79c]/20 to-transparent opacity-50"></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c7b79c]"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c7b79c]"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c7b79c]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c7b79c]"></div>
              </div>

              <div
                className={`relative p-8 ${
                  pkg.featured ? "bg-[#1D0808]" : "bg-[#1D0808]/50"
                }`}
              >
                <h3 className="text-2xl font-serif text-center text-[#c7b79c] mb-4">
                  {pkg.name}
                </h3>
                <div className="w-16 h-[1px] bg-[#c7b79c]/30 mx-auto mb-6"></div>
                <p className="text-xl text-center text-[#c7b79c] mb-8">
                  {pkg.price}
                </p>

                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-[#c7b79c]/80"
                    >
                      <Check className="w-5 h-5 text-[#c7b79c] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block w-full py-3 text-center border-2 transition-colors ${
                    pkg.featured
                      ? "border-[#c7b79c] bg-[#c7b79c] text-[#1D0808] hover:bg-transparent hover:text-[#c7b79c]"
                      : "border-[#c7b79c]/50 hover:border-[#c7b79c] hover:bg-[#c7b79c] hover:text-[#1D0808]"
                  }`}
                >
                  Demander un Devis
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
