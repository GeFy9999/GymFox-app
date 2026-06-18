"use client";

import { useForm } from "react-hook-form";

type DonneesFormulaire = {
  nom: string;
  courriel: string;
  message: string;
};

export default function FormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DonneesFormulaire>({
    mode: "onBlur",
    defaultValues: {
      nom: "",
      courriel: "",
      message: "",
    },
  });

  const onSubmit = (donnees: DonneesFormulaire) => {
    console.log("Données envoyées :", donnees);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400"
          {...register("nom", {
            required: "Champ requis",
            minLength: { value: 2, message: "Minimum 2 caractères" },
          })}
        />
        {errors.nom && (
          <p className="text-sm text-red-600">{errors.nom.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <input
          type="email"
          placeholder="Votre courriel"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400"
          {...register("courriel", {
            required: "Champ requis",
            pattern: {
              value:
                /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
              message: "Courriel invalide",
            },
          })}
        />
        {errors.courriel && (
          <p className="text-sm text-red-600">{errors.courriel.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <textarea
          placeholder="Votre message"
          rows={5}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 placeholder:text-slate-400"
          {...register("message", {
            required: "Champ requis",
            minLength: { value: 10, message: "Minimum 10 caractères" },
          })}
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-orange-600 px-6 py-2 text-sm font-medium text-white hover:bg-orange-500 transition-colors"
      >
        Envoyer
      </button>
    </form>
  );
}
