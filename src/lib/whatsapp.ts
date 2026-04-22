import { BRAND, COLOR_LABEL, CUT_LABEL, type ProductColor, type ProductCut } from '../data/constants';

export interface OrderMessageInput {
  name: string;
  color: ProductColor;
  cut: ProductCut;
  reflective: boolean;
}

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encoded}`;
}

export function buildOrderMessage({ name, color, cut, reflective }: OrderMessageInput): string {
  return `Hola, quiero la playera ${name}, color ${COLOR_LABEL[color]}, corte ${CUT_LABEL[cut]}, reflejante ${reflective ? 'sí' : 'no'}.`;
}

export function buildGeneralMessage(): string {
  return `Hola ${BRAND.name}, me interesa ver sus diseños disponibles.`;
}
