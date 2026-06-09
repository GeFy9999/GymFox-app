"use client";

import Image from "next/image";
import type { CartItem } from "@/app/layout";

type Props = {
  items: CartItem[];
  onClose: () => void;
  onRemove: (productName: string, variantLabel: string) => void;
  onUpdateQuantity: (
    productName: string,
    variantLabel: string,
    delta: number,
  ) => void;
  onNavigate: () => void;
};

export default function Cart({
  items,
  onClose,
  onRemove,
  onUpdateQuantity,
  onNavigate,
}: Props) {
  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <section className="min-h-screen px-4 py-12 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={onClose}
          className="text-sm text-slate-500 hover:text-slate-800 transition-colors mb-8 block"
        >
          ← Continuer mes achats
        </button>

        <h1 className="text-3xl font-bold text-slate-800 mb-8">Mon panier</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16">
            <p className="text-slate-500">Votre panier est vide.</p>
            <button
              onClick={onNavigate}
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Explorer les produits
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Items gauche */}
            <div className="flex flex-col gap-4 flex-1 max-w-2xl mx-auto w-full">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 flex gap-4 items-center shadow-sm"
                >
                  <div className="relative w-24 h-24 bg-slate-100 rounded-lg overflow-hidden shrink-0 p-2">
                    <Image
                      src={item.variantImage}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">
                      {item.product.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {item.variantLabel}
                    </p>
                    <p className="text-orange-600 font-semibold mt-1">
                      {item.price.toFixed(2)} $
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.name,
                            item.variantLabel,
                            -1,
                          )
                        }
                        className="w-7 h-7 rounded-md border border-slate-300 text-slate-700 hover:border-orange-400 transition-colors"
                      >
                        −
                      </button>
                      <span className="font-medium text-slate-800 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.name,
                            item.variantLabel,
                            1,
                          )
                        }
                        disabled={item.quantity >= 10}
                        className="w-7 h-7 rounded-md border border-slate-300 transition-colors"
                        style={{
                          borderColor: item.quantity >= 10 ? "#e2e8f0" : "",
                          color: item.quantity >= 10 ? "#cbd5e1" : "#334155",
                          cursor:
                            item.quantity >= 10 ? "not-allowed" : "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        onRemove(item.product.name, item.variantLabel)
                      }
                      className="text-slate-400 hover:text-red-500 transition-colors text-lg font-bold"
                      aria-label="Supprimer"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Résumé droite */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 w-full lg:w-80 lg:sticky lg:top-8">
              <h2 className="text-lg font-bold text-slate-800">
                Résumé de la commande
              </h2>

              <div className="flex justify-between text-slate-600">
                <p>Sous-total</p>
                <p>{total.toFixed(2)} $</p>
              </div>

              <div className="flex justify-between text-slate-600">
                <p>Livraison</p>
                <p>Gratuite</p>
              </div>

              <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
                <p className="text-lg font-bold text-slate-800">Total</p>
                <p className="text-xl font-bold text-orange-600">
                  {total.toFixed(2)} $
                </p>
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-md transition-colors">
                Passer la commande
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
