import { createAction, props } from '@ngrx/store';
import { PaisRes } from '../../modelos/Result';

export const cargandoEquipos = createAction('[Equipos Lista] Cargando Equipos');
export const equiposCargados = createAction(
  '[Equipos Lista] Equipos Cargados Correctamente',
  props<{ partidos: PaisRes[] }>()
);
