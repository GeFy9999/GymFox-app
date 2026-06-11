import Link from "next/link";
import products from "@/utils/products.json";
import ProductCard from "@/components/common/ProductCard";

export default function Produits() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">
          Tous nos produits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
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
