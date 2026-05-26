"use client";

import Logo from "@/components/common/Logo";
import Navbar from "./Navbar";
import Button from "@/components/common/Button";
import { useState } from "react";

export type PageId = "accueil" | "produits" | "a-propos" | "contact";

type HeaderProps = {
  setPage: (page: PageId) => void;
};

export default function Header({ setPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    setPage(page);
    setIsOpen(false); // ferme le menu mobile après un clic
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
          <Button>Panier (0)</Button>
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
          <Button>Panier (0)</Button>
        </div>
      )}
    </header>
  );
}
