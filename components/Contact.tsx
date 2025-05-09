"use client";
import React from "react";
import { Mail, Phone, Calendar } from "lucide-react";
import Deco5 from "@/assets/Deco/Deco5.svg";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "Soirée d'entreprise",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Gérer les retours du serveur

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({
          name: "",
          email: "",
          eventType: "Soirée d'entreprise",
          location: "",
          message: "",
        });
      } else {
        setStatus("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error); // Utilisation explicite
      setStatus("Erreur lors de l'envoi. Vérifiez votre connexion.");
    }
  };

  return (
    <section id="contact" className="  py-20 bg-[#1D0808] relative">
      <div className="container mx-auto px-4 ">
        <div className="">
          <Image
            src={Deco5}
            alt="Deco5"
            className="absolute hidden pointer-events-none lg:left-[5%] lg:top-[10%] lg:w-[600px] xl:left-[20%] top-[-20px] w-[300px] md:w-[600px] xl:w-[900px] transform -translate-x-1/2 z-[-1] md:z-10 "
          />
        </div>
        <div className="max-w-4xl mx-auto bg-[#2a1414] rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-serif text-[#c7b79c] text-center mb-8">
            Contactez nous !
          </h2>

          <form className="space-y-6 z-20" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#c7b79c] mb-2">Nom</label>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-[#1D0808] border border-[#c7b79c] text-white focus:outline-none focus:ring-2 focus:ring-[#c7b79c]"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label className="block text-[#c7b79c] mb-2">Email</label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
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
              <select
                onChange={handleChange}
                value={formData.eventType}
                name="eventType"
                className="w-full px-4 py-3 rounded-lg bg-[#1D0808] border border-[#c7b79c] text-white focus:outline-none focus:ring-2 focus:ring-[#c7b79c]"
              >
                <option>Soirée d&apos;entreprise</option>
                <option>Soirée privée</option>
                <option>Mariage</option>
                <option>Autre..</option>
              </select>
            </div>
            <div className="block text-[#c7b79c] mb-2">
              <label>Lieu de votre événement</label>
              <input
                onChange={handleChange}
                value={formData.location}
                name="location"
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-[#1D0808] border border-[#c7b79c] text-white focus:outline-none focus:ring-2 focus:ring-[#c7b79c] h-16"
                placeholder="Ou ce passe votre événement ?"
              ></input>
            </div>

            <div>
              <label className="block text-[#c7b79c] mb-2">Message</label>
              <textarea
                onChange={handleChange}
                value={formData.message}
                name="message"
                className="w-full px-4 py-3 rounded-lg bg-[#1D0808] border border-[#c7b79c] text-white focus:outline-none focus:ring-2 focus:ring-[#c7b79c] h-32"
                placeholder="Parlez nous de votre événement..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#c7b79c] text-[#1D0808] rounded-lg hover:bg-opacity-90 transition-colors font-medium"
            >
              Envoyer
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-[#c7b79c]">{status}</p>
          )}

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Mail className="mx-auto text-[#c7b79c] mb-2" size={24} />
              <p className="text-white">goodolddrinks@gmail.com</p>
            </div>
            <div>
              <Phone className="mx-auto text-[#c7b79c] mb-2" size={24} />
              <p className="text-white">06 59 32 21 31</p>
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
