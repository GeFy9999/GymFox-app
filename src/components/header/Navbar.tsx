"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  mobile?: boolean;
};

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Produits" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ mobile = false }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigation principale">
      <ul
        className={
          mobile
            ? "flex flex-col gap-4 text-sm font-medium text-slate-700"
            : "flex items-center gap-6 text-sm font-medium text-slate-700"
        }
      >
        {liens.map((lien) => (
          <li key={lien.href}>
            <Link
              href={lien.href}
              className={`transition-colors hover:text-orange-500 cursor-pointer ${
                pathname === lien.href ? "text-orange-500 font-semibold" : ""
              }`}
            >
              {lien.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
