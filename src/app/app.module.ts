import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {} from '@angular/material/icon';
import { ListTeamsComponent } from './components/list-teams/list-teams.component';
import { CreateTeamsComponent } from './components/create-teams/create-teams.component';
import { UpdateTeamsComponent } from './components/update-teams/update-teams.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListAssigmentComponent } from './components/list-assigment/list-assigment.component';
import { UpdateAssigmentComponent } from './components/update-assigment/update-assigment.component';
import { CreateAssigmentComponent } from './components/create-assigment/create-assigment.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    ListTeamsComponent,
    CreateTeamsComponent,
    UpdateTeamsComponent,
    CreateUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    ListAssigmentComponent,
    UpdateAssigmentComponent,
    CreateAssigmentComponent,
    BibliotecaComponent,
    CrearLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
