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
    name: "Whisky Sour",
    image:
      "https://images.unsplash.com/photo-1579054124599-77ceb3040991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpc2t5JTIwc291cnxlbnwwfHwwfHx8MA%3D%3D",
    year: "Est. 1870",
    description: "Whisky, Jus de citron, Sucre, Blanc d'œuf",
  },
  {
    id: 2,
    name: "Amaretto Sour",
    image:
      "https://images.unsplash.com/photo-1600796208124-0e43d9b2a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hcmV0dG8lMjBzb3VyJTIwY29ja2RhaWx8ZW58MHx8MHx8fDA%3D",
    year: "Est. 1970",
    description: "Amaretto, Jus de citron, Sucre, Foamer",
  },
  {
    id: 3,
    name: "Moscow Mule",
    image:
      "https://images.unsplash.com/photo-1606902965551-dce099c09791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9zY293JTIwbXVsZXxlbnwwfHwwfHx8MA%3D%3D",
    year: "Est. 1941",
    description: "Vodka, Ginger beer, Jus de citron vert",
  },
  {
    id: 4,
    name: "London Mule",
    image:
      "https://images.unsplash.com/photo-1606902965551-dce099c09791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9uJTIwbXVsZXxlbnwwfHwwfHx8MA%3D%3D",
    year: "Est. 2000",
    description: "Gin, Ginger beer, Jus de citron vert",
  },
  {
    id: 5,
    name: "Paloma",
    image:
      "https://images.unsplash.com/photo-1604490333143-90264f29e523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFsb21hJTIwY29ja2RhaWx8ZW58MHx8MHx8fDA%3D",
    year: "Est. 1950",
    description: "Tequila, Jus de pamplemousse, Eau gazeuse, Citron vert",
  },
  {
    id: 6,
    name: "Basil Smash",
    image:
      "https://images.unsplash.com/photo-1551024702-8b3b94e5b9b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFzaWwlMjBzbWFzaCUyMGNvY2tkYWlsfGVufDB8fDB8fHww",
    year: "Est. 2008",
    description: "Gin, Basilic, Jus de citron, Sucre",
  },
  {
    id: 7,
    name: "Espresso Martini",
    image:
      "https://images.unsplash.com/photo-1561065090-68f1d00d54f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXNwcmVzc28lMjBtYXJ0aW5pfGVufDB8fDB8fHww",
    year: "Est. 1983",
    description: "Vodka, Café espresso, Liqueur de café, Sucre",
  },
  {
    id: 8,
    name: "Pornstar Martini",
    image:
      "https://images.unsplash.com/photo-1600972892358-69e9e896940f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ybnN0YXIlMjBtYXJ0aW5pfGVufDB8fDB8fHww",
    year: "Est. 2002",
    description:
      "Vodka, Liqueur de vanille, Jus de fruit de la passion, Jus de citron vert, Champagne",
  },
  {
    id: 9,
    name: "Margarita",
    image:
      "https://images.unsplash.com/photo-1551448469-82210b77414e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyZ2FyaXRhJTIwY29ja2RhaWx8ZW58MHx8MHx8fDA%3D",
    year: "Est. 1938",
    description: "Tequila, Triple sec, Jus de citron vert",
  },
  {
    id: 10,
    name: "Daiquiri",
    image:
      "https://images.unsplash.com/photo-1577259514322-098f4d6a066e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpcXVpcml8ZW58MHx8MHx8fDA%3D",
    year: "Est. 1898",
    description: "Rhum, Jus de citron vert, Sucre",
  },
  {
    id: 11,
    name: "Cosmopolitan Framboise",
    image:
      "https://images.unsplash.com/photo-1551448469-82210b77414e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbW9wb2xpdGFuJTIwY29ja2RhaWx8ZW58MHx8MHx8fDA%3D",
    year: "Est. 1988",
    description:
      "Vodka, Liqueur de framboise, Jus de cranberry, Purée de framboise, Jus de citron vert",
  },
];
