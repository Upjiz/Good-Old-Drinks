import React from 'react';
import { Photo } from '../../../types';


interface GalleryItemProps {
  photo: Photo;
  priority?: boolean;
}

export default function GalleryItem({ photo, priority = false }: GalleryItemProps) {
  return (
    <div className="relative mb-4 break-inside-avoid group">
      <div className="relative overflow-hidden">
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#112B2A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-serif text-[#c7b79c]">{photo.caption}</h3>
            {photo.event && (
              <p className="text-sm text-[#c7b79c]/80">{photo.event}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}