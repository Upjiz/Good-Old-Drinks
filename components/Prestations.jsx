"use client";

import { PrestaCard } from "./PrestaCard";
import Image from "next/image";

import Spoon from "@/assets/Spoon.svg";

const Prestations = () => {
  return (
    <section className="h-full  relative bg-gradient-to-b from-[#112B2A] via-[#1D0808] via-40% to-[#1D0808]">
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
      <div className="container ">
        {/**Titre */}
        <div className="text-left lg:text-left p-4 ">
          <h2 className=" mb-4  uppercase text-4xl underline text-secondary ">
            Prestations
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
      <div className="md:container">
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-2 mr-16  lg:mr-12 w-full ">
          <PrestaCard
            title="MARIAGE"
            description="Pour votre mariage, nous vous offrons une animation cocktail qui allie authenticité et caractère. Que ce soit pour le vin d'honneur, la réception ou la soirée dansante, nos barmen, experts en mixologie, recréent l’atmosphère des speakeasies avec des cocktails sur mesure, audacieux et chargés d’histoire."
            imageUrl="https://i.ibb.co/ZgGdXtR/Presta-Mariage.png"
            width={300}
          />
          <PrestaCard
            title="SOIREE PRIVEE"
            description="Pour vos soirées privées, anniversaires ou autres événements exclusifs, nous créons une ambiance intimiste et raffinée digne des meilleurs speakeasies. Nos barmen passionnés vous proposent des cocktails personnalisés, soigneusement élaborés pour surprendre vos invités et ajouter une touche de mystère et d’élégance à votre soirée."
            imageUrl="https://i.ibb.co/L1DTDv5/Presta-Prive.png"
          />
          <div className="w-full">
            <PrestaCard
              className=""
              title="SOIREE D'ENTREPRISE"
              description="Pour vos événements professionnels, nous apportons une animation cocktail unique, à la fois sophistiquée et conviviale. Nos barmen adaptent leurs créations pour répondre à vos besoins, en mettant en avant des cocktails inspirés des années 1920. Offrez à vos collaborateurs et invités un moment de détente et de partage dans une atmosphère élégante, propice aux échanges et à la convivialité."
              imageUrl="https://i.ibb.co/Sth8DQg/Presta-Entreprise.png"
            />
          </div>
          <PrestaCard
            className=""
            title="SOIREE D'ENTREPRISE"
            description="Pour vos événements professionnels, nous apportons une animation cocktail unique, à la fois sophistiquée et conviviale. Nos barmen adaptent leurs créations pour répondre à vos besoins, en mettant en avant des cocktails inspirés des années 1920. Offrez à vos collaborateurs et invités un moment de détente et de partage dans une atmosphère élégante, propice aux échanges et à la convivialité."
            imageUrl="https://ibb.co/Z2SxkRn"
          />
        </div>
      </div>
    </section>
  );
};

export default Prestations;
