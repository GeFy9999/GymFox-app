import Image from "next/image";
import { ShieldCheck, Zap, Leaf } from "lucide-react";

export default function APropos() {
  return (
    <main className="bg-white">
      {/* Hero section */}
      <section className="relative text-white py-24 px-6 overflow-hidden min-h-[400px] flex items-center">
        <Image
          src="/A-proposHero.webp"
          alt="À propos GymFox"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4">
            Notre histoire
          </p>
          <h1 className="text-5xl font-black mb-6 max-w-2xl leading-tight">
            Conçu par des athlètes,
            <br />
            <span className="text-orange-500">pour des athlètes</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            GymFox est née de la frustration de ne pas trouver des accessoires
            de qualité à prix abordable. Nous avons décidé de changer ça.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titre: "Qualité sans compromis",
                description:
                  "Chaque produit est testé en conditions réelles avant d'être mis en vente. On ne vend pas ce qu'on ne porterait pas soi-même.",
                icon: ShieldCheck,
              },
              {
                titre: "Performance accessible",
                description:
                  "Les accessoires premium ne devraient pas être réservés aux athlètes professionnels. Notre mission : démocratiser la performance.",
                icon: Zap,
              },
              {
                titre: "Durabilité",
                description:
                  "On conçoit pour durer. Nos produits sont fabriqués avec des matériaux résistants pensés pour des milliers d'entraînements.",
                icon: Leaf,
              },
            ].map((valeur) => {
              const Icon = valeur.icon;
              return (
                <div
                  key={valeur.titre}
                  className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
                >
                  <Icon className="text-orange-500 mb-4" size={36} />
                  <h3 className="font-bold text-slate-900 text-lg mb-3">
                    {valeur.titre}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fondateurs */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
            L'équipe fondatrice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nom: "Alexandre Tremblay",
                role: "Co-fondateur & CEO",
                bio: "Ancien athlète de compétition, Alexandre a fondé GymFox après 10 ans de frustration avec les accessoires disponibles sur le marché.",
              },
              {
                nom: "Marie Côté",
                role: "Co-fondatrice & Directrice Produit",
                bio: "Coach certifiée et passionnée de design, Marie supervise le développement de chaque produit pour garantir performance et esthétique.",
              },
              {
                nom: "Kevin Nguyen",
                role: "Co-fondateur & CTO",
                bio: "Ingénieur de formation et passionné de technologie, Kevin a bâti la plateforme GymFox pour offrir la meilleure expérience d'achat possible.",
              },
            ].map((personne) => (
              <div key={personne.nom} className="text-center">
                <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">
                  {personne.nom}
                </h3>
                <p className="text-orange-500 text-sm font-semibold mb-3">
                  {personne.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {personne.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
            GymFox en chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { chiffre: "12 000+", label: "Clients satisfaits" },
              { chiffre: "4.8/5", label: "Note moyenne" },
              { chiffre: "48h", label: "Livraison moyenne" },
              { chiffre: "2019", label: "Année de fondation" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-orange-500 mb-2">
                  {stat.chiffre}
                </p>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
