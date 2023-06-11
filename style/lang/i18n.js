// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./translation.en.json"
import translationKo from "./translation.ko.json"

const resources = {
  en: {
    translation: translationEn
  },
  ko: {
    translation: translationKo
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true,
});
export default i18n;
