import { EncuentosRes, Encuentro, PaisRes } from "./Result";

export interface EquiposState {
    cargandoData: boolean,
    equiposLista: ReadonlyArray<PaisRes>;
}

export interface PartidosState {
    cargandoData: boolean,
    partidosLista: ReadonlyArray<EncuentosRes>;
}