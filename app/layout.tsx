import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "./providers";
import LanguageSwitcher from "./components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSI app - Manejo de vias aéreas",
  description:
    "Aplicativo para auxiliar em manejo de vias aéreas com Rápida Sequência de Intubação",
  creator: "Plínio Holanda",
  authors: [{ name: "Rômulo Iorio", url: "https://github.com/romulo-iorio" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <LanguageSwitcher />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
