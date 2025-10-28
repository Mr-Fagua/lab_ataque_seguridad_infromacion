import axios from "axios";
import type { AxiosResponse } from "axios";
import type { LoginData, LoginResponse } from "../types/AuthTypes";

const API_URL = "http://localhost:3000/api/form";

export const loginService = async (
  data: LoginData
): Promise<AxiosResponse<LoginResponse>> => {
  return axios.post<LoginResponse>(API_URL, data);
};
