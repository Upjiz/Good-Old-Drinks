import React from "react";
import { Calendar, Clock, MapPin, Users, Wine, Music } from "lucide-react";

export default function WeddingHero() {
  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#112B2A]/80"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap justify-center gap-6 text-[#c7b79c]/80">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>15 Juin 2024</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>18:00 - 02:00</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Château de Versailles</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>350 invités</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Mariage Royal au Château de Versailles
          </h1>

          <div className="w-32 h-[1px] bg-[#c7b79c] mx-auto mb-4"></div>

          <p className="text-lg mb-6 text-[#C7B79C]/90 max-w-2xl mx-auto">
            Une soirée d&apos;exception où l&apos;art de la mixologie rencontre
            l&apos;histoire dans un cadre majestueux
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#c7b79c]/70">
            <div className="flex items-center">
              <Wine className="w-4 h-4 mr-1" />
              <span>Cocktails Signature</span>
            </div>
            <div className="flex items-center">
              <Music className="w-4 h-4 mr-1" />
              <span>Orchestre Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
