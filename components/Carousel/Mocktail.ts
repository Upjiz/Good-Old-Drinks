export interface Mocktail {
  id: number;
  name: string;
  image: string;
  description: string;
  year: string;
}

export const mocktail: Mocktail[] = [
  {
    id: 1,
    name: "The Bee's Knees",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description: "A prohibition-era gin cocktail sweetened with honey syrup",
    year: "Est. 1921",
  },
  {
    id: 2,
    name: "Sidecar",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    description: "Cognac, orange liqueur, and fresh lemon juice",
    year: "Est. 1922",
  },
  {
    id: 3,
    name: "Mary Pickford",
    image:
      "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80",
    description: "White rum, fresh pineapple juice, grenadine, and maraschino",
    year: "Est. 1920",
  },
  {
    id: 4,
    name: "French 75",
    image:
      "https://images.unsplash.com/photo-1556679344-cc7e0c25c8c3?auto=format&fit=crop&w=800&q=80",
    description: "Gin, champagne, lemon juice, and sugar",
    year: "Est. 1915",
  },
];
