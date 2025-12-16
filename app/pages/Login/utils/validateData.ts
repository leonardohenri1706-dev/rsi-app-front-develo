import type { LoginBody } from "@/app/services/api/login";
import { TFunction } from "i18next";

export const validateData = (data: LoginBody | null, t: TFunction) => {
  const errors: Partial<Record<keyof LoginBody, string>> = {};

  if (!data?.email)
    errors.email = t("Pages.Login.ValidationErrors.EmailRequired");

  if (!data?.password)
    errors.password = t("Pages.Login.ValidationErrors.PasswordRequired");

  return errors;
};
