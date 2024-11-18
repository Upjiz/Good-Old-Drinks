import { Button } from "@/components/ui/button";

import HeaderImage from "./HeaderImage";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto p-9 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8  justify-between lg:pb-12 -mt-16">
          {/**Texte */}
          <div className="max-w-2xl ">
            <div className="py-6 lg:py-6 mt-4">
              <h1 className="uppercase text-5xl lg:text-8xl lg:text-left text-center text-secondary font-bold">
                Barman prive pour tous vos evenements
              </h1>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start p-2">
              <Button
                size="lg"
                className=" px-8 py-3 bg-[#c7b79c] text-[#1D0808] rounded-full hover:bg-opacity-90 transition-colors font-medium "
              >
                Contact
              </Button>
              <Button
                size="lg"
                className="px-8 py-3 border-2 border-[#c7b79c] text-[#c7b79c] rounded-full hover:bg-[#c7b79c] hover:text-[#1D0808] transition-colors font-medium"
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
