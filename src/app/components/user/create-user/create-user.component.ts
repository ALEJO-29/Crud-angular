import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private productoService: UserService,
    private router: Router, private toastr: ToastrService, private titulo: Title) {
    titulo.setTitle('Crear Usuarios')
  }

  ngOnInit(): void {

  }

  onCreateUser(): void {
    this.productoService.createUser(this.usuario).subscribe(res => {
      this.toastr.info('Producto Creado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      })
      this.router.navigate(['/list'])
    })
  }
}