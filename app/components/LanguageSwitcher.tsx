"use client";

import { useTranslation } from "react-i18next";
// Removed Image import as we are no longer using flags

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("common");

  const currentLocale = i18n.language;
  const nextLocale = currentLocale === "pt-BR" ? "en" : "pt-BR";
  const buttonText = currentLocale === "pt-BR" ? "EN" : "PT-BR"; // Display the next language to switch to

  function switchLanguage() {
    i18n.changeLanguage(nextLocale);
  }

  return (
    <button
      onClick={switchLanguage}
      className="fixed top-4 right-4 z-50 bg-[#62C8B8] hover:bg-[#01967F] text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-full shadow-lg transition-colors duration-300 ease-in-out text-base lg:text-xl"
      aria-label="Switch language"
    >
      {buttonText}
    </button>
  );
}