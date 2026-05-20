import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-orange-300 transition-colors">
      <div className="relative h-48 bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="font-medium text-slate-800">{name}</p>
        <p className="text-orange-600 font-semibold mt-1">{price}</p>
      </div>
    </div>
  );
}
