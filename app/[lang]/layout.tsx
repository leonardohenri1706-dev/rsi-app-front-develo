import "../globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ClientProviders } from "../components/ClientProviders";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { getDictionary } from "../i18n/get-dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "RSI app - Manejo de vias aéreas",
    description:
        "Aplicativo para auxiliar em manejo de vias aéreas com Rápida Sequência de Intubação",
    creator: "Plínio Holanda",
    authors: [{ name: "Rômulo Iorio", url: "https://github.com/romulo-iorio" }],
};

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "pt-BR" }];
}

export default async function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const dictionary = await getDictionary(lang);

    return (
        <html lang={lang}>
            <body className={inter.className}>
                <ClientProviders locale={lang} dictionary={dictionary}>
                    <LanguageSwitcher />
                    {children}
                </ClientProviders>
            </body>
        </html>
    );
}
