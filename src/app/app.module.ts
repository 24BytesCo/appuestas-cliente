import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './componentes/admin/paginas/sidebar/sidebar.component';
import { CabeceraComponent } from './componentes/admin/paginas/cabecera/cabecera.component';
import { PiePaginaComponent } from './componentes/admin/paginas/pie-pagina/pie-pagina.component';
import { BarraLateralComponent } from './componentes/admin/paginas/barra-lateral/barra-lateral.component';
import { NuevoEventoComponent } from './componentes/admin/paginas/nuevo-evento/nuevo-evento.component';
import { MisSuscripcionesComponent } from './componentes/admin/paginas/mis-suscripciones/mis-suscripciones.component';
import { SuscripcionComponent } from './componentes/admin/paginas/suscripcion/suscripcion.component';
import { TodosEventosComponent } from './componentes/admin/paginas/todos-eventos/todos-eventos.component';
import { EventoComponent } from './componentes/admin/paginas/evento/evento.component';
import { EventosTermiandosComponent } from './componentes/admin/paginas/eventos-termiandos/eventos-termiandos.component';
import { EventosEnVivoComponent } from './componentes/admin/paginas/eventos-en-vivo/eventos-en-vivo.component';
import { TableroComponent } from './componentes/admin/paginas/tablero/tablero.component';
import { LoginComponent } from './componentes/autenticacion/paginas/login/login.component';
import { EventosDiaComponent } from './componentes/admin/paginas/eventos-dia/eventos-dia.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CabeceraDosComponent } from './componentes/admin/paginas/cabecera-dos/cabecera-dos.component';
import { PartidoProgramadoComponent } from './componentes/admin/paginas/partido-programado/partido-programado.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ROOT_REDUCERS } from './state/app.state';
import { ItemProgramadosComponent } from './componentes/admin/paginas/item-programados/item-programados.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ItemEnVivoComponent } from './componentes/admin/paginas/item-en-vivo/item-en-vivo.component';
import { LoaderComponent } from './componentes/admin/paginas/loader/loader.component';
import { CabeceraUsuariosComponent } from './componentes/usuarios/paginas/cabecera-usuarios/cabecera-usuarios.component';
import { HistorialPartidosComponent } from './componentes/usuarios/paginas/historial-partidos/historial-partidos.component';
import { InicioUsuariosComponent } from './componentes/usuarios/paginas/inicio-usuarios/inicio-usuarios.component';
import { MisEnvivosComponent } from './componentes/usuarios/paginas/mis-envivos/mis-envivos.component';
import { MisPollasComponent } from './componentes/usuarios/paginas/mis-pollas/mis-pollas.component';
import { PartidosProgramadosComponent } from './componentes/usuarios/paginas/partidos-programados/partidos-programados.component';
import { SidebarUsuariosComponent } from './componentes/usuarios/paginas/sidebar-usuarios/sidebar-usuarios.component';
import { AdminComponent } from './componentes/admin/admin/admin.component';
import { CompartidosComponent } from './componentes/compartidos/compartidos/compartidos.component';
import { PollaComponent } from './componentes/usuarios/paginas/polla/polla.component';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion/autenticacion.component';
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
    CabeceraUsuariosComponent,
    HistorialPartidosComponent,
    InicioUsuariosComponent,
    MisEnvivosComponent,
    MisPollasComponent,
    PartidosProgramadosComponent,
    SidebarUsuariosComponent,
    AdminComponent,
    CompartidosComponent,
    PollaComponent,
    AutenticacionComponent,
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
