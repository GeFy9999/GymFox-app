"use client";

import "@/i18next";
import { useTranslation } from "react-i18next";

type Props = {
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
};

const categories = [
  { name: "Sangles" },
  { name: "Haltères" },
  { name: "Gants" },
  { name: "Bandes" },
];

export default function Categories({
  selectedCategory,
  onSelectCategory,
}: Props) {
  const { t } = useTranslation("home");

  return (
    <section className="py-14 px-6 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {t("categories_title")}
          </h2>
          {selectedCategory && (
            <button
              onClick={() => onSelectCategory(null)}
              className="text-sm text-orange-500 hover:text-orange-700 font-medium transition-colors"
            >
              {t("categories_clear")}
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(({ name }) => (
            <div
              key={name}
              onClick={() =>
                onSelectCategory(selectedCategory === name ? null : name)
              }
              className={`group rounded-xl p-6 text-center border-2 transition-all cursor-pointer
                ${
                  selectedCategory === name
                    ? "bg-orange-500 border-orange-500 shadow-lg shadow-orange-200"
                    : "bg-slate-50 border-slate-100 hover:border-orange-300 hover:shadow-md"
                }`}
            >
              <p
                className={`font-semibold text-base tracking-wide ${
                  selectedCategory === name ? "text-white" : "text-slate-700"
                }`}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
