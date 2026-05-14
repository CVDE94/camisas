import { PRODUCTS, type Product } from "../data/constants";
import { ProductCard } from "./ProductCard";

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
