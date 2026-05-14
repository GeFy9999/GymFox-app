const categories = ["Sangles", "Ceintures", "Gants", "Bandes"];

export default function Categories() {
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
              className="bg-slate-100 rounded-lg p-6 text-center hover:bg-orange-50 hover:border hover:border-orange-200 transition-colors cursor-pointer"
            >
              <p className="font-medium text-slate-800">{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
