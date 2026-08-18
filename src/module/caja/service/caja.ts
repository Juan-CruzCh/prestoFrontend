import type { AxiosResponse } from "axios";
import { instance } from "../../../core/config/instanceAxios";
import type { cajaUsuarioI, listarCajaPorUsuarioI } from "../interface/caja";

export async function CrearCaja(montoInicial: number): Promise<AxiosResponse> {
    const response = await instance.post('abrir/caja', { montoInicial })
    return response
}
export async function cerrarCaja(monto: number): Promise<AxiosResponse> {
    const response = await instance.post('caja/cerrar', { montoTotal:monto })
    return response
}
export async function verCajaPorUsuario(): Promise<cajaUsuarioI> {
    const response = await instance.get('usuario/caja')
    return response.data
}

export async function listarCajas(): Promise<cajaUsuarioI[]> {
    const response = await instance.get('caja/listar')
    return response.data
}
export async function verCajaPorUsuarioConSusPagos(): Promise<listarCajaPorUsuarioI> {
    const response = await instance.get('verCajaPorUsuarioConSusPagos')
    return response.data
}


