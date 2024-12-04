import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function Story() {
  return (
    <section className="py-20 px-4 bg-[#1D0808]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="L'Événement"
          subtitle="Une soirée où technologie et mixologie se rencontrent"
        />

        <div className="mt-16 space-y-12 text-[#c7b79c]/90">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="leading-relaxed">
                Pour célébrer le lancement de sa nouvelle plateforme
                d&apos;intelligence artificielle, IBM a choisi d&apos;organiser
                une soirée exceptionnelle mêlant innovation technologique et art
                de la mixologie. L&apos;événement s&apos;est déroulé dans le
                cadre prestigieux de l&apos;IBM Innovation Center à Paris,
                transformé pour l&apos;occasion en un espace où le futur
                rencontre l&apos;élégance des années 20.
              </p>
              <p className="leading-relaxed">
                Les 250 invités, composés de clients premium, partenaires
                stratégiques et leaders de l&apos;industrie, ont été accueillis
                dans un environnement où chaque détail reflétait la fusion entre
                technologie de pointe et raffinement traditionnel.
              </p>
            </div>
            <Image
              width={800}
              height={800}
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Espace événementiel"
              className="w-full h-80 object-cover rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              width={800}
              height={800}
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Bar à cocktails"
              className="w-full h-80 object-cover rounded md:order-2"
            />
            <div className="space-y-6 md:order-1">
              <p className="leading-relaxed">
                Le point culminant de la soirée fut notre bar à cocktails
                moléculaires, où nous avons créé des boissons inspirées par les
                innovations IBM. Chaque cocktail racontait une histoire liée à
                un aspect de la technologie, utilisant des techniques de
                mixologie moléculaire pour créer des expériences sensorielles
                uniques.
              </p>
              <p className="leading-relaxed">
                Les invités ont pu découvrir des créations comme le
                &quot;Quantum Cloud&quot;, un cocktail changeant de couleur
                représentant l&apos;informatique quantique, ou le &quot;Neural
                Network&quot;, servi dans une brume d&apos;azote liquide
                symbolisant le deep learning.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="leading-relaxed">
                L&apos;espace a été divisé en zones thématiques, chacune
                présentant une facette différente de l&apos;innovation IBM,
                accompagnée de cocktails spécialement conçus. Les mixologues,
                équipés de tablettes connectées, expliquaient la science
                derrière chaque création, créant un parallèle fascinant entre
                mixologie moléculaire et technologie.
              </p>
              <p className="leading-relaxed">
                La soirée s&apos;est conclue par une démonstration spectaculaire
                combinant projection mapping et mixologie performative,
                illustrant comment la technologie peut transformer même les
                expériences les plus traditionnelles en moments magiques.
              </p>
            </div>
            <Image
              width={800}
              height={800}
              src="https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Démonstration"
              className="w-full h-80 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
