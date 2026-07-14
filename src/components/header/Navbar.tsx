"use client";

import "@/i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/providers/ThemeProvider";
import { useTranslation } from "react-i18next";

type NavbarProps = {
  mobile?: boolean;
};

const liens = [
  { href: "/", key: "home" },
  { href: "/produits", key: "products" },
  { href: "/a-propos", key: "about" },
  { href: "/contact", key: "contact" },
];

export default function Navbar({ mobile = false }: NavbarProps) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const { t } = useTranslation("header");

  const isDark = theme === "dark";

  return (
    <nav aria-label="Navigation principale">
      <ul
        className={
          mobile
            ? `flex flex-col gap-4 text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`
            : `flex items-center gap-6 text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`
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
              {t(lien.key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
