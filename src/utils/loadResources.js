import headerEN from "@/locales/en/header.json";
import homeEN from "@/locales/en/home.json";
import commonEN from "@/locales/en/common.json";

import headerFR from "@/locales/fr/header.json";
import homeFR from "@/locales/fr/home.json";
import commonFR from "@/locales/fr/common.json";

export function loadResources() {
  const resources = {
    en: {
      header: headerEN,
      home: homeEN,
      common: commonEN,
    },
    fr: {
      header: headerFR,
      home: homeFR,
      common: commonFR,
    },
  };

  const namespaces = ["header", "home", "common"];

  return { resources, namespaces };
}
