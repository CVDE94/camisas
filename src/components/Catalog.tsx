import { PRODUCTS, type Product } from "../data/constants";
import { ProductCard } from "./ProductCard";

// ==========================================
// SECCIÓN: Catálogo de Productos
// ==========================================
// ¿Qué hace este componente?
// Muestra la galería principal donde los clientes pueden ver todas las
// camisas disponibles en el drop actual.
//
// ¿Qué es la "interface Props"?
// Es una regla estricta que dice que este componente necesita recibir
// una función llamada "onOpenProduct". Esto sirve para que, cuando el
// usuario haga clic en una camisa, el sistema sepa qué producto abrir.
//
// Estructura visual:
// 1. Contenedor principal: Una sección con un fondo casi negro (bg-ink-950)
//    y un identificador (id="catalogo") para que el menú de navegación
//    pueda saltar directamente aquí.
// 2. Encabezado (Flexbox): El título y el párrafo de descripción están
//    agrupados. En celulares se ponen uno debajo del otro (flex-col), pero
//    en monitores se alinean lado a lado (sm:flex-row).
// 3. Cuadrícula (Grid): Dibuja las tarjetas de los productos. Pone 2
//    productos por fila en celulares, 3 en tablets y 4 en pantallas grandes.
// ==========================================

interface Props {
  onOpenProduct: (p: Product) => void;
}

export function Catalog({ onOpenProduct }: Props) {
  return (
    <section id="catalogo" className="relative py-20 sm:py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-metal-400">
              Catálogo
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-white leading-none">
              Diseños <span className="text-metallic">forjados</span>
            </h2>
          </div>
          <p className="text-metal-300 text-sm sm:text-base max-w-md leading-relaxed">
            Cada pieza pasa por un control riguroso de corte, tela y acabado.
            Elige tu color, corte y si lo quieres con detalles reflejantes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={onOpenProduct} />
          ))}
        </div>
      </div>
    </section>
  );
}
