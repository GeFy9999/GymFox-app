import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ProductList from "@/components/home/ProductList";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Categories />
      <ProductList />
    </main>
  );
}
