import type { ResetPasswordBody } from "@/app/services/api/reset-password";
import { TFunction } from "i18next";

export const validateData = (data: ResetPasswordBody | null, t: TFunction) => {
  const errors: Partial<Record<keyof ResetPasswordBody, string>> = {};

  if (!data?.token)
    errors.token = t("Pages.NewPassword.ValidationErrors.InvalidToken");

  if (!data?.password)
    errors.password = t("Pages.NewPassword.ValidationErrors.PasswordRequired");

  if (!data?.passwordConfirmation)
    errors.passwordConfirmation = t(
      "Pages.NewPassword.ValidationErrors.PasswordConfirmationRequired"
    );

  if (
    data?.password &&
    data?.passwordConfirmation &&
    data?.password !== data?.passwordConfirmation
  )
    errors.passwordConfirmation = t(
      "Pages.NewPassword.ValidationErrors.PasswordsDoNotMatch"
    );

  if (data?.password && data?.password.length < 6)
    errors.password = t("Pages.NewPassword.ValidationErrors.PasswordTooShort");

  return errors;
};
