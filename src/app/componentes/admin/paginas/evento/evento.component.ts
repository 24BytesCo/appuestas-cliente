import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EncuentosRes } from 'src/app/modelos/Result';
import { partidosCargados } from 'src/app/state/actions/partidos.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListaPartidos } from 'src/app/state/selectors/partidos.selectors';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit, OnDestroy {
  listaPartidosProgramados: EncuentosRes[] = [];

  Suscripcion1: Subscription = new Subscription();

  constructor(private _store: Store<AppState>) {}
  ngOnDestroy(): void {
    console.log('Unsuscribe a evento componen');

    this.Suscripcion1.unsubscribe();
  }

  ngOnInit(): void {
    this.Suscripcion1 = this._store
      .select(selectListaPartidos)
      .subscribe((res) => {
        this.listaPartidosProgramados = [];

        this.listaPartidosProgramados = [...res];
      });
  }
}
