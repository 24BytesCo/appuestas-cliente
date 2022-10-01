import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EncuentosRes, EncuentroParams } from 'src/app/modelos/Result';
import { AppState } from 'src/app/state/app.state';
import { selectListaPartidos } from 'src/app/state/selectors/partidos.selectors';
import { ItemProgramadosService } from './servicios/item-programados.service';
import { TipoEventoRes } from '../../modelos/Result';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-programados',
  templateUrl: './item-programados.component.html',
  styleUrls: ['./item-programados.component.css'],
})
export class ItemProgramadosComponent implements OnInit {
  listaPartidosProgramados: EncuentosRes[] = [];

  constructor(
    private _store: Store<AppState>,
    private _itemProgramadosService: ItemProgramadosService
  ) {}

  ModeloRango: EncuentroParams = {
    minuto: '',
    tipoEventoId: '',
    equipoEventoId: '',
    partidoId: '',
  };

  AllTipoEvento: TipoEventoRes[] = [];

  EquipoLocal: { nombre: string; id: string } = {
    id: '',
    nombre: '',
  };
  EquipoVisitante: { nombre: string; id: string } = {
    id: '',
    nombre: '',
  };
  TipoEventoSeleccionado: string = '';
  TipoEventoSeleccionadoFiltrado: string = '';
  EquipoSeleccionadoFiltrado: string = '';
  DuracionPartido: number = 0;

  ngOnInit(): void {
    this._itemProgramadosService.getAllTipoEnvento().subscribe((res) => {
      this.AllTipoEvento = res.data;
    });

    this._store.select(selectListaPartidos).subscribe((res) => {
      this.listaPartidosProgramados = [];

      this.listaPartidosProgramados = res.filter(
        (r) => r.estadoEncuentro == 'PROG'
      );

      console.log(
        'this.listaPartidosProgramados',
        this.listaPartidosProgramados
      );
    });
  }

  agregarEvento(partido: EncuentosRes) {
    console.log('partido', partido);
    this.ModeloRango.minuto = '1';
    this.ModeloRango.partidoId = partido.idPartido;
    this.EquipoSeleccionadoFiltrado = '';
    this.TipoEventoSeleccionado = '';
    this.ModeloRango.equipoEventoId = '';

    this.EquipoLocal.nombre = partido.equipoLocalNombre;
    this.EquipoLocal.id = partido.equipoLocalCodigo;

    this.EquipoVisitante.nombre = partido.equipoVisitanteNombre;
    this.EquipoVisitante.id = partido.equipoVisitanteCodigo;

    this.DuracionPartido = parseInt(partido.minutosEncuentro);
  }
  cambioTipoEvento() {
    this.EquipoSeleccionadoFiltrado =
      this.EquipoLocal.id == this.ModeloRango.equipoEventoId
        ? this.EquipoLocal.nombre
        : this.ModeloRango.equipoEventoId == this.EquipoVisitante.id
        ? this.EquipoVisitante.nombre
        : '';
    this.TipoEventoSeleccionadoFiltrado =
      this.AllTipoEvento.filter((r) => r.id == this.TipoEventoSeleccionado)[0]
        ?.descripcion ?? '';
    console.log('TipoEventoSeleccionado', this.TipoEventoSeleccionado);
  }

  crearEvento() {
    this.ModeloRango.tipoEventoId = this.TipoEventoSeleccionado;

    this.ModeloRango.minuto = this.ModeloRango.minuto.toString();

    this._itemProgramadosService
      .nuevoEventoEncuentro(this.ModeloRango)
      .subscribe((res) => {
        console.log('res', res);

        if (res.succeeded) {
          this.ModeloRango.minuto = '1';
          this.ModeloRango.tipoEventoId = '';
          this.TipoEventoSeleccionado = '';
          this.ModeloRango.equipoEventoId = '';

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
            title: 'Has agregado un nuevo evento al partido',
          });
        } else {
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
            icon: 'error',
            title: 'No se ha podido guardar el evento al partido',
          });
        }
      });
  }
}
