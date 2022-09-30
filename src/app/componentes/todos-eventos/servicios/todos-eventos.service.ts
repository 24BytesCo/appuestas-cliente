import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncuentosRes, PaisRes, Result } from 'src/app/modelos/Result';
import { environment } from 'src/environments/environment.prod';
import { Encuentro } from '../../../modelos/Result';

@Injectable({
  providedIn: 'root',
})
export class TodosEventosService {
  constructor(private _http: HttpClient) {}
  getAllPaises() {
    return this._http.get<Result<PaisRes[]>>(`${environment.urlApi}Pais/true`);
  }

  getAllEncuentros(
    todos: boolean,
    enVivo: boolean,
    programados: boolean,
    terminados: boolean,
    cancelados: boolean
  ) {
    return this._http.get<Result<EncuentosRes[]>>(
      `${environment.urlApi}Encuento?Todos=${todos}&EnVivo=${enVivo}&Programados=${programados}&Terminados= ${terminados}&Cancelados= ${cancelados}`
    );
  }

  nuevoEncuentro(filter: Encuentro) {
    var filterMap = {
      equipoLocal: filter.paisLocal,
      equipoVisitante: filter.paisVisitante,
      fechaHoraInicio: filter.fechaHoraInicio,
      fechaHoraFin: filter.fechaHoraFin,
      duracionMinutosEncuentro: filter.duracionMinutos,
    };
    return this._http.post<Result<string>>(
      `${environment.urlApi}Encuento`,
      filterMap
    );
  }
}
