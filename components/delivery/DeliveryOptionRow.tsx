import { CheckCircle2, Clock3, Package } from "lucide-react";
import { DeliveryOption } from "@/types/checkout";
import { money } from "@/lib/format";

type Props = {
  option: DeliveryOption;
  groupName: string;
  checked: boolean;
  onSelect: () => void;
};

export default function DeliveryOptionRow({ option, groupName, checked, onSelect }: Props) {
  return (
    <label
      className={`block cursor-pointer rounded-xl border p-4 transition ${
        checked
          ? "border-[#e8b48f] bg-[#fdeee2]"
          : "border-neutral-200 bg-white hover:border-neutral-300"
      }`}
    >
      <div className="flex items-start gap-3">
        <input
          type="radio"
          name={groupName}
          checked={checked}
          onChange={onSelect}
          className="mt-1 h-4 w-4 accent-black"
        />

        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold">{option.name}</p>
              <p className="text-xs text-neutral-500">{option.days}</p>
            </div>
            <p className="text-sm font-semibold">{money(option.price)}</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="flex items-center gap-1 text-neutral-600">
              <Package size={14} /> Tracking available
            </span>

            {option.insured ? (
              <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-green-700">
                <CheckCircle2 size={12} /> Insurance confirmed
              </span>
            ) : (
              <span className="flex items-center gap-1 rounded-full bg-orange-100 px-2 py-0.5 text-orange-700">
                <Clock3 size={12} /> Coverage verification pending
              </span>
            )}
          </div>
        </div>
      </div>
    </label>
  );
}
