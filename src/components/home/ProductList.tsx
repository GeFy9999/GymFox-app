"use client";

import Link from "next/link";
import products from "@/utils/products.json";
import ProductCard from "@/components/common/ProductCard";

type Props = {
  selectedCategory: string | null;
};

export default function FeaturedProducts({ selectedCategory }: Props) {
  const filtered = products.filter((p) =>
    selectedCategory ? p.category === selectedCategory : p.featured,
  );

  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-1">
              {selectedCategory ? "Filtré par" : "Sélection"}
            </p>
            <h2 className="text-3xl font-black text-slate-900">
              {selectedCategory ? selectedCategory : "Produits populaires"}
            </h2>
          </div>
          <p className="text-sm text-slate-400">
            {filtered.length} produit{filtered.length > 1 ? "s" : ""}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.name}
              href={`/produits/${encodeURIComponent(product.name)}`}
            >
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
