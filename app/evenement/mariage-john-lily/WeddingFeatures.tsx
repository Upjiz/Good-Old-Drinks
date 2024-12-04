import React from "react";
import { Wine, Users, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wine,
    title: "Cocktails Signature",
    description:
      "Créez des cocktails personnalisés qui reflètent votre histoire d'amour",
  },
  {
    icon: Users,
    title: "Service Premium",
    description: "Équipe de mixologues expérimentés et service attentionné",
  },
  {
    icon: Clock,
    title: "Planification Détaillée",
    description: "Organisation minutieuse pour une expérience sans faille",
  },
  {
    icon: Sparkles,
    title: "Décoration Art Déco",
    description: "Bar mobile élégant avec décoration personnalisée",
  },
];

export default function WeddingFeatures() {
  return (
    <section className="py-20 px-4 bg-[#1D0808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c7b79c]/20 to-transparent opacity-50"></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c7b79c]"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c7b79c]"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c7b79c]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c7b79c]"></div>
              </div>

              <div className="relative p-8 bg-[#112B2A] hover:bg-[#112B2A]/80 transition-colors">
                <feature.icon className="w-12 h-12 text-[#c7b79c] mb-6 mx-auto" />
                <h3 className="text-xl font-serif text-center text-[#c7b79c] mb-4">
                  {feature.title}
                </h3>
                <p className="text-center text-[#c7b79c]/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
