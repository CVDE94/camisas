import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { PROMO_OFFERS } from "../data/constants";

export function OfferCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === PROMO_OFFERS.length - 1 ? 0 : prev + 1,
    );
  };

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? PROMO_OFFERS.length - 1 : prev - 1,
    );
  };

  // Lógica para que cambie solo cada 5 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-12 bg-ink-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Contenedor principal del carrusel */}
        <div className="relative group h-[400px] sm:h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
          {/* Imagen de Fondo con animación de transición */}
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${PROMO_OFFERS[currentIndex].image})`,
            }}
          >
            {/* Capa oscura para que el texto resalte (estilo Steam) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Bloque de Texto y Contenido */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-metallic text-xs font-bold tracking-widest uppercase mb-4 w-fit">
              <Sparkles className="w-3 h-3" />
              {PROMO_OFFERS[currentIndex].badge}
            </span>

            <h2 className="text-4xl sm:text-6xl font-display text-white leading-none animate-slide-up">
              {PROMO_OFFERS[currentIndex].title}
            </h2>

            <p className="mt-4 text-metal-300 text-lg leading-relaxed">
              {PROMO_OFFERS[currentIndex].description}
            </p>

            <a
              href={PROMO_OFFERS[currentIndex].link}
              className="mt-8 bg-white text-ink-950 px-8 py-3 rounded-full font-bold w-fit hover:bg-metal-100 transition-colors"
            >
              Ver Oferta
            </a>
          </div>

          {/* Flechas de Navegación (aparecen al pasar el mouse) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores de bolitas (dots) abajo */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {PROMO_OFFERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all rounded-full ${
                  index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
