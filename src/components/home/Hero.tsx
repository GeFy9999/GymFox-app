"use client";

import Link from "next/link";
import Button from "@/components/common/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden min-h-[620px] flex items-center">
      <Image
        src="/GymBG.webp"
        alt="Hero background"
        fill
        className="object-cover object-center scale-105"
        priority
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-32 w-full">
        <span className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Nouvelle collection
        </span>
        <h1 className="text-6xl font-black mb-6 leading-[1.05] max-w-2xl">
          Conçu pour
          <span className="text-orange-500"> performer</span>
          <br />
          fait pour durer
        </h1>
        <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed">
          Découvrez notre collection d'accessoires premium pour atteindre vos
          objectifs et repousser vos limites.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/produits">
            <Button>Acheter maintenant</Button>
          </Link>
          <Link href="/a-propos">
            <Button variant="outline">En savoir plus</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
