import { Component, ElementRef, OnInit } from '@angular/core';
import { EncuentosRes, Encuentro, PaisRes } from 'src/app/modelos/Result';
import { CabeceraService } from '../cabecera/servicios/cabecera.service';
import { DuracionEvento } from '../../modelos/Result';
import { Event } from '@angular/router';
import * as moment from 'moment';
import { TodosEventosService } from './servicios/todos-eventos.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import {
  cargandoEquipos,
  equiposCargados,
} from 'src/app/state/actions/equipos.actions';
import { Observable } from 'rxjs';
import { selectCargandoEquipos } from 'src/app/state/selectors/equpos.selectors';
import { selectCargandoPartidos } from 'src/app/state/selectors/partidos.selectors';
import {
  cargandoPartidos,
  partidosCargados,
} from 'src/app/state/actions/partidos.actions';

@Component({
  selector: 'app-todos-eventos',
  templateUrl: './todos-eventos.component.html',
  styleUrls: ['./todos-eventos.component.css'],
})
export class TodosEventosComponent implements OnInit {
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

  TodosEncuentros: EncuentosRes[] = [];

  cargandoListaEquipos$: Observable<boolean> = new Observable();
  cargandoListaPartidos$: Observable<boolean> = new Observable();

  constructor(
    private _todosEventosService: TodosEventosService,
    private _store: Store<any>
  ) {}

  ngOnInit(): void {
    this.cargandoListaEquipos$ = this._store.select(selectCargandoEquipos);
    this.cargandoListaPartidos$ = this._store.select(selectCargandoPartidos);

    this._store.dispatch(cargandoEquipos());

    this._todosEventosService.getAllPaises().subscribe((res) => {
      this._store.dispatch(equiposCargados({ equiposLista: res.data }));

      this.Paises = res.data;
      this.PaisesCambios = res.data;
    });
    this.consultarTodosPartidos();
  }

  consultarTodosPartidos() {
    this._store.dispatch(cargandoPartidos());

    this._todosEventosService
      .getAllEncuentros(true, false, false, false, false)
      .subscribe((res) => {
        this.TodosEncuentros = res.data;

        this._store.dispatch(partidosCargados({ partidosLista: res.data }));
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
    console.log('Local', this.PaisLocal.idPais);
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

    console.log('Visitante', this.PaisVisitante.idPais);
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
    console.log('Acmbio fecha => ', this.NuevoEncuentro.fechaHoraInicio);
  }
  crearEvento() {
    console.log(
      'this.NuevoEncuentro.fechaHoraInicio',
      this.NuevoEncuentro.fechaHoraInicio
    );

    this.NuevoEncuentro.fechaHoraFin = this.calculandoFechaFinal(
      new Date(this.NuevoEncuentro.fechaHoraInicio),
      this.NuevoEncuentro.duracionMinutos
    );

    this.NuevoEncuentro.paisLocal = this.PaisLocal.idPais;
    this.NuevoEncuentro.paisVisitante = this.PaisVisitante.idPais;
    console.log('evento nuevo', this.NuevoEncuentro);
    this._todosEventosService
      .nuevoEncuentro(this.NuevoEncuentro)
      .subscribe((res) => {
        if (res.succeeded) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: 'Has creado un nuevo partido',
          });
          document.getElementById('modal-nuevo-evento')?.click();
          this.consultarTodosPartidos();
        }
        console.log('res____>', res);
      });
  }

  calculandoFechaFinal(FechaInicial: Date, minutosDuracionEvento: number) {
    return moment(FechaInicial).add(minutosDuracionEvento, 'minutes').format();
  }
}
