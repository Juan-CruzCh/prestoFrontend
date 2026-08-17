import type { AxiosResponse } from "axios";
import { instance } from "../../../core/config/instanceAxios";
import type { cajaUsuarioI } from "../interface/caja";

export async function CrearCaja(montoInicial: number): Promise<AxiosResponse> {
    const response = await instance.post('abrir/caja', { montoInicial })
    return response
}

export async function verCajaPorUsuario(): Promise<cajaUsuarioI> {
    const response = await instance.get('usuario/caja')
    return response.data
}

export async function listarCajas(): Promise<cajaUsuarioI> {
    const response = await instance.get('caja/listar')
    return response.data
}