import React, { useState } from "react";
import { loginService } from "../services/authService";
import type { LoginResponse } from "../types/AuthTypes";


interface LoginFormProps {
  onLoginSuccess: (userData: LoginResponse) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await loginService({ email, password });
      onLoginSuccess(data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg w-96 text-black"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        {loading ? "Cargando..." : "Entrar"}
      </button>
    </form>
  );
};

export default LoginForm;
