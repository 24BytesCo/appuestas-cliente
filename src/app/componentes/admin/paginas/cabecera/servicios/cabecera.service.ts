import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisRes, Result } from 'src/app/modelos/Result';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CabeceraService {
  constructor(private _http: HttpClient) {}

  getAllPaises() {
    return this._http.get<Result<PaisRes[]>>(`${environment.urlApi}Pais/true`);
  }
}
