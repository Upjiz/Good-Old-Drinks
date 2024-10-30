import { PrestaCard } from "./PrestaCard";
import Image from "next/image";
import RecipeImage from "@/assets/ingredients.svg";
import Spoon from "@/assets/spoon.svg";

const Prestations = () => {
  return (
    <section className="h-full mt-6 relative bg-gradient-to-b from-[#112B2A] via-[#1D0808] via-40% to-[#1D0808]">
      <div className="absolute bottom-[100px] md:bottom-[350px] lg:bottom-[50px] w-[1000px] right-[-450px] lg:right-[-450px] xl:right-[-200px] lg:top-1/2 transform -translate-y-1/2">
        <Image
          src={Spoon}
          alt="Cuillère décorative"
          className=""
          width={1400}
        />
      </div>
      <div className="container ">
        {/**Titre */}
        <div className="text-center lg:text-left p-4 ">
          <h2 className=" mb-4 text-4xl underline text-secondary">
            Nos Prestations
          </h2>
          <p className="lg:max-w-[700px] lg:text-xl">
            Que ce soit pour des événements professionnels ou privés, chaque
            détail est soigneusement pensé pour refléter vos envies et offrir à
            vos invités un moment inoubliable, adapté à l&apos;ambiance que vous
            souhaitez créer.
          </p>
          <div className="border-b border-[#C7B79C] w-[100%] lg:w[60%]  mt-6"></div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-2 mr-16  lg:mr-12 ">
          <PrestaCard
            title="MARIAGE"
            description="Pour votre mariage, nous vous offrons une animation cocktail qui allie authenticité et caractère. Que ce soit pour le vin d'honneur, la réception ou la soirée dansante, nos barmen, experts en mixologie, recréent l’atmosphère des speakeasies avec des cocktails sur mesure, audacieux et chargés d’histoire."
            imageUrl="https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <PrestaCard
            title="SOIREE PRIVEE"
            description="Pour votre mariage, nous vous offrons une animation cocktail qui allie authenticité et caractère. Que ce soit pour le vin d'honneur, la réception ou la soirée dansante, nos barmen, experts en mixologie, recréent l’atmosphère des speakeasies avec des cocktails sur mesure, audacieux et chargés d’histoire."
            imageUrl="https://images.unsplash.com/photo-1485872299829-c673f5194813?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFByaXZhdGUlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
          />
          <div className="w-full">
            <PrestaCard
              title="SOIREE D'ENTREPRISE"
              description="Pour votre mariage, nous vous offrons une animation cocktail qui allie authenticité et caractère. Que ce soit pour le vin d'honneur, la réception ou la soirée dansante, nos barmen, experts en mixologie, recréent l’atmosphère des speakeasies avec des cocktails sur mesure, audacieux et chargés d’histoire."
              imageUrl="https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNlbWluYWlyZXxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
          <div className="lg:w-[600px] ">
            <Image
              src={RecipeImage}
              alt="Menthe"
              width={300}
              className="lg:w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prestations;
