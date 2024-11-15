import Image from "next/image";
import ChooseIcon1 from "../assets/icons/ChooseIcon1.svg";
import ChooseIcon2 from "../assets/icons/ChooseIcon2.svg";
import ChooseIcon3 from "../assets/icons/ChooseIcon3.svg";
import ChooseIcon4 from "../assets/icons/ChooseIcon4.svg";
import ChooseIcon5 from "../assets/icons/ChooseIcon5.svg";
import ChooseIcon6 from "../assets/icons/ChooseIcon6.svg";

const ChooseUs = () => {
  return (
    <section className="h-full bg-[#1D0808] py-8">
      <div className="container">
        <div>
          <div>
            <h1 className="text-secondary text-3xl uppercase font-bold">
              Pourquoi nous choisir ?
            </h1>
            <div className="border border-b border-secondary w-[95%] lg:w-[45%] mt-2"></div>
          </div>
          <div className=" grid grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-8 text-center">
            <div className="items-center justify-center flex flex-col mt-8">
              <Image src={ChooseIcon1} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-lg md:text-2xl">
                Des ingrédients de qualité
              </h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon2} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-lg md:text-2xl">
                Cocktails haut de gamme
              </h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon3} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-lg md:text-2xl">
                10 ans d&apos;expérience
              </h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon4} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-lg md:text-2xl">
                Un service personnalisé
              </h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon5} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-lg md:text-2xl">
                Respect de l’art de la mixologie
              </h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon6} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-lg md:text-2xl">
                Une ambiance unique et immersive
              </h2>
            </div>
          </div>
          <div>
            <p className="text-center text-lg py-12 lg:text-xl xl:text-2xl">
              Chez Good Old Drinks, chaque détail est pensé pour vous offrir une
              expérience unique. Nos cocktails sont conçus avec des ingrédients
              minutieusement sélectionnés et un savoir-faire qui s’inspire des
              techniques traditionnelles. Avec une touche d’élégance et
              d’authenticité, nous apportons à vos événements un service
              personnalisé qui saura marquer les esprits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
