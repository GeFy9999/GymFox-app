"use client";

import "@/i18next";
import { useTranslation } from "react-i18next";
import Logo from "@/components/common/Logo";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { t, i18n } = useTranslation("header");

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  useEffect(() => {
    const updateCount = () => {
      const stored = localStorage.getItem("cartItems");
      if (stored) {
        const items = JSON.parse(stored);
        setCartCount(
          items.reduce((acc: number, i: any) => acc + i.quantity, 0),
        );
      } else {
        setCartCount(0);
      }
    };

    updateCount();
    window.addEventListener("storage", updateCount);
    window.addEventListener("cartUpdated", updateCount);
    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cartUpdated", updateCount);
    };
  }, []);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Navbar />
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors border border-slate-200 px-3 py-1 rounded-md"
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>
          <Link
            href="/panier"
            className="relative p-2 text-slate-700 hover:text-orange-500 transition-colors"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
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
          <Navbar mobile />
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors border border-slate-200 px-3 py-1 rounded-md w-fit"
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>
          <Link
            href="/panier"
            className="flex items-center gap-2 text-slate-700 hover:text-orange-500 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={20} />
            {t("cart")}
            {cartCount > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
}
