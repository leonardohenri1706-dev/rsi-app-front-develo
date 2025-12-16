import {
  InputWithLabel,
  RadioWithLabel,
  BaseLayout,
  Button,
} from "@/app/components";
import { IntubationExperience } from "@/app/interfaces";
import { useRoutes } from "@/app/hooks";

import { useRegistration } from "./hooks";
import { useTranslation } from "react-i18next";

export const Registration: React.FC = () => {
  const { goToLogin } = useRoutes();
  const { t } = useTranslation("common");

  const { doRegistration, setField, getField } = useRegistration();

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-auto pb-[2rem]">
        <InputWithLabel
          placeholder={t("Pages.Registration.Input.Email.Placeholder")}
          onChange={(value) => setField("email", value)}
          value={String(getField("email"))}
          label={t("Pages.Registration.Input.Email.Label")}
        />

        <InputWithLabel
          placeholder={t("Pages.Registration.Input.Name.Placeholder")}
          onChange={(v) => setField("name", v)}
          value={String(getField("name"))}
          label={t("Pages.Registration.Input.Name.Label")}
        />

        <InputWithLabel
          placeholder={t("Pages.Registration.Input.Password.Placeholder")}
          onChange={(v) => setField("password", v)}
          value={String(getField("password"))}
          label={t("Pages.Registration.Input.Password.Label")}
          password
        />

        <InputWithLabel
          placeholder={t(
            "Pages.Registration.Input.PasswordConfirmation.Placeholder"
          )}
          label={t("Pages.Registration.Input.PasswordConfirmation.Label")}
          onChange={(v) => setField("passwordConfirmation", v)}
          value={String(getField("passwordConfirmation"))}
          password
        />

        <RadioWithLabel
          options={[
            IntubationExperience.LESS_THAN_20,
            IntubationExperience.BETWEEN_20_AND_50,
            IntubationExperience.MORE_THAN_50,
          ]}
          optionLabels={[
            t("Pages.Registration.Input.IntubationExperience.LessThan20"),
            t("Pages.Registration.Input.IntubationExperience.Between20And50"),
            t("Pages.Registration.Input.IntubationExperience.MoreThan50"),
          ]}
          label={t("Pages.Registration.Input.IntubationExperience.Label")}
          onChange={(v) => setField("intubation_experience", v)}
          value={String(getField("intubation_experience"))}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToLogin}
          label={t("Pages.Registration.Buttons.Back")}
        />

        <Button
          onClick={doRegistration}
          label={t("Pages.Registration.Buttons.Register")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
