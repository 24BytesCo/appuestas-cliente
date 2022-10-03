import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { EncuentosRes } from 'src/app/modelos/Result';
import { SocketServiceService } from 'src/app/socket-services/SocketService.service';
import { partidosCargados } from 'src/app/state/actions/partidos.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListaPartidos } from 'src/app/state/selectors/partidos.selectors';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-en-vivo',
  templateUrl: './item-en-vivo.component.html',
  styleUrls: ['./item-en-vivo.component.css'],
})
export class ItemEnVivoComponent implements OnInit, OnDestroy {
  listaPartidosProgramados: EncuentosRes[] = [];
  listaPartidosProgramadosMap: EncuentosRes[] = [];

  FechaActual!: Date;
  FechaDiferencia!: string;
  Suscripcion1: Subscription = new Subscription();
  Suscripcion2: Subscription = new Subscription();

  constructor(
    private _socket: SocketServiceService,
    private _store: Store<AppState>
  ) {}
  ngOnDestroy(): void {
    console.log('Unsuscripcion a item-en-vivo componen');

    this.Suscripcion1.unsubscribe();
    this.Suscripcion2.unsubscribe();
  }

  ngOnInit(): void {
    this.Suscripcion1 = this._store
      .select(selectListaPartidos)
      .subscribe((r) => {
        this.listaPartidosProgramados = r.filter(
          (partido) => partido.estadoEncuentro == 'LIVE'
        );
      });

    this.Suscripcion2 = this._socket.getPartidos$().subscribe((res) => {
      this.listaPartidosProgramados = res.data.data.filter(
        (r: { estadoEncuentro: string }) => r.estadoEncuentro == 'LIVE'
      );

      this._store.dispatch(partidosCargados({ partidosLista: res.data.data }));
    });
  }
}
