export type DeliveryOption = {
  id: string;
  name: string;
  price: number;
  days: string; // məsələn "3 – 5 business days"
  insured: boolean; // true = Insurance confirmed
};

export type SellerItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  image: string;
};

export type Seller = {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviews: string;
  city: string;
  items: SellerItem[];
  options: DeliveryOption[];
};
