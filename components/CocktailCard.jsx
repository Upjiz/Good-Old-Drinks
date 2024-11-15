import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export default function CocktailCard({ title, ingredients, image }) {
  // Assurons-nous que ingredients est un tableau
  const ingredientsList = Array.isArray(ingredients)
    ? ingredients
    : [ingredients].filter(Boolean);

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden">
      <div className="relative pb-[66.67%]">
        <Image
          src={image}
          alt={`Image de ${title}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          layout="fill"
        />
      </div>
      <CardContent className="p-6 bg-[#1D0808]/60 h-full">
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <ul className="space-y-2 flex flex-col items-center">
          {ingredientsList.map((ingredient, index) => (
            <li key={index} className="flex items-center">
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
