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
              <h2 className="uppercase text-2xl">Des ingrédients de qualité</h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon2} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-2xl">Cocktails haut de gamme</h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon3} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-2xl">Cocktails haut de gamme</h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon4} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-2xl">Cocktails haut de gamme</h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon5} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-2xl">Cocktails haut de gamme</h2>
            </div>
            <div className="items-center justify-center flex flex-col  mt-8">
              <Image src={ChooseIcon6} width={300} alt="Choose icon 1" />
              <h2 className="uppercase text-2xl">Cocktails haut de gamme</h2>
            </div>
          </div>
          <div>
            <p className="text-center py-10 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur. Vitae ullamcorper vitae
              cursus aliquam. Placerat adipiscing ante at est sit sodales risus.
              Consectetur viverra amet dignissim integer ut nunc. Eget risus
              scelerisque mi ultricies ut suspendisse justo malesuada curabitur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
