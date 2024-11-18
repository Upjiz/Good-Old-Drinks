import React from "react";
import { GlassWater } from "lucide-react";
import CocktailCarousel from "./CocktailCarousel";
import MockctailCarousel from "./MocktailCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Deco1 from "@/assets/Deco/Deco1.svg";
import Deco2 from "@/assets/Deco/Deco2.svg";
import Deco3 from "@/assets/Deco/Deco3.svg";
import Deco4 from "@/assets/Deco/Deco4.svg";

function Carousel() {
  return (
    <div className="relative">
      <Image
        src={Deco1}
        alt="Deco1"
        className="hidden lg:block absolute object-cover w-[600px]  xl:top-[30%] xl:left-[0%]  transform rotate-12    lg:transform -translate-y-1/2"
      />
      <Image
        src={Deco2}
        alt="Deco2"
        className="hidden xl:block absolute object-cover w-[600px]  xl:bottom-0 xl:right-[0%]  transform -rotate-12 lg:transform -translate-y-1/2"
      />
      <Image
        src={Deco3}
        alt="Deco3"
        className="hidden xl:block absolute object-cover w-[600px]  xl:top-[30%] xl:right-[0%]  transform rotate-[-30deg]    lg:transform -translate-y-1/2"
      />
      <Image
        src={Deco4}
        alt="Deco4"
        className="hidden xl:block absolute object-cover w-[600px]  xl:bottom-[-5%] xl:left-[0%]  transform rotate-[-10deg]    lg:transform -translate-y-1/2"
      />
      <div className=" bg-[#1C0A08] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
              <GlassWater className="w-6 h-6 lg:w-20 lg:h-10 text-[#E2C488]" />
              <div className="w-12 lg:w-80 h-[1px] bg-[#E2C488]" />
            </div>
            <h1 className=" uppercase text-3xl tracking-[0.2em] mb-2">
              Nos cocktails créations
            </h1>

            <p className=" md:text-lg xl:text-xl font-semibold py-4  opacity-80">
              Pour une expérience sans alcool qui ne sacrifie ni le goût ni
              l&apos;élégance, nos mocktails sont élaborés avec la même
              attention aux détails et aux saveurs raffinées. Que ce soit pour
              des convives qui préfèrent des options non alcoolisées ou pour
              créer une ambiance plus douce, nos créations sans alcool sauront
              apporter fraîcheur et sophistication à votre événement.
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
            <p className="text-center font-semibold  py-4 md:text-lg xl:text-xl opacity-80">
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
            </div>
          </div>
          <div className="border border-secondary"></div>

          <div className="text-center py-2">
            <p className="py-6 text-xl">
              Découvrez notre sélection de cocktails soigneusement élaborés,
              chacun racontant une histoire unique de l’époque de la
              Prohibition. Pour les amateurs de saveurs classiques ou les
              curieux en quête de nouvelles sensations, explorez la liste
              complète de nos créations.
            </p>
            <Button
              size="lg"
              className="bg-secondary rounded uppercase text-black py-6"
            >
              Tous nos cocktails
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
