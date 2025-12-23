"use client";

import { ChakraProvider } from "@chakra-ui/react";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { useMemo } from "react";
import PageContextProvider from "../store/PageContext";

export function ClientProviders({
    children,
    locale,
    dictionary,
}: {
    children: React.ReactNode;
    locale: string;
    dictionary: Record<string, any>;
}) {
    const i18n = useMemo(() => {
        const i18nInstance = i18next.createInstance();
        i18nInstance
            .use(initReactI18next)
            .init({
                lng: locale,
                resources: {
                    [locale]: {
                        common: dictionary,
                    },
                },
                fallbackLng: "pt-BR",
                interpolation: {
                    escapeValue: false,
                },
            });
        return i18nInstance;
    }, [locale, dictionary]);

    return (
        <I18nextProvider i18n={i18n}>
            <PageContextProvider title="RSI App">
                <ChakraProvider>{children}</ChakraProvider>
            </PageContextProvider>
        </I18nextProvider>
    );
}
