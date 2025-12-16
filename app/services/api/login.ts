import api from "./api";

export interface LoginBody {
  email: string;
  password: string;
}

interface Return {
  token: string;
}

export const login = async (body: LoginBody): Promise<Return> => {
  const result = await api.post<Return>("/login", body);
  return result.data;
};
