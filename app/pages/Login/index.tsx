import { InputWithLabel, BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

import { useLogin } from "./hooks";
import { useTranslation } from "react-i18next";

export const Login: React.FC = () => {
  const { goToForgotPassword, goToRegistration } = useRoutes();

  const { email, doLogin, password, setEmail, setPassword } = useLogin();

  const { t } = useTranslation("common");

  const passwordOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") doLogin();
  };

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!pt-[6rem]">
        <InputWithLabel
          placeholder={t("Pages.Login.Input.Email.Placeholder")}
          onChange={setEmail}
          label={t("Pages.Login.Input.Email.Label")}
          value={email}
        />

        <InputWithLabel
          onKeyDown={passwordOnKeyDown}
          placeholder={t("Pages.Login.Input.Password.Placeholder")}
          onChange={setPassword}
          value={password}
          label={t("Pages.Login.Input.Password.Label")}
          password
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToForgotPassword}
          label={t("Pages.Login.Buttons.RecoverPassword")}
        />

        <Button
          onClick={goToRegistration}
          label={t("Pages.Login.Buttons.Register")}
        />

        <Button onClick={doLogin} label={t("Pages.Login.Buttons.Login")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
