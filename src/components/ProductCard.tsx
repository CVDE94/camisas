import { ArrowUpRight } from "lucide-react";
import { CURRENCY_FORMATTER, type Product } from "../data/constants";

interface Props {
  product: Product;
  onOpen: (p: Product) => void;
}

export function ProductCard({ product, onOpen }: Props) {
  return (
    <button
      onClick={() => onOpen(product)}
      className="group text-left relative bg-ink-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
        <img
          src={product.images.default}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-90" />
        {product.tag && (
          <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-white text-ink-950 px-2.5 py-1 rounded-full font-semibold">
            {product.tag}
          </span>
        )}
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>
      <div className="p-4 sm:p-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-white text-sm sm:text-base">
            {product.name}
          </h3>
        </div>
        <div className="text-right">
          <div className="font-display text-xl text-metallic leading-none">
            {CURRENCY_FORMATTER.format(product.basePrice)}
          </div>
          <div className="mt-1 text-[10px] tracking-widest uppercase text-metal-300 group-hover:text-white transition-colors">
            Ver diseño
          </div>
        </div>
      </div>
    </button>
  );
}
