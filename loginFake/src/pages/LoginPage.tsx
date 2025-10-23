import React from "react";
import LoginForm from "../components/LoginForm";
import logo from "../assets/logoWolf.png";
import type { LoginResponse } from "../types/AuthTypes";

const LoginPage: React.FC = () => {
  const handleLoginSuccess = (data: LoginResponse) => {
    console.log("✅ Usuario logueado:", data);
    localStorage.setItem("token", data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex flex-col items-center gap-6">
        <img src={logo} alt="WOLFAW" className="w-32 mb-4" />
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
