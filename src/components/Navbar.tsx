import { useEffect, useState } from "react";
import { MessageCircle, } from "lucide-react";
import { BRAND, LOGO_IMAGE } from "../data/constants";
import { buildGeneralMessage, buildWhatsAppUrl } from "../lib/whatsapp";
import { AscntIcon } from "./AscntIcon";


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(buildGeneralMessage());

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">


          <AscntIcon className="w-14 h-14 sm:w-10 sm:h-10 object-contain object-center transition-transform duration-300 group-hover:scale-110" />

          
          <span className="font-display tracking-widest text-xl text-metallic">
            {BRAND.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#catalogo"
            className="text-sm text-metal-200 hover:text-white transition-colors"
          >
            Diseños
          </a>
          <a
            href="#nosotros"
            className="text-sm text-metal-200 hover:text-white transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            className="text-sm text-metal-200 hover:text-white transition-colors"
          >
            Contacto
          </a>
        </nav>
        {/**
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-white text-ink-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-metal-100 transition-all hover:-translate-y-0.5 shadow-lg shadow-black/40"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-white"
            aria-label="Abrir menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
         */}
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-lg animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <a
              onClick={() => setOpen(false)}
              href="#catalogo"
              className="text-metal-200 py-1"
            >
              Diseños
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#nosotros"
              className="text-metal-200 py-1"
            >
              Nosotros
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#contacto"
              className="text-metal-200 py-1"
            >
              Contacto
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-ink-950 px-4 py-2.5 rounded-full text-sm font-semibold mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
