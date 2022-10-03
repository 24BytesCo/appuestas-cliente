import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosEventosComponent } from './componentes/admin/paginas/todos-eventos/todos-eventos.component';
import { LoginComponent } from './componentes/compartidos/paginas/login/login.component';
import { NuevoEventoComponent } from './componentes/admin/paginas/nuevo-evento/nuevo-evento.component';
import { EventosEnVivoComponent } from './componentes/admin/paginas/eventos-en-vivo/eventos-en-vivo.component';

const routes: Routes = [
  {
    path: 'admin/todos-partidos',
    component: TodosEventosComponent,
  },
  {
    path: 'admin/nuevo-evento',
    component: NuevoEventoComponent,
  },
  {
    path: 'admin/en-vivo',
    component: EventosEnVivoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: 'admin/todos-partidos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
