import { useEffect, useMemo, useState } from "react";
import { Check, MessageCircle, X, Sparkles } from "lucide-react";
import {
  COLOR_LABEL,
  CURRENCY_FORMATTER,
  CUT_LABEL,
  type Product,
  type ProductColor,
  type ProductCut,
} from "../data/constants";
import { buildOrderMessage, buildWhatsAppUrl } from "../lib/whatsapp";

// ==========================================
// SECCIÓN: Ventana Emergente del Producto (ProductModal)
// ==========================================
// ¿Qué hace este componente?
// Muestra los detalles de una camisa en una ventana sobrepuesta y
// permite al usuario configurar su pedido antes de enviarlo por WhatsApp.
//
// Lógica principal (Hooks de React):
// 1. useState: Guarda en la memoria temporal qué color, corte y opción
//    reflejante ha elegido el cliente actualmente.
// 2. useEffect: Hace dos cosas importantes:
//    - Cuando abres la ventana, resetea las opciones a las predeterminadas.
//    - Bloquea el "scroll" de la página de fondo para que no se mueva,
//      y permite cerrar la ventana presionando la tecla "Escape".
// 3. useMemo: Hace cálculos rápidos. Recalcula el precio final si activas
//    lo reflejante, y cambia la variable de la imagen según el color elegido.
//
// Estructura visual:
// 1. Fondo (Overlay): Una capa oscura y borrosa (bg-black/80 backdrop-blur-sm)
//    que cubre toda la pantalla.
// 2. Contenedor Principal: En celulares es una sola columna, pero en
//    computadoras se divide en 2 columnas (grid md:grid-cols-2).
// 3. Columna Izquierda: Muestra la foto de la camisa.
// 4. Columna Derecha: Muestra el título, precio dinámico, botones para
//    seleccionar color/corte (con estilos distintos si están activos),
//    el checkbox de reflejante y el botón verde de WhatsApp.
// ==========================================

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  const [color, setColor] = useState<ProductColor>("black");
  const [cut, setCut] = useState<ProductCut>("normal");
  const [reflective, setReflective] = useState(false);

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

  const image = useMemo(() => {
    if (!product) return "";
    return product.images[color] ?? product.images.default;
  }, [product, color]);

  if (!product) return null;

  const whatsappUrl = buildWhatsAppUrl(
    buildOrderMessage({ name: product.name, color, cut, reflective }),
  );

  return (
    <div
      className="fixed inset-0 z-50 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative h-full overflow-y-auto flex items-start sm:items-center justify-center p-0 sm:p-6">
        <div className="relative w-full sm:max-w-5xl bg-ink-900 sm:rounded-2xl border border-white/10 overflow-hidden animate-scale-in shadow-2xl shadow-black">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-ink-950/80 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-ink-950 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2">
            <div className="relative bg-ink-800 aspect-square md:aspect-auto md:min-h-[560px]">
              <img
                key={image}
                src={image}
                alt={`${product.name} color ${COLOR_LABEL[color]}`}
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
              />
              {reflective && (
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-xs bg-white/10 backdrop-blur-md border border-white/15 text-white px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  Detalles reflejantes
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8 md:p-10 flex flex-col">
              <span className="text-[11px] tracking-[0.3em] uppercase text-metal-400">
                {product.tag ?? "Playera técnica"}
              </span>
              <h3 className="mt-2 font-display text-4xl sm:text-5xl leading-none text-white">
                {product.name}
              </h3>
              <p className="mt-3 text-sm text-metal-300 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl text-metallic">
                  {CURRENCY_FORMATTER.format(price)}
                </span>
                <span className="text-xs text-metal-400">
                  MXN · envío no incluido
                </span>
              </div>

              <div className="mt-7 space-y-6">
                <div>
                  <label className="text-[11px] tracking-widest uppercase text-metal-300">
                    Color
                  </label>
                  <div className="mt-2 flex gap-2">
                    {product.variants.colors.map((c) => {
                      const active = color === c;
                      return (
                        <button
                          key={c}
                          onClick={() => setColor(c)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm transition-all ${
                            active
                              ? "border-white bg-white text-ink-950 font-semibold"
                              : "border-white/15 text-metal-200 hover:border-white/40"
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded-full border ${
                              c === "black"
                                ? "bg-black border-white/30"
                                : "bg-white border-black/30"
                            }`}
                          />
                          {COLOR_LABEL[c]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] tracking-widest uppercase text-metal-300">
                    Corte
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {product.variants.cuts.map((k) => {
                      const active = cut === k;
                      return (
                        <button
                          key={k}
                          onClick={() => setCut(k)}
                          className={`px-4 py-2.5 rounded-xl border text-sm transition-all ${
                            active
                              ? "border-white bg-white/10 text-white font-semibold"
                              : "border-white/10 text-metal-200 hover:border-white/30"
                          }`}
                        >
                          {CUT_LABEL[k]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {product.hasReflective && (
                  <label className="flex items-start gap-3 p-3.5 rounded-xl border border-white/10 bg-ink-800/60 cursor-pointer hover:border-white/25 transition-colors">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                        reflective
                          ? "bg-white border-white text-ink-950"
                          : "border-white/30 text-transparent"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <input
                      type="checkbox"
                      checked={reflective}
                      onChange={(e) => setReflective(e.target.checked)}
                      className="sr-only"
                    />
                    <span className="flex-1">
                      <span className="flex items-center gap-2 text-sm text-white font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-metal-200" />
                        Detalles reflejantes
                      </span>
                      <span className="block text-xs text-metal-400 mt-0.5">
                        +{CURRENCY_FORMATTER.format(product.reflectiveExtra)} ·
                        Resalta en fotos y entrenamientos nocturnos
                      </span>
                    </span>
                  </label>
                )}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fba57] text-white px-6 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-xl shadow-black/50"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir por WhatsApp
              </a>
              <p className="mt-3 text-center text-[11px] text-metal-400">
                Te contactamos para confirmar talla y envío.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
