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
import { SocketServiceService } from 'src/app/socket-services/SocketService.service';
import {
  alertaEventos,
  alertaPequeñaSuperiorDerecha,
  alertaTiempo,
} from 'src/app/servicios-genericos/alerta';

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

  FechaHoraEnviar!: string;

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
  cargandoListaPartidos$: Observable<any> = new Observable();

  Hora!: Date;
  FechaActual!: string;
  constructor(
    private _todosEventosService: TodosEventosService,
    private _store: Store<any>,
    private _socket: SocketServiceService
  ) {
    this.FechaActual = moment().locale('es').format('LL');
  }

  ngOnInit(): void {
    console.log('Ebtramos a Todos Eventos Compenent');

    this._socket.updateFix$().subscribe((res) => {
      console.log('Todos Eventos Componen FIXURE', res.data);
    });

    this._socket.getPartidos$().subscribe((res) => {
      this.TodosEncuentros = res.data.data;
      this._store.dispatch(partidosCargados({ partidosLista: res.data.data }));
    });

    this._todosEventosService.getAllPaises().subscribe((res) => {
      this._store.dispatch(equiposCargados({ equiposLista: res.data }));

      this.Paises = res.data;
      this.PaisesCambios = res.data;
    });
  }

  // consultarTodosPartidos() {
  //   this._store.dispatch(cargandoPartidos());

  //   this._todosEventosService
  //     .getAllEncuentros(true, false, false, false, false)
  //     .subscribe((res) => {
  //       this.TodosEncuentros = res.data;

  //       this._store.dispatch(partidosCargados({ partidosLista: res.data }));
  //     });
  // }

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
    // this.PaisVisitante.idPais = this.PaisLocal.idPais;

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
    // this.PaisVisitante.idPais = this.PaisLocal.idPais;
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
    // this.PaisVisitante.idPais = '0';
  }

  cambioFecha(e: any) {
    var btn = document.getElementById('crear-evento');

    //Se habilita el botón
    btn?.removeAttribute('disabled');

    var horaActual = moment().format('HH:mm');
    var horaModal = e.target.value;
    var fechaHora = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log('fechaHora', fechaHora);

    var arrayT = fechaHora.split(' ');
    fechaHora = arrayT[0] + ' ' + horaModal;

    console.log('fechaHora', fechaHora);
    console.log('horaModal', horaModal);

    //Validando horas partido

    this.NuevoEncuentro.fechaHoraInicio = moment(fechaHora).format();
    this.NuevoEncuentro.fechaHoraInicio =
      this.NuevoEncuentro.fechaHoraInicio.split('-05:0')[0];
  }
  validarCruceFechasPartido(datosPartido: Encuentro) {
    this._todosEventosService
      .validarCruceFechas(datosPartido)
      .subscribe((res) => {
        if (!res.data.procede) {
          alertaPequeñaSuperiorDerecha(res.data.mensajeRespuesta, true);
          var btn = document.getElementById('crear-evento');
          btn?.setAttribute('disabled', 'true');
        } else {
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
                // this.consultarTodosPartidos();
              }
            });
        }
      });
  }
  crearEvento() {
    if (this.PaisLocal.idPais == null) {
      alertaPequeñaSuperiorDerecha('Debes seleccionar el equipo local', true);

      return;
    }

    if (this.PaisVisitante.idPais == null || this.PaisVisitante.idPais == '') {
      alertaPequeñaSuperiorDerecha(
        'Debes seleccionar el equipo visitante',
        true
      );
      return;
    }

    if (
      this.NuevoEncuentro.fechaHoraInicio == null ||
      this.NuevoEncuentro.fechaHoraInicio == ''
    ) {
      alertaPequeñaSuperiorDerecha(
        'Debes seleccionar la fecha de inicio',
        true
      );
      return;
    }
    if (this.NuevoEncuentro.duracionMinutos == null) {
      alertaPequeñaSuperiorDerecha(
        'Debes seleccionar la duración del patido',
        true
      );
      return;
    }

    alertaTiempo();

    this.NuevoEncuentro.fechaHoraFin = this.calculandoFechaFinal(
      new Date(this.NuevoEncuentro.fechaHoraInicio),
      this.NuevoEncuentro.duracionMinutos
    );

    this.NuevoEncuentro.fechaHoraFin =
      this.NuevoEncuentro.fechaHoraFin.split('-05:0')[0];

    this.NuevoEncuentro.paisLocal = this.PaisLocal.idPais;
    this.NuevoEncuentro.paisVisitante = this.PaisVisitante.idPais;

    this.validarCruceFechasPartido(this.NuevoEncuentro);
  }

  calculandoFechaFinal(FechaInicial: Date, minutosDuracionEvento: number) {
    return moment(FechaInicial).add(minutosDuracionEvento, 'minutes').format();
  }
}
