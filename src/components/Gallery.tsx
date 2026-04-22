import { GALLERY_IMAGES } from "../data/constants";

// ==========================================
// SECCIÓN: Galería de Imágenes
// ==========================================
// ¿Qué hace este componente?
// Muestra un muro de fotos (tipo Instagram) para lucir cómo se ven
// las camisas en acción dentro del gimnasio.
//
// Lógica principal:
// Lee una lista de imágenes (GALLERY_IMAGES) desde tu archivo de datos
// y usa un ciclo (.map) para dibujar cada foto automáticamente.
//
// Estructura visual:
// 1. Encabezado: Título y subtítulo sencillos alineados a la izquierda.
// 2. Cuadrícula (Grid): En celulares acomoda 2 fotos por fila, pero en
//    tablets o monitores acomoda 3 (md:grid-cols-3).
// 3. El truco de la primera foto: Utiliza la condición (i === 0) para
//    detectar cuál es la primera imagen de la lista. A esta foto le da
//    instrucciones especiales para que ocupe el doble de espacio
//    (md:col-span-2 md:row-span-2), haciéndola la protagonista.
// 4. Efecto interactivo: Cada foto hace un "zoom" muy suave cuando le
//    pasas el mouse por encima (group-hover:scale-110) y aparece una
//    ligera sombra oscura desde abajo.
// ==========================================

export function Gallery() {
  return (
    <section className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="text-[11px] tracking-[0.3em] uppercase text-metal-400">
            En el gym
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-white leading-none">
            Así se <span className="text-metallic">entrena</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl bg-ink-800 group ${
                i === 0
                  ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
                  : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
