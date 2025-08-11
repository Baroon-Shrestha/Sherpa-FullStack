import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your translation JSON files
import en from "./Locales/en.json";
import ar from "./Locales/ar.json";
import ch from "./Locales/ch.json";

// Supported languages
const supportedLanguages = ["en", "ar", "ch"];
const currentLang = localStorage.getItem("i18nextLng");

// Force fallback if invalid language code is stored in localStorage
if (!supportedLanguages.includes(currentLang)) {
  localStorage.setItem("i18nextLng", "en");
}

// i18n configuration
i18n
  .use(LanguageDetector) // detects language from browser or localStorage
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    fallbackLng: "en", // fallback language

    load: "languageOnly", // load only language codes ("en", not "en-US")

    resources: {
      en: { translation: en },
      ar: { translation: ar },
      zh: { translation: ch },
    },

    detection: {
      order: ["localStorage", "querystring", "navigator"], // order to detect language
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"], // cache language choice in localStorage
    },

    interpolation: {
      escapeValue: false, // react escapes by default
    },

    react: {
      useSuspense: true, // wait for translations to load
    },
  });

export default i18n;
