import { createAction, props } from '@ngrx/store';
import { EncuentosRes } from '../../modelos/Result';

export const cargandoPartidos = createAction('[Partidos Lista] Cargando Partidos');
export const partidosCargados = createAction(
  '[Partidos Lista] Partidos Cargados Correctamente',
  props<{ partidosLista: EncuentosRes[] }>()
);
