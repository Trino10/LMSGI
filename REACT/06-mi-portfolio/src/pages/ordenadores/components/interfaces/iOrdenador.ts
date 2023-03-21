export interface IOrdenador {
    nombre:          string;
    marca:           string;
    descripcion:     string;
    caracteristicas: ICaracteristicas;
    precio:          IPrecio;
    imagenes:        any[];
    valoreaciones:   IValoreaciones;
}

export interface ICaracteristicas {
    procesador: string;
    ram:        string;
    hdd:        string;
}

export interface IPrecio {
    real:     number;
    dto:      number;
    oferta:   boolean;
    cantidad: number;
}

export interface IValoreaciones {
    positivas: number;
    negativas: number;
}