import React from 'react';
import { Wine, Heart, Star, GlassWater, Users, Sparkles } from 'lucide-react';

export default function WeddingOverview() {
  return (
    <section className="py-20 px-4 bg-[#1D0808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-[#c7b79c]">Une Expérience Unique</h2>
              <div className="space-y-4 text-[#c7b79c]/90 leading-relaxed">
                <p>
                  Votre mariage est bien plus qu'une simple célébration - c'est le début d'une nouvelle 
                  histoire, un moment où chaque détail compte. Notre service de bar mobile art déco 
                  transforme votre réception en une expérience sensorielle unique, où chaque cocktail 
                  raconte une histoire et chaque détail reflète votre personnalité.
                </p>
                <p>
                  Nous croyons en la fusion parfaite entre tradition et innovation. Notre approche 
                  combine l'élégance intemporelle de l'art déco avec des techniques modernes de 
                  mixologie, créant ainsi une expérience qui captive tous les sens. Du design 
                  sophistiqué de notre bar mobile aux créations artisanales de nos mixologues, 
                  chaque élément est pensé pour créer des moments mémorables.
                </p>
                <p>
                  Notre équipe de mixologues passionnés ne se contente pas de servir des cocktails - 
                  ils orchestrent un véritable spectacle. Chaque geste est précis, chaque présentation 
                  est soignée, transformant la préparation de chaque cocktail en une performance 
                  qui fascine vos invités.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-[#c7b79c]">Notre Philosophie</h3>
              <div className="space-y-4 text-[#c7b79c]/90 leading-relaxed">
                <p>
                  Nous croyons que chaque mariage mérite une attention particulière. C'est pourquoi 
                  nous limitons le nombre d'événements que nous acceptons chaque année, garantissant 
                  ainsi une attention méticuleuse aux détails et un service personnalisé pour chaque couple.
                </p>
                <p>
                  Notre processus créatif commence par une écoute attentive de vos désirs. Nous puisons 
                  notre inspiration dans votre histoire d'amour, vos voyages, vos passions communes, 
                  pour créer des cocktails signatures qui vous ressemblent. Chaque recette est 
                  développée sur mesure, utilisant des ingrédients soigneusement sélectionnés et 
                  des techniques innovantes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col items-center text-center">
                <Wine className="w-8 h-8 mb-3 text-[#c7b79c]" />
                <h3 className="font-serif mb-2">Bar Art Déco</h3>
                <p className="text-sm text-[#c7b79c]/80">Design élégant et raffiné</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Heart className="w-8 h-8 mb-3 text-[#c7b79c]" />
                <h3 className="font-serif mb-2">Sur Mesure</h3>
                <p className="text-sm text-[#c7b79c]/80">Personnalisation complète</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star className="w-8 h-8 mb-3 text-[#c7b79c]" />
                <h3 className="font-serif mb-2">Excellence</h3>
                <p className="text-sm text-[#c7b79c]/80">Service d'exception</p>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Cocktail signature"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Bar setup"
                className="w-full h-64 object-cover rounded-lg mt-8"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-[#c7b79c]">L'Art du Détail</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <GlassWater className="w-6 h-6 flex-shrink-0 text-[#c7b79c]" />
                  <div>
                    <h4 className="font-serif mb-2">Cocktails Signatures</h4>
                    <p className="text-sm text-[#c7b79c]/80">
                      Créations uniques inspirées de votre histoire d'amour et personnalisées 
                      selon vos goûts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 flex-shrink-0 text-[#c7b79c]" />
                  <div>
                    <h4 className="font-serif mb-2">Service Premium</h4>
                    <p className="text-sm text-[#c7b79c]/80">
                      Une équipe de professionnels attentifs et passionnés pour un service impeccable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sparkles className="w-6 h-6 flex-shrink-0 text-[#c7b79c]" />
                  <div>
                    <h4 className="font-serif mb-2">Animations Exclusives</h4>
                    <p className="text-sm text-[#c7b79c]/80">
                      Démonstrations spectaculaires et ateliers interactifs pour vos invités.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}