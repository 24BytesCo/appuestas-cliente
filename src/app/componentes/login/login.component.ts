import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public Nombre: string = '';
  public Pass: string = '';
  constructor(private _logearseService: LoginService) {}

  Log = {
    Nombre: '',
    Pass: '',
  };

  ngOnInit(): void {
    console.log('LoginComponent');
  }
  logearse(e: Event) {
    console.log('e', e);

    console.log('this.Log', this.Log);

    this._logearseService
      .logearse(this.Log.Nombre, this.Log.Pass)
      .subscribe((res) => {
        console.log('res', res);

        if (res.succeeded) {
          alert(res.data.nombreCompleto);
        } else {
          alert('Datos login incirrectos');
        }
        console.log('respuesta => ', res);
      });
  }
}
