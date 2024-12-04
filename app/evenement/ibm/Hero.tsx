import React from 'react';
import { Calendar, Clock, MapPin, Users, Wine, Laptop } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#112B2A]/90"></div>
      </div>

      {/* Art Deco Border */}
      <div className="absolute inset-8 border border-[#c7b79c]/30">
        {/* Corner Decorations */}
        <div className="absolute -top-4 -left-4 w-16 h-16">
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#c7b79c]"></div>
          <div className="absolute top-6 left-6 w-8 h-8 rotate-45 bg-[#c7b79c]/10"></div>
          <div className="absolute top-8 left-8 w-4 h-4 rotate-45 bg-[#c7b79c]/20"></div>
        </div>
        <div className="absolute -top-4 -right-4 w-16 h-16">
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#c7b79c]"></div>
          <div className="absolute top-6 right-6 w-8 h-8 rotate-45 bg-[#c7b79c]/10"></div>
          <div className="absolute top-8 right-8 w-4 h-4 rotate-45 bg-[#c7b79c]/20"></div>
        </div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16">
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#c7b79c]"></div>
          <div className="absolute bottom-6 left-6 w-8 h-8 rotate-45 bg-[#c7b79c]/10"></div>
          <div className="absolute bottom-8 left-8 w-4 h-4 rotate-45 bg-[#c7b79c]/20"></div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16">
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#c7b79c]"></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 rotate-45 bg-[#c7b79c]/10"></div>
          <div className="absolute bottom-8 right-8 w-4 h-4 rotate-45 bg-[#c7b79c]/20"></div>
        </div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap justify-center gap-6 text-[#c7b79c]/80">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>22 Mars 2024</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>19:00 - 23:00</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>IBM Innovation Center, Paris</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>250 invités</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Soirée Innovation & Cocktails
            <span className="block mt-2 text-[#c7b79c]/80">IBM Tech Summit 2024</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#c7b79c]/70">
            <div className="flex items-center">
              <Wine className="w-4 h-4 mr-1" />
              <span>Bar à Cocktails Moléculaires</span>
            </div>
            <div className="flex items-center">
              <Laptop className="w-4 h-4 mr-1" />
              <span>Démonstrations Tech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}