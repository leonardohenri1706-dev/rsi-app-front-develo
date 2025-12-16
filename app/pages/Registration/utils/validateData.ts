import type { RegistrationBody } from "@/app/services/api/registration";
import { TFunction } from "i18next";

export const validateData = (data: RegistrationBody | null, t: TFunction) => {
  const errors: Partial<Record<keyof RegistrationBody, string>> = {};

  if (!data?.email) errors.email = t("Pages.Registration.Input.EmailRequired");

  if (!data?.name) errors.name = t("Pages.Registration.Input.NameRequired");

  if (!data?.password)
    errors.password = t("Pages.Registration.Input.PasswordRequired");

  if (!data?.passwordConfirmation)
    errors.passwordConfirmation = t(
      "Pages.Registration.Input.PasswordConfirmationRequired"
    );

  if (
    data?.password &&
    data?.passwordConfirmation &&
    data?.password !== data?.passwordConfirmation
  )
    errors.passwordConfirmation = t(
      "Pages.Registration.Input.PasswordsDoNotMatch"
    );

  if (data?.password && data?.password.length < 6)
    errors.password = t("Pages.Registration.Input.PasswordTooShort");

  if (!data?.intubation_experience)
    errors.intubation_experience = t(
      "Pages.Registration.Input.IntubationExperienceRequired"
    );

  return errors;
};
