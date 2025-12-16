import { InputWithLabel, BaseLayout, Button } from "@/app/components";

import { useResetPassword } from "./hooks";
import { useTranslation } from "react-i18next";

export const NewPassword: React.FC = () => {
  const { doResetPassword, getField, setField } = useResetPassword();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content>
        <InputWithLabel
          placeholder={t("Pages.NewPassword.Input.Password.Placeholder")}
          onChange={(v) => setField("password", v)}
          value={String(getField("password"))}
          label={t("Pages.NewPassword.Input.Password.Label")}
          password
        />

        <InputWithLabel
          placeholder={t(
            "Pages.NewPassword.Input.PasswordConfirmation.Placeholder"
          )}
          onChange={(v) => setField("passwordConfirmation", v)}
          value={String(getField("passwordConfirmation"))}
          label={t("Pages.NewPassword.Input.PasswordConfirmation.Label")}
          password
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          label={t("Pages.NewPassword.Buttons.Save")}
          onClick={doResetPassword}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
