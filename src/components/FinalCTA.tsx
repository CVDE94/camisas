import { MessageCircle } from "lucide-react";
import { buildGeneralMessage, buildWhatsAppUrl } from "../lib/whatsapp";

export function FinalCTA() {
  const whatsappUrl = buildWhatsAppUrl(buildGeneralMessage());

  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-black" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(156,163,175,0.12) 0, transparent 40%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white">
          Listo para el <span className="text-metallic">próximo set.</span>
        </h2>
        <p className="mt-5 text-metal-300 text-base sm:text-lg max-w-xl mx-auto">
          Escríbenos por WhatsApp y te mandamos el catálogo completo con
          disponibilidad.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 bg-white text-ink-950 px-8 py-4 rounded-full font-semibold text-lg hover:bg-metal-100 transition-all hover:-translate-y-0.5 shadow-2xl shadow-black/60"
        >
          <MessageCircle className="w-5 h-5" />
          Pedir por WhatsApp
        </a>
      </div>
    </section>
  );
}
