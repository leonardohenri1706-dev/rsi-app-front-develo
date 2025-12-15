import { useTranslation } from "react-i18next";
import Image from "next/image";

import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const AboutTheAuthor: React.FC = () => {
  const { goToWhatAboutAnesthetists, goToReferences } = useRoutes();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem] !pb-[3rem]">
        <div className="flex flex-col h-full w-full text-black text-[1rem] gap-[1rem] items-center justify-center lg:px-4 px-5">
          <Image
            style={{ borderRadius: "1rem" }}
            alt="Foto do autor"
            src="/plinio.jpeg"
            height={200}
            width={400}
          />

          <div className="flex flex-col gap-[0.25em] items-center justify-center">
            <p className="text-black">{t("Pages.AboutTheAuthor.Name")}</p>
            <a
              className="text-blue-500 hover:underline"
              href="mailto:anesthesiaceara@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              anesthesiaceara@gmail.com
            </a>
          </div>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToWhatAboutAnesthetists}
          label={t("Navigation.GoBack")}
        />

        <Button onClick={goToReferences} label={t("Navigation.Next")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
