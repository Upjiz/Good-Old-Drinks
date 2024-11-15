import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CocktailCard from "./CocktailCard";

export default function MockctailCarousel() {
  const cocktails = [
    {
      title: "Citrus Basil Spritz",
      ingredients: ["Orange", "Citron", "Basilic", "Eau gazeuse", ,],
      image:
        "https://images.unsplash.com/photo-1683179561564-7ae56b73e0dd?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cucumber Cooler",
      ingredients: ["Concombre", , "Citron vert", "Menthe", "Eau gazeuse"],
      image:
        "https://images.unsplash.com/photo-1530991808291-7e157454758c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Apple ginger Sparkler",
      ingredients: ["Pomme", "Gingembre", "Eau gazeuse"],
      image:
        "https://images.unsplash.com/photo-1510630093590-b7d7fabbb5ca?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Margarita",
      ingredients: ["Tequila", "Lime", "Triple sec", "Salt", "Sugar"],
      image:
        "https://images.unsplash.com/photo-1678862656501-9bd5d0bf6de1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Ajoutez d'autres cocktails ici si nécessaire
  ];

  return (
    <Carousel className="w-full max-w-xs lg:max-w-5xl mx-auto">
      <CarouselContent>
        {cocktails.map((cocktail, index) => (
          <CarouselItem key={index} className="lg:basis-1/3">
            <div className="p-1">
              <CocktailCard
                title={cocktail.title}
                ingredients={cocktail.ingredients}
                image={cocktail.image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
