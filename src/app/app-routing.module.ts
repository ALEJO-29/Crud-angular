import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamsComponent } from './components/create-teams/create-teams.component';
import { ListTeamsComponent } from './components/list-teams/list-teams.component';
import { UpdateTeamsComponent } from './components/update-teams/update-teams.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'nuevo', component: CrearProductosComponent },
  { path: 'editar/:id', component: EditarProductosComponent },
  { path: 'new', component: CreateTeamsComponent },
  { path: 'list', component: ListTeamsComponent },
  { path: 'update/:id', component: UpdateTeamsComponent },
  { path: 'newUser', component: CreateUserComponent },
  { path: 'listUser', component: ListUserComponent },
  { path: 'updateUser/:id', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
