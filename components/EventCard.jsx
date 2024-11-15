import Image from "next/image";

const EventCard = ({
  imageUrl,
  badgeText,
  title,
  description,
  authorName,
  authorImage,
  date,
}) => {
  const GetBadgeColor = (type) => {
    switch (type.toLowerCase()) {
      case "Mariage":
        return "bg-red-600";
      case "Soirée d'entreprise":
        return "bg-green-600";
      case "Soirée privée":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <a href="javascript:void(0)">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-xl max-w-96 overflow-hidden">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <Image
            src={imageUrl}
            alt="card-image"
            className="w-full h-full object-cover"
            width={400}
            height={300}
          />
        </div>
        <div className="p-4">
          <div
            className={`mb-4 rounded-full ${GetBadgeColor(
              badgeText
            )} py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center`}
          >
            {badgeText}
          </div>
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
          <p className="text-slate-600 leading-normal font-light">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              alt={authorName}
              src={authorImage}
              className="relative inline-block h-8 w-8 rounded-full"
              width={40}
              height={40}
            />
            <div className="flex flex-col ml-3 text-sm">
              <span className="text-slate-800 font-semibold">{authorName}</span>
              <span className="text-slate-600">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default EventCard;
