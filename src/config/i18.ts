import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import common_es from "@/public/locales/es/translations.json";
import common_en from "@/public/locales/en/translations.json";

function resolveBrowserLanguage(): "en" | "es" {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const candidates = navigator.languages?.length
    ? [...navigator.languages]
    : [navigator.language];

  for (const locale of candidates) {
    const code = locale.split("-")[0]?.toLowerCase();
    if (code === "es") return "es";
    if (code === "en") return "en";
  }

  return "en";
}

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: resolveBrowserLanguage(),
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  resources: {
    es: {
      common: common_es,
    },
    en: {
      common: common_en,
    },
  },
});

export default i18next;
