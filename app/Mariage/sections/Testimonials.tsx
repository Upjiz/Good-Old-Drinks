import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Une expérience inoubliable ! Les cocktails étaient absolument divins et le service impeccable. Nos invités en parlent encore !",
    author: "Marie & Thomas",
    event: "Mariage au Château de Chambord",
    image: "https://images.unsplash.com/photo-1549675584-91f19337af3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "L'équipe a su créer des cocktails qui reflétaient parfaitement notre histoire. Le bar était magnifique et s'intégrait parfaitement à notre décoration.",
    author: "Sophie & Pierre",
    event: "Mariage à l'Orangerie de Versailles",
    image: "https://images.unsplash.com/photo-1507915977619-6ccfe8003b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#112B2A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c7b79c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Témoignages</h2>
          <p className="text-[#c7b79c]/80 max-w-2xl mx-auto">
            Découvrez ce que nos mariés disent de leur expérience avec nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Art Deco Frame */}
              <div className="absolute -inset-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c7b79c]/20 to-transparent opacity-50"></div>
                {/* Corner Pieces */}
                <div className="absolute -top-2 -left-2 w-8 h-8">
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#c7b79c]"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8">
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#c7b79c]"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8">
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#c7b79c]"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8">
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#c7b79c]"></div>
                </div>
              </div>

              <div className="relative p-8 bg-[#1D0808]">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-1/3">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Quote className="w-8 h-8 text-[#c7b79c] mb-4" />
                    <p className="text-[#c7b79c]/90 mb-6 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="text-[#c7b79c]">
                      <p className="font-serif text-lg">{testimonial.author}</p>
                      <p className="text-sm text-[#c7b79c]/70">{testimonial.event}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}