"use client";

import React from "react";
import { useGalleryData } from "../../hooks/useGalleryData";
import GalleryItem from "./GalleryItem";
import GalleryFilter from "./GalleryFilter";

export default function GalleryGrid() {
  const { photos, filterPhotos, activeFilter } = useGalleryData();

  return (
    <section className="py-20 px-4 bg-[#1D0808]">
      <div className="max-w-7xl mx-auto">
        <GalleryFilter onFilter={filterPhotos} activeFilter={activeFilter} />

        <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-4">
          {photos.map((photo, index) => (
            <GalleryItem key={index} photo={photo} priority={index < 6} />
          ))}
        </div>
      </div>
    </section>
  );
}
