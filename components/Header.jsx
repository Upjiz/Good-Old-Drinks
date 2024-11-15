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
        <div className=" hidden lg:flex w-full  justify-center items-center gap-20">
          {/**Left Links */}
          <div className=" font-semibold px-20  py-4 text-2xl flex gap-20 border-t border-b border-[#C7B79C]">
            <Link href="/">Prestations</Link>
            <Link href="/">Cocktails</Link>
          </div>
          {/**Logo */}
          <div>
            <Image src={Logo} alt="Logo" width={200} />
          </div>
          {/**Right Links */}
          <div className=" font-semibold text-2xl px-20 py-4 flex gap-20 border-t border-b border-[#C7B79C]">
            <Link href="/">Photo</Link>
            <Link href="/">Evenements</Link>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
