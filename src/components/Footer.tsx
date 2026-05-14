import { Dumbbell, Instagram } from "lucide-react";
import { BRAND, LOGO_IMAGE } from "../data/constants";

// ==========================================
// SECCIÓN: Pie de Página (Footer)
// ==========================================
// ¿Qué hace este componente?
// Es la franja oscura que aparece hasta abajo de toda tu tienda.
// Muestra el nombre de tu marca, un botón hacia tu Instagram y
// la leyenda de derechos reservados.
//
// Estructura visual:
// 1. Contenedor principal (footer): Tiene un fondo totalmente negro (bg-black),
//    con una línea decorativa muy fina en la parte superior (border-t) y
//    espacio vertical (py-10).
// 2. Distribución (Flexbox): En celulares, el logo, el botón y el texto
//    se apilan uno debajo del otro (flex-col). En monitores, se acomodan
//    bonitos en una sola línea de izquierda a derecha (sm:flex-row).
// 3. Lógica del año: Utiliza {new Date().getFullYear()} para leer el año
//    actual de la computadora. Así, cuando cambie el año, tu página se
//    actualizará sola sin que tengas que editar el código.
// ==========================================

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img
            src={LOGO_IMAGE}
            alt=""
            className="w-14 h-14 sm:w-10 sm:h-10 object-contain object-center transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="flex items-center gap-4">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-metal-200 hover:text-white hover:border-white/30 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-metal-400">
          © {new Date().getFullYear()} {BRAND.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
