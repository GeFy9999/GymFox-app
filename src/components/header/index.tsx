"use client";

import Logo from "@/components/common/Logo";
import Navbar from "./Navbar";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export type PageId = "accueil" | "produits" | "a-propos" | "contact";

type HeaderProps = {
  setPage: (page: PageId) => void;
  cartCount: number;
  onCartOpen: () => void;
};

export default function Header({
  setPage,
  cartCount,
  onCartOpen,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div
          onClick={() => handleNavigate("accueil")}
          className="cursor-pointer"
        >
          <Logo />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Navbar setPage={handleNavigate} />
          <button
            onClick={onCartOpen}
            className="relative p-2 text-slate-700 hover:text-orange-500 transition-colors"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 px-4 py-4 flex flex-col gap-4">
          <Navbar setPage={handleNavigate} mobile />
          <button
            onClick={onCartOpen}
            className="relative flex items-center gap-2 text-slate-700 hover:text-orange-500 transition-colors font-medium"
          >
            <ShoppingCart size={20} />
            Panier
            {cartCount > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
}
