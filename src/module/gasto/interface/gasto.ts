export interface CategoriaGastoI {
  _id: string;
  nombre: string;
}

export interface CrearGastoI {
  categoriaId: string;
  monto: number;
  descripcion: string;
  fecha: string;
  numeroComprobante: string;
  observacion: string;
}
