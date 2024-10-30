"use client";
import Link from "next/link";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/assets/GOD.png";
import { Button } from "./ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center gap-6 lg:hidden">
      <Button className="bg-[#8B5E34]  rounded" size="lg">
        Contact
      </Button>
      <div onClick={handleNav} className="cursor-pointer lg:hidden">
        <IoMenu size={32} className="text-white" />
      </div>
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[85%] lg:hidden h-screen p-10 ease-in duration-300 bg-[#C7B79C] z-50"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <IoCloseOutline size={32} className="text-white" />
          </div>
        </div>
        <div className="flex-col py-4 text-xl">
          <ul>
            <Link href="/">
              <li
                onClick={() => setIsOpen(false)}
                className="py-4 cursor-pointer"
              >
                Photo
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setIsOpen(false)}
                className="py-4 cursor-pointer"
              >
                Evenements
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setIsOpen(false)}
                className="py-4 cursor-pointer"
              >
                Cocktails
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setIsOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="w-full flex gap-4 justify-center mt-6">
            <FaInstagram />
            <FaFacebook />
            <IoIosMail />
          </div>
          <div className="flex justify-center">
            <Image
              className="mt-6"
              src={Logo}
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>{" "}
      {/* Ajout de la balise de fermeture manquante */}
    </div>
  );
};

export default MobileNav;
