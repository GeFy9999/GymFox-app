import Logo from "@/components/common/Logo";
import { PageId } from "@/components/header";

type FooterProps = {
  setPage: (page: PageId) => void;
};

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Accessoires de gym premium pour athlètes sérieux.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => setPage("accueil")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPage("produits")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Produits
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPage("a-propos")}
                  className="hover:text-orange-500 transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPage("contact")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>info@gymfox.ca</li>
              <li>801 promenade de l'Aviation Ottawa, ON K1K 4R3</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 GymFox. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
