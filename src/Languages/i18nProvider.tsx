import polyglotI18nProvider from "ra-i18n-polyglot";
import en from "ra-language-english";
import englishMessages from "ra-language-english";

// @ts-ignore
import vietnameseMessages from "ra-language-vietnamese";

//import { required } from "react-admin";
//  const vietnameseMessages = required("ra-language-vietnamese");

const translations: any = {
  vi: vietnameseMessages,
  en: englishMessages,
};
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  "en", // default locale
  [
    { locale: "en", name: "English" },

    { locale: "vi", name: "VietNamese" },
  ]
);
