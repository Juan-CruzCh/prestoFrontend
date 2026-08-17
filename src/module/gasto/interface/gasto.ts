export interface CategoriaGastoI {
  _id?: string;
  nombre: string;
}



export interface CrearGastoI {
  categoriaGasto: string;
  monto: number;
  descripcion: string;
  comprobante: string;
}


export interface listarGastoI extends CrearGastoI {
  _id: string;
  codigo: string;
  fecha: string;
  usuario: string;
  cajaChica: string;
  tipo: string;
}