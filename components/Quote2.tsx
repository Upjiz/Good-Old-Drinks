import React from "react";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <section className="py-32 bg-[#112C2B] relative">
      <div className="absolute inset-0 art-deco-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Art Deco Border */}
          <div
            className="absolute -inset-px border-[2px] border-[#c7b79c]"
            style={{
              background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              #c7b79c 10px,
              #c7b79c 12px
            )`,
            }}
          ></div>

          {/* Content Container */}
          <div className="relative bg-[#112C2B] p-16 text-center">
            <QuoteIcon className="mx-auto text-[#c7b79c] mb-8" size={48} />

            <blockquote className="relative">
              <p className="text-[#c7b79c] font-serif text-2xl leading-relaxed mb-8">
                &quot;Chez Good Old Drinks, je crois que chaque événement mérite
                une touche unique et inoubliable. C&apos;est pourquoi je
                m&apos;engage à offrir des cocktails d&apos;exception et un
                service de bar personnalisé qui reflètent l&apos;âme de vos
                célébrations.&quot;
              </p>

              <footer className="text-white font-light">
                <p className="mb-2">-Martin Pivetta, fondateur de</p>
                <p className="text-[#c7b79c] text-xl tracking-widest">
                  GOOD OLD DRINKS
                </p>
              </footer>
            </blockquote>

            {/* Decorative Elements */}
            <div className="flex justify-center gap-4 mt-12">
              <div className="w-2 h-2 rotate-45 bg-[#c7b79c]"></div>
              <div className="w-2 h-2 rotate-45 bg-[#c7b79c]"></div>
              <div className="w-2 h-2 rotate-45 bg-[#c7b79c]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
