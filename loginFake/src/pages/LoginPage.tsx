import React from "react";
import LoginForm from "../components/LoginForm";
import banner from "../assets/sanpacho.png"; // tu imagen del campus

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden font-sans">
      {/* Lado izquierdo con imagen */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Capa de opacidad */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Lado derecho con formulario */}
      <div className="flex flex-col w-full md:w-1/2 bg-[#0b1021] text-white px-6 md:px-16 pt-20">
        <div className="w-full max-w-lg z-10">
          {/* Encabezado */}
          <div className="mb-8">
            <h1
              className="text-[44px] font-bold mb-3"
              style={{
                color: "#545251",
                fontFamily: "Roboto, Arial, Helvetica, sans-serif",
              }}
            >
              Entrar a <span className="text-[#545251] font-bold">NEXUS</span>
            </h1>
          </div>

          {/* Formulario */}
          <LoginForm />

          {/* Olvidó contraseña */}
          <div className="mt-4 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              ¿Olvidó su contraseña?
            </a>
          </div>

          {/* Acceso invitado */}
          <div className="mt-10 w-[400px]">
            <p
              className="text-[#EF8935] text-[36px] leading-tight mb-4 font-bold w-full md:w-[650px]"
              style={{
                fontFamily: '"Bree Serif", Arial, Helvetica, sans-serif',
              }}
            >
              Algunos cursos permiten el acceso de invitados
            </p>

            <button className="bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded transition text-base font-semibold">
              ENTRAR COMO PERSONA INVITADA
            </button>
            <div className="mt-5 text-sm text-gray-400">
              Español - Internacional (es)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
