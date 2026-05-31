"use client";

import { useState } from "react";
import products from "@/utils/products.json";
import ProductCard from "@/components/common/ProductCard";
import ProductDetail from "@/components/productDetail/productDetail";

type Product = (typeof products)[0];

type Props = {
  onSelectProduct: (product: Product) => void;
  selectedCategory: string | null;
};

export default function FeaturedProducts({
  onSelectProduct,
  selectedCategory,
}: Props) {
  const filtered = products.filter((p) =>
    selectedCategory ? p.category === selectedCategory : p.featured,
  );

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">
          {selectedCategory ? selectedCategory : "Produits populaires"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
              onSelect={() => onSelectProduct(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
