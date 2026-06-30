"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type DonneesFormulaire = {
  nom: string;
  courriel: string;
  message: string;
};

export default function FormHook() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    setIsSubmitting(true);

    const templateParams = {
      name: donnees.nom,
      email: donnees.courriel,
      message: donnees.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          console.log("E-mail envoyé avec succès !");
          setIsSuccess(true);
          reset();
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'e-mail :", error);
          setIsSubmitting(false);
        },
      );
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-semibold text-slate-800 mb-2">
          Merci de nous avoir contactés !
        </p>
        <p className="text-sm text-slate-600">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

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
        disabled={isSubmitting}
        className="rounded-md bg-orange-600 px-6 py-2 text-sm font-medium text-white hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}
