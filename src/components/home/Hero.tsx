import Button from "@/components/common/Button";

export default function Hero() {
  return (
    <section
      className="relative text-white py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/GymBG.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-3">
          Nouvelle collection
        </p>
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Conçu pour performer
          <br />
          fait pour durer
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
