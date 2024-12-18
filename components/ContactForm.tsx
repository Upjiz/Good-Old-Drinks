"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      eventType: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your server
  };

  return (
    <section className="bg-[#1D0808] overflow-x-hidden relative">
      <div className="container p-4 ">
        <div className="py-2 ">
          <h2 className="uppercase text-3xl lg:text-center text-secondary">
            Contactez nous !{" "}
          </h2>
          <div className="border border-b border-secondary lg:mx-auto w-[95%] lg:w-[45%] mt-2 "></div>
          <p className="lg:text-center text-lg md:p-4 lg:p-6">
            Vous avez un projet en tête ou souhaitez en savoir plus sur nos
            services ? N&apos;hésitez pas à nous contacter ! Que ce soit pour un
            événement privé, un mariage ou une soirée d’entreprise, nous serons
            ravis de vous accompagner pour faire de votre moment un instant
            inoubliable.
          </p>
        </div>
        <div className="mt-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-5xl  mx-auto p-6 bg-slate-50 rounded-xl shadow-md"
          >
            <h2 className=" text-lg lg:text-xl underline text-black font-bold text-center mb-6">
              Choisissez{" "}
              <span className="uppercase text-secondary">good old drinks</span>{" "}
              pour vos soirées
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-black text-lg" htmlFor="firstName">
                  Prénom
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-black text-lg" htmlFor="lastName">
                  Nom
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-black text-lg" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-black text-lg" htmlFor="eventType">
                Type d&apos;événement
              </Label>
              <Select
                onValueChange={handleSelectChange}
                value={formData.eventType}
              >
                <SelectTrigger>
                  <SelectValue
                    className="text-black"
                    placeholder="Sélectionnez un type d'événement"
                  />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  className="w-[var(--radix-select-trigger-width)]"
                  sideOffset={4}
                >
                  <SelectItem value="Mariage">Mariage</SelectItem>
                  <SelectItem value="Soirée d'entreprise">
                    Soirée d&apos;entreprise
                  </SelectItem>
                  <SelectItem value="Soirée privée">Soirée privée</SelectItem>
                  <SelectItem value="Autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-black text-lg" htmlFor="message">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full text-lg">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
