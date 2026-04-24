import { BRAND } from "../data/constants";

// ==========================================
// SECCIÓN: Acerca de Nosotros (About)
// ==========================================
// ¿Qué hace este componente?
// Muestra el bloque oscuro de presentación de la marca en la página.
//
// Estructura visual:
// 1. Contenedor principal: Es una sección oscura (bg-ink-900) con bastante
//    espacio arriba y abajo para que respire el diseño (py-20 sm:py-28).
// 2. Caja de contenido: Todo el texto está agrupado en el centro, con un ancho
//    límite para que no se vea estirado en pantallas de computadora.
//
// Elementos de texto:
// - Etiqueta pequeña: Dice "NUESTRA HISTORIA" en letras chiquitas y separadas.
// - Título principal: "Hecho por atletas, para atletas". Su tamaño se adapta
//   automáticamente si lo ves en celular o en monitor.
// - Párrafo: Explica la visión de la marca insertando el nombre dinámicamente
//   con la variable {BRAND.name}.
// ==========================================

export function About() {
  return (
    <section
      id="nosotros"
      className="py-20 sm:py-28 bg-ink-900 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-[11px] tracking-[0.3em] uppercase text-metal-400">
          Nuestra historia
        </span>

        <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
          Hecho por atletas,
          <br />
          <span className="text-metallic">para atletas.</span>
        </h2>

        <p className="mt-6 text-metal-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {BRAND.name} nació en el piso del gym. Diseñamos piezas que resisten
          tu entrenamiento más duro, con cortes pensados para moverte mejor y
          detalles que se ven premium dentro y fuera del gimnasio.
        </p>
      </div>
    </section>
  );
}
