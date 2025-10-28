// src/types/AuthTypes.ts
export interface User {
  id: number;
  email: string;
  name: string;  
}


export interface LoginData {
  usuario: string;
  password: string;
}

export interface LoginResponse {
  message: string;
}
