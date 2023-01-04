import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/Usuario';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  usuarios: Usuario[];

  constructor(private userService: UserService,
    private titulo: Title, private toastr: ToastrService) {
    titulo.setTitle('Usuarios')
  }

  ngOnInit(): void {
    this.cargarUsuarios()
  }

  cargarUsuarios(): void {
     this.userService.listUser() .subscribe(data=>{
      this.usuarios=data;
     })
  }

  borrarUser(usuario:Usuario): void {
    this.userService.deleteUser(usuario.id).subscribe(data => {
      this.userService.listUser().subscribe(res => {
        this.usuarios = res;
      })
    })
    this.toastr.success('Producto Eliminado' , 'OK', {
      timeOut: 3000, positionClass: 'toast-top-center'
    })
  }
}
