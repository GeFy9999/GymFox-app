import FormHook from "@/components/contact/FormHook";

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
            <FormHook />
          </div>
        </div>
      </div>
    </section>
  );
}
