"use client";

import "@/i18next";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/providers/ThemeProvider";
import Logo from "@/components/common/Logo";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { t, i18n } = useTranslation("header");
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const currentLang = i18n.language?.split("-")[0] ?? "fr";

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "fr" ? "en" : "fr");
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
    <header
      className={`border-b ${isDark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Navbar />

          <div className="flex items-center gap-3 ml-6 pl-6 border-l border-slate-200">
            <Link
              href="/panier"
              aria-label="Voir le panier"
              className="relative p-2 text-slate-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-slate-700 text-yellow-400 hover:bg-slate-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
              aria-label={t("darkMode")}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors ${
                isDark
                  ? "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {currentLang === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-transform ${isDark ? "bg-slate-200" : "bg-slate-800"} ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-opacity ${isDark ? "bg-slate-200" : "bg-slate-800"} ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-transform ${isDark ? "bg-slate-200" : "bg-slate-800"} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div
          className={`md:hidden border-t px-4 py-4 flex flex-col gap-4 ${isDark ? "border-slate-700" : "border-slate-200"}`}
        >
          <Navbar mobile />
          <div className="flex items-center gap-3">
            <Link
              href="/panier"
              className={`flex items-center gap-2 transition-colors font-medium hover:text-orange-500 ${isDark ? "text-slate-300" : "text-slate-700"}`}
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

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-slate-700 text-yellow-400 hover:bg-slate-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
              aria-label={t("darkMode")}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors ${
                isDark
                  ? "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {currentLang === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
