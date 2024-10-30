import Image from "next/image";
import PhotoHeader from "@/assets/PhotoHeader.jpg";
import cocktailHeader1 from "@/assets/cocktailHeader1.svg";
import cocktailHeader2 from "@/assets/cocktailHeader2.svg";

const HeaderImage = () => {
  return (
    <div className="relative h-[600px]">
      <div className="w-[290px] h-[290px] md:w-[400px] md: lg:w-[400px] lg:h-[700px] mt-12 max-w-full  ">
        <Image
          src={PhotoHeader}
          alt="Cocktail"
          className="rounded-full border border-secondary object-contain "
          priority
          quality={100}
          cover={true}
        />

        <Image
          src={cocktailHeader1}
          alt="CocktailHeader1"
          width={200}
          height={200}
          className="absolute top-0 left-[-130px] xl:w-[400px] xl:left-[-280px] xl:top-[-100px] lg:top-0 lg:left-[-130px]  rotate-[-45deg]"
        />
        <Image
          src={cocktailHeader2}
          alt="CocktailHeader2"
          width={200}
          height={200}
          className=" absolute bottom-[100px] xl:w-[400px] xl:right-[-290px] right-[-110px] lg:bottom-0 lg:right-[-140px] rotate-[45deg] "
        />
      </div>
    </div>
  );
};

export default HeaderImage;
