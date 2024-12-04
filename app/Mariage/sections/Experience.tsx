import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-[#112B2A]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="L'Expérience" 
          subtitle="Découvrez comment nous transformons votre mariage en un moment magique"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#c7b79c]/90">
            <p className="leading-relaxed">
              Notre passion pour la mixologie et notre amour du détail se reflètent dans chaque 
              aspect de notre service. De la conception de votre carte de cocktails personnalisée 
              à la mise en place de notre bar mobile art déco, nous créons une expérience unique 
              qui ravira vos invités.
            </p>
            <p className="leading-relaxed">
              Nous travaillons en étroite collaboration avec vous pour comprendre votre vision 
              et créer des cocktails signatures qui racontent votre histoire. Nos mixologues 
              expérimentés utilisent les meilleurs ingrédients et des techniques innovantes 
              pour offrir une expérience gustative mémorable.
            </p>
            <p className="leading-relaxed">
              Notre service ne se limite pas aux boissons - nous créons une véritable 
              atmosphère qui s'intègre parfaitement à votre célébration, avec une attention 
              particulière portée à chaque détail, des garnitures aux verres utilisés.
            </p>
          </div>
          
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
        </div>
      </div>
    </section>
  );
}