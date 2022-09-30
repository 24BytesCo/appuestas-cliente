import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Result, LoginRes } from '../../modelos/Result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  logearse(nickName: string, pass: string) {
    return this.http.get<Result<LoginRes>>(
      `${environment.urlApi}Usuario?NickName=${nickName}&Pass=${pass}`
    );
  }
}
