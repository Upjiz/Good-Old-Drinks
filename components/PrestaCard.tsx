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
        className="border border-[#C7B79C] h-[400px] md:h-[400px] w-[80%] md:w-[500px] lg:w-[600px] flex items-center justify-center mt-6"
      >
        <div className="border border-[#C7B79C] h-[90%] w-[90%] relative z-10">
          <h1 className="text-white underline text-2xl lg:text-4xl md:text-4xl md:mt-12 text-center mt-4 lg:mt-12">
            {title}
          </h1>
          <p className="text-white font-semibold   text-md lg:text-xl text-center mt-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
