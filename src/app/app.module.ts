import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { NuevoEventoComponent } from './componentes/nuevo-evento/nuevo-evento.component';
import { MisSuscripcionesComponent } from './componentes/mis-suscripciones/mis-suscripciones.component';
import { SuscripcionComponent } from './componentes/suscripcion/suscripcion.component';
import { TodosEventosComponent } from './componentes/todos-eventos/todos-eventos.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { EventosTermiandosComponent } from './componentes/eventos-termiandos/eventos-termiandos.component';
import { EventosEnVivoComponent } from './componentes/eventos-en-vivo/eventos-en-vivo.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { EventosDiaComponent } from './componentes/eventos-dia/eventos-dia.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CabeceraDosComponent } from './componentes/cabecera-dos/cabecera-dos.component';
import { PartidoProgramadoComponent } from './componentes/partido-programado/partido-programado.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { equiposReducer } from './state/reducers/equipos.reducers';
import { ROOT_REDUCERS } from './state/app.state';
import { ItemProgramadosComponent } from './componentes/item-programados/item-programados.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ItemEnVivoComponent } from './componentes/item-en-vivo/item-en-vivo.component';
import { LoaderComponent } from './componentes/loader/loader.component';
//Configuracion del servidor
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CabeceraComponent,
    PiePaginaComponent,
    BarraLateralComponent,
    NuevoEventoComponent,
    MisSuscripcionesComponent,
    SuscripcionComponent,
    TodosEventosComponent,
    EventoComponent,
    EventosTermiandosComponent,
    EventosEnVivoComponent,
    TableroComponent,
    LoginComponent,
    EventosDiaComponent,
    CabeceraDosComponent,
    PartidoProgramadoComponent,
    ItemProgramadosComponent,
    ItemEnVivoComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      name: 'TEST',
    }),
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
