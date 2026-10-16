import { Heart, Search, ShoppingBag, User } from "lucide-react";

const links = ["Jewellery", "Collections", "Brands", "Gifts", "Stories"];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-[#fbf8f4]">
      <div className="mx-auto flex max-w-310 items-center gap-8 px-6 py-4">
        <div className="font-serif text-2xl tracking-[0.2em]">SIDRA</div>

        <nav className="hidden gap-6 text-sm text-neutral-700 lg:flex">
          {links.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </nav>

        <div className="hidden flex-1 items-center gap-2 rounded-full bg-[#f3ece4] px-4 py-2 text-sm text-neutral-500 md:flex">
          <Search size={16} /> Search for rings, necklaces, earrings...
        </div>

        <div className="ml-auto flex items-center gap-5 text-sm">
          <span className="hidden items-center gap-1 md:flex"><Heart size={16} /> Wishlist</span>
          <span className="hidden items-center gap-1 md:flex"><User size={16} /> Account</span>
          <span className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white">
            <ShoppingBag size={16} /> Cart (3)
          </span>
        </div>
      </div>
    </header>
  );
}
