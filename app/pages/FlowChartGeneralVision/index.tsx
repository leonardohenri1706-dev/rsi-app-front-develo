import { useTranslation } from "react-i18next";
import Image from "next/image";

import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

export const FlowChartGeneralVision: React.FC = () => {
  const { goToVortexScheme, goToDifficultIntubation } = useRoutes();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0rem] !pb-[3rem] !px-[0.5rem]">
        <Image
          alt={t("FlowChartGeneralVision.Content")}
          src="/flow-chart.png"
          height={1000}
          width={1000}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToVortexScheme} label={t("Navigation.GoBack")} />

        <Button
          onClick={goToDifficultIntubation}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
