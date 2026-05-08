import { useEffect, useMemo, useState } from "react";
import {
  MessageCircle,
  X,
  Sparkles,
  Heart,
  Lock,
  Wind,
  Droplets,
  Star,
} from "lucide-react";
import {
  COLOR_LABEL,
  CURRENCY_FORMATTER,
  CUT_LABEL,
  type Product,
  type ProductColor,
  type ProductCut,
} from "../data/constants";
import { buildOrderMessage, buildWhatsAppUrl } from "../lib/whatsapp";
import { ProductCarousel } from "./ProductCarousel";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  const [color, setColor] = useState<ProductColor>("black");
  const [cut, setCut] = useState<ProductCut>("S");
  const [reflective, setReflective] = useState(false);
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (product?.hasReflective) {
      setAttention(true);
      const timer = setTimeout(() => setAttention(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      setColor(product.variants.colors[0]);
      setCut(product.variants.cuts[0]);
      setReflective(false);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  const price = useMemo(() => {
    if (!product) return 0;
    return product.basePrice + (reflective ? product.reflectiveExtra : 0);
  }, [product, reflective]);

  const carouselImages = useMemo(() => {
    if (!product) return [];
    const images = new Set([
      product.images[color] ?? product.images.default,
      product.images.default,
      ...Object.values(product.images),
    ]);
    return Array.from(images).filter(Boolean) as string[];
  }, [product, color]);

  if (!product) return null;

  const whatsappUrl = buildWhatsAppUrl(
    buildOrderMessage({ name: product.name, color, cut, reflective }),
  );

  return (
    <div
      className="fixed inset-0 z-50 animate-fade-in flex items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Contenedor Principal: Limita el alto máximo y permite overflow redondeado */}
      <div className="relative w-full max-w-[1050px] h-full sm:h-auto sm:max-h-[90vh] bg-[#0a0a0a] sm:rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-scale-in">
        {/* Grid Superior: Imagen (50%) + Info (50%) */}
        <div className="flex flex-col md:flex-row flex-1 overflow-y-auto">
          {/* LADO IZQUIERDO: Imagen. Anclada de forma absoluta para evitar colapsos */}
          <div className="w-full md:w-7/12 relative bg-black min-h-[450px] md:min-h-[600px] shrink-0">
            <div className="absolute inset-0">
              <ProductCarousel images={carouselImages} />
              {/* BARRA INFERIOR: Características */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 p-5 sm:px-10 border-t border-white/5 bg-[#050505] shrink-0">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Wind className="w-6 h-6 text-zinc-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-zinc-200 text-sm font-semibold">
                      Tela premium
                    </p>
                    <p className="text-zinc-500 text-xs">
                      Cómoda y transpirable
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Droplets className="w-6 h-6 text-zinc-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-zinc-200 text-sm font-semibold">
                      Secado rápido
                    </p>
                    <p className="text-zinc-500 text-xs">Mantente fresco</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Star className="w-6 h-6 text-zinc-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-zinc-200 text-sm font-semibold">
                      Diseño exclusivo
                    </p>
                    <p className="text-zinc-500 text-xs">Ediciones limitadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Detalles */}
          <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col bg-[#0a0a0a] relative">
            {/* Botones Flotantes (Cerrar y Favorito) */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2.5 z-20">
              <button className="w-9 h-9 rounded-full bg-black/40 sm:bg-transparent border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
                <Heart className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/40 sm:bg-transparent border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Categoría y Título */}
            <div className="mt-2 sm:mt-0 mb-6">
              <p className="text-zinc-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                {product.tag ?? "Playera"}
              </p>
              <h2 className="text-4xl sm:text-[2.75rem] font-black text-white uppercase tracking-tight mb-4 leading-none">
                {product.name}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Precio */}
            <div className="flex items-baseline gap-1.5 mb-8">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {CURRENCY_FORMATTER.format(price)}
              </span>
              <span className="text-zinc-500 text-xs font-bold uppercase ml-1">
                MXN
              </span>
            </div>

            {/* Selector de Color */}
            <div className="mb-6">
              <p className="text-zinc-500 text-[10px] font-bold tracking-widest mb-3 uppercase">
                Color
              </p>
              <div className="flex flex-wrap gap-2.5">
                {product.variants.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
                      color === c
                        ? "border-white bg-transparent text-white"
                        : "border-white/10 bg-transparent text-zinc-400 hover:border-white/30"
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full border ${
                        c === "black"
                          ? "bg-black border-white/20"
                          : "bg-white border-black/20"
                      }`}
                    />
                    {COLOR_LABEL[c]}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Talla */}
            <div className="mb-8">
              <p className="text-zinc-500 text-[10px] font-bold tracking-widest mb-3 uppercase">
                Talla
              </p>
              <div className="flex gap-2">
                {product.variants.cuts.map((s) => (
                  <button
                    key={s}
                    onClick={() => setCut(s)}
                    className={`flex-1 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                      cut === s
                        ? "border-white bg-white/10 text-white"
                        : "border-white/5 bg-[#121212] text-zinc-400 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    {CUT_LABEL[s]}
                  </button>
                ))}
              </div>
            </div>

            {/* Caja de Detalles Reflejantes */}
            {product.hasReflective && (
              <div
                onClick={() => setReflective(!reflective)}
                className={`mb-8 flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all border ${
                  attention
                    ? "bg-white/10 border-white"
                    : reflective
                      ? "bg-white/10 border-white/30"
                      : "bg-[#121212] border-white/5 hover:border-white/20"
                }`}
              >
                <Sparkles
                  className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${reflective || attention ? "text-white" : "text-zinc-400"}`}
                />
                <div>
                  <p
                    className={`text-sm font-semibold mb-1 transition-colors ${reflective || attention ? "text-white" : "text-zinc-300"}`}
                  >
                    Detalles reflejantes
                  </p>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Mayor visibilidad en entrenamientos nocturnos.
                  </p>
                </div>
              </div>
            )}

            {/* Botón WhatsApp */}
            <div className="mt-auto pt-2">
              <a
                href={whatsappUrl}
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
    </div>
  );
}
