import { EquiposState, PartidosState } from "../modelos/store.state";
import { ActionReducerMap } from "@ngrx/store";
import { equiposReducer } from "./reducers/equipos.reducers";
import { partidosReducer } from "./reducers/partidos.reducers";

// "Tablas"
export interface AppState{
    equiposLista: EquiposState,
    partidosLista: PartidosState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState>= 
{
    equiposLista: equiposReducer,
    partidosLista: partidosReducer
};