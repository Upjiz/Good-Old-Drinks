import Image from "next/image";
import Logo from "@/assets/GOD.png";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center h-12 ">
        {/** Logo */}
        <Link href="/" className="lg:hidden">
          <Image src={Logo} alt="Logo" width={130} />
        </Link>

        {/** Menu ordinateur */}
        <div className=" hidden lg:flex w-full  justify-center items-center gap-20 whitespace-nowrap">
          {/**Left Links */}
          <div className=" font-semibold px-10 mr-10  py-4 text-2xl flex gap-20 border-t border-b border-[#C7B79C]">
            <Link href="#service">Nos services</Link>
            <Link href="#cocktails">Nos cocktails</Link>
          </div>
          {/**Logo */}
          <div className="mx-auto">
            <Image src={Logo} alt="Logo" width={300} />
          </div>
          {/**Right Links */}
          <div className=" font-semibold text-2xl px-10 py-4 flex gap-20 border-t border-b border-[#C7B79C]">
            <Link href="#realisation">Nos réalisations</Link>
            <Link href="#contact">Infos & contact</Link>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
