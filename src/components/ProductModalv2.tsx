import { useEffect, useMemo, useState } from "react";
import { MessageCircle, X, Sparkles, Heart, Lock } from "lucide-react";
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
      {/* Fondo desenfocado */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Contenedor Principal: Paleta de color ajustada (#0d0d0d) */}
      <div className="relative w-full max-w-[1200px] h-full sm:h-auto sm:max-h-[92vh] bg-[#0d0d0d] sm:rounded-[2rem] border border-[#1f1f1f] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-scale-in">
        {/* --- LADO IZQUIERDO: Carrusel. Proporción 60/40 --- */}
        <div className="w-full md:w-3/5 p-6 md:pr-4 flex flex-col justify-center">
          <div className="w-full relative h-[450px] md:h-[650px] bg-black rounded-3xl overflow-hidden border border-[#1f1f1f]">
            <ProductCarousel images={carouselImages} />
          </div>
        </div>

        {/* --- LADO DERECHO: Detalles. Proporción 60/40 --- */}
        <div className="w-full md:w-2/5 p-10 flex flex-col bg-[#0d0d0d] relative">
          {/* Cluster de Iconos Flotantes (Cerrar y Favorito) */}
          <div className="absolute top-8 right-10 flex items-center gap-3 z-20">
            <button className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#1f1f1f] flex items-center justify-center text-zinc-400 hover:text-white transition-all">
              <Heart className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#1f1f1f] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Categoría y Título (All-Caps y tipografía bold) */}
          <div className="mb-6">
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5">
              {product.tag ?? "PLAYERA"}
            </p>
            <h2 className="text-4xl sm:text-[3.25rem] font-bold text-white uppercase tracking-tight mb-4 leading-none">
              {product.name}
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[400px]">
              {product.description}
            </p>
          </div>

          {/* Precio (Números grandes, MXN pequeño y bold) */}
          <div className="flex items-baseline gap-1.5 mb-10">
            <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {CURRENCY_FORMATTER.format(price).split(".")[0]}
            </span>
            <span className="text-zinc-500 text-sm font-bold uppercase ml-1.5">
              MXN
            </span>
          </div>

          {/* Selector de Color (Pastillas horizontales) */}
          <div className="mb-8">
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest mb-3 uppercase">
              Color
            </p>
            <div className="flex flex-wrap gap-2.5">
              {product.variants.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`flex items-center gap-2.5 px-5 py-2 rounded-full border text-sm font-semibold transition-all ${
                    color === c
                      ? "border-white bg-transparent text-white"
                      : "border-transparent bg-[#1a1a1a] text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full border ${
                      c === "black"
                        ? "bg-black border-white/10"
                        : "bg-white border-black/10"
                    }`}
                  />
                  {COLOR_LABEL[c]}
                </button>
              ))}
            </div>
          </div>

          {/* Selector de Talla (Pastillas grandes y oscuras) */}
          <div className="mb-8">
            <p className="text-zinc-500 text-[10px] font-bold tracking-widest mb-3 uppercase">
              Talla
            </p>
            <div className="flex gap-2.5">
              {product.variants.cuts.map((s) => (
                <button
                  key={s}
                  onClick={() => setCut(s)}
                  className={`flex-1 py-3 rounded-full border text-sm font-semibold transition-all ${
                    cut === s
                      ? "border-white bg-white/10 text-white"
                      : "border-transparent bg-[#1a1a1a] text-zinc-400 hover:border-white/20"
                  }`}
                >
                  {CUT_LABEL[s]}
                </button>
              ))}
            </div>
          </div>

          {/* Caja de Detalles Reflejantes (Estilo card elegante) */}
          {product.hasReflective && (
            <div
              onClick={() => setReflective(!reflective)}
              className={`mb-8 flex items-start gap-3.5 p-5 rounded-3xl cursor-pointer transition-all border ${
                attention
                  ? "bg-white/10 border-white"
                  : reflective
                    ? "bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                    : "bg-[#1a1a1a] border-[#1f1f1f] hover:border-white/10"
              }`}
            >
              <Sparkles
                className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${reflective || attention ? "text-white" : "text-zinc-500"}`}
              />
              <div>
                <p
                  className={`text-sm font-semibold mb-1 transition-colors ${reflective || attention ? "text-white" : "text-zinc-300"}`}
                >
                  Detalles reflejantes
                </p>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Mayor visibilidad en entrenamientos nocturnos.
                  {reflective && (
                    <span className="font-semibold text-white ml-1">
                      (+$50)
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Botón WhatsApp y Seguridad (Estilo premium) */}
          <div className="mt-auto pt-6 flex flex-col items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1db954] text-white font-bold text-base px-6 py-4 rounded-full transition-all hover:scale-[1.03] shadow-lg shadow-[#25D366]/10"
            >
              <MessageCircle className="w-5 h-5" />
              PEDIR POR WHATSAPP
            </a>

            <div className="mt-5 flex items-center justify-center gap-1.5 text-zinc-600">
              <Lock className="w-3 h-3" />
              <p className="text-[11px]">
                Te contactamos para confirmar talla y envío.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
