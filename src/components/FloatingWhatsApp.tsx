import { MessageCircle } from "lucide-react";
import { buildGeneralMessage, buildWhatsAppUrl } from "../lib/whatsapp";

// ==========================================
// SECCIÓN: Botón Flotante de WhatsApp
// ==========================================
// ¿Qué hace este componente?
// Crea un botón de chat que se queda "pegado" en la esquina de la pantalla,
// persiguiendo al usuario sin importar cuánto baje (scroll) en la página.
//
// Lógica principal:
// Reutiliza tus funciones de configuración para generar el enlace con tu
// número y un mensaje predeterminado.
//
// Estructura visual:
// 1. Contenedor ancla (<a>): Usa la clase "fixed" para despegarse del diseño
//    normal y anclarse abajo a la derecha (bottom-5 right-5). La clase "z-40"
//    asegura que flote por encima de las fotos o textos de tu catálogo.
// 2. Efecto de pulso (Primer <span>): Es un círculo secundario que usa la
//    clase "animate-ping" para expandirse y desaparecer, dando la ilusión
//    de que el botón está latiendo o llamando la atención.
// 3. Botón principal (Segundo <span>): Es el círculo sólido donde va el
//    icono. Utiliza el color verde exacto de la marca WhatsApp (#25D366).
// ==========================================

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
