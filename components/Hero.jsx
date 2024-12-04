import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

import HeaderImage from "./HeaderImage";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto p-9 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8  justify-between lg:pb-12 -mt-16">
          {/**Texte */}
          <div className="max-w-2xl ">
            <div className="py-6 lg:py-6 mt-4">
              <h1 className="uppercase text-5xl lg:text-8xl lg:text-left text-center text-secondary font-bold">
                L&apos;art du cocktail pour sublimer vos evenements.
              </h1>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start p-2">
              <Link href="#contact">
                <Button
                  size="lg"
                  className=" px-8 py-3 bg-[#c7b79c] text-[#1D0808] rounded-full hover:bg-opacity-90 transition-colors font-medium "
                >
                  Contact
                </Button>
              </Link>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/good.old.drinks?igsh=MzUzM3RxenEyd2kx"
                  className="w-10 h-10 text-[#c7b79c] rounded-full border border-[#c7b79c] flex items-center justify-center hover:bg-[#c7b79c] hover:text-[#1D0808] transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/good.old.drinks"
                  className="w-10 h-10 text-[#c7b79c]  rounded-full border border-[#c7b79c] flex items-center justify-center hover:bg-[#c7b79c] hover:text-[#1D0808] transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>
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
