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
    name: "Chuchotement d'été",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description: "Lime, lemon ou yuzu, sirop de lavande, eau gazeuse",
    year: "Est. 1921",
  },
  {
    id: 2,
    name: "Kumaru",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    description: "Eau de coco, sirop tonka, lime, jus de mangue",
    year: "Est. 1922",
  },
  {
    id: 3,
    name: "Ruby",
    image:
      "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80",
    description:
      "Infusion hibiscus, purée de framboise, sirop de thym, lime, blanc d'oeuf",
    year: "Est. 1920",
  },
  {
    id: 4,
    name: "Emrald",
    image:
      "https://images.unsplash.com/photo-1556679344-cc7e0c25c8c3?auto=format&fit=crop&w=800&q=80",
    description: "Eau de concombre, sirop de sureau, lime, Eau gazeuse",
    year: "Est. 1915",
  },
];
