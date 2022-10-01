import { createReducer, on } from '@ngrx/store';
import { EquiposState, PartidosState } from 'src/app/modelos/store.state';
import { cargandoEquipos, equiposCargados } from '../actions/equipos.actions';
import { cargandoPartidos, partidosCargados } from '../actions/partidos.actions';

//Estado inicial
export const initialState: PartidosState = { cargandoData: false, partidosLista: [] }

export const partidosReducer = createReducer(
  initialState,
  on(cargandoPartidos, (state) => 
  {
    return { ...state, cargandoData: true } 
  }),
  on(partidosCargados, (state, { partidosLista }) => 
  {
    return { ...state, cargandoData: false, partidosLista:partidosLista } 
  })

);
