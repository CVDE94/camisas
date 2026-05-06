import { useEffect, useMemo, useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
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
  const [cut, setCut] = useState<ProductCut>("S");
  const [reflective, setReflective] = useState(false);
  // 1. NUEVO ESTADO: Controla el destello inicial
  const [attention, setAttention] = useState(false);

  // 2. NUEVO EFECTO: Enciende el destello al abrir un producto y lo apaga 1.5 segundos después
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

    // Si la camisa tiene una galería específica, úsala.
    // Si no, agrupa la imagen principal y las variantes de color.
    const images = new Set([
      product.images[color] ?? product.images.default, // Primero la del color seleccionado
      product.images.default, // Luego la foto por defecto
      ...Object.values(product.images), // Y el resto de variantes
    ]);

    // Convertimos el Set (que elimina duplicados) de nuevo a una lista
    return Array.from(images).filter(Boolean) as string[];
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
            <div className="relative bg-black aspect-square md:aspect-auto md:min-h-[560px]">
              {/* Área izquierda de la ventana: Carrusel de Fotos   bg-green-900*/}
              <div className="w-full md:w-full relative min-h-[500px] md:min-h-[600px] shrink-0 bg-black rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl overflow-hidden">
                <ProductCarousel images={carouselImages} />
              </div>
              {reflective && (
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-xs bg-white/10 backdrop-blur-md border border-white/15 text-white px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  Detalles reflejantes
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8 md:p-10 flex flex-col">
              <span className="text-[11px] tracking-[0.3em] uppercase text-metal-400">
                {product.tag ?? "Playera"}
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
                <span className="text-xs text-metal-400">MXN</span>
              </div>

              <div className="mt-7 space-y-6">
                <div>
                  <label className="text-[11px] tracking-widest uppercase text-metal-300">
                    Color
                  </label>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {product.variants.colors.map((c) => {
                      // Eliminamos la constante 'active' ya que no la necesitamos
                      return (
                        <div
                          key={c}
                          // Dejamos las clases fijas: borde sutil (border-white/15) y texto gris claro (text-metal-200).
                          // Al no poner ningún "bg-...", el fondo se mantiene totalmente transparente.
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-sm text-metal-200"
                        >
                          {/**
                          <span
                            className={`w-3.5 h-3.5 rounded-full border ${
                              c === "black"
                                ? "bg-black border-white/30"
                                : "bg-white border-black/30"
                            }`}
                          />
                           */}
                          {COLOR_LABEL[c]}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] tracking-widest uppercase text-metal-300">
                    Talla
                  </label>
                  {/* Cambiamos grid por flex y le damos el ancho total (w-full) */}
                  <div className="mt-2 flex w-full gap-1.5 sm:gap-2">
                    {product.variants.cuts.map((k) => {
                      const active = cut === k;
                      return (
                        <button
                          key={k}
                          onClick={() => setCut(k)}
                          // 1. Agregamos "flex-1" para que todos midan lo mismo en 1 sola línea
                          // 2. Reducimos el padding a py-1.5 para hacerlos menos altos
                          // 3. Cambiamos text-sm a text-xs (para celular) y sm:text-sm (para computadora)
                          className={`flex-1 flex items-center justify-center py-1.5 rounded-lg border text-xs sm:text-sm transition-all ${
                            active
                              ? "border-white bg-white/10 text-white font-semibold"
                              : "border-white/10 text-metal-200 hover:border-white/30"
                          }`}
                        >
                          {/* Eliminamos el min-w-[40px] porque flex-1 ya se encarga de la uniformidad */}
                          <span className="text-center truncate">
                            {CUT_LABEL[k]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {product.hasReflective && (
                  <label
                    onClick={() => setReflective(!reflective)}
                    // Agregamos transition-all duration-700 para que el regreso a la normalidad sea súper suave y elegante
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-700 ${
                      attention
                        ? "scale-105 border-white bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        : reflective
                          ? "scale-100 border-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                          : "scale-100 border-white/10 bg-ink-800/60 hover:border-white/25 hover:bg-ink-800"
                    }`}
                  >
                    <span className="flex-1">
                      <span className="flex items-center gap-2 text-sm text-white font-medium">
                        {/* El ícono también reacciona: se vuelve más grande y blanco puro durante el destello */}
                        <Sparkles
                          className={`transition-all duration-700 ${
                            attention
                              ? "w-5 h-5 text-white animate-pulse"
                              : "w-4 h-4 text-metal-200"
                          }`}
                        />
                        Detalles reflejantes
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
