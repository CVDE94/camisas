import { useState } from "react";

interface Props {
  images: string[];
}

export function ProductCarousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    // 1. CONTENEDOR PRINCIPAL: Cambiamos bg-slate-100 por bg-zinc-900
    <div className="absolute inset-0 flex flex-row bg-black">
      {/* 2. TIRA DE MINIATURAS: Fondo zinc-950 para contraste y bordes oscuros */}
      <div className="flex flex-col gap-1 overflow-y-auto w-16 sm:w-24 shrink-0 bg-black border-r border-zinc-800 scrollbar-hide">
        {images.map((src, index) => {
          const isActive = currentIndex === index;

          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              // Cambiamos los bordes a zinc-800 para que no brillen demasiado
              className={`relative shrink-0 w-full h-20 sm:h-28 transition-all duration-200 border-b bg-black ${
                isActive
                  ? // ACTIVO: Fondo gris medio (zinc-800) y línea indicadora BLANCA (#ffffff)
                    "bg-zinc-800 opacity-100 shadow-[inset_4px_0_0_0_#ffffff]"
                  : // INACTIVO: Opaco, y al pasar el cursor (hover) se ilumina sutilmente
                    "opacity-50 hover:opacity-100 bg-black"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
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

      {/* 3. IMAGEN PRINCIPAL: Fondo zinc-900 para fundirse con la camisa */}
      <div className="relative flex-1 h-full bg-black flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt="Vista principal"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      </div>
    </div>
  );
}
