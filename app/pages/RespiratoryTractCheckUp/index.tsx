import { useState } from "react";

import { RadioWithLabel, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

export const RespiratoryTractCheckUp: React.FC = () => {
  const { goToLogin, goToRespiratoryTractCheckUpMallampati } = useRoutes();
  const { t } = useTranslation("common");

  const [hardIntubation, setHardIntubation] = useState("");
  const [apnea, setApnea] = useState("");
  const [mouthOpening, setMouthOpening] = useState("");
  const [tireomentalDistance, setTireomentalDistance] = useState("");
  const [cervicalExtension, setCervicalExtension] = useState("");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[90%] lg:!h-[75%] overflow-x-hidden overflow-y-auto lg:overflow-hidden lg:hover:overflow-y-auto !pt-[1rem] !lg:pt-[3rem] pb-[1rem] lg:pb-[2rem]">
        <RadioWithLabel
          label={t("Pages.RespiratoryTractCheckUp.Questions.1.Label")}
          options={[
            t("Pages.RespiratoryTractCheckUp.Questions.1.Options.1"),
            t("Pages.RespiratoryTractCheckUp.Questions.1.Options.2"),
          ]}
          onChange={setHardIntubation}
          value={hardIntubation}
        />

        <RadioWithLabel
          label={t("Pages.RespiratoryTractCheckUp.Questions.2.Label")}
          options={[
            t("Pages.RespiratoryTractCheckUp.Questions.2.Options.1"),
            t("Pages.RespiratoryTractCheckUp.Questions.2.Options.2"),
          ]}
          onChange={setApnea}
          value={apnea}
        />

        <RadioWithLabel
          label={t("Pages.RespiratoryTractCheckUp.Questions.3.Label")}
          options={[
            t("Pages.RespiratoryTractCheckUp.Questions.3.Options.1"),
            t("Pages.RespiratoryTractCheckUp.Questions.3.Options.2"),
          ]}
          onChange={setMouthOpening}
          value={mouthOpening}
        />

        <RadioWithLabel
          label={t("Pages.RespiratoryTractCheckUp.Questions.4.Label")}
          options={[
            t("Pages.RespiratoryTractCheckUp.Questions.4.Options.1"),
            t("Pages.RespiratoryTractCheckUp.Questions.4.Options.2"),
          ]}
          onChange={setTireomentalDistance}
          value={tireomentalDistance}
        />

        <RadioWithLabel
          label={t("Pages.RespiratoryTractCheckUp.Questions.5.Label")}
          options={[
            t("Pages.RespiratoryTractCheckUp.Questions.5.Options.1"),
            t("Pages.RespiratoryTractCheckUp.Questions.5.Options.2"),
          ]}
          onChange={setCervicalExtension}
          value={cervicalExtension}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLogin} label={t("Navigation.GoBack")} />

        <Button
          onClick={goToRespiratoryTractCheckUpMallampati}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
