import { Button } from "@/components/ui/button";

import HeaderImage from "./HeaderImage";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto py-4 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8  justify-between lg:pb-12 -mt-16">
          {/**Texte */}
          <div className="max-w-2xl ">
            <div className="py-4 lg:py-6 mt-4">
              <h1 className="uppercase text-5xl lg:text-8xl lg:text-left text-center text-secondary">
                Barman prive pour tous vos evenements
              </h1>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start mt-4">
              <Button
                size="lg"
                className="bg-secondary rounded text-lg text-black"
              >
                Contact
              </Button>
              <Button
                size={"lg"}
                className="bg-secondary rounded text-lg text-black"
              >
                Nos reseaux
              </Button>
            </div>
          </div>
          {/**Photo */}
          <div className="">
            <HeaderImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
