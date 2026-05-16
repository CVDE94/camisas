import { Instagram } from "lucide-react";
import { BRAND, FOOTER_IMAGE } from "../data/constants";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10">
      {/* CONTENEDOR: Grid de 1 columna en celular, 3 columnas en PC */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
        {/* COLUMNA 1 (IZQUIERDA): Logo */}
        {/* order-1 para que esté arriba en celular y a la izquierda en PC */}
        <div className="flex justify-center sm:justify-start order-1">
          <img
            src={FOOTER_IMAGE}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain object-center transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* COLUMNA 2 (CENTRO): Botón de Instagram */}
        {/* order-2 para que se quede en el medio en ambas vistas */}
        <div className="flex justify-center order-2">
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

        {/* COLUMNA 3 (DERECHA): Derechos Reservados */}
        {/* order-3 para que baje en celular, y se vaya a la derecha en PC */}
        <div className="flex justify-center sm:justify-end order-3">
          {/* Nota: Agregué sm:text-right para que el texto también se pegue bien al borde derecho */}
          <p className="text-xs text-metal-400 text-center sm:text-right">
            © {new Date().getFullYear()} {BRAND.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
