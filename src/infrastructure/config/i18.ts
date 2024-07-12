import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import common_es from "@/public/locales/es/translations.json";
import common_en from "@/public/locales/en/translations.json";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
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
