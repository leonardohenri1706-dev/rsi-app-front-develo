import api from "./api";

export interface ResetPasswordBody {
  passwordConfirmation: string;
  password: string;
  token: string;
}

export const resetPassword = async (bodyParam: ResetPasswordBody) => {
  const { passwordConfirmation: _, ...body } = bodyParam;

  return api.post("/reset-password", body);
};
