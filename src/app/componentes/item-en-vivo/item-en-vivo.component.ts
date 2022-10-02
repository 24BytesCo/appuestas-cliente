import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EncuentosRes } from 'src/app/modelos/Result';
import { SocketServiceService } from 'src/app/socket-services/SocketService.service';
import { partidosCargados } from 'src/app/state/actions/partidos.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListaPartidos } from 'src/app/state/selectors/partidos.selectors';
import * as moment from 'moment';

@Component({
  selector: 'app-item-en-vivo',
  templateUrl: './item-en-vivo.component.html',
  styleUrls: ['./item-en-vivo.component.css'],
})
export class ItemEnVivoComponent implements OnInit {
  listaPartidosProgramados: EncuentosRes[] = [];
  listaPartidosProgramadosMap: EncuentosRes[] = [];

  FechaActual!: Date;
  FechaDiferencia!: string;

  constructor(
    private _socket: SocketServiceService,
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.log('Iniciamos en vivo');

    this._store.select(selectListaPartidos).subscribe((r) => {
      this.listaPartidosProgramados = r.filter(
        (partido) => partido.estadoEncuentro == 'LIVE'
      );
    });

    this._socket.getPartidos$().subscribe((res) => {
      console.log('buscando en item');

      this.listaPartidosProgramados = res.data.data.filter(
        (r: { estadoEncuentro: string }) => r.estadoEncuentro == 'LIVE'
      );
      console.log('this.listaPartidosLIVE', this.listaPartidosProgramados);

      this._store.dispatch(partidosCargados({ partidosLista: res.data.data }));
    });
  }

  camb(e: any) {
    console.log('cambio', e);
  }
}
