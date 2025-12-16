import api from "./api";

interface ForgotPasswordBody {
  email: string;
}

export const forgotPassword = async ({ email }: ForgotPasswordBody) => {
  return api.post("/forgot-password", { email });
};
