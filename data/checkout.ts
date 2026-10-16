import { Seller } from "@/types/checkout";

export const sellers: Seller[] = [
  {
    id: "lumea",
    name: "Lumea Jewellery",
    logo: "/products/lumea.jpg",
    rating: 4.8,
    reviews: "1.2K reviews",
    city: "Istanbul, Türkiye",
    items: [
      {
        id: "i1",
        name: "Solitaire Diamond Ring",
        variant: "18K Gold · Size: 52",
        price: 28500,
        qty: 1,
        image: "/products/solitaire-ring.jpg",
      },
      {
        id: "i2",
        name: "Malachite Clover Necklace",
        variant: "18K Gold",
        price: 12800,
        qty: 1,
        image: "/products/malachite-necklace.jpg",
      },
    ],
    options: [
      { id: "yurtici", name: "Yurtiçi Kargo – Standart", price: 75, days: "3 – 5 business days", insured: false },
      { id: "aras", name: "Aras Kargo – Hızlı", price: 120, days: "1 – 2 business days", insured: true },
      { id: "ups", name: "UPS Türkiye – Ekspres", price: 180, days: "1 – 2 business days", insured: true },
    ],
  },
  {
    id: "aurora",
    name: "Aurora Jewellery",
    logo: "/products/aurora.jpg",
    rating: 4.7,
    reviews: "860 reviews",
    city: "Ankara, Türkiye",
    items: [
      {
        id: "i3",
        name: "Pearl Drop Earrings",
        variant: "18K Gold",
        price: 9750,
        qty: 1,
        image: "/products/pearl-earrings.jpg",
      },
    ],
    options: [
      { id: "mng", name: "MNG Kargo – Standart", price: 65, days: "3 – 5 business days", insured: false },
      { id: "aras2", name: "Aras Kargo – Hızlı", price: 110, days: "1 – 3 business days", insured: true },
      { id: "ups2", name: "UPS Türkiye – Ekspres", price: 170, days: "1 – 2 business days", insured: true },
    ],
  },
];

export const DISCOUNT = 2000;
