"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // path starts with /pt-BR or /en usually due to middleware
  const segments = pathname.split("/");
  const currentLocale = segments[1] || "pt-BR";

  // Logic to toggle
  const nextLocale = currentLocale === "pt-BR" ? "en" : "pt-BR";
  const buttonText = currentLocale === "pt-BR" ? "EN" : "PT-BR";

  // Reconstruct path with new locale
  // segments[0] is empty string (before first /)
  // segments[1] is locale
  const newPath = `/${nextLocale}${pathname.substring(currentLocale.length + 1)}`;

  return (
    <Link href={newPath} passHref>
      <button
        className="fixed top-4 right-4 z-50 bg-[#62C8B8] hover:bg-[#01967F] text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-full shadow-lg transition-colors duration-300 ease-in-out text-base lg:text-xl"
        aria-label={`Switch to ${nextLocale === "pt-BR" ? "Portuguese" : "English"}`}
      >
        {buttonText}
      </button>
    </Link>
  );
}