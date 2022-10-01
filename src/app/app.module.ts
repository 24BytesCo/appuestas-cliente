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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: 'TEST',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
