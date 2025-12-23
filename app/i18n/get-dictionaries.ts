import "server-only";

const dictionaries = {
    en: () => import("../../public/locales/en/common.json").then((module) => module.default),
    "pt-BR": () => import("../../public/locales/pt-BR/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    if (dictionaries[locale as keyof typeof dictionaries]) {
        return dictionaries[locale as keyof typeof dictionaries]();
    }
    return dictionaries["pt-BR"]();
};
