import Image from "next/image";
import { ArrowRight, Lock, Package, ShieldCheck } from "lucide-react";
import { Seller } from "@/types/checkout";
import { DISCOUNT } from "@/data/checkout";
import { money } from "@/lib/format";

type Props = {
  sellers: Seller[];
  selected: Record<string, string>; // satıcının id-si -> kargonun id-si
};

// Aşağıdakı 3 təminat bloku
const guarantees = [
  { icon: Lock, title: "Secure Checkout", text: "PCI-DSS compliant" },
  { icon: Package, title: "Free & Easy Returns", text: "Within 14 days" },
  { icon: ShieldCheck, title: "Your Data is Protected", text: "We never share your information" },
];

export default function OrderSummary({ sellers, selected }: Props) {
  // bütün satıcıların məhsulları bir siyahıda
  const allItems = sellers.flatMap((s) => s.items.map((item) => ({ ...item, seller: s.name })));

  // hər satıcının seçilmiş kargosunun qiyməti
  const fees = sellers.map((s) => ({
    seller: s.name,
    fee: s.options.find((o) => o.id === selected[s.id])?.price ?? 0,
  }));

  const subtotal = allItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = fees.reduce((sum, f) => sum + f.fee, 0);
  const total = subtotal + delivery - DISCOUNT;
  const tax = Math.round((total * 20) / 120); // KDV 20% qiymətə daxildir

  return (
    <aside className="h-fit rounded-2xl border border-neutral-200 bg-[#fffdfa] p-6 lg:sticky lg:top-6">
      <h3 className="font-serif text-xl">Order Summary</h3>
      <p className="text-xs text-neutral-500">
        {allItems.length} items from {sellers.length} sellers
      </p>

      {/* Məhsullar */}
      <ul className="mt-4 space-y-3">
        {allItems.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <Image
              src={item.image}
              alt={item.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div className="flex-1 text-sm">
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-neutral-500">{item.seller}</p>
            </div>
            <p className="text-sm font-semibold">{money(item.price)}</p>
          </li>
        ))}
      </ul>

      {/* Hesablama */}
      <dl className="mt-5 space-y-2 border-t border-neutral-200 pt-4 text-sm">
        <div className="flex justify-between">
          <dt>Item Subtotal ({allItems.length} items)</dt>
          <dd>{money(subtotal)}</dd>
        </div>
        {fees.map((f) => (
          <div key={f.seller} className="flex justify-between">
            <dt>
              Delivery Fee <span className="text-neutral-500">({f.seller})</span>
            </dt>
            <dd>{money(f.fee)}</dd>
          </div>
        ))}
        <div className="flex justify-between text-green-700">
          <dt className="underline">Discount</dt>
          <dd>-{money(DISCOUNT)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Tax (KDV 20%, included)</dt>
          <dd>{money(tax)}</dd>
        </div>
      </dl>

      {/* Yekun */}
      <div className="mt-4 flex items-baseline justify-between border-t border-neutral-200 pt-4">
        <span className="font-serif text-lg">
          Total <span className="text-xs text-neutral-500">(incl. tax)</span>
        </span>
        <span className="font-serif text-2xl">{money(total)}</span>
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-medium text-white hover:bg-neutral-800">
        Continue to Payment <ArrowRight size={16} />
      </button>

      <ul className="mt-6 space-y-4 text-sm">
        {guarantees.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-3">
            <Icon size={20} className="text-[#c9895d]" />
            <div>
              <p className="font-medium">{title}</p>
              <p className="text-xs text-neutral-500">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
