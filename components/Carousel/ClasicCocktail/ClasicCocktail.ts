export interface ClassicCocktail {
  id: number;
  name: string;
  image: string;
  description: string;
  year: string;
}

export const classicCocktails: ClassicCocktail[] = [
  {
    id: 1,
    name: "Mojito",
    image:
      "https://images.unsplash.com/photo-1730390772308-0ae7f139d042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9qaXRvfGVufDB8fDB8fHwy",
    year: "Est. 1921",
    description: "Rhum, Menthe, Citron vert, Sucre, Eau gazeuse",
  },
  {
    id: 2,
    name: "Margarita",
    image:
      "https://images.unsplash.com/photo-1678862656501-9bd5d0bf6de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9qaXRvfGVufDB8fDB8fHww",
    year: "Est. 1922",
    description: "Tequila, Lime, Triple sec, Salt, Sugar",
  },
  {
    id: 3,
    name: "Daiquiri",
    image:
      "https://images.unsplash.com/photo-1530991808291-7e157454758c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsfGVufDB8fDB8fHww",
    year: "Est. 1921",
    description: "Cognac, Orange liqueur, and fresh lemon juice",
  },
  {
    id: 4,
    name: "Old Fashioned",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFByaXZhdGUlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
    year: "Est. 1921",
    description: "Gin, Campari, Vemouth rouge",
  },
];
