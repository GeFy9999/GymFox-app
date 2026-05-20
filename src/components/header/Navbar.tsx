import Link from "next/link";
import navItems from "@/utils/navItems.json";

type NavbarProps = {
  mobile?: boolean;
};

export default function Navbar({ mobile = false }: NavbarProps) {
  return (
    <nav aria-label="Navigation principale">
      <ul
        className={
          mobile
            ? "flex flex-col gap-4 text-sm font-medium text-slate-700"
            : "flex items-center gap-6 text-sm font-medium text-slate-700"
        }
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="transition-colors hover:text-orange-700"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
