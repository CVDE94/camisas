import { useState, useEffect } from "react";
import { X, MessageCircle, Lock } from "lucide-react";
import { TALLA } from "../data/constants";

// Puedes ajustar esta interfaz dependiendo de los datos exactos que envíes desde tu constants.ts

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: any;
}

export function OfferModal({ isOpen, onClose, offer }: OfferModalProps) {
  // Manejo de la miniatura seleccionada si la oferta tiene varias imágenes
  const [currentIndex, setCurrentIndex] = useState(0);

  // Truco maestro: Si en constants.ts tienes 'image' (1 foto) o 'images' (arreglo), esto lo unifica
  const images = Array.isArray(offer.images)
    ? offer.images
    : [offer.image || offer.imageUrl];

  // Efecto clave para evitar que el fondo (body) haga scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    // Inyectamos el paso fantasma
    window.history.pushState({ modal: "OfferModal" }, "");

    const handleBackButton = () => {
      onClose();
    };

    window.addEventListener("popstate", handleBackButton);

    // Limpieza pura, sin forzar al navegador a retroceder de golpe
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [onClose]);

  const handleSafeClose = () => {
    onClose(); // 1. Cierra el modal instantáneamente (UX perfecta)

    // 2. Limpia el historial fantasma por detrás sin congelar la app
    if (window.history.state?.modal === "ProductModal") {
      setTimeout(() => {
        window.history.back();
      }, 50);
    }
  };

  // Si el modal está cerrado o no hay oferta cargada, no renderizamos nada
  if (!isOpen || !offer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-4">
      {/* 1. Fondo Oscuro Principal */}

      {/* 2. Contenedor del Modal (Aquí está la magia del Scroll para móviles) */}
      <div
        className="relative w-full max-w-5xl bg-zinc-900 flex flex-col md:flex-row 
                      h-[100dvh] md:h-auto md:max-h-[90vh] 
                      overflow-y-auto md:overflow-hidden 
                      rounded-none md:rounded-3xl shadow-2xl"
      >
        {/* 3. Botón de Cerrar (Flotante y siempre visible en la esquina superior) */}
        <button
          onClick={handleSafeClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* COLUMNA IZQUIERDA: Imagen de la oferta (60% del ancho en escritorio) */}
        <div className="w-full md:w-3/5 relative min-h-[40vh] md:min-h-0 bg-black flex flex-col justify-between">
          {/* Contenedor de la Imagen Principal con efecto de difuminado */}
          <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden">
            {/* Sombras difuminadas arriba y abajo */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

            <img
              src={offer.images[currentIndex]}
              alt={offer.title}
              className="w-full h-full object-cover md:object-contain relative z-0"
            />
          </div>

          {/* Tira de miniaturas (Se muestra SOLO si hay más de 1 imagen disponible) */}
          {images.length > 1 && (
            <div className="flex gap-4 p-4 overflow-x-auto bg-zinc-950 border-t border-zinc-800 shrink-0">
              {images.map((src: string, index: number) => {
                const isActive = currentIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative shrink-0 w-20 h-20 transition-all duration-200 rounded-2xl overflow-hidden border-2 
                      ${
                        isActive
                          ? "border-zinc-500 opacity-100 shadow-[inset_4px_0_0_0_#ffffff] bg-zinc-800"
                          : "border-zinc-800 opacity-50 hover:opacity-100 bg-black"
                      }`}
                  >
                    <img
                      src={src}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* COLUMNA DERECHA: Información (40%) */}
        <div className="w-full md:w-2/5 p-8 flex flex-col items-center justify-center text-white">
          {/* Etiqueta de Descuento (Si existe en constants.ts) */}
          {offer.discount && (
            <div className="mb-4 inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-max">
              {offer.discount}
            </div>
          )}

          <h2 className="text-3xl font-bold mb-4 leading-tight py-4">
            {offer.title}
          </h2>

          <p className="text-zinc-400 mb-8 leading-relaxed py-2">
            {offer.description}
          </p>
          {/* Precio */}
          <div className="self-start flex items-baseline gap-1.5 mb-8">
            <span className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
              $900
            </span>
            <span className="text-zinc-500 text-xs font-bold uppercase ml-1">
              MXN
            </span>
          </div>

          <img
            src={TALLA}
            alt=""
            className="w-2/3 h-5/4 object-center transition-transform duration-300 group-hover:scale-110"
          />

          <div className="mt-auto pt-6 border-t border-zinc-800">
            <a
              href={offer.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold text-base px-6 py-4 rounded-xl transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir por WhatsApp
            </a>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-zinc-500">
              <Lock className="w-3.5 h-3.5" />
              <p className="text-xs">
                Te contactamos para confirmar talla y envío.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
