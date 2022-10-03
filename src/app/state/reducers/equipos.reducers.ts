import { createReducer, on } from '@ngrx/store';
import { EquiposState } from 'src/app/modelos/store.state';
import { cargandoEquipos, equiposCargados } from '../actions/equipos.actions';

//Estado inicial
export const initialState: EquiposState = { cargandoData: false, equiposLista: [] }

export const equiposReducer = createReducer(
  initialState,
  on(cargandoEquipos, (state) => 
  {
    return { ...state, cargandoData: true } 
  }),
  on(equiposCargados, (state, { equiposLista }) => 
  {
    return { ...state, cargandoData: false, equiposLista:equiposLista } 
  })

);
