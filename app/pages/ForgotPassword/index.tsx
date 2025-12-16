import { useTranslation } from "react-i18next";

import {
  BaseContentContainer,
  BaseButtonsContainer,
  InputWithLabel,
  Button,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useForgotPassword } from "./hooks";

export const ForgotPassword: React.FC = () => {
  const { goToLogin } = useRoutes();

  const { doForgotPassword, email, setEmail } = useForgotPassword();
  const { t } = useTranslation("common");

  return (
    <>
      <BaseContentContainer>
        <InputWithLabel
          placeholder={t("ForgotPassword.Input.Email.Placeholder")}
          onChange={setEmail}
          label={t("ForgotPassword.Input.Email.Label")}
          value={email}
        />
      </BaseContentContainer>

      <BaseButtonsContainer>
        <Button label={t("Navigation.GoBack")} onClick={goToLogin} />

        <Button label={t("Navigation.Send")} onClick={doForgotPassword} />
      </BaseButtonsContainer>
    </>
  );
};
