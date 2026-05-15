import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { OfferCarousel } from "./components/OfferCarousel";
import { Catalog } from "./components/Catalog";
import { ProductModal } from "./components/ProductModal";
import { Benefits } from "./components/Benefits";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import type { Product } from "./data/constants";

function App() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <div className="bg-ink-950 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <OfferCarousel />
        <Catalog onOpenProduct={setSelected} />
        <Benefits />
        <Gallery />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
