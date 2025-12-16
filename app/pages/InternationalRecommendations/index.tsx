import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

export const InternationalRecommendations: React.FC = () => {
  const { goToPositioning, goToVortexScheme } = useRoutes();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem] !pb-[3rem]">
        <div className="flex flex-col h-full w-fit lg:w-full text-black text-[1rem] lg:text-[1rem] items-start justify-center gap-[1rem] px-6 lg:px-5">
          <p>{t("Pages.InternationalRecommendations.Recommendations.1")}</p>

          <p>{t("Pages.InternationalRecommendations.Recommendations.2")}</p>

          <b className="mt-[1rem]">
            {t("Pages.InternationalRecommendations.Situations.Title")}
          </b>

          <ol className="flex flex-col w-full justify-center gap-[0.5rem] list-decimal">
            <li>{t("Pages.InternationalRecommendations.Situations.1")}</li>
            <li>{t("Pages.InternationalRecommendations.Situations.2")}</li>
          </ol>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToPositioning} label={t("Navigation.GoBack")} />

        <Button onClick={goToVortexScheme} label={t("Navigation.Next")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
