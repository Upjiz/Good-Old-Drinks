import Hero from "../components/Hero";
import Prestations from "../components/Prestations";
import Cocktail from "../components/Cocktail";
import Quote from "../components/Quote";
import PhotoGallery from "../components/PhotoGallery";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";
import LastEvent from "../components/LastEvent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Prestations />
      <Cocktail />
      <Quote />
      <PhotoGallery />
      <ChooseUs />
      <ContactForm />
      <LastEvent />
      <Footer />
    </>
  );
}
