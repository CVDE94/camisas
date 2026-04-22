import { Sparkles, Dumbbell, Gem, Shirt } from "lucide-react";

// ==========================================
// SECCIÓN: Datos de los Beneficios
// ==========================================
// Aquí se guarda la información de cada "tarjeta" (icono, título y descripción).
// Si el día de mañana quieres agregar un quinto beneficio, solo lo escribes
// aquí abajo y el diseño se actualizará automáticamente sin tocar el HTML.
const BENEFITS = [
  {
    icon: Shirt,
    title: "Diseños únicos",
    desc: "Piezas exclusivas, tiradas limitadas en cada drop.",
  },
  {
    icon: Dumbbell,
    title: "Ideales para gym",
    desc: "Telas técnicas, costuras reforzadas y cortes atléticos.",
  },
  {
    icon: Sparkles,
    title: "Opción reflejante",
    desc: "Detalles que resaltan bajo cualquier luz.",
  },
  {
    icon: Gem,
    title: "Calidad / precio",
    desc: "Acabados premium sin inflar el ticket.",
  },
];

// ==========================================
// SECCIÓN: Componente Visual (Benefits)
// ==========================================
// ¿Qué hace este componente?
// Muestra una cuadrícula (grid) con las ventajas de comprar tus camisas.
//
// Estructura visual:
// 1. Contenedor principal: Una sección oscura con bordes arriba y abajo (border-y).
// 2. Cuadrícula (Grid): Organiza las tarjetas. Muestra 2 columnas en celulares
//    (grid-cols-2) y 4 columnas en computadoras (lg:grid-cols-4).
// 3. Tarjetas: Cada beneficio tiene un fondo semi-transparente que cambia de color
//    al pasar el mouse por encima (hover:bg-ink-800).
// 4. Iconos: Están dentro de un cuadro metálico y tienen un efecto de animación
//    que los hace crecer cuando pasas el mouse (group-hover:scale-110).
// ==========================================

export function Benefits() {
  return (
    <section className="py-20 sm:py-24 bg-ink-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* El .map() recorre la lista BENEFITS y dibuja una tarjeta por cada uno */}
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 sm:p-7 rounded-2xl border border-white/5 bg-ink-800/50 hover:bg-ink-800 hover:border-white/15 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-metallic flex items-center justify-center text-ink-950 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-metal-300 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
