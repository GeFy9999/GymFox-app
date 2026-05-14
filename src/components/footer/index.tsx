import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-3">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Accessoires de gym premium pour athlètes sérieux.
            </p>
          </div>
          <div>
            <p className="font-medium mb-3">Navigation</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Accueil</li>
              <li>Produits</li>
              <li>À propos</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-3">Contact</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>info@gymfox.ca</li>
              <li>Montréal, Québec</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 GymFox. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
