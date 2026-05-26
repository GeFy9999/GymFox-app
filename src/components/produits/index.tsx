import ProductCard from "@/components/common/ProductCard";
import products from "@/utils/products.json";

export default function Produits() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Nos produits</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
