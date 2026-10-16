"use client";

import { useState } from "react";
import { Truck, X } from "lucide-react";
import { sellers } from "@/data/checkout";
import Stepper from "./Stepper";
import SellerCard from "./SellerCard";
import OrderSummary from "./OrderSummary";

export default function DeliveryClient() {
  // hər satıcı üçün seçilmiş kargo (satıcının id-si -> kargonun id-si)
  const [selected, setSelected] = useState<Record<string, string>>({
    lumea: "yurtici",
    aurora: "mng",
  });
  const [showBanner, setShowBanner] = useState(true);

  return (
    <main className="mx-auto max-w-310 px-6 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="font-serif text-4xl">Delivery Method</h1>
          <p className="mt-2 max-w-md text-sm text-neutral-600">
            Choose your delivery options for each seller. Items from different sellers may arrive in separate shipments.
          </p>
        </div>
        <Stepper current={2} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          {/* Məlumat banneri */}
          {showBanner && (
            <div className="flex items-start gap-4 rounded-2xl bg-[#fdeee2] p-4">
              <Truck className="mt-1 text-[#c9895d]" />
              <div className="flex-1 text-sm">
                <p className="font-semibold">Your order contains items from {sellers.length} different sellers.</p>
                <p className="text-neutral-600">
                  Items will be shipped separately and may arrive on different dates. You can track each shipment individually.
                </p>
              </div>
              <button onClick={() => setShowBanner(false)} aria-label="Close">
                <X size={18} />
              </button>
            </div>
          )}

          {/* Satıcı kartları */}
          {sellers.map((seller) => (
            <SellerCard
              key={seller.id}
              seller={seller}
              selectedId={selected[seller.id]}
              onSelect={(optionId) => setSelected({ ...selected, [seller.id]: optionId })}
            />
          ))}
        </div>

        <OrderSummary sellers={sellers} selected={selected} />
      </div>
    </main>
  );
}
