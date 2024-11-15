import React from "react";
import { PartyPopper, Building2, Users, GlassWater } from "lucide-react";
import Image from "next/image";
import Spoon from "@/assets/Spoon.svg";

const services = [
  {
    icon: PartyPopper,
    title: "Mariage",
    description:
      "Offrez à vos invités une expérience unique avec un bar à cocktails raffiné, parfaitement adapté à l’élégance et à la magie de votre journée de mariage.",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
  },
  {
    icon: Building2,
    title: "Soirée Privée",
    description:
      "Ajoutez une touche d’exception à vos soirées privées grâce à des cocktails créatifs et un service professionnel qui enchante vos invités.",
    image:
      "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&q=80",
  },
  {
    icon: Users,
    title: "Soirée d'Entreprise",
    description:
      "Impressionnez vos collaborateurs et clients avec un service de bar mobile haut de gamme, idéal pour renforcer vos relations professionnelles lors de vos événements.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&auto=format&fit=crop&q=80",
  },
  {
    icon: GlassWater,
    title: "Evènements sportifs",
    description:
      "Animez vos rencontres sportives avec un bar mobile proposant des boissons variées et des cocktails sur-mesure, pour des moments de convivialité autour du sport.",
    image:
      "https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?w=500&auto=format&fit=crop&q=80",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-[#1D0808] relative  bg-gradient-to-b from-[#112B2A] via-[#1D0808] via-40% to-[#1D0808]"
    >
      <div className="absolute bottom-[100px] md:bottom-[350px] lg:bottom-[50px] w-[1000px] right-[-450px] lg:right-[-450px] xl:right-[-200px] lg:top-1/2 transform -translate-y-1/2">
        <div>
          <Image
            src={Spoon}
            alt="Cuillère décorative"
            className="hidden lg:block"
            width={1400}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
          <GlassWater className="w-6 h-6 lg:w-20 lg:h-10 text-[#E2C488]" />
          <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
        </div>
        <h2 className="text-4xl font-serif uppercase text-center mb-4 ">
          Prestations
        </h2>
        <p className="text-center font-semibold  md:text-xl xl:text-xl text-gray-300  mx-auto mb-16">
          Des rassemblements intimistes aux grandes célébrations, nous apportons
          l&apos;art de la mixologie directement sur votre lieu
          d&apos;événement. Nos barmans experts réalisent chaque cocktail avec
          précision et créativité, pour offrir à vous et vos invités une
          expérience inoubliable.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border-4 border-[#c7b79c] border-opacity-20"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <Image
                  width={400}
                  height={300}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D0808] to-transparent opacity-90">
                <div className="absolute bottom-0 p-6 text-white">
                  <service.icon className="text-[#c7b79c] mb-4" size={32} />
                  <h3 className="text-2xl font-serif text-[#c7b79c] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
