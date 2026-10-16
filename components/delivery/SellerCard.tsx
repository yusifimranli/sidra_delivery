"use client";

import { useState } from "react";
import Image from "next/image";
import { BadgeCheck, CalendarDays, ChevronUp, MapPin, Star } from "lucide-react";
import { Seller } from "@/types/checkout";
import { money } from "@/lib/format";
import DeliveryOptionRow from "./DeliveryOptionRow";

type Props = {
  seller: Seller;
  selectedId: string;
  onSelect: (optionId: string) => void;
};

export default function SellerCard({ seller, selectedId, onSelect }: Props) {
  const [open, setOpen] = useState(true);
  const selected = seller.options.find((o) => o.id === selectedId)!;

  return (
    <section className="rounded-2xl border border-neutral-200 bg-[#fffdfa] p-5">
      {/* Satıcı başlığı */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={seller.logo}
            alt={seller.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-serif text-lg">{seller.name}</h2>
              <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                <BadgeCheck size={12} /> Verified Seller
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                {seller.rating} ({seller.reviews})
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {seller.city}
              </span>
            </div>
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm text-neutral-700">
          {seller.items.length} items
          <ChevronUp size={16} className={`transition ${open ? "" : "rotate-180"}`} />
        </button>
      </div>

      {open && (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {/* Məhsullar */}
          <div className="space-y-3">
            {seller.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-neutral-500">{item.variant}</p>
                  <p className="mt-1 text-sm font-semibold">{money(item.price)}</p>
                </div>
                <div className="rounded-lg border border-neutral-200 px-3 py-1 text-sm">
                  − &nbsp;{item.qty}&nbsp; +
                </div>
              </div>
            ))}
          </div>

          {/* Çatdırılma seçimləri */}
          <div>
            <p className="mb-2 text-sm font-semibold">Choose Delivery Method</p>
            <div className="space-y-3">
              {seller.options.map((option) => (
                <DeliveryOptionRow
                  key={option.id}
                  option={option}
                  groupName={`delivery-${seller.id}`}
                  checked={option.id === selectedId}
                  onSelect={() => onSelect(option.id)}
                />
              ))}
            </div>
          </div>

          {/* Təxmini tarix */}
          <div className="flex items-center gap-3 rounded-xl bg-[#fdeee2] p-4 text-sm md:col-span-2">
            <CalendarDays size={20} className="text-[#c9895d]" />
            <div>
              <p className="font-medium">Estimated delivery for this seller</p>
              <p className="text-neutral-600">
                {selected.days} ({money(selected.price)})
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
