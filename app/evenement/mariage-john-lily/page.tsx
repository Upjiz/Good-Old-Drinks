import React from "react";
import WeddingHero from "./WeddingHero";
import WeddingStory from "./WeddingStory";
import WeddingCocktails from "./WeddingCocktails";
import WeddingFeatures from "./WeddingFeatures";
import Footer from "../../../components/Footer";

export default function Mariage() {
  return (
    <div className="min-h-screen bg-primary text-accent">
      <main>
        <WeddingHero />
        <WeddingStory />
        <WeddingCocktails />
        <WeddingFeatures />
      </main>
      <Footer />
    </div>
  );
}
