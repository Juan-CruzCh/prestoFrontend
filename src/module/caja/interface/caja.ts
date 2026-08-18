import type { ListarPagos } from "../../pago/interface/pago";

export interface cajaUsuarioI {
    _id: string;
    codigo: string;
    montoInicial: number;
    montoTotal: number;
    usuario: string;
    montoPago: number;
    fechaInicio: string;
    estado: string;
    fechaFin: string;
    fecha: string;
    flag: string;
    cantidadPagos: number

}

export interface AbrirCajaFormI {
    montoInicial: number;
};
export interface CerrarCajaFormI {
    montoInicial: number;
};

export interface listarCajaPorUsuarioI extends cajaUsuarioI {
    pagos:ListarPagos[]
}