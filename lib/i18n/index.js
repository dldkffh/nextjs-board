// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 번역 메시지를 가져올 수 있는 경로 설정
import translationEN from "@/public/locale/en/translation.json";
import commonEN from "@/public/locale/en/common.json";
import translationKR from "@/public/locale/ko/translation.json";

i18n.use(initReactI18next).init({
   lng: "en", // 기본 언어 설정
   resources: {
      en: {
         translation: translationEN,
         common: commonEN,
      },
      ko: {
         translation: translationKR,
      },
   },
   fallbackLng: "en", // 언어가 지정되지 않은 경우 기본 언어로 fallback
   interpolation: {
      escapeValue: false, // 리액트 컴포넌트 내에서 HTML 태그 사용 가능하도록 설정
   },
});

export default i18n;
