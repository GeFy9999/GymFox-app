export default function Contact() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">
          Contactez-nous
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-800 mb-2">
                Courriel
              </h2>
              <p className="text-slate-600">info@gymfox.ca</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-800 mb-2">
                Téléphone
              </h2>
              <p className="text-slate-600">(613) 555-0199</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-800 mb-2">Adresse</h2>
              <p className="text-slate-600">
                801 promenade de l&#39;Aviation
                <br />
                Ottawa, ON K1K 4R3
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h2 className="text-lg font-bold text-slate-800 mb-4">
              Envoyez-nous un message
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400"
              />
              <input
                type="email"
                placeholder="Votre courriel"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400"
              />
              <textarea
                placeholder="Votre message"
                rows={5}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400"
              />
              <button
                type="button"
                className="rounded-md bg-orange-600 px-6 py-2 text-sm font-medium text-white hover:bg-orange-500 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
