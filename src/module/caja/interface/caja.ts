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
    CantidadPagos: number

}

export interface AbrirCajaFormI {
    montoInicial: number;
};
