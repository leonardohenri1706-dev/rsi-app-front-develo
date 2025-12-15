import type { User } from "@/app/interfaces";

import api from "./api";

export interface RegistrationBody extends User {
  passwordConfirmation: string;
  password: string;
}

interface RegistrationResponse extends User {
  token: string;
}

export const registration = async (
  bodyParam: RegistrationBody
): Promise<RegistrationResponse> => {
  const { passwordConfirmation, ...body } = bodyParam;

  const result = await api.post<RegistrationResponse>("/registration", body);
  return result.data;
};
