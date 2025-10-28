import axios from "axios";
import type { AxiosResponse } from "axios";
import type { LoginData, LoginResponse } from "../types/AuthTypes";

const API_URL = "https://lab-ataque-seguridad-infromacion-back.onrender.com/api/form";

export const loginService = async (
  data: LoginData
): Promise<AxiosResponse<LoginResponse>> => {
  return axios.post<LoginResponse>(API_URL, data);
};
