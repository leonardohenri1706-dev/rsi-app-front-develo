"use client";

import { useTranslation } from "react-i18next";
import React from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("common");

  const currentLocale = i18n.language;
  const nextLocale = currentLocale === "pt-BR" ? "en" : "pt-BR";

  // Button shows the target language to switch TO, or the current state?
  // User asked for "English Version" as option.
  // If I am in PT, I show "English Version".
  // If I am in EN, I show "Versão em Português" (or "PT").

  const label = currentLocale === "pt-BR" ? "English Version" : "Versão em Português";

  function switchLanguage() {
    i18n.changeLanguage(nextLocale);
  }

  return (
    <button
      onClick={switchLanguage}
      className={`
        fixed top-4 right-4 z-[1000]
        bg-white/90 backdrop-blur-sm
        border-2 border-slate-200
        text-slate-800 font-semibold text-sm
        px-4 py-2 rounded-full shadow-md
        hover:bg-slate-50 hover:border-slate-300
        transition-all active:scale-95
      `}
      aria-label={currentLocale === "pt-BR" ? "Switch to English" : "Mudar para Português"}
    >
      {label}
    </button>
  );
}
