import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

export const WhatAboutAnesthetists: React.FC = () => {
  const { goToSummaryVideo, goToAboutTheAuthor } = useRoutes();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black text-[1rem] items-center justify-center lg:px-4 px-5">
          <p className="text-black">
            {t("Pages.WhatAboutAnesthetists.Content")}
          </p>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToSummaryVideo} label={t("Navigation.GoBack")} />

        <Button onClick={goToAboutTheAuthor} label={t("Navigation.Next")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
