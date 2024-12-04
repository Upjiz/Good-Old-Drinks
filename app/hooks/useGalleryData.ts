"use client";

import { useState, useMemo } from "react";
import { Photo, EventType } from "../types";

const galleryData: Photo[] = [
  {
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Cocktail Signature Mariage",
    event: "Mariage au Château de Versailles",
    type: "wedding",
  },
  {
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Bar Moléculaire",
    event: "IBM Tech Summit",
    type: "corporate",
  },
  {
    url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Atelier Mixologie",
    event: "Workshop Entreprise",
    type: "workshop",
  },
  {
    url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Soirée Privée",
    event: "Anniversary Celebration",
    type: "private",
  },
  {
    url: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Cocktails d'Exception",
    event: "Gala de Charité",
    type: "corporate",
  },
  {
    url: "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Bar Art Déco",
    event: "Mariage Gatsby",
    type: "wedding",
  },
  {
    url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Cocktails Signature",
    event: "Soirée Corporate",
    type: "corporate",
  },
  {
    url: "https://images.unsplash.com/photo-1549675584-91f19337af3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Bar Setup",
    event: "Wedding Reception",
    type: "wedding",
  },
  {
    url: "https://images.unsplash.com/photo-1507915977619-6ccfe8003b12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Night Celebration",
    event: "Private Party",
    type: "private",
  },
];

export function useGalleryData() {
  const [activeFilter, setActiveFilter] = useState<EventType | "all">("all");

  const photos = useMemo(() => {
    if (activeFilter === "all") {
      return galleryData;
    }
    return galleryData.filter((photo) => photo.type === activeFilter);
  }, [activeFilter]);

  const filterPhotos = (type: EventType | "all") => {
    setActiveFilter(type);
  };

  return {
    photos,
    filterPhotos,
    activeFilter,
  };
}
