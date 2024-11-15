import React from "react";
import { Mail, Phone, Calendar } from "lucide-react";
import Deco5 from "@/assets/Deco/Deco5.svg";
import Deco6 from "@/assets/Deco/Deco6.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="  py-20 bg-[#1D0808] relative">
      <div className="container mx-auto px-4 ">
        <div className="max-w-4xl mx-auto bg-[#2a1414] rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-serif text-[#c7b79c] text-center mb-8">
            Contactez nous !
          </h2>
          <div className="">
            <Image
              src={Deco5}
              alt="Deco5"
              className="absolute lg:left-[5%] lg:top-[10%] lg:w-[600px] xl:left-[20%] top-[-20px] w-[300px] md:w-[600px] xl:w-[900px] transform -translate-x-1/2 "
            />
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#c7b79c] mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-[#1D0808] border border-[#c7b79c] text-white focus:outline-none focus:ring-2 focus:ring-[#c7b79c]"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-[#c7b79c] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#1D0808] border border-[#c7b79c] text-white focus:outline-none focus:ring-2 focus:ring-[#c7b79c]"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#c7b79c] mb-2">
                Type d&apos;evenement
              </label>
              <select className="w-full px-4 py-3 rounded-lg bg-[#1D0808] border border-[#c7b79c] text-white focus:outline-none focus:ring-2 focus:ring-[#c7b79c]">
                <option>Soirée d&apos;entreprise</option>
                <option>Soirée privée</option>
                <option>Mariage</option>
                <option>Autre..</option>
              </select>
            </div>

            <div>
              <label className="block text-[#c7b79c] mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-[#1D0808] border border-[#c7b79c] text-white focus:outline-none focus:ring-2 focus:ring-[#c7b79c] h-32"
                placeholder="Parlez nous de votre événement..."
              ></textarea>
            </div>

            <button className="w-full py-3 bg-[#c7b79c] text-[#1D0808] rounded-lg hover:bg-opacity-90 transition-colors font-medium">
              Envoyer
            </button>
          </form>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Mail className="mx-auto text-[#c7b79c] mb-2" size={24} />
              <p className="text-white">goodolddrinks@gmail.com</p>
            </div>
            <div>
              <Phone className="mx-auto text-[#c7b79c] mb-2" size={24} />
              <p className="text-white">06 76 54 43 12</p>
            </div>
            <div>
              <Calendar className="mx-auto text-[#c7b79c] mb-2" size={24} />
              <p className="text-white">Disponible 7/7j</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
