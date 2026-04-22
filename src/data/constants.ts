export type ProductColor = 'black' | 'white';
export type ProductCut = 'normal' | 'oversize';

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  hasReflective: boolean;
  reflectiveExtra: number;
  images: {
    default: string;
    black: string;
    white: string;
  };
  variants: {
    colors: ProductColor[];
    cuts: ProductCut[];
  };
  tag?: string;
}

export const BRAND = {
  name: 'IRON WEAR',
  tagline: 'Forjado para el esfuerzo',
  whatsappNumber: '5215555555555',
  instagramUrl: 'https://instagram.com/',
  email: 'hola@ironwear.mx',
  currency: 'MXN',
};

export const CURRENCY_FORMATTER = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: BRAND.currency,
  maximumFractionDigits: 0,
});

export const REFLECTIVE_EXTRA = 80;

export const PRODUCTS: Product[] = [
  {
    id: 'iron-core',
    name: 'Iron Core Tee',
    description: 'Tela transpirable con corte atlético. Pensada para movimiento intenso.',
    basePrice: 499,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: {
      default: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200',
      black: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200',
      white: 'https://images.pexels.com/photos/1092874/pexels-photo-1092874.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    variants: { colors: ['black', 'white'], cuts: ['normal', 'oversize'] },
    tag: 'Top ventas',
  },
  {
    id: 'titan-oversize',
    name: 'Titan Oversize',
    description: 'Silueta amplia, caída perfecta y costuras reforzadas para hipertrofia.',
    basePrice: 599,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: {
      default: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200',
      black: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200',
      white: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    variants: { colors: ['black', 'white'], cuts: ['normal', 'oversize'] },
    tag: 'Nuevo',
  },
  {
    id: 'forge-reflect',
    name: 'Forge Reflect',
    description: 'Detalles reflejantes que destacan en cualquier entrenamiento nocturno.',
    basePrice: 549,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: {
      default: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1200',
      black: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1200',
      white: 'https://images.pexels.com/photos/6456209/pexels-photo-6456209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    variants: { colors: ['black', 'white'], cuts: ['normal', 'oversize'] },
  },
  {
    id: 'beast-mode',
    name: 'Beast Mode Tee',
    description: 'Ajuste performance con mezcla premium de algodón y elastano.',
    basePrice: 479,
    hasReflective: false,
    reflectiveExtra: 0,
    images: {
      default: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1200',
      black: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1200',
      white: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    variants: { colors: ['black', 'white'], cuts: ['normal', 'oversize'] },
  },
  {
    id: 'steel-athlete',
    name: 'Steel Athlete',
    description: 'Diseño minimalista con acabado metálico en logo frontal.',
    basePrice: 529,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: {
      default: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200',
      black: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200',
      white: 'https://images.pexels.com/photos/6456306/pexels-photo-6456306.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    variants: { colors: ['black', 'white'], cuts: ['normal', 'oversize'] },
  },
  {
    id: 'shadow-pump',
    name: 'Shadow Pump',
    description: 'Mangas cortadas estratégicamente, ideal para días de brazo.',
    basePrice: 459,
    hasReflective: false,
    reflectiveExtra: 0,
    images: {
      default: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1200',
      black: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1200',
      white: 'https://images.pexels.com/photos/6550838/pexels-photo-6550838.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    variants: { colors: ['black', 'white'], cuts: ['normal', 'oversize'] },
    tag: 'Limitado',
  },
];

export const GALLERY_IMAGES = [
  'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

export const HERO_IMAGE =
  'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const COLOR_LABEL: Record<ProductColor, string> = {
  black: 'Negro',
  white: 'Blanco',
};

export const CUT_LABEL: Record<ProductCut, string> = {
  normal: 'Normal',
  oversize: 'Oversize',
};
