import { useTranslation } from "react-i18next";

import { RapidSequenceInductionTips } from "@/app/components/RapidSequenceInductionTips";
import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const RapidSequenceInductionDosesAndTips: React.FC = () => {
  const { goToCervicalAccessVideo, goToSummaryVideo } = useRoutes();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black text-[0.9rem] md:text-[1rem] lg:text-[1rem] items-center justify-center">
          <div className="flex flex-col w-1/2 h-full justify-center gap-[2rem]">
            <span>
              <b>{t("RapidSequenceInductionTips.Doses.Title")}</b>
              <p>{t("RapidSequenceInductionTips.Doses.1")}</p>
              <p>{t("RapidSequenceInductionTips.Doses.2")}</p>
              <p>{t("RapidSequenceInductionTips.Doses.3")}</p>
            </span>

            <span>
              <b>{t("RapidSequenceInductionTips.Alternatives.Title")}</b>
              <p>{t("RapidSequenceInductionTips.Alternatives.1")}</p>
              <p>{t("RapidSequenceInductionTips.Alternatives.2")}</p>
              <p>{t("RapidSequenceInductionTips.Alternatives.3")}</p>
            </span>
          </div>

          <RapidSequenceInductionTips />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToCervicalAccessVideo}
          label={t("Navigation.GoBack")}
        />

        <Button onClick={goToSummaryVideo} label={t("Navigation.Next")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
