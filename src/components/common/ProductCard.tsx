"use client";

import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  onSelect: () => void;
};

export default function ProductCard({
  name,
  price,
  image,
  onSelect,
}: ProductCardProps) {
  return (
    <div
      onClick={onSelect}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-72 bg-slate-50 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 border-t border-slate-100">
        <p className="font-semibold text-slate-800 text-base mb-1">{name}</p>
        <div className="flex items-center justify-between">
          <p className="text-orange-500 font-bold text-lg">
            {price.toFixed(2)} $
          </p>
          <span className="text-xs text-slate-400 group-hover:text-orange-500 transition-colors font-medium">
            Voir →
          </span>
        </div>
      </div>
    </div>
  );
}
