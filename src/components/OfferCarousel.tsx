// src/components/OfferCarousel.tsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
//import { PROMO_OFFERS } from "../data/constants"; // O el nombre que tenga tu arreglo en constants
import { OfferModal } from "./OfferModal";
import { OFFERS } from "../data/constants";

export function OfferCarousel() {
  // Estado para controlar qué imagen se muestra en el carrusel de fondo
  const [currentIndex, setCurrentIndex] = useState(0);

  // ESTADO NUEVO: Controla si el Pop-up (Modal) está abierto y qué oferta mostrar
  const [selectedOffer, setSelectedOffer] = useState<any | null>(null);

  // Auto-reproducción del carrusel cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + OFFERS.length) % OFFERS.length);

  if (!OFFERS || OFFERS.length === 0) return null;

  return (
    <section className="py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la Sección */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-yellow-500" />
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider text-center">
            Ofertas Especiales
          </h2>
          <Sparkles className="w-6 h-6 text-yellow-500" />
        </div>

        {/* Contenedor del Carrusel Principal */}
        <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <div
            className="flex transition-transform duration-500 ease-out h-[400px] md:h-[500px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {OFFERS.map((offer) => {
              // TRUCO: Extraemos la primera imagen de la oferta para mostrarla de fondo
              // en caso de que en constants.ts hayas puesto un arreglo de varias fotos
              const mainImage = Array.isArray(offer.images)
                ? offer.images[0]
                : offer.images || offer.link;

              return (
                <div
                  key={offer.id}
                  className="w-full flex-shrink-0 relative group"
                >
                  {/* Fondo e Imagen */}
                  <div className="absolute inset-0">
                    <img
                      src={mainImage}
                      alt={offer.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
                    />
                    {/* Degradado oscuro para que el texto resalte */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent" />
                  </div>

                  {/* Textos de la Oferta */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    {offer.discount && (
                      <span className="inline-block px-4 py-1 bg-yellow-500 text-black font-bold rounded-full text-sm w-max mb-4">
                        {offer.discount}
                      </span>
                    )}

                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                      {offer.title}
                    </h3>

                    <p className="text-lg text-zinc-300 max-w-2xl mb-8 line-clamp-2">
                      {offer.description}
                    </p>

                    {/* 🚀 EL BOTÓN MODIFICADO 🚀
                        Ahora al hacer clic, guardamos la oferta en el estado para abrir el Pop-Up */}
                    <button
                      onClick={() => setSelectedOffer(offer)}
                      className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors w-max uppercase tracking-wider shadow-lg"
                    >
                      Ver Oferta
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flecha Izquierda */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Flecha Derecha */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores de Puntos Inferiores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {OFFERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🚀 RENDERIZADO DEL POP-UP (MODAL) 🚀 */}
      {/* Este componente solo se mostrará si "selectedOffer" tiene información */}
      {selectedOffer && (
        <OfferModal
          isOpen={selectedOffer !== null}
          offer={selectedOffer}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </section>
  );
}
