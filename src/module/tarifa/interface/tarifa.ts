export interface TarifaRango {
    _id: string;
    rango1: number;
    rango2: number;
    costo: number;
    tarifa: string;
    iva: number;
    flag: string;
    fecha: string;

}

export interface ListarTarifasRangoI {
    _id: string;
    fecha: string;
    flag: string;
    nombre: string;
    rango: TarifaRango[];

}


export interface TarifasI {

    rango1: number;
    rango2: number;
    costo: number;
    tarifa: string;
    iva: number;
}

export interface crearTarifaI {
    nombre: string
    rango1: number;
    rango2: number;
    costo: number;
    tarifa: string;
    iva: number;
}



export interface listarTarifasI {
    _id: string
    nombre: string

}
