import type { AxiosError } from "axios";
import { toast } from "react-toastify";

import type { ApiError } from "@/app/services/api/interfaces";
import { login } from "@/app/services/api/login";
import { useRoutes } from "@/app/hooks";
import { useState } from "react";
import { validateData } from "../utils";
import { useTranslation } from "react-i18next";

export const useLogin = () => {
  const { goToDifficultIntubation } = useRoutes();
  const { t } = useTranslation("common");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const ErrorMessages = {
    USER_DOES_NOT_EXIST: t("Pages.Login.ErrorMessages.USER_DOES_NOT_EXIST"),
    INVALID_PASSWORD: t("Pages.Login.ErrorMessages.INVALID_PASSWORD"),
  };
  type LoginErrorType = keyof typeof ErrorMessages;

  const defaultErrorMessage = t("Pages.Login.DefaultErrorMessage");

  const doLogin = async () => {
    const errors = validateData({ email, password }, t);

    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      for (const key in errors) {
        toast.error(errors[key as keyof typeof errors] as string);
      }
      return;
    }

    const loginPromise = login({ email, password });

    toast.promise(loginPromise, {
      success: t("Pages.Login.Success"),
      pending: t("Pages.Login.Pending"),
    });

    try {
      const { token } = await loginPromise;

      window.localStorage.setItem("token", token);

      setTimeout(() => goToDifficultIntubation(), 1000);
    } catch (err) {
      const error = err as AxiosError<ApiError<LoginErrorType>>;
      const { type = "" } =
        error.response?.data || ({} as ApiError<LoginErrorType>);

      const isKnownError = Object.keys(ErrorMessages).includes(
        type as LoginErrorType
      );

      const errorMessage = isKnownError
        ? ErrorMessages[type as LoginErrorType]
        : defaultErrorMessage;

      toast.error(errorMessage);
    }
  };

  return { email, password, setEmail, setPassword, doLogin };
};
