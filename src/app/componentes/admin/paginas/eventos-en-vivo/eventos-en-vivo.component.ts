import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EncuentosRes } from 'src/app/modelos/Result';
import { SocketServiceService } from 'src/app/socket-services/SocketService.service';
import { partidosCargados } from 'src/app/state/actions/partidos.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListaPartidos } from 'src/app/state/selectors/partidos.selectors';

@Component({
  selector: 'app-eventos-en-vivo',
  templateUrl: './eventos-en-vivo.component.html',
  styleUrls: ['./eventos-en-vivo.component.css'],
})
export class EventosEnVivoComponent implements OnInit, OnDestroy {
  listaPartidosProgramados: EncuentosRes[] = [];

  constructor(
    private _socket: SocketServiceService,
    private _store: Store<AppState>
  ) {}
  ngOnDestroy(): void {
    console.log('Unsuscrito a eventos-en-vivo-componen');

    this.Suscripcion1.unsubscribe();
  }
  Suscripcion1: Subscription = new Subscription();

  ngOnInit(): void {
    this.Suscripcion1 = this._store
      .select(selectListaPartidos)
      .subscribe((res) => {
        this.listaPartidosProgramados = [];

        this.listaPartidosProgramados = res.filter(
          (r) => r.estadoEncuentro == 'LIVE'
        );
      });
  }
}
