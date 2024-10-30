import Martin from "../assets/Martin.jpeg";
import Image from "next/image";

const Quote = () => {
  return (
    <section className="h-full ">
      <div className="container mb-6">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <Image
            src={Martin}
            alt="Martin"
            width={100}
            className="rounded-full"
          />
          <p className=" italic">
            &quot;Chez Good Old Drinks, je crois que chaque événement mérite une
            touche unique et inoubliable. C&apos;est pourquoi je m&apos;engage à
            offrir des cocktails d&apos;exception et un service de bar
            personnalisé qui reflètent l&apos;âme de vos célébrations.&quot;
            -Martin Pivetta, fondateur de
            <span className="text-secondary text-xl ml-2">GOOD OLD DRINKS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
