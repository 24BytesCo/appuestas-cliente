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

  ngOnInit(): void {}
  logearse(e: Event) {
    this._logearseService
      .logearse(this.Log.Nombre, this.Log.Pass)
      .subscribe((res) => {
        if (res.succeeded) {
          alert(res.data.nombreCompleto);
        } else {
          alert('Datos login incirrectos');
        }
      });
  }
}
