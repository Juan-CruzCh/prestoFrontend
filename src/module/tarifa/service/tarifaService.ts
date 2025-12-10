import type { AxiosResponse } from "axios"
import { instanceAxios } from "../../../core/config/instanceAxios"
import type { listarTarifasI, ListarTarifasRangoI } from "../interface/tarifa"



export async function listarTarifas(): Promise<listarTarifasI[]> {
    try {
        const response = await instanceAxios.get("tarifa")
        return response.data
    } catch (error) {
        throw error
    }

}


export async function listarTarifasRango(): Promise<ListarTarifasRangoI[]> {
    try {
        const response = await instanceAxios.get("tarifa/rangos")
        return response.data
    } catch (error) {
        throw error
    }

}



export async function crearTarifas(data: any): Promise<AxiosResponse> {
    try {
        const response = await instanceAxios.post("tarifa", data)
        return response
    } catch (error) {
        throw error
    }

}