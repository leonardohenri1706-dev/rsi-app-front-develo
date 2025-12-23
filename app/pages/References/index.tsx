"use client";
import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

interface Reference {
  text: string;
  link?: string;
}

export const References: React.FC = () => {
  const { goToAboutTheAuthor } = useRoutes();
  const { t } = useTranslation("common");

  // As referências agora são carregadas do arquivo de tradução
  const references = t("Pages.References.Items", {
    returnObjects: true,
  }) as unknown as Reference[];

  const renderReferences = references.map((reference, index) => (
    <li key={index} className="mb-[1rem]">
      <p className="text-black">
        {reference.text}{" "}
        {reference.link && (
          <a
            className="text-blue-500 hover:underline"
            href={reference.link}
            target="_blank"
            rel="noreferrer"
          >
            {reference.link}
          </a>
        )}
      </p>
    </li>
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0.25rem] !pb-[1rem]">
        <ul className="h-full w-full text-black text-[0.75rem] items-center justify-center lg:px-4 px-5 list-decimal overflow-y-auto">
          {renderReferences}
        </ul>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToAboutTheAuthor} label={t("Navigation.GoBack")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
