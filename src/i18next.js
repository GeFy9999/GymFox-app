"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { loadResources } from "@/utils/loadResources";

const { resources, namespaces } = loadResources();

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "fr",
      defaultNS: "header",
      ns: namespaces,
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
