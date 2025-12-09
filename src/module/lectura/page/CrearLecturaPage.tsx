export function CrearLecturaPage() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      {/* Contenedor principal centrado */}
      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-lg shadow-md">
        {/* Título */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">
          Crear Lectura
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {/* Número de medidor */}
          <div className="w-full">
            <label
              htmlFor="numeroMedidor"
              className="block mb-2 font-medium text-gray-700 text-sm sm:text-base"
            >
              Número de Medidor
            </label>
            <input
              id="numeroMedidor"
              type="text"
              placeholder="Ingrese número de medidor"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Información del cliente */}
          <div className="p-4 sm:p-5 bg-gray-50 rounded-lg border border-gray-200">
            <div className="space-y-2">
              <p className="text-sm sm:text-base">
                <strong className="text-gray-700">Nombre:</strong>
                <span className="ml-2 text-gray-600">Juan Pérez Gómez</span>
              </p>
              <p className="text-sm sm:text-base">
                <strong className="text-gray-700">Número de Medidor:</strong>
                <span className="ml-2 text-gray-600">M001</span>
              </p>
              <p className="text-sm sm:text-base">
                <strong className="text-gray-700">Estado:</strong>
                <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded text-xs sm:text-sm font-medium">
                  Moroso
                </span>
              </p>
            </div>
          </div>

          {/* Mes */}
          <div className="w-full">
            <label
              htmlFor="mes"
              className="block mb-2 font-medium text-gray-700 text-sm sm:text-base"
            >
              Mes
            </label>
            <select
              id="mes"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                -- Seleccione un mes --
              </option>
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>
          </div>

          {/* Lecturas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Lectura anterior */}
            <div className="w-full">
              <label
                htmlFor="lecturaAnterior"
                className="block mb-2 font-medium text-gray-700 text-sm sm:text-base"
              >
                Lectura Anterior
              </label>
              <input
                id="lecturaAnterior"
                type="number"
                placeholder="Lectura anterior"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-sm sm:text-base text-gray-600"
                readOnly
                value="150"
              />
            </div>

            {/* Lectura actual */}
            <div className="w-full">
              <label
                htmlFor="lecturaActual"
                className="block mb-2 font-medium text-gray-700 text-sm sm:text-base"
              >
                Lectura Actual
              </label>
              <input
                id="lecturaActual"
                type="number"
                placeholder="Ingrese lectura actual"
                className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Botón guardar */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto sm:min-w-[200px] bg-blue-600 text-white px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium text-sm sm:text-base shadow-sm hover:shadow-md"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
