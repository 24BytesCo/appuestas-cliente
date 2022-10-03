import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosEventosComponent } from './componentes/admin/paginas/todos-eventos/todos-eventos.component';
import { LoginComponent } from './componentes/autenticacion/paginas/login/login.component';
import { NuevoEventoComponent } from './componentes/admin/paginas/nuevo-evento/nuevo-evento.component';
import { EventosEnVivoComponent } from './componentes/admin/paginas/eventos-en-vivo/eventos-en-vivo.component';
import { AdminComponent } from './componentes/admin/admin/admin.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios/usuarios.component';
import { PartidosProgramadosComponent } from './componentes/usuarios/paginas/partidos-programados/partidos-programados.component';
import { MisEnvivosComponent } from './componentes/usuarios/paginas/mis-envivos/mis-envivos.component';
import { MisPollasComponent } from './componentes/usuarios/paginas/mis-pollas/mis-pollas.component';
import { PollaComponent } from './componentes/usuarios/paginas/polla/polla.component';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion/autenticacion.component';
import { RegistroComponent } from './componentes/autenticacion/paginas/registro/registro.component';
import { PublicoComponent } from './componentes/publico/publico/publico.component';
import { InicioGeneralComponent } from './componentes/publico/paginas/inicio-general/inicio-general.component';
import { TodasPollasDisponiblesComponent } from './componentes/publico/paginas/todas-pollas-disponibles/todas-pollas-disponibles.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdminComponent,
    children: [
      {
        path: 'inicio',
        component: TodosEventosComponent,
      },
      {
        path: 'en-vivo',
        component: EventosEnVivoComponent,
      },
      {
        path: 'nuevo-evento',
        component: TodosEventosComponent,
      },
      {
        path: 'partidos-programados',
        component: TodosEventosComponent,
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      {
        path: 'inicio',
        component: PartidosProgramadosComponent,
      },
      {
        path: 'mis-en-vivos',
        component: MisEnvivosComponent,
      },
      {
        path: 'polla:id',
        component: PollaComponent,
      },
      {
        path: 'mis-pollas',
        component: MisPollasComponent,
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'autenticacion',
    component: AutenticacionComponent,
    children: [
      {
        path: 'acceso',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },

      {
        path: '',
        redirectTo: 'acceso',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'acceso',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'publico',
    component: PublicoComponent,
    children: [
      {
        path: 'inicio',
        component: InicioGeneralComponent,
      },
      {
        path: 'pollas-disponibles',
        component: TodasPollasDisponiblesComponent,
      },

      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: '/usuarios/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
