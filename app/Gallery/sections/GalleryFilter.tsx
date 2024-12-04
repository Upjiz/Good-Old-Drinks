import React from 'react';
import { EventType } from '../../../types';

interface GalleryFilterProps {
  onFilter: (type: EventType | 'all') => void;
  activeFilter: EventType | 'all';
}

const filters: { label: string; value: EventType | 'all' }[] = [
  { label: 'Tous', value: 'all' },
  { label: 'Mariages', value: 'wedding' },
  { label: 'Événements Entreprise', value: 'corporate' },
  { label: 'Soirées Privées', value: 'private' },
  { label: 'Ateliers', value: 'workshop' },
];

export default function GalleryFilter({ onFilter, activeFilter }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilter(filter.value)}
          className={`px-6 py-2 border ${
            activeFilter === filter.value
              ? 'border-[#c7b79c] bg-[#c7b79c] text-[#112B2A]'
              : 'border-[#c7b79c]/50 hover:border-[#c7b79c] hover:bg-[#c7b79c]/10'
          } transition-colors`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}