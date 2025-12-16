import type { AxiosError } from "axios";
import { toast } from "react-toastify";

import type { ApiError } from "@/app/services/api/interfaces";
import { forgotPassword } from "@/app/services/api/forgot-password";
import { useRoutes } from "@/app/hooks";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useForgotPassword = () => {
  const { goToLogin } = useRoutes();
  const { t } = useTranslation("common");
  const defaultErrorMessage = t("Pages.ForgotPassword.DefaultErrorMessage");

  const ErrorMessages = {
    USER_DOES_NOT_EXIST: t(
      "Pages.ForgotPassword.ErrorMessages.USER_DOES_NOT_EXIST"
    ),
    EMAIL_CANNOT_BE_EMPTY: t(
      "Pages.ForgotPassword.ErrorMessages.EMAIL_CANNOT_BE_EMPTY"
    ),
  };

  type ForgotPasswordErrorType = keyof typeof ErrorMessages;

  const [email, setEmail] = useState<string>("");

  const doForgotPassword = async () => {
    if (!email) return toast.error(ErrorMessages.EMAIL_CANNOT_BE_EMPTY);

    const forgotPasswordPromise = forgotPassword({ email });

    toast.promise(forgotPasswordPromise, {
      success: t("Pages.ForgotPassword.Success"),
      pending: t("Pages.ForgotPassword.Pending"),
    });

    try {
      await forgotPasswordPromise;

      setTimeout(() => {
        window.history.replaceState({}, "", "/");
        goToLogin();
      }, 1000);
    } catch (err) {
      const error = err as AxiosError<ApiError<ForgotPasswordErrorType>>;
      const { type = "" } =
        error.response?.data || ({} as ApiError<ForgotPasswordErrorType>);

      const isKnownError = Object.keys(ErrorMessages).includes(
        type as ForgotPasswordErrorType
      );

      const errorMessage = isKnownError
        ? ErrorMessages[type as ForgotPasswordErrorType]
        : defaultErrorMessage;

      toast.error(errorMessage);
    }
  };

  return { email, setEmail, doForgotPassword };
};
