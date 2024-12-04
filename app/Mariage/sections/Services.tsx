import React from "react";
import { Wine, Users, Sparkles, Clock } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Wine,
    title: "Bar Mobile Art Déco",
    description:
      "Un bar élégant et personnalisé qui s'intègre parfaitement à votre décoration",
  },
  {
    icon: Users,
    title: "Équipe Professionnelle",
    description: "Des mixologues expérimentés pour un service impeccable",
  },
  {
    icon: Sparkles,
    title: "Cocktails Signatures",
    description: "Des créations uniques inspirées de votre histoire d'amour",
  },
  {
    icon: Clock,
    title: "Service Sur Mesure",
    description: "Une organisation minutieuse adaptée à votre planning",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-[#1D0808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif text-[#c7b79c]">Nos Services</h2>
            <p className="text-[#c7b79c]/90 text-lg leading-relaxed max-w-2xl">
              Nous créons des expériences uniques qui transforment votre mariage
              en un moment inoubliable. Notre approche combine l&apos;élégance
              de l&apos;art déco avec des techniques modernes de mixologie pour
              offrir un service exceptionnel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative group hover:translate-y-[-4px] transition-transform duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c7b79c]/20 to-transparent opacity-50 rounded"></div>
                  <div className="relative p-6 bg-[#112B2A] rounded">
                    <service.icon className="w-10 h-10 text-[#c7b79c] mb-4" />
                    <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                    <p className="text-[#c7b79c]/80">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative">
                <div className="absolute -inset-4 border border-[#c7b79c]/30"></div>
                <Image
                  width={400}
                  height={300}
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Service de bar mobile"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D0808] via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-6 bg-[#112B2A]/90 backdrop-blur">
                    <h3 className="text-xl font-serif mb-2">
                      Excellence & Raffinement
                    </h3>
                    <p className="text-[#c7b79c]/80">
                      Chaque détail est pensé pour créer une expérience
                      mémorable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
