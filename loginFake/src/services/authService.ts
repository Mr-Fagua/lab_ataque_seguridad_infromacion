import axios from "axios";
import type { LoginData, LoginResponse } from "../types/AuthTypes";

const API_URL = "https://tuapi.com/api/auth/login";

export interface LoginData {
  email: string;
  password: string;
}

export const loginService = async (data: LoginData): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(API_URL, data);
  return response.data;
};
