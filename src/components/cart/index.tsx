"use client";

import Image from "next/image";
import type { CartItem } from "@/app/layout";

type Props = {
  items: CartItem[];
  onClose: () => void;
  onRemove: (productName: string, variantLabel: string) => void;
};

export default function Cart({ items, onClose, onRemove }: Props) {
  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <section className="min-h-screen px-4 py-12 bg-slate-50">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={onClose}
          className="text-sm text-slate-500 hover:text-slate-800 transition-colors mb-8 block cursor-pointer"
        >
          ← Continuer mes achats
        </button>

        <h1 className="text-3xl font-bold text-slate-800 mb-8">Mon panier</h1>

        {items.length === 0 ? (
          <p className="text-slate-500">Votre panier est vide.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 flex gap-4 items-center shadow-sm"
              >
                <div className="relative w-24 h-24 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={item.variantImage}
                    alt={item.product.name}
                    fill
                    className="object-cover p-2"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800">
                    {item.product.name}
                  </p>
                  <p className="text-sm text-slate-500">{item.variantLabel}</p>
                  <p className="text-orange-600 font-semibold mt-1">
                    {item.price.toFixed(2)} $
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-slate-700 font-medium">x{item.quantity}</p>
                  <button
                    onClick={() =>
                      onRemove(item.product.name, item.variantLabel)
                    }
                    className="text-slate-400 hover:text-red-500 transition-colors text-lg font-bold"
                    aria-label="Supprimer cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-xl p-6 mt-4 shadow-sm">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-slate-800">Total</p>
                <p className="text-xl font-bold text-orange-600">
                  {total.toFixed(2)} $
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
