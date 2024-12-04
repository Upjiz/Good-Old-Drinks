import React from 'react';
import { Camera, Wine, Users, Sparkles, History, Award, Star } from 'lucide-react';

export default function GalleryDescription() {
  return (
    <section className="py-16 px-4 bg-[#1D0808] border-b border-[#c7b79c]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#c7b79c]/90">
            <h2 className="text-2xl md:text-3xl font-serif text-[#c7b79c]">L'Art de Capturer l'Instant</h2>
            <p className="leading-relaxed">
              Chaque image de notre galerie raconte une histoire unique, un moment suspendu dans le temps où l'art de la 
              mixologie rencontre l'émotion pure. À travers notre objectif, nous capturons non seulement des cocktails 
              d'exception, mais aussi les sourires, les regards émerveillés et cette atmosphère si particulière qui fait 
              de chaque événement un moment inoubliable.
            </p>
            <p className="leading-relaxed">
              Notre approche photographique met en lumière les détails minutieux de nos créations : la danse des bulles 
              dans un cocktail signature, le scintillement des cristaux de glace, ou encore les reflets dorés d'une 
              garniture précieuse. Chaque photo est une invitation à plonger dans l'univers raffiné de nos événements.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-6 text-[#c7b79c]/80">
              <div className="flex items-start space-x-3">
                <Wine className="w-6 h-6 flex-shrink-0 text-[#c7b79c]" />
                <div>
                  <h3 className="font-serif mb-2">Mariages</h3>
                  <p className="text-sm">Des moments précieux capturés lors de nos prestations les plus romantiques.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 flex-shrink-0 text-[#c7b79c]" />
                <div>
                  <h3 className="font-serif mb-2">Événements Corporate</h3>
                  <p className="text-sm">L'excellence et l'innovation au service des entreprises.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-[#c7b79c]/80 mt-8">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-6 h-6 flex-shrink-0 text-[#c7b79c]" />
                <div>
                  <h3 className="font-serif mb-2">Soirées Privées</h3>
                  <p className="text-sm">L'élégance et le raffinement pour vos célébrations intimes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Camera className="w-6 h-6 flex-shrink-0 text-[#c7b79c]" />
                <div>
                  <h3 className="font-serif mb-2">Ateliers</h3>
                  <p className="text-sm">Le partage de notre passion à travers des expériences uniques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Journey */}
        <div className="border-t border-[#c7b79c]/20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-[#c7b79c]/90">
              <div className="flex items-center gap-3">
                <History className="w-8 h-8 text-[#c7b79c]" />
                <h2 className="text-2xl font-serif text-[#c7b79c]">Notre Histoire en Images</h2>
              </div>
              <p className="leading-relaxed">
                Depuis notre création en 2015, nous avons eu l'honneur de servir plus de 500 événements, 
                chacun unique et mémorable à sa façon. Notre voyage a commencé avec une simple passion 
                pour la mixologie artisanale et s'est transformé en une quête perpétuelle d'excellence 
                et d'innovation.
              </p>
              <p className="leading-relaxed">
                Des mariages somptueux dans les châteaux historiques aux événements corporate avant-gardistes, 
                notre objectif capture l'essence de chaque célébration. Nous avons eu le privilège de 
                collaborer avec des lieux prestigieux comme le Château de Versailles, l'Orangerie de 
                Chantilly, et les plus grands hôtels parisiens.
              </p>
            </div>

            <div className="space-y-8 text-[#c7b79c]/90">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-[#c7b79c]" />
                <h2 className="text-2xl font-serif text-[#c7b79c]">Moments Mémorables</h2>
              </div>
              <p className="leading-relaxed">
                Chaque photo de notre collection témoigne d'une histoire particulière. Du mariage royal 
                au Château de Chambord, où nos cocktails scintillaient sous les lustres centenaires, 
                aux soirées tech futuristes pour les géants de la Silicon Valley, où nos créations 
                moléculaires ont redéfini l'art du cocktail.
              </p>
              <p className="leading-relaxed">
                Notre approche artistique de la photographie nous permet de capturer non seulement 
                l'esthétique de nos créations, mais aussi l'émotion et l'ambiance unique de chaque 
                événement. Ces images sont le témoignage de moments précieux, de rencontres 
                extraordinaires et de célébrations inoubliables.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="border-t border-[#c7b79c]/20 pt-16">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-[#c7b79c]" />
              <h2 className="text-2xl font-serif text-[#c7b79c]">Notre Signature Visuelle</h2>
            </div>
            <p className="max-w-3xl mx-auto text-[#c7b79c]/90 leading-relaxed">
              Au fil des années, nous avons développé une signature visuelle unique qui marie l'élégance 
              intemporelle de l'art déco à une esthétique contemporaine. Nos photographies capturent 
              la précision technique de nos cocktails, la chaleur de l'atmosphère et la joie des 
              convives, créant ainsi un récit visuel complet de chaque événement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-[#c7b79c]/80">
                <div className="text-3xl font-serif mb-2">500+</div>
                <p>Événements Photographiés</p>
              </div>
              <div className="text-[#c7b79c]/80">
                <div className="text-3xl font-serif mb-2">50+</div>
                <p>Lieux d'Exception</p>
              </div>
              <div className="text-[#c7b79c]/80">
                <div className="text-3xl font-serif mb-2">1000+</div>
                <p>Cocktails Uniques Capturés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}