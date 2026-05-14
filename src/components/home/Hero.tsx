import Button from "@/components/common/Button";

export default function Hero() {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-3">
          Nouvelle collection
        </p>
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Entraîne-toi
          <br />
          comme un renard
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-xl">
          Accessoires premium pour athlètes sérieux. Conçus pour performer,
          faits pour durer.
        </p>
        <div className="flex gap-4">
          <Button>Acheter maintenant</Button>
          <Button variant="outline">En savoir plus</Button>
        </div>
      </div>
    </section>
  );
}
