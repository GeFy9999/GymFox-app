import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  description: string;
  priority?: boolean;
};

export default function ProductCard({
  name,
  price,
  image,
  description,
  priority = false,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-md border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 cursor-pointer">
      <div className="relative h-84 bg-slate-50 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <p className="font-bold text-slate-900 text-base mb-1">{name}</p>
        <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <p className="text-orange-500 font-bold text-lg">
            {price.toFixed(2)} $
          </p>
          <span className="text-xs text-slate-400 group-hover:text-orange-500 transition-colors font-medium">
            Voir →
          </span>
        </div>
      </div>
    </div>
  );
}
