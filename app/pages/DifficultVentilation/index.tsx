import { useTranslation } from "react-i18next";

import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

import { flowChartOptionsButtonsClassName } from "..";

export const DifficultVentilation: React.FC = () => {
  const {
    goToRapidSequenceInduction,
    goToDifficultIntubation,
    goToAwakeIntubation,
  } = useRoutes();
  const { t } = useTranslation("common");

  const onClickOnYes = () => {
    localStorage.setItem("isDifficultVentilation", "true");
    goToAwakeIntubation();
  };

  const onClickOnNo = () => {
    localStorage.setItem("isDifficultVentilation", "false");
    goToRapidSequenceInduction();
  };

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <FlowChartQuestion question={t("DifficultVentilation.Question")} />

        <div className="flex flex-row justify-center items-center lg:gap-[3rem] gap-[1.5rem]">
          <Button
            className={flowChartOptionsButtonsClassName}
            onClick={onClickOnYes}
            label={t("General.Yes")}
          />

          <Button
            className={flowChartOptionsButtonsClassName}
            onClick={onClickOnNo}
            label={t("General.No")}
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToDifficultIntubation}
          label={t("Navigation.GoBack")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
