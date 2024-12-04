import React from "react";
import SectionTitle from "../../../components/ui/SectionTitle";
import Image from "next/image";

export default function WeddingStory() {
  return (
    <section className="py-20 px-4 bg-[#1D0808]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="L'Histoire"
          subtitle="Une célébration unique où tradition et modernité se sont rencontrées"
        />

        <div className="mt-16 space-y-12 text-[#c7b79c]/90">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="leading-relaxed">
                Pour ce mariage exceptionnel au Château de Versailles, nous
                avons créé une expérience cocktail unique qui rendait hommage à
                l&apos;histoire du lieu tout en y apportant une touche
                contemporaine. La soirée a débuté au coucher du soleil, alors
                que les derniers rayons dorés illuminaient la Galerie des
                Glaces.
              </p>
              <p className="leading-relaxed">
                Les mariés, Sophie et Alexandre, passionnés d&apos;histoire et
                d&apos;art, souhaitaient créer une atmosphère qui transporterait
                leurs invités à l&apos;époque du Roi Soleil, tout en maintenant
                une élégance moderne. Leur histoire d&apos;amour, née dans une
                galerie d&apos;art parisienne, se devait d&apos;être célébrée
                dans un cadre tout aussi majestueux.
              </p>
            </div>
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Cocktail signature"
              className="w-full h-80 object-cover rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1549675584-91f19337af3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Bar setup"
              className="w-full h-80 object-cover rounded md:order-2"
            />
            <div className="space-y-6 md:order-1">
              <p className="leading-relaxed">
                Le bar, installé dans la Galerie des Glaces, proposait une carte
                de cocktails inspirée des parfums du jardin à la française.
                Chaque création était une invitation au voyage dans le temps,
                mélangeant les saveurs traditionnelles françaises aux techniques
                modernes de mixologie. Les miroirs historiques reflétaient la
                lueur des bougies, créant une atmosphère féerique.
              </p>
              <p className="leading-relaxed">
                Les ingrédients ont été soigneusement sélectionnés pour refléter
                l&apos;excellence française : champagne des grandes maisons de
                Reims, cognac d&apos;exception vieilli en fût de chêne, et
                herbes aromatiques fraîchement cueillies dans les jardins du
                château. Chaque détail a été pensé pour créer une harmonie
                parfaite entre le lieu et les saveurs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="leading-relaxed">
                La soirée s&apos;est déroulée comme une chorégraphie
                parfaitement orchestrée. Les 350 invités ont découvert nos
                créations au fil des heures, chaque cocktail racontant une
                partie de l&apos;histoire du château. Nos mixologues, vêtus dans
                un style rappelant l&apos;époque de Louis XIV mais avec une
                touche contemporaine, ont su captiver l&apos;attention des
                convives avec leurs techniques spectaculaires.
              </p>
              <p className="leading-relaxed">
                L&apos;un des moments forts fut le service du cocktail signature
                &quot;Le Roi Soleil&quot; lors du toast des mariés. Servi dans
                des coupes en cristal spécialement gravées pour l&apos;occasion,
                il créait un spectacle visuel grâce à sa couleur dorée et sa
                garniture de feuilles d&apos;or comestibles qui scintillaient
                sous les lustres centenaires.
              </p>
            </div>
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Evening atmosphere"
              className="w-full h-80 object-cover rounded"
            />
          </div>

          <div className="text-center space-y-6">
            <p className="leading-relaxed italic">
              &quot;Une soirée magique où chaque détail était pensé pour créer
              une expérience inoubliable. Les cocktails ont ajouté une touche
              d&apos;originalité parfaite à notre célébration. Nos invités
              parlent encore de cette soirée exceptionnelle où le présent et le
              passé se sont harmonieusement mêlés.&quot;
            </p>
            <p className="text-[#c7b79c] font-serif">- Sophie & Alexandre</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              width={400}
              height={300}
              src="https://images.unsplash.com/photo-1507915977619-6ccfe8003b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Night celebration"
              className="w-full h-80 object-cover rounded"
            />
            <div className="space-y-6">
              <p className="leading-relaxed">
                La nuit s&apos;est poursuivie avec une série d&apos;animations
                autour des cocktails, incluant une démonstration de mixologie
                moléculaire qui a fasciné les invités. Les jardins illuminés
                offraient un cadre romantique où les convives pouvaient savourer
                leurs boissons tout en admirant les fontaines et les sculptures
                historiques.
              </p>
              <p className="leading-relaxed">
                Ce mariage restera dans nos mémoires comme l&apos;exemple
                parfait de la fusion entre patrimoine historique et art moderne
                de la mixologie. Une célébration où chaque cocktail servi était
                bien plus qu&apos;une simple boisson : c&apos;était une partie
                intégrante de l&apos;histoire que nous racontions ce soir-là.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
