// src/components/OfferModal.tsx
import { useState, useEffect } from "react";
import {
  X,
  ShoppingBag,
  ChevronRight,
  MessageCircle,
  Lock,
} from "lucide-react";
import { TALLA } from "../data/constants";

interface OfferModalProps {
  offer: any; // Recibe la información de la oferta seleccionada
  onClose: () => void;
}

export function OfferModal({ offer, onClose }: OfferModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Truco maestro: Si en constants.ts tienes 'image' (1 foto) o 'images' (arreglo), esto lo unifica
  const images = Array.isArray(offer.images)
    ? offer.images
    : [offer.image || offer.imageUrl];

  // Permite cerrar el Pop-up presionando la tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!offer) return null;

  return (
    // Fondo oscuro con desenfoque (Glassmorphism)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Contenedor Principal (Proporción 60/40 como en tus productos) */}
      <div className="relative w-full max-w-5xl bg-zinc-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-fade-in">
        {/* Botón Flotante para Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-zinc-800/80 hover:bg-zinc-700 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* COLUMNA IZQUIERDA: Imagen de la Oferta (60%) */}
        <div className="w-full md:w-3/5 relative bg-black flex flex-col">
          {/* Imagen Principal con Efecto Vignette (Difuminado en las orillas) */}
          <div className="relative flex-1 min-h-[300px] md:min-h-[500px]">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10" />

            <img
              src={images[currentImage]}
              alt={offer.title}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
          </div>

          {/* Tira de Miniaturas (Solo aparece si la oferta tiene MÁS de 1 imagen) */}
          {images.length > 1 && (
            <div className="flex gap-2 p-4 bg-zinc-950 overflow-x-auto">
              {images.map((src: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 ${
                    currentImage === index
                      ? "bg-zinc-800 opacity-100 shadow-[inset_4px_0_0_0_#ffffff]" // Estilo Activo Premium
                      : "opacity-50 hover:opacity-100 bg-black" // Estilo Inactivo
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
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

          <h2 className="text-3xl font-bold mb-4 leading-tight">
            {offer.title}
          </h2>

          <p className="text-zinc-400 mb-8 leading-relaxed">
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
