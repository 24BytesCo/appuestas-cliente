import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import {
  DuracionEvento,
  EncuentosRes,
  Encuentro,
  PaisRes,
} from 'src/app/modelos/Result';
import { TodosEventosService } from '../todos-eventos/servicios/todos-eventos.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit, OnDestroy {
  PopupAddEntuentro: boolean = false;
  Paises: PaisRes[] = [
    {
      abreviatura: '',
      banderaPais: '',
      idPais: '',
      nombrePais: '',
    },
  ];

  PaisesCambios: PaisRes[] = [
    {
      abreviatura: '',
      banderaPais: '',
      idPais: '',
      nombrePais: '',
    },
  ];
  NuevoEncuentro: Encuentro = {
    fechaHoraFin: '',
    fechaHoraInicio: '',
    paisLocal: '',
    paisVisitante: '',
    duracionMinutos: 90,
  };

  DuracionEvento: DuracionEvento[] = [
    {
      descripcion: '90 Munutos de Juego',
      valor: 90,
    },
    {
      descripcion: '5 Munutos de Juego (Para Prueba Funcionamiento)',
      valor: 5,
    },
  ];

  Url: string = '';
  PaisLocal: PaisRes = {
    abreviatura: '',
    banderaPais: '',
    idPais: '',
    nombrePais: '',
  };
  PaisVisitante: PaisRes = {
    abreviatura: '',
    banderaPais: '',
    idPais: '',
    nombrePais: '',
  };
  Suscripcion1: Subscription = new Subscription();
  Suscripcion2: Subscription = new Subscription();

  TodosEncuentros: EncuentosRes[] = [];

  constructor(private _todosEventosService: TodosEventosService) {}
  ngOnDestroy(): void {
    console.log('Unsuscribe a cabecera component');

    this.Suscripcion1.unsubscribe();
    this.Suscripcion2.unsubscribe();
  }

  ngOnInit(): void {
    this.Suscripcion1 = this._todosEventosService
      .getAllPaises()
      .subscribe((res) => {
        this.Paises = res.data;
        this.PaisesCambios = res.data;
      });

    this.Suscripcion2 = this._todosEventosService
      .getAllEncuentros(true, false, false, false, false)
      .subscribe((res) => {
        this.TodosEncuentros = res.data;
      });
  }
  modalAbierto() {
    var resetForm = <HTMLFormElement>(
      document.getElementById('formularioNuevoEvento')
    );
    resetForm.reset();
    this.PaisLocal.idPais = '';
    this.PaisVisitante.idPais = '';
    this.NuevoEncuentro.duracionMinutos = 0;

    var imgElement = document.createElement('img');
    var imgElementDos = document.createElement('img');
    var divbanderaVisitante =
      document.getElementById('bandera-visitante') ?? imgElement;
    divbanderaVisitante.setAttribute('src', '');
    var divbanderaLocal =
      document.getElementById('bandera-local') ?? imgElementDos;
    divbanderaLocal.setAttribute('src', '');
  }

  cambio() {
    this.PaisesCambios = this.Paises;
    this.PaisVisitante.idPais = this.PaisLocal.idPais;

    this.PaisesCambios = this.PaisesCambios.filter(
      (r) => r.idPais != this.PaisLocal.idPais
    );

    var imgElement = document.createElement('img');
    var imgElementDos = document.createElement('img');
    var divbandera = document.getElementById('bandera-local') ?? imgElement;
    var divbanderaVisitante =
      document.getElementById('bandera-visitante') ?? imgElementDos;
    divbanderaVisitante.setAttribute('src', '');

    this.Url =
      this.Paises.find((r) => r.idPais == this.PaisLocal.idPais)?.banderaPais ??
      '';

    divbandera.style.borderRadius = '5px';
    divbandera.style.marginLeft = '10px';
    divbandera.style.marginBottom = '5px';
    divbandera.style.width = '50px';
    divbandera.setAttribute('src', this.Url);
  }

  cambioVisitante() {
    var imgElementW = document.createElement('img');

    var divbandera =
      document.getElementById('bandera-visitante') ?? imgElementW;
    this.Url =
      this.Paises.find((r) => r.idPais == this.PaisVisitante.idPais)
        ?.banderaPais ?? '';

    divbandera.style.borderRadius = '5px';
    divbandera.style.marginLeft = '10px';
    divbandera.style.marginBottom = '5px';
    divbandera.style.width = '50px';
    divbandera.setAttribute('src', this.Url);
  }

  abrirPopupAddEntuentro() {
    return !this.PopupAddEntuentro;
  }

  cambioFecha(e: any) {
    this.NuevoEncuentro.fechaHoraInicio = moment(e.target.value).format();
  }
  crearEvento() {
    this.NuevoEncuentro.fechaHoraFin = this.calculandoFechaFinal(
      new Date(this.NuevoEncuentro.fechaHoraInicio),
      this.NuevoEncuentro.duracionMinutos
    );

    this.NuevoEncuentro.paisLocal = this.PaisLocal.idPais;
    this.NuevoEncuentro.paisVisitante = this.PaisVisitante.idPais;
    console.log('evento nuevo', this.NuevoEncuentro);
  }

  calculandoFechaFinal(FechaInicial: Date, minutosDuracionEvento: number) {
    return moment(FechaInicial).add(minutosDuracionEvento, 'minutes').format();
  }
}
