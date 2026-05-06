export type ProductColor = "black" | "white" | "green" | "blue" | "red";
export type ProductCut = "S" | "M" | "L" | "XL" | "XXL";

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  hasReflective: boolean;
  reflectiveExtra: number;
  images: {
    default: string;
  } & Partial<Record<ProductColor, string>>;
  variants: {
    colors: ProductColor[];
    cuts: ProductCut[];
  };
  tag?: string;
}

export const BRAND = {
  name: "ASCNT",
  tagline: "Forjado para el esfuerzo",
  whatsappNumber: "5213334665465",
  instagramUrl: "https://instagram.com/",
  email: "hola@ironwear.mx",
  currency: "MXN",
};

export const CURRENCY_FORMATTER = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: BRAND.currency,
  maximumFractionDigits: 0,
});

export const REFLECTIVE_EXTRA = 90;

export const PRODUCTS: Product[] = [
  {
    id: "iron-core",
    name: "Vegeta",
    description:
      "Tela transpirable con corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: {
      default:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890076/vegeta_ref_fqny2v.jpg",
      black:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890076/vegeta_nor_haxixs.jpg",
      white:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890076/vegeta_front_uttvui.jpg",
    },
    variants: {
      colors: ["black", "white", "green", "blue"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "Top ventas",
  },
  {
    id: "titan-oversize",
    name: "Toji Fujimon",
    description:
      "Silueta amplia, caída perfecta y costuras reforzadas para hipertrofia.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: {
      default:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890076/tojimon_nor_msmzvz.jpg",
      black:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890076/tojimon_ref_zc98ir.jpg",
      white:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890076/tojimon_front_bdoeha.jpg",
    },
    variants: {
      colors: ["black", "white", "green", "blue"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "Nuevo",
  },
  {
    id: "forge-reflect",
    name: "Gojo",
    description:
      "Detalles reflejantes que destacan en cualquier entrenamiento nocturno.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: {
      default:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890074/gojo_nor_vlypie.jpg",
      black:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890074/gojo_ref_bnqsxk.jpg",
      white:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890074/gojo_front_qwx6ts.jpg",
    },
    variants: {
      colors: ["black", "white", "green", "blue"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
  },
  {
    id: "beast-mode",
    name: "Majin Boo",
    description: "Ajuste performance con mezcla premium de algodón y elastano.",
    basePrice: 320,
    hasReflective: false,
    reflectiveExtra: 0,
    images: {
      default:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890074/majin_nor_hzmlbh.jpg",
      black:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890075/majin_ref_rcrn7h.jpg",
      white:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890074/majin_front_oowobi.jpg",
    },
    variants: {
      colors: ["black", "white", "green", "blue"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
  },
  {
    id: "steel-athlete",
    name: "Goku",
    description: "Diseño minimalista con acabado metálico en logo frontal.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: {
      default:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890075/goku_nor_afdpsa.jpg",
      black:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890075/goku_ref_l5qqdx.jpg",
      white:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890074/goku_front_mar0zk.jpg",
    },
    variants: {
      colors: ["black", "white", "green", "blue"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
  },
  {
    id: "shadow-pump",
    name: "Tji",
    description: "Mangas cortadas estratégicamente, ideal para días de brazo.",
    basePrice: 320,
    hasReflective: false,
    reflectiveExtra: 0,
    images: {
      default:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890076/tojicol_nor_trgugp.jpg",
      black:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890076/tojicol_ref_e8hvyr.jpg",
      white:
        "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776890075/tojicol_front_h3x26w.jpg",
    },
    variants: {
      colors: ["black", "white", "green", "blue"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "Limitado",
  },
];

export const GALLERY_IMAGES = [
  "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export const HERO_IMAGE =
  "https://res.cloudinary.com/dogmbd7ub/image/upload/v1777343880/42a5692e-a9e7-4438-a677-869682733a8d_z0j6vo.png";

export const LOGO_IMAGE =
  "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776957264/logo_wibgto.svg";

export const COLOR_LABEL: Record<ProductColor, string> = {
  black: "Negro",
  white: "Blanco",
  green: "Verde",
  blue: "Azul",
  red: "Red",
};

export const CUT_LABEL: Record<ProductCut, string> = {
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
  XXL: "XXL",
};

export const PROMO_OFFERS = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776436521/galery_00_cmklew.png",
    title: "DROP DE TEMPORADA",
    description:
      "Aprovecha un 20% de descuento en todas las playeras oversize.",
    badge: "OFERTA -20%",
    link: "#catalogo",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776436520/fondo_00_lklfya.png",
    title: "PACK DE ENTRENAMIENTO",
    description:
      "Lleva 3 playeras técnicas por el precio de 2. Edición limitada.",
    badge: "3x2 PROMO",
    link: "#catalogo",
  },
  // Puedes agregar cuantas ofertas quieras aquí...
];
