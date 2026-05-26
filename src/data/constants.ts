export type ProductColor = "black" | "white" | "green" | "blue" | "beige";
export type ProductCut = "S" | "M" | "L" | "XL" | "XXL";

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  hasReflective: boolean;
  reflectiveExtra: number;
  images: string[];
  variants: {
    colors: ProductColor[];
    cuts: ProductCut[];
  };
  tag?: string;
}

export const BRAND = {
  name: "ASCNT",
  tagline: "Forjado para el esfuerzo",
  whatsappNumber: "3310279057",
  instagramUrl: "https://www.instagram.com/ascnt.collection",
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
    id: "spartanBlack",
    name: "Spartan Black",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: false,
    reflectiveExtra: 0,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785079/Camisas/spartanBlack_front_xhyowv.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785079/Camisas/spartanBlack_back_cluyid.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "spartanBeige",
    name: "Spartan Beige",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: false,
    reflectiveExtra: 0,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785079/Camisas/spartanBeige_front_glvdeh.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785076/Camisas/spartanBeige_back_zdjpno.png",
    ],
    variants: {
      colors: ["beige"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "baki",
    name: "Baki",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: false,
    reflectiveExtra: 0,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785064/Camisas/baki_back_jtvi9o.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785059/Camisas/baki_front_hhuysh.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "goku",
    name: "Goku",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785062/Camisas/goku_back_mhjfmz.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785068/Camisas/goku_reflex_pnaaht.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785063/Camisas/goku_front_pzqfec.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "vegeta",
    name: "Vegeta",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785088/Camisas/vegeta_back_ztfgi2.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785091/Camisas/vegeta_reflex_dwg8l2.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785089/Camisas/vegeta_front_jtp5zj.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "tojiFushiguro",
    name: "Toji Fushiguro",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785089/Camisas/tojiFushiguro_back_bqglzs.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785062/Camisas/17_eplvcf.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "majinBuu",
    name: "Majin Buu",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785071/Camisas/majinBuu_back_argudx.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785069/Camisas/majinBuu_reflex_t0wjrf.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785071/Camisas/majinBuu_front_ptvxw2.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "gojo",
    name: "Gojo",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785060/Camisas/gojo_back_ylfquq.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785066/Camisas/gojo_reflex_mo7ddu.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785062/Camisas/17_eplvcf.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "tojiArms",
    name: "Toji",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785086/Camisas/tojiArms_back_gs30la.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785083/Camisas/tojiArms_reflex_md1wyx.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785063/Camisas/21_mtucjs.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "nezuko",
    name: "Nezuko",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785072/Camisas/nezuko_back_iwyjnb.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785075/Camisas/nezuko_reflex_xadukh.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785073/Camisas/nezuko_front_eyej6s.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
  },
  {
    id: "sukuna",
    name: "Sukuna",
    description: "Corte atlético. Pensada para movimiento intenso.",
    basePrice: 320,
    hasReflective: true,
    reflectiveExtra: REFLECTIVE_EXTRA,
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785081/Camisas/sukuna_reflex_tlrgah.png",
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785079/Camisas/sukuna_front_bxpt1h.png",
    ],
    variants: {
      colors: ["black"],
      cuts: ["S", "M", "L", "XL", "XXL"],
    },
    tag: "",
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
  "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778891642/logo_Aa_im9cxw.svg";

export const FOOTER_IMAGE =
  "https://res.cloudinary.com/dogmbd7ub/image/upload/v1776957264/logo_wibgto.svg";

export const TALLA =
  "https://res.cloudinary.com/dogmbd7ub/image/upload/v1779687297/Camisas/Tallas_Individualesv4_yaghd5.png";

export const COLOR_LABEL: Record<ProductColor, string> = {
  black: "Negro",
  white: "Blanco",
  green: "Verde",
  blue: "Azul",
  beige: "Beige",
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
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778803862/Camisas/Offer01_fbcspt.png",
    title: "PAQUETE JUJUTSU KAISEN",
    description: "Selecciona cualquier prenda de la coleccion y llevate",
    badge: "OFERTA 3 X $900",
    link: "#catalogo",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778803862/Camisas/Offer03_tfbxvk.png",
    title: "PAQUETE DRAGON BALL",
    description: "Selecciona cualquier prenda de la coleccion y llevate",
    badge: "OFERTA 3 X $900",
    link: "#catalogo",
  },
];

export const OFFERS = [
  {
    id: 1,
    title: "PAQUETE JUJUTSU KAISEN",
    description:
      "Llevate 3 playeras de nuestra colección Jujutsu Kaisen por solo",
    basePrice: 900,
    discount: "Promo",
    // Si tiene una sola imagen, puedes ponerla como string o como un arreglo de 1 elemento
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785072/Camisas/1_u7bc7w.png",
    ],
    link: "https://wa.me/tu_numero?text=Quiero%20el%20Pack%20Gym",
  },
  {
    id: 2,
    title: "PAQUETE DRAGON BALL",
    description: "Llevate 3 playeras de nuestra colección Dragon Ball por solo",
    basePrice: 900,
    discount: "Promo",
    // Al poner VARIAS imágenes, el modal mostrará las miniaturas automáticamente
    images: [
      "https://res.cloudinary.com/dogmbd7ub/image/upload/v1778785057/Camisas/3_isy151.png",
    ],
    link: "https://wa.me/tu_numero",
  },
];
