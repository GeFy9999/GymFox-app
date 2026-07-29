import products from "@/utils/products.json";
import ProductDetail from "@/components/productDetail/productDetail";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({
    slug: encodeURIComponent(p.name),
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.name === decodeURIComponent(slug));

  if (!product) {
    return (
      <p className="text-center text-red-600 py-20">Produit introuvable</p>
    );
  }

  const initialImage = (product.variants[0] as any)?.image ?? product.image;

  return (
    <>
      <link rel="preload" as="image" href={initialImage} />
      <ProductDetail product={product} />
    </>
  );
}
