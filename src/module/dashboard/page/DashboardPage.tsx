import type { ReactNode } from "react";
import {
  MdOpacity,
  MdPayments,
  MdReceiptLong,
  MdTrendingUp,
  MdTrendingDown,
  MdWarningAmber,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const pagosPorMes = [
  { mes: "Ene", monto: 12400 },
  { mes: "Feb", monto: 15280 },
  { mes: "Mar", monto: 13850 },
  { mes: "Abr", monto: 16720 },
  { mes: "May", monto: 14910 },
  { mes: "Jun", monto: 18140 },
  { mes: "Jul", monto: 17360 },
  { mes: "Ago", monto: 19650 },
  { mes: "Sep", monto: 18420 },
  { mes: "Oct", monto: 20110 },
  { mes: "Nov", monto: 17890 },
  { mes: "Dic", monto: 21540 },
];

const consumoPorMes = [
  { mes: "Ene", m3: 1820 },
  { mes: "Feb", m3: 1740 },
  { mes: "Mar", m3: 1910 },
  { mes: "Abr", m3: 2080 },
  { mes: "May", m3: 1960 },
  { mes: "Jun", m3: 2210 },
  { mes: "Jul", m3: 2140 },
  { mes: "Ago", m3: 2290 },
  { mes: "Sep", m3: 2180 },
  { mes: "Oct", m3: 2050 },
  { mes: "Nov", m3: 1920 },
  { mes: "Dic", m3: 1870 },
];

const facturasPendientes = [
  { codigo: "C-0142", cliente: "Ana Quispe Mamani", medidor: "M-2301", periodo: "Jul 2026", monto: 85, dias: 32 },
  { codigo: "C-0087", cliente: "Carlos Apaza Choque", medidor: "M-1184", periodo: "Jun 2026", monto: 120, dias: 48 },
  { codigo: "C-0215", cliente: "María Condori Flores", medidor: "M-3042", periodo: "Jul 2026", monto: 64, dias: 27 },
  { codigo: "C-0063", cliente: "José Mamani Rojas", medidor: "M-0917", periodo: "May 2026", monto: 210, dias: 76 },
  { codigo: "C-0198", cliente: "Lucía Huanca Paredes", medidor: "M-2578", periodo: "Jul 2026", monto: 48, dias: 21 },
  { codigo: "C-0110", cliente: "Pedro Quisbert Nina", medidor: "M-1640", periodo: "Jun 2026", monto: 95, dias: 41 },
];

const maxPago = Math.max(...pagosPorMes.map((p) => p.monto));
const maxConsumo = Math.max(...consumoPorMes.map((c) => c.m3));

const formatBs = (valor: number) =>
  `Bs ${valor.toLocaleString("es-BO")}`;

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
      
        <p className="mt-1 text-sm text-slate-500">
          Resumen de consumo de agua, recaudación y facturas pendientes — año 2026
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          titulo="Consumo de agua"
          valor="2.290 m³"
          detalle="Este mes · +7% vs julio"
          icono={<MdOpacity className="text-2xl" />}
          tono="sky"
          tendencia="up"
        />
        <KpiCard
          titulo="Pagos del mes"
          valor={formatBs(19650)}
          detalle="148 recibos cobrados"
          icono={<MdPayments className="text-2xl" />}
          tono="cyan"
          tendencia="up"
        />
        <KpiCard
          titulo="Facturas pendientes"
          valor="36"
          detalle={formatBs(4120) + " por cobrar"}
          icono={<MdReceiptLong className="text-2xl" />}
          tono="amber"
          tendencia="down"
        />
        <KpiCard
          titulo="Recaudación anual"
          valor={formatBs(206270)}
          detalle="Enero a diciembre 2026"
          icono={<MdTrendingUp className="text-2xl" />}
          tono="emerald"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">Pagos por mes</h2>
              <p className="mt-0.5 text-xs text-slate-500">Recaudación en bolivianos</p>
            </div>
            <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
              2026
            </span>
          </div>

          <div className="flex h-48 items-end gap-1.5 sm:gap-2">
            {pagosPorMes.map((item) => {
              const altura = Math.round((item.monto / maxPago) * 100);
              const esActual = item.mes === "Ago";
              return (
                <div key={item.mes} className="flex flex-1 flex-col items-center gap-2">
                  <span className="text-[10px] font-medium text-slate-500">
                    {(item.monto / 1000).toFixed(1)}k
                  </span>
                  <div className="flex h-36 w-full items-end justify-center">
                    <div
                      className={`w-full max-w-10 rounded-t-md transition-all ${
                        esActual
                          ? "bg-sky-700"
                          : "bg-sky-200 hover:bg-sky-400"
                      }`}
                      style={{ height: `${altura}%` }}
                      title={formatBs(item.monto)}
                    />
                  </div>
                  <span className={`text-xs ${esActual ? "font-semibold text-sky-800" : "text-slate-500"}`}>
                    {item.mes}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">Consumo de agua</h2>
              <p className="mt-0.5 text-xs text-slate-500">Metros cúbicos registrados</p>
            </div>
            <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700">
              m³
            </span>
          </div>

          <div className="flex h-48 items-end gap-1.5 sm:gap-2">
            {consumoPorMes.map((item) => {
              const altura = Math.round((item.m3 / maxConsumo) * 100);
              const esActual = item.mes === "Ago";
              return (
                <div key={item.mes} className="flex flex-1 flex-col items-center gap-2">
                  <span className="text-[10px] font-medium text-slate-500">{item.m3}</span>
                  <div className="flex h-36 w-full items-end justify-center">
                    <div
                      className={`w-full max-w-1Dashboard0 rounded-t-md transition-all ${
                        esActual
                          ? "bg-cyan-600"
                          : "bg-cyan-100 hover:bg-cyan-300"
                      }`}
                      style={{ height: `${altura}%` }}
                      title={`${item.m3} m³`}
                    />
                  </div>
                  <span className={`text-xs ${esActual ? "font-semibold text-cyan-800" : "text-slate-500"}`}>
                    {item.mes}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-800">Facturas pendientes</h2>
            <p className="mt-0.5 text-xs text-slate-500">Clientes con deudas por cobro de agua</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
            <MdWarningAmber className="text-sm" />
            36 pendientes
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cód.
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cliente
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Medidor
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Periodo
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Monto
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Atraso
                </th>
                <th className="px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Aviso
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {facturasPendientes.map((item) => (
                <tr key={item.codigo} className="hover:bg-blue-50/50">
                  <td className="px-4 py-2.5 font-medium text-slate-700">{item.codigo}</td>
                  <td className="px-4 py-2.5 text-slate-700">{item.cliente}</td>
                  <td className="px-4 py-2.5 text-slate-600">{item.medidor}</td>
                  <td className="px-4 py-2.5 text-slate-600">{item.periodo}</td>
                  <td className="px-4 py-2.5 font-medium text-slate-800">{formatBs(item.monto)}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        item.dias >= 60
                          ? "bg-red-50 text-red-700"
                          : item.dias >= 30
                            ? "bg-amber-50 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.dias} días
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <button
                      type="button"
                      title="Enviar notificación por WhatsApp"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white transition-colors hover:bg-emerald-600"
                    >
                      <FaWhatsapp className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

type TonoKpi = "sky" | "cyan" | "amber" | "emerald";

const tonos: Record<TonoKpi, { wrap: string; icon: string }> = {
  sky: { wrap: "bg-sky-50 text-sky-700", icon: "bg-sky-700 text-white" },
  cyan: { wrap: "bg-cyan-50 text-cyan-700", icon: "bg-cyan-600 text-white" },
  amber: { wrap: "bg-amber-50 text-amber-700", icon: "bg-amber-500 text-white" },
  emerald: { wrap: "bg-emerald-50 text-emerald-700", icon: "bg-emerald-600 text-white" },
};

interface KpiCardProps {
  titulo: string;
  valor: string;
  detalle: string;
  icono: ReactNode;
  tono: TonoKpi;
  tendencia?: "up" | "down";
}

const KpiCard = ({ titulo, valor, detalle, icono, tono, tendencia }: KpiCardProps) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{titulo}</p>
        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${tonos[tono].icon}`}>
          {icono}
        </span>
      </div>
      <p className="mt-3 text-2xl font-semibold text-slate-800">{valor}</p>
      <p className={`mt-1 inline-flex items-center gap-1 text-xs ${tonos[tono].wrap.split(" ")[1]}`}>
        {tendencia === "up" && <MdTrendingUp className="text-sm" />}
        {tendencia === "down" && <MdTrendingDown className="text-sm" />}
        <span className="text-slate-500">{detalle}</span>
      </p>
    </article>
  );
};
