import React from "react";
import { GlassWater } from "lucide-react";
import CocktailCarousel from "./CocktailCarousel";
import MockctailCarousel from "./MocktailCarousel";

import Image from "next/image";
import Deco1 from "@/assets/Deco/Deco1.svg";
import Deco2 from "@/assets/Deco/Deco2.svg";
import Deco3 from "@/assets/Deco/Deco3.svg";
import Deco4 from "@/assets/Deco/Deco4.svg";
import SectionTitle from "../ui/SectionTitle";
import ClassicCarousel from "./ClasicCocktail/ClassicCarousel";

function Carousel() {
  return (
    <div className="relative">
      <Image
        src={Deco1}
        alt="Deco1"
        className="hidden lg:block absolute object-cover w-[600px]  xl:top-[20%] xl:left-[0%]  transform rotate-45    lg:transform -translate-y-1/2 animate-deco pointer-events-none"
      />
      <Image
        src={Deco2}
        alt="Deco2"
        className="hidden xl:block absolute object-cover w-[600px]  xl:bottom-[30%] xl:right-[0%]  transform -rotate-12 lg:transform -translate-y-1/2 animate-deco2 pointer-events-none"
      />
      <Image
        src={Deco3}
        alt="Deco3"
        className="hidden xl:block absolute object-cover w-[600px]  xl:top-[20%] xl:right-[0%]  transform rotate-[-20deg]    lg:transform -translate-y-1/2 animate-deco3 pointer-events-none"
      />
      <Image
        src={Deco4}
        alt="Deco4"
        className="hidden xl:block absolute object-cover w-[600px]  xl:bottom-[30%] xl:left-[0%]  transform rotate-[-10deg]    lg:transform -translate-y-1/2 animate-deco pointer-events-none"
      />
      <div id="cocktails" className=" bg-[#1C0A08] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTitle title="Nos créations" />
          </div>
          <div className="text-center mb-12 mt-12   md:text-lg">
            <p>
              Découvrez une expérience de bar sur mesure avec notre service de
              cocktails pour vos événements. Nos barmen privés, experts en
              mixologie, créent des cocktails personnalisés et raffinés, qui
              sauront enchanter vos invités. Que vous souhaitiez un bar éphémère
              pour un lancement de produit, une soirée d&#39;entreprise, ou une
              fête privée, chaque détail est pensé pour offrir une ambiance
              unique et des boissons de qualité. Faites voyager vos papilles
              avec des créations audacieuses et des classiques revisités, le
              tout avec un service attentionné et professionnel. Offrez à vos
              convives une expérience sensorielle inoubliable, adaptée à vos
              besoins et à votre style.
            </p>
          </div>
          <CocktailCarousel />
          <div className=" justify-center items-center gap-4 mt-12">
            <div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
                <GlassWater className="w-6 h-6 lg:w-20 lg:h-10 text-[#E2C488]" />
                <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
              </div>
            </div>
            <h2 className="text-3xl uppercase text-center">Mocktails</h2>
            <p className="text-center   mx-auto  py-4  xl:text-xl  md:text-lg  leading-relaxed px-4 pt-8 ">
              Pour une expérience sans alcool qui ne sacrifie ni le goût ni
              l&apos;élégance, nos mocktails sont élaborés avec la même
              attention aux détails et aux saveurs raffinées. Que ce soit pour
              des convives qui préfèrent des options non alcoolisées ou pour
              créer une ambiance plus douce, nos créations sans alcool sauront
              apporter fraîcheur et sophistication à votre événement.
            </p>
          </div>
          <div className="py-12">
            <div className="">
              <MockctailCarousel />
              <div className=" justify-center items-center gap-4 mt-12">
                <div>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
                    <GlassWater className="w-6 h-6 lg:w-20 lg:h-10 text-[#E2C488]" />
                    <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
                  </div>
                </div>
                <h2 className="text-3xl uppercase text-center">
                  Les classiques
                </h2>
                <p className="text-center   mx-auto  py-4  xl:text-xl  md:text-lg  leading-relaxed px-4 pt-8 ">
                  Les grands classiques sont toujours une valeur sûre. Retrouver
                  des incontournables comme le Mojito, la Margarita, le Daiquiri
                  ou encore le Old Fashioned, revisités avec des ingrédients de
                  qualité et un savoir-faire unique. Ces cocktails intemporels
                  s&apos;intègrent parfaitement à toutes les ambiances et
                  plaisent aussi bien aux amateurs qu&apos;aux connaisseurs.
                  Offrez à vos invités le plaisir de redécouvrir ces créations
                  emblématiques, réalisées dans les règles de l&apos;art pour un
                  moment à la fois authentique et raffiné.
                </p>
                <div className="mt-12">
                  <ClassicCarousel />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-secondary"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
