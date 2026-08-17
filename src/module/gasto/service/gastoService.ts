import type { AxiosResponse } from "axios";
import { instance } from "../../../core/config/instanceAxios";
import type {
  CategoriaGastoI,
  CrearGastoI,
  listarGastoI,
} from "../interface/gasto";

export async function ListarGastos(): Promise<listarGastoI[]> {
  const response = await instance.get("gasto/listar");
  return response.data;
}

export async function ListarCategoriaGasto(): Promise<CategoriaGastoI[]> {
  const response = await instance.get("categoriaGasto/listar");
  return response.data;
}

export async function crearCategoriaGasto(
  data: CategoriaGastoI
): Promise<AxiosResponse> {
  const response = await instance.post("categoriaGasto/crear", data);
  return response;
}

export async function editarCategoriaGasto(
  data: CategoriaGastoI,
  id: string
): Promise<AxiosResponse> {
  const response = await instance.patch(`categoriaGasto/${id}`, data);
  return response;
}

export async function eliminarCategoriaGasto(id: string): Promise<AxiosResponse> {
  const response = await instance.delete(`categoriaGasto/${id}`);
  return response;
}

export async function crearGasto(data: CrearGastoI): Promise<{ gasto: string }> {
  const response = await instance.post("gasto/crear", data);
  return response.data;
}
