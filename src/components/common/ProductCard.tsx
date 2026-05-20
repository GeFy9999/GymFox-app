type ProductCardProps = {
  name: string;
  price: string;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-brand/50 transition-colors">
      <div className="h-48 bg-slate-100 flex items-center justify-center">
        <span className="text-slate-400 text-sm">Image produit</span>
      </div>
      <div className="p-4">
        <p className="font-medium text-slate-800">{name}</p>
        <p className="text-brand font-semibold mt-1">{price}</p>
      </div>
    </div>
  );
}
