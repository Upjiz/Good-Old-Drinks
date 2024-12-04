export interface Event {
  id: string;
  title: string;
  date: string;
  type: EventType;
  description: string;
  imageUrl: string;
}

export interface Cocktail {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export type EventType = "wedding" | "corporate" | "private" | "workshop";

export interface Photo {
  url: string;
  caption: string;
  event?: string;
  type: EventType;
}
