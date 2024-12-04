import React from "react";
import { PartyPopper, Building2, Users, GlassWater } from "lucide-react";
import Image from "next/image";
import Spoon from "@/assets/Spoon.svg";
import SectionTitle from "./ui/SectionTitle";
import Link from "next/link";

const services = [
  {
    icon: PartyPopper,
    title: "Mariage",
    description:
      "Offrez à vos invités une expérience unique avec un bar à cocktails raffiné, parfaitement adapté à l'élégance et à la magie de votre journée de mariage.",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
    path: "/Mariage",
  },
  {
    icon: Building2,
    title: "Evènement Privée",
    description:
      "Ajoutez une touche d'exception à vos soirées privées grâce à des cocktails créatifs et un service professionnel qui enchante vos invités.",
    image:
      "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&q=80",
    path: "/Mariage",
  },
  {
    icon: Users,
    title: "Evènement d'Entreprise & Sportifs",
    description:
      "Impressionnez vos collaborateurs et clients avec un service de bar mobile haut de gamme, idéal pour renforcer vos relations professionnelles lors de vos événements.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&auto=format&fit=crop&q=80",
    path: "/Mariage",
  },
  {
    icon: GlassWater,
    title: "Consulting",
    description:
      "Besoin d’un accompagnement personnalisé pour concevoir ou améliorer votre projet ? Nous mettons notre expertise à votre service pour vous conseiller et vous guider à chaque étape. De l’idée à la réalisation, bénéficiez d’un accompagnement sur-mesure pour concrétiser vos ambitions",
    image: "https://images.unsplash.com/photo-1513470939372-bd520e7d77db?q=80",
    path: "/Mariage",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-[#1D0808] relative bg-gradient-to-b from-[#112B2A] via-[#1D0808] via-40% to-[#1D0808]"
    >
      <div className="absolute bottom-[100px] md:bottom-[350px] lg:bottom-[50px] w-[1000px] right-[-450px] lg:right-[-450px] xl:right-[-200px] lg:top-1/2 transform -translate-y-1/2">
        <div className="overflow-hidden">
          <Image
            src={Spoon}
            alt="Cuillère décorative"
            className="hidden  z-[-1] pointer-events-none object-cover "
            width={1400}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          className="mb-16"
          title="Prestations"
          subtitle="Des rassemblements intimistes aux grandes célébrations, nous apportons l'art de la mixologie directement sur votre lieu d'événement. Nos barmans experts réalisent chaque cocktail avec précision et créativité, pour offrir à vous et vos invités une expérience inoubliable."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.path}>
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border-4 border-[#c7b79c] border-opacity-20 h-[400px]"
              >
                <div className="absolute inset-0">
                  <Image
                    width={400}
                    height={300}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D0808] via-[#1D0808]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col">
                  {/* Initial View */}
                  <div className="mt-auto transform transition-transform duration-500 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
                    <service.icon className="text-[#c7b79c] mb-4" size={32} />
                    <h3 className="text-2xl font-serif text-[#c7b79c] mb-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover View */}
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <service.icon className="text-[#c7b79c] mb-4" size={32} />
                    <h3 className="text-2xl font-serif text-[#c7b79c] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Art Deco Decorative Element */}
                    <div className="flex items-center gap-2 mt-6">
                      <div className="w-2 h-2 rotate-45 bg-[#c7b79c]"></div>
                      <div className="flex-1 h-[1px] bg-[#c7b79c] opacity-20"></div>
                    </div>
                  </div>
                </div>

                {/* Art Deco Border Overlay */}
                <div className="absolute inset-0 border border-[#c7b79c] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#c7b79c]"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#c7b79c]"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#c7b79c]"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#c7b79c]"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p>
            Offrez une expérience unique et conviviale grâce à des services
            adaptés à tous vos événements. Que ce soit pour un baptême, un EVG,
            un EVJF, une soirée entre amis ou une réception privée, chaque
            prestation est pensée pour répondre à vos besoins spécifiques. Pour
            les clients particuliers, le bar mobile s&apos;invite à domicile
            pour des moments chaleureux, avec un large choix de cocktails,
            mocktails, bières et vins. Pour les entreprises, des solutions
            sur-mesure sont proposées : séminaires, afterworks, team building ou
            encore dégustations et ateliers interactifs, parfaits pour renforcer
            la cohésion et surprendre vos équipes. Chaque événement bénéficie de
            créations spéciales, élaborées avec soin pour offrir une expérience
            unique. Un devis personnalisé vous sera proposé pour garantir des
            prestations à la hauteur de vos attentes.
          </p>
        </div>
      </div>
    </section>
  );
}
