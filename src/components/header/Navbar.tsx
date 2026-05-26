import { PageId } from "./index";

type NavbarProps = {
  mobile?: boolean;
  setPage: (page: PageId) => void;
};

const liens: { id: PageId; label: string }[] = [
  { id: "accueil", label: "Accueil" },
  { id: "produits", label: "Produits" },
  { id: "a-propos", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ mobile = false, setPage }: NavbarProps) {
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
          <li key={lien.id}>
            <button
              type="button"
              onClick={() => setPage(lien.id)}
              className="transition-colors hover:text-orange-700"
            >
              {lien.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
