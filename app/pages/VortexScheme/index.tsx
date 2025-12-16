import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const commonTextClassName = "text-gray-500 font-bold text-md absolute";

export const VortexScheme: React.FC = () => {
  const { goToInternationalRecommendations, goToFlowChartGeneralVision } =
    useRoutes();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-start !h-[90%] !px-[0.5rem] relative">
        <div className="flex flex-col w-full h-[77%] items-center justify-center relative">
          <Image
            src="/vortex-scheme.png"
            alt={t("Pages.VortexScheme.Label")}
            height={350}
            width={350}
          />

          <p className={`${commonTextClassName} top-[0.5rem] lg:-top-[1rem]`}>
            {t("Pages.VortexScheme.Items.1")}
          </p>

          <p
            className={`${commonTextClassName} bottom-[5.5rem] lg:bottom-[4rem] -left-[1rem] lg:md:left-[9%] lg:rotate-[55deg]  rotate-[60deg]`}
          >
            {t("Pages.VortexScheme.Items.2")}
          </p>

          <p
            className={`${commonTextClassName} bottom-[5.5rem] lg:bottom-[4rem] -right-[1rem] lg:md:right-[9%] -lg:rotate-[55deg] -rotate-[60deg]`}
          >
            {t("Pages.VortexScheme.Items.3")}
          </p>

          <p
            className={`${commonTextClassName} !text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            {t("Pages.VortexScheme.Items.4")}
          </p>
        </div>

        <p className="text-gray-500 font-bold text-[0.875rem] text-center px-[1rem] mt-2">
          {t("Pages.VortexScheme.Description")}
        </p>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToInternationalRecommendations}
          label={t("Navigation.GoBack")}
        />

        <Button
          onClick={goToFlowChartGeneralVision}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
