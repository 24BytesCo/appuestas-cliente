import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosEventosComponent } from './componentes/todos-eventos/todos-eventos.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevoEventoComponent } from './componentes/nuevo-evento/nuevo-evento.component';

const routes: Routes = [
  {
    path: 'todos-partidos',
    component: TodosEventosComponent,
  },
  {
    path: 'nuevo-evento',
    component: NuevoEventoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: 'todos-partidos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
