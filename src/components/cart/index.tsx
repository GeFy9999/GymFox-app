"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/utils/products.json";

type Product = (typeof products)[0];

type CartItem = {
  product: Product;
  variantLabel: string;
  variantImage: string;
  price: number;
  quantity: number;
};

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  const saveItems = (updated: CartItem[]) => {
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const handleRemove = (productName: string, variantLabel: string) => {
    saveItems(
      items.filter(
        (i) =>
          !(i.product.name === productName && i.variantLabel === variantLabel),
      ),
    );
  };

  const handleUpdateQuantity = (
    productName: string,
    variantLabel: string,
    delta: number,
  ) => {
    saveItems(
      items
        .map((i) =>
          i.product.name === productName && i.variantLabel === variantLabel
            ? { ...i, quantity: Math.min(10, Math.max(0, i.quantity + delta)) }
            : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };

  return (
    <section className="min-h-screen px-4 py-12 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/produits"
          className="text-sm text-slate-500 hover:text-slate-800 transition-colors mb-8 block"
        >
          ← Continuer mes achats
        </Link>

        <h1 className="text-3xl font-bold text-slate-800 mb-8">Mon panier</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16">
            <p className="text-slate-500">Votre panier est vide.</p>
            <Link
              href="/produits"
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Explorer les produits
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex flex-col gap-4 flex-1 max-w-2xl mx-auto w-full">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 flex gap-4 items-center shadow-sm"
                >
                  <div className="relative w-24 h-24 bg-slate-100 rounded-lg overflow-hidden shrink-0 p-2">
                    <Link
                      key={item.product.name}
                      href={`/produits/${encodeURIComponent(item.product.name)}`}
                    >
                      <Image
                        src={item.variantImage}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </Link>
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
                          handleUpdateQuantity(
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
                          handleUpdateQuantity(
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
                        handleRemove(item.product.name, item.variantLabel)
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
