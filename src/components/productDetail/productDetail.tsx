"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/common/Button";
import products from "@/utils/products.json";

type Product = (typeof products)[0];

type CartItem = {
  product: Product;
  variantLabel: string;
  variantImage: string;
  price: number;
  quantity: number;
};

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const currentPrice = selectedVariant?.price ?? product.price;
  const currentImage = (selectedVariant as any)?.image ?? product.image;

  const handleAddToCart = () => {
    const stored = localStorage.getItem("cartItems");
    const cartItems: CartItem[] = stored ? JSON.parse(stored) : [];

    const existing = cartItems.find(
      (i) =>
        i.product.name === product.name &&
        i.variantLabel === selectedVariant?.label,
    );

    if (existing) {
      existing.quantity = Math.min(10, existing.quantity + quantity);
    } else {
      cartItems.push({
        product,
        variantLabel: selectedVariant?.label ?? "",
        variantImage: currentImage,
        price: currentPrice,
        quantity,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <section className="min-h-screen px-4 py-12 bg-white">
      {justAdded && (
        <div className="fixed top-20 right-4 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium">
          ✓ Produit ajouté au panier
        </div>
      )}
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-10">
        <div className="relative w-full md:w-1/2 h-[500px] bg-slate-100 rounded-xl overflow-hidden">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6 justify-center relative">
          <button
            onClick={() => router.back()}
            className="self-start text-sm text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            ← Retour
          </button>

          <h1 className="text-3xl font-bold text-slate-800">{product.name}</h1>

          <p className="text-orange-600 font-semibold text-2xl">
            {currentPrice.toFixed(2)} $
          </p>

          <p className="text-slate-600 text-base leading-relaxed border-t border-b border-slate-100 py-3">
            {product.description}
          </p>

          <div>
            <p className="text-sm font-medium text-slate-600 mb-2 capitalize">
              {selectedVariant?.type} :
            </p>
            <div className="flex gap-2 flex-wrap">
              {product.variants.map((variant) => (
                <button
                  key={variant.label}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors cursor-pointer
                    ${
                      selectedVariant?.label === variant.label
                        ? "bg-orange-600 text-white border-orange-600"
                        : "border-slate-300 text-slate-700 hover:border-orange-400"
                    }`}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-md border border-slate-300 text-slate-700 hover:border-orange-400 transition-colors cursor-pointer"
            >
              −
            </button>
            <span className="font-medium text-slate-800 w-6 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-md border border-slate-300 text-slate-700 hover:border-orange-400 transition-colors cursor-pointer"
            >
              +
            </button>
          </div>

          <Button onClick={handleAddToCart}>Ajouter au panier</Button>
        </div>
      </div>
    </section>
  );
}
