import CocktailCarousel from "../components/Carousel";
import { Button } from "@/components/ui/button";

const Cocktail = () => {
  return (
    <section className="h-full bg-gradient-to-b from-[#1D0808] to-[#112B2A] py-6">
      <div className="container lg:py-12">
        <div className="text-center ">
          <h1 className="text-secondary text-4xl uppercase mb-4">Cocktails</h1>
          <div className="border border-secondary"></div>
          <p className="mb-2 lg:text-xl py-4">
            Que ce soit pour des événements professionnels ou privés, chaque
            détail est soigneusement pensé pour refléter vos envies et offrir à
            vos invités un moment inoubliable, adapté à l&apos;ambiance que vous
            souhaitez créer.
          </p>
        </div>
        <div className="lg:flex gap-6 py-6 lg:py-12">
          <CocktailCarousel />
        </div>
        <div className="border border-secondary"></div>
        <div className="text-center py-2">
          <p className="py-6 text-xl">
            Découvrez notre sélection de cocktails soigneusement élaborés,
            chacun racontant une histoire unique de l’époque de la Prohibition.
            Pour les amateurs de saveurs classiques ou les curieux en quête de
            nouvelles sensations, explorez la liste complète de nos créations.
          </p>
          <Button
            size="lg"
            className="bg-secondary rounded uppercase text-black py-6"
          >
            Tous nos cocktails
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
