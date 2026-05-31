"use client";

type Props = {
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
};

export default function Categories({
  selectedCategory,
  onSelectCategory,
}: Props) {
  const categories = ["Sangles", "Haltères", "Gants", "Bandes"];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">
          Nos catégories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() =>
                onSelectCategory(selectedCategory === cat ? null : cat)
              }
              className={`rounded-lg p-6 text-center border transition-colors cursor-pointer
                ${
                  selectedCategory === cat
                    ? "bg-orange-50 border-orange-400"
                    : "bg-slate-100 border-transparent hover:bg-orange-50 hover:border-orange-200"
                }`}
            >
              <p className="font-medium text-slate-800">{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
