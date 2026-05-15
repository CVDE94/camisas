import { MessageCircle } from "lucide-react";
import { buildGeneralMessage, buildWhatsAppUrl } from "../lib/whatsapp";

export function FloatingWhatsApp() {
  const url = buildWhatsAppUrl(buildGeneralMessage());

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <span className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1fba57] text-white flex items-center justify-center shadow-2xl shadow-black/50 transition-all group-hover:scale-105">
        <MessageCircle className="w-6 h-6" strokeWidth={2.2} />
      </span>
    </a>
  );
}
