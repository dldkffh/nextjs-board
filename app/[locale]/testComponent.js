"use client";

// import { useSelector, useDispatch } from "react-redux";
import { useTranslations } from "next-intl";

export default function Test() {
   // const isDarkTheme = useSelector((state) => state.bic.isDarkTheme);
   const t = useTranslations("Index");

   return (
      <>
         {t("title")}
         Home
      </>
   );
}
