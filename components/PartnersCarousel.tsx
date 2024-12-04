import Image from "next/image";
import Bmc from "@/assets/logoPartners/bmc.jpeg";
import Hrd from "@/assets/logoPartners/hrd.svg";
import Materieldebar from "@/assets/logoPartners/materieldebar.jpg";
import Mtafolie from "@/assets/logoPartners/mtafolie.png";
import Siphro from "@/assets/logoPartners/siphro.webp";

export default function LogoCarousel() {
  const logos = [
    { src: Bmc, alt: "Groupe BMC" },
    { src: Hrd, alt: "HR Difusion" },
    { src: Materieldebar, alt: "Materieldebar.com" },
    { src: Mtafolie, alt: "M ta folie" },
    { src: Siphro, alt: "Siphro" },
  ];

  return (
    <div className="w-full h-32 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-cover h-full"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center h-32 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-cover h-full"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
