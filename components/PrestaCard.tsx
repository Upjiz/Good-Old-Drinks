interface PrestaCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const PrestaCard: React.FC<PrestaCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="h-full w-full flex justify-center container   ">
      <div
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          opacity: 0.9,
        }}
        className="border border-[#C7B79C] h-[350px] md:h-[400px] w-[80%] md:w-[500px] lg:w-[600px] flex items-center justify-center mt-6"
      >
        <div className="border border-[#C7B79C] h-[90%] w-[90%] relative z-10">
          <h1 className="text-white underline text-2xl lg:text-4xl md:text-4xl md:mt-12  font-crescendo text-center mt-4 lg:mt-12">
            {title}
          </h1>
          <p className="text-white text-sm  md:text-lg lg:text-xl text-center mt-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const restaCard: React.FC<PrestaCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="h-full w-full flex justify-center container   ">
      <div
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
        className="border border-[#C7B79C] h-[300px] md:h-[400px] w-[80%] md:w-[500px] lg:w-[600px] flex items-center justify-center mt-6 relative"
      >
        <div className="absolute inset-0 bg-black opacity-30" />{" "}
        {/* Couche sombre pour réduire la luminosité */}
        <div className="border border-[#C7B79C] h-[90%] w-[90%] relative z-10">
          {" "}
          {/* Assurez-vous que le texte est au-dessus */}
          <h1 className="text-white underline text-3xl lg:text-5xl md:text-4xl md:mt-12  font-crescendo text-center mt-4 lg:mt-12">
            {title}
          </h1>
          <p className="text-white text-sm  md:text-lg text-center mt-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
