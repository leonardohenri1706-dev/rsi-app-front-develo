"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation("common");

  const currentLocale = i18n.language;
  const nextLocale = currentLocale === "pt-BR" ? "en" : "pt-BR";
  const flagSrc =
    currentLocale === "pt-BR"
      ? "/locales/pt-BR/flag.svg"
      : "/locales/en/flag.svg";
  const alt = currentLocale === "pt-BR" ? "Português" : "English";

  function switchLanguage() {
    i18n.changeLanguage(nextLocale);
  }

  return (
    <button
      onClick={switchLanguage}
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
      aria-label="Switch language"
    >
      <Image src={flagSrc} alt={alt} width={32} height={32} />
    </button>
  );
}
