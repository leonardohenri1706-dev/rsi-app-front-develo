import { useTranslation } from "react-i18next";
import { useState } from "react";

import { BaseLayout, Button, FlowChartQuestion } from "@/app/components";
import { useRoutes } from "@/app/hooks";

import { flowChartOptionsButtonsClassName } from "..";

const contentStyle = {
  background: "url(/laringoscope.png) no-repeat center center",
  backgroundSize: "contain",
};

export const AfterAnesthesicInduction: React.FC = () => {
  const { goBack, goToLaryngealMask } = useRoutes();
  const [showText, setShowText] = useState(false);
  const { t } = useTranslation("common");

  const onClick = () => setShowText(true);

  return (
    <BaseLayout.Root>
      <BaseLayout.Content
        className="!justify-between !h-[80%]"
        style={contentStyle}
      >
        <p className="bg-[#90C7BEAA] rounded-[1rem] p-2 lg:text-[1rem] text-[0.8rem]">
          {t("Pages.AfterAnesthesicInduction.Content")}
        </p>

        <FlowChartQuestion
          question={t("Pages.AfterAnesthesicInduction.FlowChartQuestion")}
        />

        <div
          className="flex flex-row justify-center items-start gap-[1rem] lg:gap-[3rem]"
          style={{ paddingBottom: showText ? "0" : "2rem" }}
        >
          <div className="flex flex-col justify-around items-center gap-[0.5rem]">
            <Button
              className={`${flowChartOptionsButtonsClassName} opacity-[0.7]`}
              onClick={onClick}
              label={t("General.Yes")}
            />

            {showText && (
              <p>{t("Pages.AfterAnesthesicInduction.Respirator")}</p>
            )}
          </div>

          <Button
            className={`${flowChartOptionsButtonsClassName} opacity-[0.7]`}
            onClick={goToLaryngealMask}
            label={t("General.No")}
          />
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goBack} label={t("Navigation.GoBack")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
