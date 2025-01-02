export interface Cocktail {
  id: number;
  name: string;
  image: string;
  description: string;
  year: string;
}

export const cocktails: Cocktail[] = [
  {
    id: 1,
    name: "Cosmo Note",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description:
      "Vodka renaissance, citron vert, purée de framboise, sirop de pop-corn, sirop de sucre, thé fruit rouge, foamer",
    year: "Est. 1921",
  },
  {
    id: 2,
    name: "Spicy Tiki",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    description:
      "Rhum ambargo blanc, Le merveilleux falernum, Purée passion, Citron vert, Sirop cannelle, Jus d’ananas",
    year: "Est. 1922",
  },
  {
    id: 3,
    name: "Flagrance",
    image:
      "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80",
    description:
      "Koloa coconut, Liqueur Fair passion, Supasawa, Sirop vanille, Eau de coco",
    year: "Est. 1920",
  },
  {
    id: 4,
    name: "Big Daddy",
    image:
      "https://images.unsplash.com/photo-1556679344-cc7e0c25c8c3?auto=format&fit=crop&w=800&q=80",
    description:
      "Rhum embargo cacao, Liqueur amaretto Villa Massa, Purée d’ananas, Citron vert, Sirop simple",
    year: "Est. 1915",
  },
  {
    id: 5,
    name: "Seed Negroni",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description:
      "Vodka Renaissance, Liqueur Fair baie açaï, Citron vert, Purée passion, Sirop de vanille",
    year: "Est. 1921",
  },
  {
    id: 6,
    name: "Acay Signature",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description:
      "Gin Green Seed (infusion tonka), La Quintinye rouge, Campari (infusion café)",
    year: "Est. 1921",
  },
  {
    id: 7,
    name: "Mi-Chemin",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description:
      "Gin Green Seed, Liqueur Fair Elderflower, Citron vert, Sirop de poivre Timut, Eau de concombre/Perrier.",
    year: "Est. 1921",
  },
  {
    id: 8,
    name: "Silk Road",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description:
      "Gin Green Seed (infusion citronnelle), Liqueur Fair gingembre, Citron vert, Sirop coriandre, Thé jasmin, Foamer.",
    year: "Est. 1921",
  },
  {
    id: 9,
    name: "Granny’s secret",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description:
      "Vodka Renaissance, Liqueur yuzu (BBC Spirit), Sirop verveine, Citron vert.",
    year: "Est. 1921",
  },
  {
    id: 10,
    name: "Smoke On The Water",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    description:
      "Whisky Lefort (fatwash peanut butter), Sirop pain grillé, Supasawa, Campari fruit rouge.",
    year: "Est. 1921",
  },
];

export interface ClasicCocktail {
  id: number;
  name: string;
  image: string;
  description: string;
  year: string;
}

export const classicCocktails: ClasicCocktail[] = [
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
    name: "Moscow Mule ",
    image:
      "https://images.unsplash.com/photo-1730390772308-0ae7f139d042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9qaXRvfGVufDB8fDB8fHwy",
    year: "Est. 1921",
    description: "Vodka, Ginger beer, Citron vert",
  },
  {
    id: 3,
    name: "London Mule",
    image:
      "https://images.unsplash.com/photo-1730390772308-0ae7f139d042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9qaXRvfGVufDB8fDB8fHwy",
    year: "Est. 1921",
    description: "Gin, Ginger beer, Citron vert",
  },
  {
    id: 4,
    name: "Pornstar Martini",
    image:
      "https://images.unsplash.com/photo-1730390772308-0ae7f139d042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9qaXRvfGVufDB8fDB8fHwy",
    year: "Est. 1921",
    description:
      "Vodka, Liqueur de fruit de la passion, Purée de fruit de la passion, Prosecco",
  },
  {
    id: 5,
    name: "Espresso Martini",
    image:
      "https://images.unsplash.com/photo-1730390772308-0ae7f139d042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9qaXRvfGVufDB8fDB8fHwy",
    year: "Est. 1921",
    description: "Vodka, Liqueur de café, Espresso",
  },
  {
    id: 6,
    name: "Gin Tonic",
    image:
      "https://images.unsplash.com/photo-1730390772308-0ae7f139d042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9qaXRvfGVufDB8fDB8fHwy",
    year: "Est. 1921",
    description: "Gin, Tonic, Citron",
  },
  {
    id: 7,
    name: "Gin Tonic",
    image:
      "https://images.unsplash.com/photo-1730390772308-0ae7f139d042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9qaXRvfGVufDB8fDB8fHwy",
    year: "Est. 1921",
    description: "Vodka, Liqueur triple sec, Jus de cranberry, Citron vert",
  },
];
