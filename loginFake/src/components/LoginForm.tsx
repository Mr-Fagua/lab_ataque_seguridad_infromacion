import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
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
