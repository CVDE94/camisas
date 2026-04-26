import { ArrowDown, MessageCircle } from "lucide-react";
import { BRAND, HERO_IMAGE } from "../data/constants";
import { buildGeneralMessage, buildWhatsAppUrl } from "../lib/whatsapp";

import { AscntLogo } from "./AscntLogo";



export function Hero() {
  const whatsappUrl = buildWhatsAppUrl(buildGeneralMessage());

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden w-full "
    >

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Entrenamiento de gym"
          className="w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col mx-auto items-center">
          {/*  Hero Content */}
          <div className="relative  mx-auto flex flex-row z-10 max-w-7xl  mx-auto px-5 sm:px-8 w-full pt-24 pb-16">
            <div className="w-1/2  animate-slide-up">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.2em] text-metal-200 uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-metallic bg-metal-200" />
                Drop 01 — {BRAND.tagline}
              </span>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight">
                <span className="block text-white">Entrena</span>
                <span className="block text-metallic">como titán.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-metal-200 max-w-xl leading-relaxed">
                Playeras diseñadas para atletas que no se detienen. Cortes precisos,
                telas técnicas y detalles reflejantes que marcan la diferencia.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-ink-950 px-6 py-3.5 rounded-full font-semibold hover:bg-metal-100 transition-all hover:-translate-y-0.5 shadow-xl shadow-black/40"
                >
                  Ver diseños
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pedir por WhatsApp
                </a>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
                {[
                  { n: "+2K", l: "Atletas activos" },
                  { n: "6", l: "Diseños únicos" },
                  { n: "24h", l: "Respuesta" },
                ].map((s) => (
                  <div key={s.l} className="border-l border-white/10 pl-3 sm:pl-4">
                    <div className="font-display text-2xl sm:text-3xl text-metallic">
                      {s.n}
                    </div>
                    <div className="text-[11px] sm:text-xs uppercase tracking-widest text-metal-400 mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
      
            <AscntLogo className="w-1/3 m-auto" animated  />
        
          </div>

          <p className="  text-metal-300 text-xs uppercase w-full flex flex-col items-center gap-2 animate-bounce" >
                <span>Baja para ver mas</span>
                <ArrowDown className="w-4 h-4" />
          </p>
      </div>
    </section>
  );
}
