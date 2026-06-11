import products from "@/utils/products.json";
import ProductDetail from "@/components/productDetail/productDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.name === decodeURIComponent(slug));

  if (!product) {
    return (
      <p className="text-center text-red-600 py-20">Produit introuvable</p>
    );
  }

  return <ProductDetail product={product} />;
}
