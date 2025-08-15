import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./Locales/en.json";
import ar from "./Locales/ar.json";
import ch from "./Locales/ch.json"; // Chinese translations
import rs from "./Locales/rs.json"; // Russian (example)

const supportedLanguages = ["en", "ar", "zh", "rs"];

// Ensure stored language is valid
let currentLang = localStorage.getItem("i18nextLng");
if (!supportedLanguages.includes(currentLang)) {
  currentLang = "en";
  localStorage.setItem("i18nextLng", currentLang);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    load: "languageOnly",
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      zh: { translation: ch },
      rs: { translation: rs },
    },
    detection: {
      order: ["localStorage", "querystring", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // faster rendering for static JSON
    },
  });

export default i18n;
