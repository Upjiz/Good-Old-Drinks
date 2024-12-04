import React from "react";

import Footer from "../../components/Footer";
import GalleryHero from "./sections/GalleryHero";
import GalleryDescription from "./sections/GalleryDescription";
import GalleryGrid from "./sections/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-primary text-accent">
      <main>
        <GalleryHero />
        <GalleryDescription />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}
