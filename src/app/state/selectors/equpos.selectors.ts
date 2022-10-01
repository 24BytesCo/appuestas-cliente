import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { EquiposState } from "src/app/modelos/store.state";
import { AppState } from "../app.state"

//Se lrelacion con la propiedad equiposLista de la "tabla"
//padre
export const selectEquiposFeature = (state: AppState) => state.equiposLista; 


export const selectListaEquipos = createSelector(
    selectEquiposFeature,
    (state: EquiposState) => state.equiposLista //Hijo
);

export const selectCargandoEquipos = createSelector(
    selectEquiposFeature,
    (state: EquiposState) => state.cargandoData //Hijo
);