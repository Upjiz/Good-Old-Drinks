import React from "react";

import Footer2 from "../../components/Footer2";
import WeddingHero from "./sections/Hero";
import WeddingOverview from "./sections/Overview";
import WeddingServices from "./sections/Services";
import WeddingProcess from "./sections/Process";
import WeddingGallery from "./sections/Gallery";
import WeddingTestimonials from "./sections/Testimonials";
import Contact from "@/components/Contact";

export default function WeddingService() {
  return (
    <div className="min-h-screen bg-primary text-accent">
      <main>
        <WeddingHero />
        <WeddingOverview />
        <WeddingServices />
        <WeddingProcess />
        <WeddingGallery />
        <WeddingTestimonials />
        <Contact />
      </main>
      <Footer2 />
    </div>
  );
}
