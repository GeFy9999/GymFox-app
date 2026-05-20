import Link from "next/link";
import navItems from "@/utils/navItems.json";

export default function Navbar() {
  return (
    <nav aria-label="Navigation principale">
      <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
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
