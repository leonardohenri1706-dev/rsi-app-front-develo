import { useState } from "react";

import {
  RadioWithLabelImageAndCaption,
  BaseLayout,
  Button,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

export const RespiratoryTractCheckUpMallampati: React.FC = () => {
  const { goToRespiratoryTractCheckUp, goToRespiratoryTractCheckUpImages } =
    useRoutes();
  const { t } = useTranslation("common");

  const [mallampati, setMallampati] = useState("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[80%] overflow-hidden !pt-0 !sm:pt-[1rem] !lg:pt-0">
        <RadioWithLabelImageAndCaption
          label={t("RespiratoryTractCheckUpMallampati.Label")}
          options={[
            {
              caption: t(
                "Pages.RespiratoryTractCheckUpMallampati.Options.1.Caption"
              ),
              imageSrc: "/Mallampati1.png",
              label: t(
                "Pages.RespiratoryTractCheckUpMallampati.Options.1.Label"
              ),
            },
            {
              caption: t(
                "Pages.RespiratoryTractCheckUpMallampati.Options.2.Caption"
              ),
              imageSrc: "/Mallampati2.png",
              label: t(
                "Pages.RespiratoryTractCheckUpMallampati.Options.2.Label"
              ),
            },
            {
              caption: t(
                "Pages.RespiratoryTractCheckUpMallampati.Options.3.Caption"
              ),
              imageSrc: "/Mallampati3.png",
              label: t(
                "Pages.RespiratoryTractCheckUpMallampati.Options.3.Label"
              ),
            },
            {
              caption: t(
                "Pages.RespiratoryTractCheckUpMallampati.Options.4.Caption"
              ),
              imageSrc: "/Mallampati4.png",
              label: t(
                "Pages.RespiratoryTractCheckUpMallampati.Options.4.Label"
              ),
            },
          ]}
          onChange={setMallampati}
          value={mallampati}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToRespiratoryTractCheckUp}
          label={t("Navigation.GoBack")}
        />

        <Button
          onClick={goToRespiratoryTractCheckUpImages}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
