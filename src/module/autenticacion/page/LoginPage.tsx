import { useForm, } from "react-hook-form";
import { login } from "../service/autenticacionService";
import type { AxiosError } from "axios";
import { useState } from "react";
import { HttpStatus } from "../../../core/enum/httpSatatus";
import escudoPresto from "../../../assets/logo/escudo.png";

interface LoginFormInputs {
  usuario: string;
  password: string;
}

export const LoginPage = () => {
  const [error, setError] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>();


  const onSubmit = async (data: LoginFormInputs) => {
    try {

      const response = await login(data.usuario, data.password)
      if (response.token) {
        window.location.href = '/inicio'
      }
    } catch (error) {
      const e = error as AxiosError<any>
      if (e.status == HttpStatus.UNAUTHORIZED) {
        setError(e.response?.data.mensaje)
      } else {
        setError(e.message)
      }

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-sky-800 via-sky-700 to-cyan-700">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm ">
        <div className="mb-5 flex flex-col items-center">
          <img
            src={escudoPresto}
            alt="Presto"
            className="mb-3 h-20 w-auto object-contain"
          />
          <h2 className="text-2xl font-semibold text-center text-sky-800">
            Sistema de Agua - Acceso
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Usuario */}
          <div className="mb-4">
            <label className="block text-sky-700 text-sm mb-2">Usuario</label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              {...register("usuario", { required: "El usuario es obligatorio" })}
            />
            {errors.usuario && (
              <p className="text-red-500 text-sm mt-1">{errors.usuario.message}</p>
            )}
          </div>

          {/* Contraseña */}
          <div className="mb-6">
            <label className="block text-sky-700 text-sm mb-2">Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-sky-700 text-white py-2 rounded-lg hover:bg-sky-800 transition duration-300 font-medium"
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};
