import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Encuentro,
  EncuentroParams,
  PaisRes,
  Result,
  TipoEventoRes,
} from 'src/app/modelos/Result';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ItemProgramadosService {
  constructor(private _http: HttpClient) {}

  getAllTipoEnvento() {
    return this._http.get<Result<TipoEventoRes[]>>(
      `${environment.urlApi}TipoEvento`
    );
  }
  nuevoEventoEncuentro(filter: EncuentroParams) {
    return this._http.post<Result<string>>(
      `${environment.urlApi}EventoEncuento`,
      filter
    );
  }
}
