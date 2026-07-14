"use client";

import "@/i18next";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Button from "@/components/common/Button";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation("home");

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
          {t("badge")}
        </span>
        <h1 className="text-6xl font-black mb-6 leading-[1.05] max-w-2xl">
          {t("hero_title_1")}
          <span className="text-orange-500"> {t("hero_title_2")}</span>
          <br />
          {t("hero_title_3")}
        </h1>
        <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed">
          {t("hero_description")}
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/produits">
            <Button>{t("btn_shop")}</Button>
          </Link>
          <Link href="/a-propos">
            <Button variant="outline">{t("btn_about")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
