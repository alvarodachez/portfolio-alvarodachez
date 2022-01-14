import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "../../translations/en/translations";
import { TRANSLATIONS_ES } from "../../translations/es/translations";
import Link from "next/link";
import { NavLink } from "./HeaderStyles";
export const TranslateService = () => {
  const changeLangEn = () => {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: {
          en: {
            translation: TRANSLATIONS_EN,
          },
          es: {
            translation: TRANSLATIONS_ES,
          },
        },
      });

    i18n.changeLanguage("en");
  };

  const changeLangEs = () => {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: {
          en: {
            translation: TRANSLATIONS_EN,
          },
          es: {
            translation: TRANSLATIONS_ES,
          },
        },
      });

    i18n.changeLanguage("es");
  };

  return (
    <>
      <li>
        <Link href="#">
          <NavLink>
            <span onClick={changeLangEs}>ES</span>
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#">
          <NavLink>
            <span onClick={changeLangEn}>EN</span>
          </NavLink>
        </Link>
      </li>
    </>
  );
};
