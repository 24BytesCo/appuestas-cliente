import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EncuentosRes } from 'src/app/modelos/Result';
import {
  cargandoPartidos,
  partidosCargados,
} from 'src/app/state/actions/partidos.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectCargandoPartidos,
  selectListaPartidos,
} from 'src/app/state/selectors/partidos.selectors';
import { TodosEventosService } from '../todos-eventos/servicios/todos-eventos.service';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css'],
})
export class NuevoEventoComponent implements OnInit {
  listaPartidosProgramados: EncuentosRes[] = [];

  constructor(
    private _store: Store<AppState>,
    private _todosEventosService: TodosEventosService
  ) {}

  ngOnInit(): void {
    this._store.select(selectListaPartidos).subscribe((r) => {
      this.listaPartidosProgramados = r.filter(
        (partido) => partido.estadoEncuentro == 'PROG'
      );
      if (this.listaPartidosProgramados.length == 0) {
        this.consultarTodosPartidos();
      }
    });
  }
  consultarTodosPartidos() {
    this._store.dispatch(cargandoPartidos());

    this._todosEventosService
      .getAllEncuentros(true, false, false, false, false)
      .subscribe((res) => {
        this.listaPartidosProgramados = res.data;

        this._store.dispatch(partidosCargados({ partidosLista: res.data }));
      });
  }
}
