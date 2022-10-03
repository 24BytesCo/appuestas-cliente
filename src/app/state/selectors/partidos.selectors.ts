import { createSelector } from "@ngrx/store";
import {  PartidosState } from "src/app/modelos/store.state";
import { AppState } from "../app.state"

//Se lrelacion con la propiedad equiposLista de la "tabla"
//padre
export const selectPartidosFeature = (state: AppState) => state.partidosLista; 

export const selectCargandoPartidos = createSelector(
    selectPartidosFeature,
    (state: PartidosState) => state.cargandoData //Hijo
);

export const selectListaPartidos = createSelector(
    selectPartidosFeature,
    (state: PartidosState) => state.partidosLista //Hijo
);

