import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </main>
  );
}
