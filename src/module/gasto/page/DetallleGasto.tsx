export const DetallleGasto = () => {
  return (
    <div className="flex flex-col items-center py-6">
      {/* Media carta a lo ancho: 8.5" × 5.5" ≈ 216mm × 140mm */}
      <div className="w-[216mm] min-h-[140mm] border border-slate-300 bg-white p-5 text-slate-900 shadow-sm">
        {/* Espacio para logo */}
        <div className="mb-4 flex h-20 items-center justify-center border border-dashed border-slate-300 bg-slate-50">
          <span className="text-xs text-slate-400">Logo</span>
        </div>

        <div className="mb-4 text-center">
          <h1 className="text-base font-bold uppercase">Comprobante de gasto</h1>
          <p className="mt-1 text-sm text-slate-600">Caja chica</p>
        </div>

        <div className="mb-4 border-t border-b border-dashed border-slate-400 py-3 text-sm">
          <div className="flex justify-between py-1">
            <span className="font-semibold">Código gasto:</span>
            <span>GST-000125</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="font-semibold">Fecha:</span>
            <span>24/07/2026</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="font-semibold">Nro. comprobante:</span>
            <span>FAC-00421</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="font-semibold">Categoría:</span>
            <span>Mantenimiento</span>
          </div>
        </div>

        <div className="mb-4 text-sm">
          <p className="mb-1 font-semibold">Descripción:</p>
          <p>Compra de materiales de plomería</p>

          <p className="mb-1 mt-3 font-semibold">Observación:</p>
          <p>Compra realizada en ferretería local</p>
        </div>

        <div className="mb-4 border-t border-b border-slate-400 py-3">
          <div className="flex justify-between text-base font-bold">
            <span>TOTAL</span>
            <span>Bs 350.00</span>
          </div>
        </div>

        <div className="text-sm">
          <p>
            <span className="font-semibold">Registrado por:</span> Juan Pérez
          </p>
          <p className="text-slate-600">ADMINISTRADOR</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Imprimir
        </button>
        <button
          type="button"
          className="rounded border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
        >
          Volver
        </button>
      </div>
    </div>
  );
};
