import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EncuentosRes } from 'src/app/modelos/Result';
import { partidosCargados } from 'src/app/state/actions/partidos.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListaPartidos } from 'src/app/state/selectors/partidos.selectors';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  listaPartidosProgramados: EncuentosRes[] = [];


  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {

    this._store.select(selectListaPartidos).subscribe(res=>
      {
        this.listaPartidosProgramados= [];

        this.listaPartidosProgramados = [...res];

        console.log("this.listaPartidosProgramados",this.listaPartidosProgramados);
        

      })
      
  }

}
