import React from "react";
import Header from "@/components/Header";
import Footer from "../../../components/Footer";
import Hero from "./Hero";
import Story from "./Story";
import Cocktails from "./Cocktails";
import Gallery from "./Gallery";

export default function IBMEvent() {
  return (
    <div className="min-h-screen bg-primary text-accent">
      <Header />
      <main>
        <Hero />
        <Story />
        <Cocktails />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
