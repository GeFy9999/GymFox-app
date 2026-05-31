import Button from "@/components/common/Button";
import Image from "next/image";
import type { PageId } from "@/app/layout";

type Props = {
  onNavigate: (page: PageId) => void;
};

export default function Hero({ onNavigate }: Props) {
  return (
    <section className="relative text-white py-24 px-4 overflow-hidden min-h-[500px]">
      <Image
        src="/GymBG.webp"
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-3">
          Nouvelle collection
        </p>
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Conçu pour performer
          <br />
          fait pour durer
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-xl">
          Découvrez notre collection d'accessoires premium pour atteindre vos
          objectifs et repousser vos limites.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => onNavigate("produits")}>
            Acheter maintenant
          </Button>
          <Button variant="outline" onClick={() => onNavigate("a-propos")}>
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}
