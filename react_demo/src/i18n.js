import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Name": "Name",
          "Address" : "Address",
          "City" : "City",
          "Region" : "Region",
          "Country" : "Country",
          "Birthday" : "Birthday",
        }
      },
      es: {
        translations: {
            "Name": "Nombre",
            "Address" : "Habla a",
            "City" : "Ciudad",
            "Region" : "Región",
            "Country" : "País",
            "Birthday" : "Cumpleaños",
        }
      },
      fr: {
        translations: {
            "Name": "Nom",
            "Address" : "Adresse",
            "City" : "Ville",
            "Region" : "Région",
            "Country" : "Pays",
            "Birthday" : "Anniversaire",
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
